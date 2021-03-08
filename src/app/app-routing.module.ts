import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';
import { PlayPageComponent } from './play-page/play-page.component';
import { MultiplayerComponent} from './multiplayer/multiplayer.component';
import { SinglePlayerComponent } from './single-player/single-player.component';

const routes: Routes = [
    { path: 'quiz', component: FormComponent },
    { path: 'about', component: AboutComponent },
    { path: 'play', component: PlayPageComponent, children: [
            { path: 'multiplayer', component: MultiplayerComponent },
            { path: 'singleplayer', component: SinglePlayerComponent}
        ]},
    { path: '', component: FormComponent },
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for 404 page not found
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
