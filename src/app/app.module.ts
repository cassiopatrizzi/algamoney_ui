import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LancamentosGridComponent } from './lancamentos/lancamentos-grid/lancamentos-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { LancamentosPesquisaComponent } from 'src/app/lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentoService } from './lancamentos/lancamento.service';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    LancamentosGridComponent,
    LancamentosPesquisaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    TabViewModule,
    TooltipModule,
    FormsModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    HttpClientModule,
    CoreModule,
    SharedModule
  ],

  providers: [LancamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
