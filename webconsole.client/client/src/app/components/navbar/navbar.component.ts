import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from "@angular/router";
import {BackendServices} from '../../services/backend.service';
import {AppGlobals} from '../../services/appglobals.service';
import {BreadcrumbsService} from '../../services/breadcrumbs.service';

import {Subscription} from 'rxjs/Subscription';

import {Breadcrumbs} from '../../components/navbar/breadcrumbs.component';
import {Breadcrumb} from '../navbar/breadcrumb';

@Component({
    selector: 'navbar',
    directives: [ROUTER_DIRECTIVES, Breadcrumbs],
    providers: [BackendServices],
    pipes: [],
    templateUrl: 'app/html/navbar/navbar.template.html'
})
export class Navbar {

    res;

    currentMenuItem: string = "Bundles";

    private loading = false;

    subscription: Subscription;

    breadcrumbs: Breadcrumb[];

    bundleIdList: string[] = [];
    currentId = "0";
    private sub: any;
    private routeParams: any;
    private backendUrl: string;
    private prevExistsFlag: boolean = false;

    constructor(
        private _router: Router,
        private _backend: BackendServices,
        private _appGlobals: AppGlobals,
        private _breadcrumbsService: BreadcrumbsService
    ) {

        this._appGlobals._isLoading.subscribe(value => this.loading = value);

        this._appGlobals._bundleIdList.subscribe(val => this.bundleIdList = val);
        this._appGlobals._routeParams.subscribe(val => this.routeParams = val);
        this._appGlobals._backendUrl.subscribe(val => this.backendUrl = val);

        this._router.events.subscribe(() => {
            _breadcrumbsService.clear();
            _breadcrumbsService.add(new Breadcrumb(['/bundles'], '<i class="fa fa-home" aria-hidden="true"></i>'));
            var val = this._router.url;
            var segements = val.split('/');
            segements.forEach(segment => {
                if (segment != '') {
                    _breadcrumbsService.add(new Breadcrumb([segment], segment));
                }
            });
            this.breadcrumbs = _breadcrumbsService.getBreadcrumbs();
        });

    }

    isLoading(): boolean {
        return this.loading;
    }

    getBundlesMenuTitle() {
        var bundlesCount: number;
        //this._backend.getBundles().subscribe(res => bundlesCount = res.length);
        return "Bundles";//(" + bundlesCount + ")";
    }

    checkActive(menuItem: string) {
        if (menuItem == this.currentMenuItem) {
            return "nav-item active";
        }
        return "nav-item";
    }

    onSubmit() {
        this._backend.createSnapshot().subscribe(res => this.res = res);
    }

    get authenticated() {
        return true;//this.authService.isAuthenticated();
    }

    doLogin() {
        //this.authService.doLogin();
    }

    doLogout() {
        //this.authService.doLogout();
    }

    get userName() {
        return "admin";//this.authService.getUserName();
    }

    get page() {
        return "";//this.location.path().split('/')[1];
    }

    next() {
        this._router.navigate(['/bundles', this.getCurrentBundleIndex(this.routeParams['id']) + 1]);
    }

    prev() {
        this._router.navigate(['/bundles', this.getCurrentBundleIndex(this.routeParams['id']) - 1]);
    }

    rawData() {
        return this.backendUrl + "backend/v1/bundles";
    }

    getCurrentBundleIndex(routeParamId): number {
        var index = 0;
        var goto = 0;
        this.bundleIdList.forEach(id => {
            if (id == routeParamId) {
                goto = index;
            }
            index += 1;
        });
        return goto;
    }
}

