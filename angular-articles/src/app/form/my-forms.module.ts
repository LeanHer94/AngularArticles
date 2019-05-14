import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReactiveFormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";

import { MenuBuilderFormComponent } from "./menu-builder-form/menu-builder-form.component";
import { MenuItemListModule } from "../menu-item-list/menu-item-list.module";

@NgModule({
  declarations: [MenuBuilderFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MenuItemListModule
  ],
  exports: [MenuBuilderFormComponent]
})
export class MyFormsModule {}
