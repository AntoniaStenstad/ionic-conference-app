import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChucknorrisPageRoutingModule } from './chucknorris-routing.module';

import { ChucknorrisPage } from './chucknorris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChucknorrisPageRoutingModule
  ],
  declarations: [ChucknorrisPage]
})
export class ChucknorrisPageModule {}
