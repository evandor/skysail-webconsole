import {Component, OnInit, ElementRef} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from '@angular/common';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from "@angular/router";
import {HTTP_PROVIDERS} from '@angular/http';

import {BackendServices} from '../../services/backend.service';
import {Bundle} from '../../domain/bundle';
import {Tabs} from '../../components/tabs';
import {Tab} from '../../components/tab';

import {KeyValue} from '../../domain/keyValue';
import {ImportPackage} from '../../domain/importPackage';
import {Service} from '../../domain/service';

import {NewlinePipe} from '../../pipes/newline.pipe';
import {ValuesPipe} from '../../pipes/values.pipe';
import {BundleStatePipe} from '../../pipes/bundleState.pipe';

@Component({
    selector: 'bundle',
    directives: [FORM_DIRECTIVES, NgFor, NgFormModel, Tabs, Tab],
    providers: [BackendServices, HTTP_PROVIDERS],
    pipes: [NewlinePipe, ValuesPipe, BundleStatePipe],
    templateUrl: 'app/html/bundles/bundle.template.html',
    //styleUrls:  ['app/js/datatables.css']
})
export class BundleComponent implements OnInit {

    bundle: Bundle = new Bundle();

    capabilities: KeyValue[] = [];

    isLoading = true;

    private sub: any;

    constructor(private _backend: BackendServices, private route: ActivatedRoute, private _router: Router) {
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            let id = params['id']; 
            //this.service.getHero(id).then(hero => this.hero = hero);

            this._backend.getBundle(id)
            .subscribe(res => {
                this.bundle = res;
                var props = <Map<string, string>>res.wireDescriptor.capabilities;
                for (var key in props) {
                    if (key == "attributes") {
                        var attributes = <Map<string, string>>props[key];
                        var attributeMap: KeyValue[];
                        for (var attribute in attributes) {
                            attributeMap.push(new KeyValue(attribute, attributes[attribute]));
                        }
                        this.capabilities.push(new KeyValue(key, attributeMap));
                    } else {
                        this.capabilities.push(new KeyValue(key, props[key]));
                    }
                };

                this._backend.getBundleServices(this.bundle.id)
                    .subscribe(serviceRes => {
                        this.bundle.providedServices = serviceRes;
                    });


                this.isLoading = false;
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
        this._router.navigate(['Service', { id: service.id }]);
        //this._breadcrumbService.add(new Breadcrumb(['Bundle'], "hier"));
    }

    onSelectBundle(id: string) {
        this._router.navigate(['Bundle', { id: id }]);
    }

    objToStrMap(obj) {
        let strMap = new Map();
        for (let k of Object.keys(obj)) {
            strMap.set(k, obj[k]);
        }
        return strMap;
    }
}
