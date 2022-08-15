import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TxtpadService } from '../txtpad.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  private subscription$!: Subscription;

  constructor(private txtpadApi: TxtpadService, private router: Router) { }

  ngOnInit(): void {
  }

  createTextpad(): void {
    this.subscription$ = this.txtpadApi.createTxtpad().subscribe(response => {
      this.router.navigate(['/edit/', response.id]);
    }, (errors) => { console.log(errors); })
  }

  editTextpad(): void {
    this.router.navigate(['/edit/1']);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
