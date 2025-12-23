import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent {
  @Input()
  public destino: string = '';
  @Input()
  public preco: number = 0;
  @Input()
  public imagem: string = '';
}
