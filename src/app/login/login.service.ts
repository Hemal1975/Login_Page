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
  "Cache-Control": "no-cache",
  "Postman-Token": "261b3638-47af-4776-a652-7da0ef27f9ea,4027e001-142e-4d26-9680-71c502630851",
  "Host": "www.ttbonline.gov",
  "cookie": "ACA_USER_PREFERRED_CULTURE=en-US; FwLoginCookie=C94393FFFBCED557C3D28BF1BCE2674BE6B46F39F310003A371642C6C772766552A82C7E788D0AC7DDBB28AD69D0714B08CDF88C8DFDF8F1E937BBBC6A902B26A25D24D1A00397476A81CA0B26C0CD564A000D51422F4AD6455556FF7BE4054C452A7ABB50FB82BB6F1BF367F1CE90BB3E5433AACC171EB789BCCC8569A374868A2DD82AE0B949A84953334B42183C8F; .ASPXANONYMOUS=07sPZQaF20DdoMzgXCBF52Bovtcz6J56PLKNjzo1ZFZFgHdAdjKpG9h6xqO-L3RVM3FQxG2Ig63B5tJj1_VpLC6EIzHGt4YsXaPL4QlBAf9iwWfRB-pq1bbblFIXDFIXDmMaGtYcJSNuqoEv_Ztq0F3iE6qVSa67C4Mz0_zRNh4TFIe3_x38iLcZk89mneuc0; ACA_CS_KEY=d11765ca86fd43ee8409c4c000fab353; ACA_SS_STORE=5wvdzlf4i5z2tr1qkyxs2dov; LATEST_REQUEST_TIME=1563286533895; TS01f7a357=0134890737b806ed427421c0356632e352594f2a934337c0aa6d50aaed4c00c601235b9d01e4c34fdba489c09a88dc74de82456764; TS01f9110e=0134890737afeeb7ce422c0c2973ae6337fd7d41079657d98166a5ea17e8f74aa59adec505eb5e9d2be17b3522738081cd8a07e3b6717ef06898d7becd73eb8aeb0c6b7c5a435aa3ac587cabdc9087ac1ecf9fef09725995647a5e15f8970ecda596b3d4d4780592e6d3fa656a318873ba17db2b1912357f9a4f591f33025fd2acd65b58cb5401dd8ff1b38d1a226ef85daacbf5ce039a93c9e954ffd40a0a1ca6a536c942; _ga=GA1.2.1702115745.1560870991; _gid=GA1.2.1971474429.1563110066; _pendo_accountId.08c27448-9075-481d-584f-0c00aac03d50=TTB; _pendo_meta.08c27448-9075-481d-584f-0c00aac03d50=1941980218; _pendo_visitorId.08c27448-9075-481d-584f-0c00aac03d50=7CE475A3A0B9892CD6FFA2B7EA8C50B36E7AD18B174796BE8FDDE08446B79A09791CB3BA920120D8951126D62E4975328CCAF967FE4F1349F2F51DC18FD45008; LASTEST_REQUEST_TIME=1563308066432"
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