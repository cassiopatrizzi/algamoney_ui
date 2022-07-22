import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { LancamentoService } from '../lancamentos/lancamento.service';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,

    ConfirmDialogModule,
    ToastModule
  ],
  exports: [
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [LancamentoService, DatePipe, MessageService, ConfirmationService,  ErrorHandlerService,
    { provide: LOCALE_ID, useValue: 'pt' }],

})
export class CoreModule { }
