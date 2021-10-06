import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<any> {
    return this.http.get(`/assets/api-users.json`);
  }

  getUser(value: string): Observable<any> {
    return this.http.get(`http://fichaclinica.cl:9000/api/users/${value}`);
  }
}
