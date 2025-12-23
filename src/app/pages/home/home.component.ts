import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public promocoes: Promocao[] = [];

  constructor(private readonly promocaoService: PromocaoService) {}

  ngOnInit(): void {
    this.promocaoService.listar()
      .subscribe({
        next: (promoList: Promocao[]) => this.promocoes = promoList,
      });
  }

}
