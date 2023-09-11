import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RestaurantsService } from './services/restaurants.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { DataService } from './services/data.service';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { FooterComponent } from './footer/footer.component';
import { Home2Component } from './home2/home2.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgClass } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';

import {MatSidenavModule } from '@angular/material/sidenav';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { TestComponent } from './test/test.component';
import { Test2Component } from './test/test2/test2.component';




import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule } from '@angular/material/list';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { OrderComponent } from './order/order.component';

import { FoodItemsComponent } from './food-items/food-items.component';

import { MyAccountComponent } from './my-account/my-account.component';
import { AdminRestaurantsComponent } from './admin-restaurants/admin-restaurants.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminAddRestComponent } from './admin-add-rest/admin-add-rest.component';
import { AdminAdminUserComponent } from './admin-admin-user/admin-admin-user.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminMessagesComponent } from './admin-messages/admin-messages.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    TopnavComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    CustomerComponent,
    FooterComponent,
    Home2Component,
    RestaurantsComponent,
    AdminComponent,
    AdminLoginComponent,
    RestaurantMenuComponent,
    AdminDashboardComponent,
    
    AdminUsersComponent,
    AdminMainComponent,
    
    

    
    TestComponent,
    Test2Component,

    ShoppingCartComponent,
    OrderComponent,

    FoodItemsComponent,
     
     MyAccountComponent,
     AdminRestaurantsComponent,
     AdminOrderComponent,
     AdminOrdersComponent,
     AdminAddRestComponent,
     AdminAdminUserComponent,
     MyOrdersComponent,
     ContactUsComponent,
     AdminMessagesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule ,
    MatFormFieldModule,
    MatChipsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule

   
  ],
  providers: [DataService ,RestaurantsService,ShoppingCartService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
