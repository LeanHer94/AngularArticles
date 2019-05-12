import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AllowedCommandsService } from "src/app/commands/allowed-commands.service";
import { Tuple } from "src/app/common/tuple";
import { MenuItem } from "src/app/menu/api/menu-item";
import { MenuBuilderService } from "src/app/menu/api/menu-builder.service";

@Component({
  selector: "app-menu-builder-form",
  templateUrl: "./menu-builder-form.component.html",
  styleUrls: ["./menu-builder-form.component.less"]
})
export class MenuBuilderFormComponent implements OnInit {
  commandsForm: FormGroup;
  allowedCommandList: Tuple[];
  newMenuItemsBuffer: MenuItem[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private allowedCommands: AllowedCommandsService,
    private menuBuilder: MenuBuilderService
  ) {}

  ngOnInit() {
    this.commandsForm = this.formBuilder.group({
      description: [""],
      icon: [""],
      command: [""]
    });

    this.allowedCommandList = this.allowedCommands.getTuples();
  }

  addMenuItem() {
    let menuItem: MenuItem = {
      description: this.commandsForm.value.description,
      icon: this.commandsForm.value.icon,
      enabled: true,
      trigger: this.allowedCommands.getCommandByIndex(
        this.commandsForm.value.command
      ).execute
    };

    this.newMenuItemsBuffer.push(menuItem);
  }

  removeMenuItem(index: number) {
    this.newMenuItemsBuffer.splice(index, 1);
  }

  confirmNewItems() {
    this.newMenuItemsBuffer.forEach(menuItem =>
      this.menuBuilder.addMenuItem(menuItem)
    );

    this.menuBuilder.build();

    this.newMenuItemsBuffer = [];
  }
}
