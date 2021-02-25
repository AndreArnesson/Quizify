import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from './form/form.component';
import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component';
import {AboutComponent} from './about/about.component';
import {PlayPageComponent} from './play-page/play-page.component';

const routes: Routes = [
    {path: 'quiz', component: PlayPageComponent},
    {path: 'about', component: AboutComponent},
    {path: '', component: PlayPageComponent},
    {path: '**', component: PageNotFoundComponent},  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
