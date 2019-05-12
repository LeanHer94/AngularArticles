import { Component, OnInit } from '@angular/core';
import { MenuBuilderService } from 'src/app/menu/api/menu-builder.service';

@Component({
  selector: 'app-menu-client',
  templateUrl: './menu-client.component.html',
  styleUrls: ['./menu-client.component.less']
})
export class MenuClientComponent implements OnInit {

  constructor(private menuBuilderService: MenuBuilderService) { }

  ngOnInit() {
    this.menuBuilderService.addMenuItem({ icon: "dialpad", description: "Redial", enabled: true, trigger: () => console.log("eeeo")});
    this.menuBuilderService.addMenuItem({ icon: "voicemail", description: "Check voicemail", enabled: true, trigger: () => console.log("eeeo")});
    this.menuBuilderService.addMenuItem({ icon: "notifications_off", description: "Disable alerts", enabled: true, trigger: () => console.log("eeeo")});

    this.menuBuilderService.build();
  }
}
