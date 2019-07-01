import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

export interface LoginInterface {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  constructor(private http: HttpClient) { }
  
  postLoginCredential(username: string, password: string): Observable<LoginInterface>{
    console.log(username, password);
    return this.http.post<LoginInterface>('https://18.208.118.111:9443/identity/metadata/saml2/data.json', 
    // return this.http.post<LoginInterface>('https://udemy-ng-http-93b5b.firebaseio.com/data.json', 
    {
      Username: username,
      Password: password
    }
     ).pipe(catchError(this.handleError));
  }

  private handleError(errorRes: HttpErrorResponse){

    if(!errorRes.error || !errorRes.error.error) {
      let errorMessage = 'An Unknown error occured';
      console.log(errorRes);
      return throwError(errorMessage);
    }
    
  }

}