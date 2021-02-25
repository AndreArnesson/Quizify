import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from './form/form.component';
import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
    {path: 'form', component: FormComponent},
    {path: 'about', component: AboutComponent},
    {path: '', component: FormComponent},
    {path: '**', component: PageNotFoundComponent},  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
