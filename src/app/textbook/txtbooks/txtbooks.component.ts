import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-txtbooks',
  templateUrl: './txtbooks.component.html',
  styleUrls: ['./txtbooks.component.scss']
})
export class TxtbooksComponent implements OnInit {

  public txtpads = [
    {
      'title': 'text#1',
      'id': 0,
    },
    {
      'title': 'text#2',
      'id': 1,
    },
    {
      'title': 'text#3',
      'id': 2,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
