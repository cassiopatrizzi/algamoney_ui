import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentoUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) { }

  async pesquisar(): Promise<any> {
    const response = await this.http.get(`${this.lancamentoUrl}?resumo`)
      .toPromise();
    console.log(response);
  }
}

