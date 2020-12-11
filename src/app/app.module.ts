import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule, ReactiveFormsModule }          from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


////////////////////// D A T E   F R //////////////////////

////// date fr angular 5 and above
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

////// date fr below angular 5 whit {  provide: LOCALE_ID,useValue: 'fr'} in providers[]
import { LOCALE_ID } from '@angular/core';

////////////////////// C O M P O N E N T //////////////////////
import { AppComponent }                 from './app.component';
import { MonPremierComponent }          from './mon-premier/mon-premier.component';
import { AppareilComponent }            from './appareil/appareil.component';
import { PostListComponent }            from './post/post-list/post-list.component';
import { PostListItemComponent }        from './post/post-list-item/post-list-item.component';
import { AuthComponent }                from './auth/auth.component';
import { AppareilViewComponent }        from './appareil-view/appareil-view.component';
import { SingleAppareilComponent }      from './single-appareil/single-appareil.component';
import { FourOhFourComponent }          from './four-oh-four/four-oh-four.component';
import { AddAppareilComponent }         from './add-appareil/add-appareil.component';
import { UserListComponent }            from './user-list/user-list.component';


////////////////////// S E R V I C E S //////////////////////
import { AppareilService }      from './services/appareil/appareil.service';
import { AuthService }          from './services/auth/auth.service';
import { AuthGuardService }     from './services/guards/auth-guard.service';
import { UserService }          from './services/user/user.service';

const appRoutes: Routes = [

    {path: 'appareils', canActivate: [AuthGuardService], component: AppareilViewComponent},
    {path: 'appareils/:id', canActivate: [AuthGuardService], component: SingleAppareilComponent},
    {path: 'add', canActivate: [AuthGuardService], component: AddAppareilComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'users', component: UserListComponent},
    {path: '', component: AppareilViewComponent},
    {path: 'not-found', component: FourOhFourComponent},
    {path: '**', redirectTo: 'not-found'}
];


@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    PostListComponent,
    PostListItemComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    AddAppareilComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: LOCALE_ID, 
      useValue: 'fr'
    },
    AppareilService,
    AuthService,
    AuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
