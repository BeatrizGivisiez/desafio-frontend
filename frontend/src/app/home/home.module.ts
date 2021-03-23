import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogContentExampleDialog, HomeComponent } from './home.component';
import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [HomeComponent, DialogContentExampleDialog],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatDialogModule,
  ],
  exports: [
    HomeComponent, DialogContentExampleDialog
  ]
})
export class HomeModule { }
