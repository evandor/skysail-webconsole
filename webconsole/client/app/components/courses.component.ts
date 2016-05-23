import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS, RequestOptions, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import {CoursesService} from '../services/courses.service'
import {BackendServices} from '../services/backend.service'

import {Navbar} from './navbar/navbar.component';

@Component({
    templateUrl: 'app/html/courses.template.html',
    directives: [Navbar],
    providers: [HTTP_PROVIDERS, CoursesService, BackendServices,Navbar]
})
export class CoursesComponent implements OnInit {
    
    isLoading = true;
    courses = []; 
    
    constructor(private _backend: BackendServices){        
        console.log("constructor called");
        // _backend.setBaseUrl('http://jsonplaceholder.typicode.com/');
        //_backend.setBaseUrl('http://localhost:2018/demoapp/v1/');
        _backend.setBaseUrl('http://85.25.22.126:8391/demoapp/v1/');
    }
    
    onInit() {
    }
    
    ngOnInit(){
        
        var headers = new Headers({
            "access-control-request-method": "POST",
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('username' + ':' + 'password')
        });

        var options = new RequestOptions({
            headers: headers
        });
        
        console.log("oninit called");
        this._backend.get('Timetables/16:0/?media=json', options)
            .subscribe(res => this.courses = res);
        //.subscribe(res => console.log(res));
    }
}