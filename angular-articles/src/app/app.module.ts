import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormsModule } from './form/my-forms.module';
import { ClientModuleModule } from './clients/menu-client/client-module.module';
import { MenuModuleModule } from './menu/menu-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModuleModule,
    MenuModuleModule,
    MyFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
