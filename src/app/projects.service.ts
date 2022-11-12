import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';
import { Ht}
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private _http : HttpClient
  ) { }

  getAllProjects(): Observable<Project[]> {
    return this._http.get<Project[]>("http://localhost:9090/api/projects")
  }
}
