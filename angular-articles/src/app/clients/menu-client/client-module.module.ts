import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuClientComponent } from "./menu-client.component";

@NgModule({
  declarations: [MenuClientComponent],
  imports: [CommonModule],
  exports: [MenuClientComponent]
})
export class ClientModuleModule {}
