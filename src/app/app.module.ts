import { loginReducer, registerReducer, userDetailsReducer } from './store/reducers/user.reducer';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserEffects } from './store/effects/user.effects';
import { LoaderComponent } from './components/loader/loader.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NotfoundComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot({
      loginData: loginReducer,
      registerData: registerReducer,
      user: userDetailsReducer
    }),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      logOnly: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
