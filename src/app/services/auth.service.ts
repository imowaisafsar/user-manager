import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Resolve, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });

    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.authState = user;
      } else {
        this.authState = null;
      }
    })
  }

  // all firebase getdata functions

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }

  get currentUserName(): string {
    return this.authState['email']
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
      return true
    } else {
      return false
    }
  }

  registerWithEmail(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
          this.authState = user
          resolve(user);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  loginWithEmail(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          this.authState = user
          resolve(user);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  singout(): void {
    try {
      this.afAuth.signOut();
      this.router.navigate(['/']);
    }
    catch (error) {
      console.log(error);
    }
  }

}
