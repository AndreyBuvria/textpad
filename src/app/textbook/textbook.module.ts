import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { TxtbooksComponent } from './txtbooks/txtbooks.component';
import { TxtbookEditComponent } from './txtbook-edit/txtbook-edit.component';
import { FormsModule }   from '@angular/forms';

const routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/textpads',
        pathMatch: 'full'
      },
      {
        path: 'textpads',
        component: TxtbooksComponent
      },
      {
        path: 'edit/:id',
        component: TxtbookEditComponent
      },
      { path: '**', redirectTo: '/textpads' }
    ]
  }
];

@NgModule({
  declarations: [
    MainLayoutComponent,
    TxtbooksComponent,
    TxtbookEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class TextbookModule { }
