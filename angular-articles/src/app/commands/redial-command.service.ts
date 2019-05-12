import { Injectable } from '@angular/core';
import { Command } from './command';

@Injectable({
  providedIn: 'root'
})
export class RedialCommandService implements Command{
  name: string = "Redial Command";
  execute() {
    console.log("Redial");
  }
}
