import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';


export interface LoginInterface {
  username: string;
  password: string;
}

export interface loginResponse {
  status: number;
  result: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginResponse = "../assets/mock/loginResponse.json";

  constructor(private http: HttpClient) {
    console.log(this.loginResponse);
   }
  
  postLoginCredential(username: string, password: string): Observable<LoginInterface> {
    console.log(username, password);
    return this.http.post<LoginInterface>('https://18.208.118.111:9443/identity/metadata/saml2/data.json', 
    // return this.http.post<LoginInterface>('https://udemy-ng-http-93b5b.firebaseio.com/data.json', 
    {
      'agency':'TTB',
      Username: username,
      Password: password
    }
     ).pipe(catchError(this.handleError));
  }

  getLoginRespose():Observable<loginResponse> {
    return this.http.get<loginResponse>(this.loginResponse).pipe(catchError(this.handleError));
  }

  private handleError(errorRes: HttpErrorResponse){

    if(!errorRes.error || !errorRes.error.error) {
      let errorMessage = 'An Unknown error occured';
      console.log(errorRes);
      return throwError(errorMessage);
    }
    
  }

}