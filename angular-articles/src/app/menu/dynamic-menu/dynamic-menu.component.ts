import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuBuilderService } from '../api/menu-builder.service';
import { MenuItem } from '../api/menu-item';

@Component({
  selector: 'app-dynamic-menu',
  templateUrl: './dynamic-menu.component.html',
  styleUrls: ['./dynamic-menu.component.less']
})
export class DynamicMenuComponent implements OnInit, OnDestroy {

  menuItems: MenuItem[] = [];
  
  private suscription: Subscription;

  constructor(private menuBuilderService: MenuBuilderService) { }

  ngOnInit() {
    this.suscription = this.menuBuilderService
        .menuWasBuilt$
        .subscribe(menuItems => this.menuItems = menuItems);
  }

  ngOnDestroy(){
    this.suscription.unsubscribe();
  }
}
