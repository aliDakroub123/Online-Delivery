import { AdminMessagesComponent } from './admin-messages/admin-messages.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminAdminUserComponent } from './admin-admin-user/admin-admin-user.component';
import { AdminAddRestComponent } from './admin-add-rest/admin-add-rest.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminRestaurantsComponent } from './admin-restaurants/admin-restaurants.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { GuardGuard } from './guard.guard';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './_auth/auth.guard';
import { AdminMainComponent } from './admin-main/admin-main.component';

import { TestComponent } from './test/test.component';


import { OrderComponent } from './order/order.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { MyAccountComponent } from './my-account/my-account.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "test", component: TestComponent},
  {path: "contact", component: ContactUsComponent},

  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'register', component: SignupComponent },
      {path:'my-orders/:username',component:MyOrdersComponent},
      {path:'my-account',component:MyAccountComponent},
    ]
  },
  {path: "restaurants", component: RestaurantsComponent},
  {path: "restaurants/:name",component: RestaurantMenuComponent},



  {path:"cart",component:ShoppingCartComponent},
  {path: 'checkout', component: OrderComponent},



  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        component: AdminLoginComponent,
        data: { title: 'Administrator login' },
      },
      {
        path: 'main',
        component: AdminMainComponent,canActivate: [AuthGuard] ,
        children:[
         { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
         {path:'dashboard',
         component: AdminDashboardComponent,
         },
         
          {path:'users',
          component: AdminUsersComponent,
          },
          {path:'orders',
          component: AdminOrdersComponent,
          },
          {path:'order/:username',
          component: AdminOrderComponent,
          },
          {path:'restaurants',
          component: AdminRestaurantsComponent,
          },
          {path:'add',
          component: AdminAddRestComponent,
          },
          {path:'admins',
          component: AdminAdminUserComponent,
          },
          {path:'messages',
          component: AdminMessagesComponent,
          },
          
        ]
      } ,
    //  {path:'restaurants',component:AdminRestaurantsComponent,canActivate: [AuthGuard] }
    
    /* {
      path: 'dashboard',
      component: AdminDashboardComponent,canActivate: [AuthGuard] ,
      children:[
        {path:'users',
        component: AdminUsersComponent,
        }
      ]
    },*/


    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
