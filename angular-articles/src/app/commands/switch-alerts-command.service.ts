import { Injectable } from '@angular/core';
import { Command } from './command';

@Injectable({
  providedIn: 'root'
})
export class SwitchAlertsCommandService implements Command {
  name: string = "Switch Command";
  execute() {
    console.log("Switched!");
  }
}
