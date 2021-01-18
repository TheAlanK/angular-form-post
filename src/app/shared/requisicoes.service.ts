import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class RequisicoesService {
  public uri = `minha_uri.com.br`;
  constructor(private httpClient: HttpClient) { }

  enviar(valor: any): Observable<any>{
    return this.httpClient.post(this.uri, valor);
  }


}
