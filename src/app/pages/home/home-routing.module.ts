import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {CoodInfoComponent} from "../goods-page/good-info/good-info.component";
import {GoodsInfoResolver} from "../../shared/services/goods-info/goods-info.resolver";


const routes: Routes = [

  { path: ': link', component: HomeComponent },
  {
    path: ': link/:id', component: CoodInfoComponent, resolve: {
      goodInfo: GoodsInfoResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
