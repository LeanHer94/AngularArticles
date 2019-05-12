import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReactiveFormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";

import { MenuBuilderFormComponent } from "./menu-builder-form/menu-builder-form.component";

@NgModule({
  declarations: [MenuBuilderFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatListModule,
    MatSelectModule
  ],
  exports: [MenuBuilderFormComponent]
})
export class MyFormsModule {}
