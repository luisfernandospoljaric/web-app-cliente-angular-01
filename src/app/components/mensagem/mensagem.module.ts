import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemAlertComponent } from './mensagem-alert/mensagem-alert.component';



@NgModule({
  declarations: [
    MensagemAlertComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    MensagemAlertComponent
  ]
})
export class MensagemModule { }
