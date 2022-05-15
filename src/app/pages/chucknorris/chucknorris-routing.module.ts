import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChucknorrisPage } from './chucknorris.page';

const routes: Routes = [
  {
    path: '',
    component: ChucknorrisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChucknorrisPageRoutingModule {}
