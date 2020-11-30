import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertisementFormComponent } from './advertisement-form/advertisement-form.component';
import { AdvertisementTableComponentComponent } from './advertisement-table-component/advertisement-table-component.component';
import { EditProductComponent } from './edit-product/edit-product.component';
const routes: Routes = [
  {path: 'form' ,component:AdvertisementFormComponent},
  {path: 'table' ,component:AdvertisementTableComponentComponent },
  {path: 'update/:id' ,component:EditProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
