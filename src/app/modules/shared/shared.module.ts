import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [DialogComponent],
  entryComponents: [DialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    DialogComponent,
  ]
})
export class SharedModule { }
