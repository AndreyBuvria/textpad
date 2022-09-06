import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Textpad } from '../shared/txtpad.interface';
import { TxtpadService } from '../shared/txtpad.service';

@Component({
  selector: 'app-txtbook-edit',
  templateUrl: './txtbook-edit.component.html',
  styleUrls: ['./txtbook-edit.component.scss']
})
export class TxtbookEditComponent implements OnInit, OnDestroy {

  public txtpadData!: Textpad

  private subscription$!: Subscription
  private pk!: number

  constructor(private txtpadApi: TxtpadService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.subscription$ = this.route.params.subscribe(params => {
      this.pk = params['id'];
    });

    this.subscription$ = this.txtpadApi.getParticularTxtpad(this.pk).subscribe((data: any) => {
      this.txtpadData = data;
    });

  }

  onSave() {
    const formData = {
      title: this.txtpadData.title,
      text: this.txtpadData.text,
    }
    this.subscription$ = this.txtpadApi.editTxtpad(formData, this.pk).subscribe(response => {
      console.log(response);
    },(errors) => { console.log(errors); })
  }

  onRemove() {
    this.subscription$ = this.txtpadApi.removeTxtpad(this.pk).subscribe(response => {
      console.log(response);
      this.router.navigate(['/textpads'])
    }, (errors) => { console.log(errors); })
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
