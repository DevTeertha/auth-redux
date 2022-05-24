import { Store } from '@ngrx/store';
import { LoaderService } from './../services/loader.service';
import {
  loginFailed,
  registerSuccess,
  registerFailed,
  registerStart,
  loginStart,
  loginSuccess,
  getUserDetailStart,
  getUserDetailSuccess,
  getUserDetailFailed,
  changeUserStart,
  changeUserSuccess,
  changeUserFailed,
} from './../actions/user.action';
import { map, catchError } from 'rxjs/operators';
import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, exhaustMap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        this.loaderService.showLoader();
        return this.userService.login(action.username, action.password).pipe(
          map((user) => {
            if (user?.status) {
              localStorage.setItem('token', user?.data?.token);
              this.router.navigate(['/']);
            }
            alert(user?.message);
            this.loaderService.hideLoader();
            return loginSuccess({ user });
          }),
          catchError((err) => of(loginFailed(err)))
        );
      })
    );
  });

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerStart),
      exhaustMap((action) => {
        this.loaderService.showLoader();
        return this.userService
          .register(
            action.fname,
            action.lname,
            action.username,
            action.password
          )
          .pipe(
            map((user) => {
              alert(user?.message);
              this.loaderService.hideLoader();
              return registerSuccess({ user });
            }),
            catchError((err) => of(registerFailed(err)))
          );
      })
    );
  });

  user$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUserDetailStart),
      exhaustMap((action) => {
        this.loaderService.showLoader();
        return this.userService.getUserDetails(action.token).pipe(
          map((user) => {
            this.loaderService.hideLoader();
            return getUserDetailSuccess({ user });
          }),
          catchError((err) => of(getUserDetailFailed(err)))
        );
      })
    );
  });

  changeUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(changeUserStart),
      exhaustMap((action) => {
        this.loaderService.showLoader();
        return this.userService
          .changeUser(
            action.fname,
            action.lname,
            action.username
          )
          .pipe(
            map((user) => {
              alert(user?.message);
              this.loaderService.hideLoader();
              return changeUserSuccess({ user });
            }),
            catchError((err) => of(changeUserFailed(err)))
          );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private loaderService: LoaderService,
    private router: Router,
    private store: Store
  ) {}
}
