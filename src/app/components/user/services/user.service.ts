import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8090/church-admin/api/v1.0/congregants';
  constructor(protected httpClient: HttpClient) { }

  getCongregant(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.url}/${id}`);
  }
}
