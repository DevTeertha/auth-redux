import { LoaderService } from './store/services/loader.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'auth-redux';
  showLoader$ = this.loaderService.loadingAction$;
  constructor(private loaderService: LoaderService){}
}
