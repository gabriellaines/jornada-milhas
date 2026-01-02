import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';
import { PessoaUsuaria } from '../types/types';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<PessoaUsuaria | null>(null);

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {

    }
  }

  decodificarToken() {
    const token = this.tokenService.retornarToken();
    const decoded = jwtDecode<PessoaUsuaria>(token || '');
    const user = token ? decoded : null;
    this.userSubject.next(user); 
  }

  retornarUser() {
    return this.userSubject.asObservable();
  }

  salvarToken(token: string) {
    this.tokenService.salvarToken(token);
    this.decodificarToken();
  }

  logout() {
    this.tokenService.excluirToken();
    this.userSubject.next(null);
  }

  estaLogado(): boolean {
    return this.tokenService.possuiToken();
  }
}
