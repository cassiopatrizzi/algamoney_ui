import { InputTextModule } from 'primeng/inputtext';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formatCurrency } from '@angular/common';

class Cliente {
  nome: string | undefined;
  email: string | undefined;
  profissao: string | undefined;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  cliente = new Cliente;
  profissoes = [{ 'id': '1', 'funcao': 'Programador' }, { 'id': '2', 'funcao': 'Empresário' }, { 'id': '3', 'funcao': 'Outra' }];

  ngOnInit(): void {
    this.cliente.profissao="";
  }

  salvar(form: NgForm) {
    console.log(form);
    form.reset({ profissao: '' });


    /*  this.cliente.nome = form.value.primeiroNome;
     this.cliente.email = form.value.emailAdress;
     this.cliente.profissao = form.value.profissao;
  */


  }


}
