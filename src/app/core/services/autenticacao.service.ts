import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(private readonly httpClient: HttpClient) { }

  autenticar(email: string, senha: string): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/auth/login', { email, senha });
  }

}
