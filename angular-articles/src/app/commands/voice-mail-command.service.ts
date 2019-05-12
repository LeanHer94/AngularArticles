import { Injectable } from '@angular/core';
import { Command } from './command';

@Injectable({
  providedIn: 'root'
})
export class VoiceMailCommandService implements Command{
  name: string = "Voice Mail Command";
  execute() {
    console.log("New voice Mail!");
  }
}
