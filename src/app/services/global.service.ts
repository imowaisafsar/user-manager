import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private readonly titleService: Title) { }

  fbCollectionName: string = 'connections';

  title?: string = '';
  slogan?: string = ' | BSD User Manager';

  setTitle(title: string): void {
    this.title = title;
    this.titleService.setTitle(this.title + this.slogan);
  }

}
