
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { EstadosComponent } from './estados.component';
import { EstadosRoutingModule } from './estados.routing.module';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [EstadosComponent],
  imports: [
    CommonModule,
    EstadosRoutingModule,
    FormsModule,
    TableModule
  ]
})
export class EstadosModule { }
