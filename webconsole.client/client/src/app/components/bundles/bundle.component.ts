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

import {KeyValue} from '../../domain/keyValue';
import {ImportPackage} from '../../domain/importPackage';
import {Service} from '../../domain/service';
import {Capability} from '../../domain/capability';

import {NewlinePipe} from '../../pipes/newline.pipe';
import {ValuesPipe} from '../../pipes/values.pipe';
import {KeyValuesPipe} from '../../pipes/keyvalues.pipe';
import {LinkPipe} from '../../pipes/link.pipe';
import {BundleStatePipe} from '../../pipes/bundleState.pipe';
import {MaxLengthPipe} from '../../pipes/maxLength.pipe';

@Component({
    selector: 'bundle',
    directives: [FORM_DIRECTIVES, NgFor, NgFormModel, Tabs, Tab],
    providers: [BackendServices, HTTP_PROVIDERS],
    pipes: [NewlinePipe, MaxLengthPipe, ValuesPipe, KeyValuesPipe, BundleStatePipe, LinkPipe],
    templateUrl: 'app/html/bundles/bundle.template.html',
    //styleUrls:  ['app/js/datatables.css']
})
export class BundleComponent implements OnInit {

    bundle: Bundle = new Bundle();

    capabilities: KeyValue[] = [];

    private sub: any;

    wires = [];//new Map<string, Capability[]>();

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
                    providedWires.forEach(wire => {
                        var identifier = wire.capability['id']
                        if (oldIdentifier != identifier) {
                            oldIdentifier = identifier;
                            this.wires[identifier] = Array<any>();
                        }
                        //theValue.push(wire);
                        this.wires[identifier].push(wire);
                    });
                    console.log(this.wires);

                    this._backend.getBundleServices(this.bundle.id)
                        .subscribe(serviceRes => {
                            this.bundle.providedServices = serviceRes;
                        });
                    this._appGlobals.setIsLoading(false);
                }
                );
        });


    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    exportedPackagesTitle() {
        return "Exp. Pkgs. (" + this.bundle.exportPackage.length + ")";
    }

    importedPackagesTitle() {
        //                return "<span class='glyphicon glyphicon-log-in' aria-hidden='true' style='color: blue'> Imported Packages (" + this.bundle.importPackage.length + ")";
        return "Imp. Pkgs. (" + this.bundle.importPackage.length + ")";
    }

    providedServicesTitle() {
        var providedServicesCount = 0;
        if (this.bundle.providedServices != null) {
            providedServicesCount = this.bundle.providedServices.length;
        }
        return "Provided Services (" + providedServicesCount + ")";
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
