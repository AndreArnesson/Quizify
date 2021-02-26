import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Project component imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { PlayPageComponent } from './play-page/play-page.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';
import { CheckboxGroupComponent } from './form/checkbox-group.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        FormComponent,
        HeaderComponent,
        PlayPageComponent,
        FooterComponent,
        PageNotFoundComponent,
        AboutComponent,
        CheckboxGroupComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
