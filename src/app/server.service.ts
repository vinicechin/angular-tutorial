import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    return this.http.put('https://udemy-ng-http-94363.firebaseio.com/data.json', servers);
  }

  getServers() {
    return this.http.get('https://udemy-ng-http-94363.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      )
      .catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw(error);
        }
      );
  }

  getAppName() {
    return this.http.get('https://udemy-ng-http-94363.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      )
  }
}
