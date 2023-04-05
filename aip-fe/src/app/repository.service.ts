import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private baseURL = "/api";
  //private baseURL = "/";

  constructor(private httpClient: HttpClient) {
    //this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'Bearer ' + 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTY3OTMxMDYyMDkyOCwiaWF0IjoxNjc5MzEwNjIwfQ.tuA_gc84QxhcPxkTmNX66PfhtlddMG_ALyIycPws_k-ononj93uQSebElOh7NOlVjUvC-pYKQJMylVm4wLB9bg');
  }

  /*getRepositoryList(): Observable<Repository[]>{
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTY3OTQ2OTkwMzQ1MSwiaWF0IjoxNjc5NDY5OTAzfQ.ac4fVHXaTkOrD0tU-FkJ7oDblxXOjuwZ4GELlB26irF3bf0HnCygSlLtPjc-OaVCj8PWGJm23moYG35dpuE3hw');
    const headers = { headers: header };
    return this.httpClient.get<Repository[]>(`${this.baseURL}`,headers);
  }*/

  getRepositoryList(): Observable<any> {

    return this.httpClient.get(`${this.baseURL}`);
  }

  /*scanRepository(repository: Repository): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, repository);
  }

  getRepositoryByUid(uid: string): Observable<Repository>{
    return this.httpClient.get<Repository>(`${this.baseURL}/${uid}`);
  }*/

  /*createRepository(repository: Repository): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, repository);
  }

  getRepositoryByUid(Uid: string): Observable<Repository>{
    return this.httpClient.get<Repository>(`${this.baseURL}/${Uid}`);
  }

  updateRepository(Uid: string, repository: Repository): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${Uid}`, repository);
  }

  deleteRepository(Uid: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${Uid}`);
  }*/
}
