import { AfterViewChecked, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalService } from './services/global.service';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from './services/auth.service';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {

  constructor(
    public globalService: GlobalService,
    private cdRef: ChangeDetectorRef,
    private primengConfig: PrimeNGConfig,
    public readonly authService: AuthService
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    console.log("User");
    console.log(this.authService.isUserEmailLoggedIn);
  }
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
}
