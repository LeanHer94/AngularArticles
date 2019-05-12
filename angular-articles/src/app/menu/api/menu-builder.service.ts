import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';
import { Subject } from 'rxjs';

@Injectable()
export class MenuBuilderService {

  private buildStream = new Subject<MenuItem[]>();

  private menuItems: MenuItem[] = [];

  menuWasBuilt$ = this.buildStream.asObservable();

  constructor() { }

  addMenuItem(menuItem: MenuItem){
    this.menuItems.push(menuItem);
  }

  build(){
    this.buildStream.next(this.menuItems);
  }
}
