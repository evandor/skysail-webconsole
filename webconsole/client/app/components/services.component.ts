import {Component, OnInit,ElementRef} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from 'angular2/common';

//import {BundlesService} from '../services/bundles.service';

declare var jQuery:any;

@Component({
    selector: 'services',
    directives: [FORM_DIRECTIVES, NgFor, NgFormModel],
    //providers: [BundlesService],
    templateUrl: 'app/html/services.template.html',
    styleUrls:  ['app/js/datatables.css']
})
export class ServicesComponent implements OnInit {

    bundles = [];
    

    constructor(private _elementRef: ElementRef) {
        console.log("in ServicesComponent constructor");
    }

    onInit() {
    }

    ngOnInit() {
        console.log("oninit services called!");
        console.log(jQuery(this._elementRef.nativeElement).find('#example'));
        jQuery(this._elementRef.nativeElement).find('#services').DataTable({
            "lengthMenu": [[25, 50, -1], [25, 50, "All"]],
            "ajax": 'http://localhost:2002/backend/services',
            "columns": [
              { "data": "id" },
              { "data": "objectClass" },
              { "data": "pid" },
              { "data": "ranking" }
            ],
            "columnDefs": [
                {
                    "render": function (data, type, row) {
                        return '<a href="bundles/' + data + '">' + data + '</a>';
                    },
                    "targets": 1
                }
            ]

        });
    }



}
