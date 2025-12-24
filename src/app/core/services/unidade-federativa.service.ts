import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UnidadeFederativa } from '../types/types';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaService {

  private readonly apiUrl = environment.apiUrl;
  private cache$?: Observable<UnidadeFederativa[]>;

  constructor(private readonly httpClient: HttpClient) { }

  listar(): Observable<UnidadeFederativa[]> {
    if (!this.cache$) {
      this.cache$ = this.requestEstados().pipe(
        shareReplay(1)
      );
    }

    return this.cache$;
  }
 
  requestEstados() {
    return this.httpClient.get<UnidadeFederativa[]>(`${this.apiUrl}/estados`);
  }
}
