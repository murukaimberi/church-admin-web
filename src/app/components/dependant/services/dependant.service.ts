import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {User} from "../../user/model/user";
import {Observable} from "rxjs";
import {Dependant, IDependant} from "../model/dependant";
import {IApiResponse} from "../model/api.response";

@Injectable({
  providedIn: 'root'
})
export class DependantService {
  url = 'http://localhost:8090/church-admin/api/v1.0/dependants'
  constructor(protected httpClient: HttpClient) { }

  createDependant(dependant: IDependant): Observable<IDependant> {
    return this.httpClient.post<IDependant>(`${this.url}`,dependant)
  }

  getAllDependants(): Observable<IApiResponse<IDependant>> {
    return this.httpClient.get<IApiResponse<IDependant>>(`${this.url}`);
  }
}
