import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private baseURL = "/api";
  //private baseURL = "/";

  constructor(private httpClient: HttpClient) {
  }

  getRepositoryList(): Observable<any> {

    return this.httpClient.get(`${this.baseURL}`);
  }

  /*getScanReport(uid: String): Observable<any> 
  {
    let reportURL = `${this.baseURL}` +'/' + uid + '/pdfreport'
    console.log(reportURL);
    return this.httpClient.get(`${reportURL}`);
  }*/

  getScanReport(uid: String): Observable<any>
  {
    let reportURL = `${this.baseURL}` +'/' + uid + '/pdfreport'
    console.log(reportURL);
    return this.httpClient.get(`${reportURL}` , { responseType: 'blob'});
  }

  scanRepository(uid: string) : Observable<any> 
  {
     let scanURL = `${this.baseURL}` +'/' + uid + '/scan'
     console.log(scanURL);
     return this.httpClient.post(`${scanURL}`, null);
  }

}
