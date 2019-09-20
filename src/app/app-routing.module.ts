import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: './product/product.module#ProductModule' },
  {
    path: 'manage', canActivate: [AuthGuard],
    data: {
      expectedRole: ['admin']
    }
    , loadChildren: './manage/manage.module#ManageModule'
  },
  {
    path: 'cart', canActivate: [AuthGuard], component: CartComponent, data: {
      expectedRole: ['admin', 'USER']
    }
  },
  {
    path: 'orders', canActivate: [AuthGuard],
    data: {
      expectedRole: ['user']
    }
    , loadChildren: './feature/feature.module#FeatureModule'
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
