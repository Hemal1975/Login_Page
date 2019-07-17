import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
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

 private ttbLogin = 'https://www.ttbonline.gov/permitsonline/Default.aspx';

 private headers = new HttpHeaders({
  "Access-Control-Allow-Origin": 'https://www.ttbonline.gov',
  "Cache-Control": "no-cache",
  "Postman-Token": "261b3638-47af-4776-a652-7da0ef27f9ea,4027e001-142e-4d26-9680-71c502630851",
  "Host": "www.ttbonline.gov"
})

  constructor(private http: HttpClient) { }
  
  postLoginCredential(username: string, password: string): Observable<LoginInterface>{
    console.log(username, password);
    return this.http.post<LoginInterface>(this.ttbLogin,
    {
      Username: username,
      Password: password
    },
    {
      headers: this.headers
    }
     ).pipe(catchError(this.handleError));
  }

  getLoginRespose(): Observable<LoginInterface> {
    return this.http.get<LoginInterface>('https://www.ttbonline.gov/permitsonline/Default.aspx',
  
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