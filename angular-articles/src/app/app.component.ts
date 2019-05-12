import { Component, OnInit } from "@angular/core";
import { CommandConfiguratorService } from "./commands/command-configurator.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit {
  constructor(private commandConfiguratorService: CommandConfiguratorService) {}

  ngOnInit(): void {
    this.commandConfiguratorService.configure();
  }
}
