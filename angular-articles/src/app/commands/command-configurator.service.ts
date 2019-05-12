import { Injectable } from "@angular/core";
import { AllowedCommandsService } from "./allowed-commands.service";
import { RedialCommandService } from "./redial-command.service";
import { SwitchAlertsCommandService } from "./switch-alerts-command.service";
import { VoiceMailCommandService } from "./voice-mail-command.service";

@Injectable({
  providedIn: "root"
})
export class CommandConfiguratorService {
  constructor(
    private allowedCommandsService: AllowedCommandsService,
    private redialCommandService: RedialCommandService,
    private switchAlertsCommandService: SwitchAlertsCommandService,
    private voiceMailCommandService: VoiceMailCommandService
  ) {}

  configure() {
    this.allowedCommandsService.addCommand(this.redialCommandService);
    this.allowedCommandsService.addCommand(this.switchAlertsCommandService);
    this.allowedCommandsService.addCommand(this.voiceMailCommandService);
  }
}
