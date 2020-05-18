import { Injectable } from '@angular/core';
import {Rune} from '../models/rune';
import runes from '../../assets/runes.json';

@Injectable({
  providedIn: 'root'
})
export class RuneService {

  constructor() { }

  getRunes(): Rune[] {
    return runes;
  }
}
