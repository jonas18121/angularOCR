import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


////////////////////// D A T E   F R //////////////////////

////// date fr angular 5 and above
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

////// date fr below angular 5 whit {  provide: LOCALE_ID,useValue: 'fr'} in providers[]
import { LOCALE_ID } from '@angular/core';

////////////////////// C O M P O N E N T //////////////////////
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostListItemComponent } from './post/post-list-item/post-list-item.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';


////////////////////// S E R V I C E S //////////////////////
import { AppareilService } from './services/appareil/appareil.service';

const appRoutes: Routes = [

    {path: 'appareils', component: AppareilViewComponent},
    {path: 'auth', component: AuthComponent},
    {path: '', component: AppareilViewComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    PostListComponent,
    PostListItemComponent,
    AuthComponent,
    AppareilViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: LOCALE_ID, 
      useValue: 'fr'
    },
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
