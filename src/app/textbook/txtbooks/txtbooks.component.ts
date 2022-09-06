import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Textpad } from '../shared/txtpad.interface';
import { TxtpadService } from '../shared/txtpad.service';

@Component({
  selector: 'app-txtbooks',
  templateUrl: './txtbooks.component.html',
  styleUrls: ['./txtbooks.component.scss']
})
export class TxtbooksComponent implements OnInit, OnDestroy {

  private subscription$!: Subscription
  public txtpads!: Textpad[]

  constructor(private txtpadApi: TxtpadService) { }

  ngOnInit(): void {
    this.initObjects();
  }

  initObjects() {
    this.subscription$ = this.txtpadApi.getTxtpad().subscribe((data: any) => {
      this.txtpads = data
    });
  }

  onCreate() {
    this.subscription$ = this.txtpadApi.createTxtpad().subscribe(response => {
      console.log(response);
    }, (errors) => { console.log(errors); })

    this.initObjects();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
