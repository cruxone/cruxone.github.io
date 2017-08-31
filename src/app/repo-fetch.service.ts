import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class RepoFetchService {
    private reposURL  = 'https://api.github.com/users/cruxone/repos?type=owner'
    constructor (private http: Http) {}
    getRepos () {
        return this.http.get(this.reposURL)
            .map((response: Response) => response.json());
    }
}