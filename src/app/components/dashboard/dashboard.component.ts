import { changeUserStart } from './../../store/actions/user.action';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { getUserDetailStart } from 'src/app/store/actions/user.action';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  detailsForm!: FormGroup;
  id!: string;
  fname!: string;
  lname!: string;
  username!: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<{ user: any }>
  ) {
    store.pipe(select('user')).subscribe((value) => {
      this.id = value.user.data._id;
      this.fname = value.user.data.fname;
      this.lname = value.user.data.lname;
      this.username = value.user.data.username;
    });
  }

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    } else {
      const token: any = localStorage.getItem('token');
      this.store.dispatch(getUserDetailStart({ token }));
      this.detailsForm = this.fb.group({
        fname: new FormControl('', [Validators.required]),
        lname: new FormControl('', [Validators.required]),
      });
    }
  }
  saveDetails() {
    const { fname, lname } = this.detailsForm.value;
    const newObject = {
      username: this.username,
      fname: fname || this.fname,
      lname: lname || this.lname,
    };
    this.store.dispatch(changeUserStart(newObject));
    const token: any = localStorage.getItem('token');
    this.store.dispatch(getUserDetailStart({ token }));
  }
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
