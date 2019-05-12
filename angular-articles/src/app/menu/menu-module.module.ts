import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DynamicMenuComponent } from './dynamic-menu/dynamic-menu.component';
import { MenuBuilderService } from './api/menu-builder.service';

@NgModule({
  declarations: [
    DynamicMenuComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    DynamicMenuComponent
  ],
  providers: [
    MenuBuilderService
  ]
})
export class MenuModuleModule { }
