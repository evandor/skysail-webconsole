import {Component, OnInit, ElementRef} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from '@angular/common';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from "@angular/router";
import {HTTP_PROVIDERS} from '@angular/http';

import {BackendServices} from '../../services/backend.service';
import {AppGlobals} from '../../services/appglobals.service';
import {BreadcrumbsService} from '../../services/breadcrumbs.service';

import {Bundle} from '../../domain/bundle';
import {Breadcrumb} from '../navbar/breadcrumb';

import {Tabs} from '../../components/tabs';
import {Tab} from '../../components/tab';
import {SubTab} from '../../components/subtab';

import {KeyValue} from '../../domain/keyValue';
import {ImportPackage} from '../../domain/importPackage';
import {Service} from '../../domain/service';
import {Capability} from '../../domain/capability';
import {TreeNode} from '../../domain/treenode';
import {TreeModel} from '../../domain/treemodel';
import {ExportPackage} from '../../domain/exportPackage';

import {NewlinePipe} from '../../pipes/newline.pipe';
import {ValuesPipe} from '../../pipes/values.pipe';
import {KeyValuesPipe} from '../../pipes/keyvalues.pipe';
import {LinkPipe} from '../../pipes/link.pipe';
import {BundleStatePipe} from '../../pipes/bundleState.pipe';
import {MaxLengthPipe} from '../../pipes/maxLength.pipe';

import {PackagesFilter} from '../../pipes/packagesFilter.pipe'

import { TreeComponent } from 'angular2-tree-component';

@Component({
    selector: 'bundle',
    directives: [FORM_DIRECTIVES, NgFor, NgFormModel, Tabs, Tab, SubTab, TreeComponent],
    providers: [BackendServices, HTTP_PROVIDERS],
    pipes: [NewlinePipe, MaxLengthPipe, ValuesPipe, KeyValuesPipe, BundleStatePipe, LinkPipe,PackagesFilter],
    templateUrl: 'app/html/bundles/bundle.template.html'
})
export class BundleComponent implements OnInit {

    bundle: Bundle = new Bundle();
    capabilities: KeyValue[] = [];
    private sub: any;
    wires = [];//new Map<string, Capability[]>();
    public searchName: string = '';

    exportedPackagesNodes = [
        {
            name: 'root1',
            children: [
                { name: 'child1' },
                { name: 'child2' }
            ]
        },
        {
            name: 'root2',
            children: [
                { name: 'child2.1' },
                {
                    name: 'child2.2',
                    children: [
                        { name: 'subsub' }
                    ]
                }
            ]
        }
    ];

    constructor(
        private _backend: BackendServices,
        private _route: ActivatedRoute,
        private _router: Router,
        private _breadcrumbsService: BreadcrumbsService,
        private _appGlobals: AppGlobals) {
    }

    ngOnInit() {

        this.sub = this._route.params.subscribe(params => {
            this._appGlobals.setRouteParams(params);
            let id = params['id'];
            this.wires = [];

            this._backend.getBundle(id)
                .subscribe(res => {
                    this._appGlobals.setIsLoading(true);
                    this.bundle = res;
                    var props = <Map<string, string>>res.wireDescriptor.capabilities;
                    var providedWires = res.wireDescriptor.providedWires;
                    var oldIdentifier = "";
                    var theValue = [];
                    if (providedWires != null) {
                        providedWires.forEach(wire => {
                            var identifier = wire.capability['id']
                            if (oldIdentifier != identifier) {
                                oldIdentifier = identifier;
                                this.wires[identifier] = Array<any>();
                            }
                            this.wires[identifier].push(wire);
                        });
                    }
                    this._backend.getBundleServices(this.bundle.id)
                        .subscribe(serviceRes => {
                            this.bundle.providedServices = serviceRes;
                        });

                    var treeModel: TreeModel = new TreeModel();
                    this.bundle.exportPackage.forEach(pkg => {
                        console.log("handling package " + pkg.pkgName);
                        this.handlePackage(treeModel, pkg);
                        console.log("[" + treeModel.root.children.toString() + "]");
                    });
                    this.exportedPackagesNodes = treeModel.root.children;
                    this._appGlobals.setIsLoading(false);
                }
                );
        });
    }

    handlePackage(model: TreeModel, pkg: ExportPackage) {
        var newNode: TreeNode;
        var id: string = "";
        pkg.pkgName.split(".").forEach(segment => {
            id = id + "." + segment;
            if (id.startsWith(".")) {
                id = id.substr(1);
            }
            var parentNode = model.getParent(id);
            var nodeName = segment;
            if (id == pkg.pkgName) {
                nodeName += " (" + pkg.version + ")";
            }
            if (parentNode == null) {
                this.handleSegment(model, model.root, id, nodeName);
            } else {
                this.handleSegment(model, parentNode, id, nodeName);
            }
        });
    }

    handleSegment(model: TreeModel, root: TreeNode, id: string, segment: string) {
        var existingNode: TreeNode = null;
        root.children.forEach(root => {
            if (root.name == segment) {
                existingNode = root;
            }
        });
        if (existingNode == null) {
            root.children.push(new TreeNode(id, segment));
        }
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    exportedPackagesTitle() {
        return "<i class='fa fa-folder-open-o' ></i> <i class='fa fa-caret-right' ></i> <span class='label label-pill label-info'>" + this.bundle.exportPackage.length + "</span>";
    }

    importedPackagesTitle() {
        return "<i class='fa fa-folder-open-o' ></i> <i class='fa fa-caret-left' ></i> <span class='label label-pill label-info'>" + this.bundle.importPackage.length + "</span>";
    }

    providedServicesTitle() {
        var servicesCount = 0;
        if (this.bundle.providedServices != null) {
            servicesCount = this.bundle.providedServices.length;
        }
        return "<i class='fa fa-play-circle'></i> <i class='fa fa-caret-right'></i> <span class='label label-pill label-info'>" + servicesCount + "</span>";
    }

    usedServicesTitle() {
        var servicesCount = 0;
        if (this.bundle.servicesInUse != null) {
            servicesCount = this.bundle.servicesInUse.length;
        }
        return "<i class='fa fa-play-circle'></i> <i class='fa fa-caret-left'></i> <span class='label label-pill label-info'>" + servicesCount + "</span>";
    }

    reqWiresTitle() {
        return "<i class='fa fa-plug'></i> <i class='fa fa-caret-left'></i>";
    }

    provWiresTitle() {
        return "<i class='fa fa-plug'></i> <i class='fa fa-caret-right'></i>";
    }

    getImportPackageClass(pkg: ImportPackage) {
        if (pkg.packageResolvingCandidates && pkg.packageResolvingCandidates.length == 0 && pkg.resolution == "MANDATORY") {
            return "problem";
        }
        return "";
    }

    onSelectService(service: Service) {
        this._router.navigate(['/services', service.id]);
    }

    onSelectBundle(id: string) {
        this._router.navigate(['/bundles', id]);
    }

    showContents(bundle: Bundle) {
        this._router.navigate(['/bundles', bundle.id, 'contents']);
    }

    onSubmit() {
        console.log("submitted");
    }

    objToStrMap(obj) {
        let strMap = new Map();
        for (let k of Object.keys(obj)) {
            strMap.set(k, obj[k]);
        }
        return strMap;
    }
}
