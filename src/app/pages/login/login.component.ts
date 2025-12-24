import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder, 
    private readonly autenticacaoService: AutenticacaoService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
      senha: [null, [Validators.required]]
    })
  }

  login() {
    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;

    this.autenticacaoService.autenticar(email, senha)
      .subscribe({
        next: (authResult: any) => {
          console.log('Logged in');
          this.router.navigateByUrl('/');
        },
        error: error => console.log('Error on login: ', error)
      });
  }
}
