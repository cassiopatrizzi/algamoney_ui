import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  valores: string | undefined;

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  categorias = [
    { label: 'Alimentação', value: 1 },
    { label: 'Transporte', value: 2 },
  ]

  pessoas = [
    { label: 'Cássio Patrizzi', value: 1 },
    { label: 'Teodoro Pattrizzi', value: 2 },
    { label: 'Ágatha Patrizzi', value: 3 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
