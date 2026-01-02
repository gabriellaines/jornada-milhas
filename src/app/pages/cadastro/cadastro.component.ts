import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { PessoaUsuaria } from 'src/app/core/types/types';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  constructor(private formularioService: FormularioService, private cadastroService: CadastroService, private router: Router) {}

  cadastrar() {
    const formCadastro = this.formularioService.cadastro;

    if (formCadastro?.valid) {
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria;
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (response) => {
          console.log('Cadastro realizado com sucesso:', response);
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Erro ao realizar cadastro:', error);
        }
      })
    } 
    console.log('bla', formCadastro?.getRawValue());
    
  }
}
