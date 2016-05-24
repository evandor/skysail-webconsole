import {Component, OnInit,ElementRef} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from 'angular2/common';

import {BundlesService} from '../services/bundles.service';

declare var jQuery:any;

@Component({
    selector: 'bundles',
    directives: [FORM_DIRECTIVES, NgFor, NgFormModel],
    providers: [BundlesService],
    templateUrl: 'app/html/bundles.template.html',
    styleUrls:  ['app/js/datatables.css']
})
export class BundlesComponent implements OnInit {

    bundles = [];
    

    constructor(private _bundleService: BundlesService, private _elementRef: ElementRef) {
        console.log("in BundlesComponent constructor");

       // this._bundleService.getBundles()
         //   .subscribe(res => this.bundles = res);

        console.log(this.bundles);
    }

    onInit() {
    }

    ngOnInit() {
        console.log("oninit bundlesservice called!");
       // this._bundleService.getBundles()
         //   .subscribe(res => this.bundles = res);
        //.subscribe(res => console.log(res));

        console.log(jQuery(this._elementRef.nativeElement).find('#example'));
        jQuery(this._elementRef.nativeElement).find('#example').DataTable({
            "lengthMenu": [[25, 50, -1], [25, 50, "All"]],
            "ajax": 'http://localhost:2002/backend/bundles',
            "columns": [
              { "data": "id" },
              { "data": "symbolicName" },
              { "data": "version" },
              { "data": "state" }
            ],
            "columnDefs": [
                {
                    "render": function (data, type, row) {
                        return '<a href="bundles/' + row['id'] + '">' + data + '</a>';
                    },
                    "targets": 1
                }
            ]

        });
    }



}
