import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-private-nav',
  templateUrl: './private-nav.component.html',
  styleUrls: ['./private-nav.component.scss']
})
export class PrivateNavComponent implements OnInit {

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
  }

  signOut(): void {
    this.authService.singout();
  }

}
