import { Injectable } from '@angular/core';
import { Command } from './command';
import { Tuple } from '../common/tuple';

@Injectable({
  providedIn: 'root'
})
export class AllowedCommandsService {
  private commands: Command[] = [];

  constructor() { }

  addCommand(command: Command){
    this.commands.push(command);
  }

  getTuples() : Tuple[] {
    return this.commands.map((command, index) => { return { name: command.name, id: index }});
  }

  getCommandByIndex(index: number): Command{
    return this.commands[index];
  }
}
