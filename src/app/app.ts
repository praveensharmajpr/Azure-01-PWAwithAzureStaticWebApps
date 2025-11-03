import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <p>{{ description() }}</p>
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('Praveen Kumar Sharma');
  protected readonly description = signal('My Angular 14 App');
}
