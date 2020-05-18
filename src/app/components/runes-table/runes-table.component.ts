import {Component, OnInit} from '@angular/core';
import {RuneService} from '../../services/rune.service';

@Component({
  selector: 'app-runes-table',
  templateUrl: './runes-table.component.html',
  styleUrls: ['./runes-table.component.scss']
})
export class RunesTableComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  constructor(private runeService: RuneService) {
  }

  ngOnInit() {
    console.log(this.runeService.getRunes());
  }

}
