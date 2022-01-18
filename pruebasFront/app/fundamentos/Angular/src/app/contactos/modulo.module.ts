import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteComponent } from './componente.component';





@NgModule({
   declarations:
[CONTACTOS_COMPONENTES];
,
  imports: [
    CommonModule,FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule,
     ]

  exports:[CONTACTOS_COMPONENTES]
})
export class ContactosModule { }
