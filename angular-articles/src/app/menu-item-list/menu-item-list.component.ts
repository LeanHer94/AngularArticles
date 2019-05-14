import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MenuItem } from "../menu/api/menu-item";

@Component({
  selector: "app-menu-item-list",
  templateUrl: "./menu-item-list.component.html",
  styleUrls: ["./menu-item-list.component.less"]
})
export class MenuItemListComponent {
  @Input("itemsToShow") itemsToShow: MenuItem[];

  @Output() itemRemoved = new EventEmitter<number>();

  constructor() {}

  removeMenuItem(index: number) {
    this.itemRemoved.next(index);
  }
}
