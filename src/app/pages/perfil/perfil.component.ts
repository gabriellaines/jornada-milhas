import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { TokenService } from 'src/app/core/services/token.service';
import { UserService } from 'src/app/core/services/user.service';
import { PessoaUsuaria } from 'src/app/core/types/types';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit{

  titulo: string = 'Ola ';
  textoBotao: string = 'ATUALIZAR';
  perfilComponent: boolean = true;

  token: string = '';
  nome = '';
  cadastro!: PessoaUsuaria;
  form: FormGroup | null = null;

  constructor(
    private tokenService: TokenService,
    private cadastroService: CadastroService,
    private formularioService: FormularioService,
    private router: Router,
    private usuarioService: UserService
  ) {

  }

  ngOnInit() {
    this.token = this.tokenService.retornarToken() || '';
    this.cadastroService.buscarCadastro(this.token).subscribe((dados) => {
      this.cadastro = dados;
      this.nome = dados.nome;
      this.carregarFormulario();
    });
  }

  carregarFormulario() {
    this.form = this.formularioService.cadastro;
    this.form?.patchValue({
      nome: this.cadastro.nome,
      nascimento: this.cadastro.nascimento,
      cpf: this.cadastro.cpf,
      cidade: this.cadastro.cidade,
      email: this.cadastro.email,
      telefone: this.cadastro.telefone,
      estado: this.cadastro.estado
    });
  }

  deslogar() { 
    this.usuarioService.logout();
    this.router.navigateByUrl('/login');
  }

  atualizar() { 
    const dadosAtualizados: PessoaUsuaria = {
      nome: this.form?.value?.nome,
      nascimento: this.form?.value?.nascimento,
      cpf: this.form?.value?.cpf,
      cidade: this.form?.value?.cidade,
      email: this.form?.value?.email,
      telefone: this.form?.value?.telefone,
      estado: this.form?.value?.estado,
      senha: this.form?.value?.senha,
    };
    this.cadastroService.editarCadastro(dadosAtualizados, this.token).subscribe({
      next: (dados) => {
        console.log(dados); 
        alert('cadastro editado com sucesso!');
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        console.error(error);
        alert('Erro ao editar cadastro. Tente novamente.');
      }
    });
  }
}
