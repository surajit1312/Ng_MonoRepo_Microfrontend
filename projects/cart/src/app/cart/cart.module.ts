import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CartModule {}
