import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogContentExampleDialog, HomeComponent } from './home.component';
import { DemoMaterialModule } from './component/material-module';

@NgModule({
  declarations: [HomeComponent, DialogContentExampleDialog],
  imports: [
    CommonModule,
    DemoMaterialModule,
  ],
  exports: [
    HomeComponent, DialogContentExampleDialog
  ]
})
export class HomeModule { }
