import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemComponent } from './home-page/item/item.component';
import { PricingComponent } from './home-page/pricing/pricing.component';
import { CategoriesComponent } from './home-page/categories/categories.component';
import { BrandPipe } from './shared/pipes/brand.pipe';
import { CategoryPipe } from './shared/pipes/category.pipe';
import { PricePipe } from './shared/pipes/price.pipe';
import { NamePipe } from './shared/pipes/name.pipe';
import { ListComponent } from './home-page/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    ItemComponent,
    PricingComponent,
    CategoriesComponent,
    BrandPipe,
    CategoryPipe,
    PricePipe,
    NamePipe,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatDividerModule,
    MatPaginatorModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
