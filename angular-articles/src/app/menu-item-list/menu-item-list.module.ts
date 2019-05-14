import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MenuItemListComponent } from "./menu-item-list.component";

@NgModule({
  declarations: [MenuItemListComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule
  ],
  exports: [MenuItemListComponent]
})
export class MenuItemListModule {}
