import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'public',
  template: `<div class="text-centered">
              <router-outlet></router-outlet>
            </div>
  `
})
export class Public {
  constructor() { }
  ngOnInit() { }
}
