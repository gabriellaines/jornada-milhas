import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private cadastroForm: FormGroup | null = null;

  constructor() { }

  get cadastro(): FormGroup | null {
    return this.cadastroForm;
  }

  set cadastro(form: FormGroup | null){
    this.cadastroForm = form;
  }
}
