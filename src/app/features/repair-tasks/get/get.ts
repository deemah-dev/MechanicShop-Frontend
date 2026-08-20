import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-get',
  imports: [],
  template: `<p>get works!</p>`,
  styleUrl: './get.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Get {}
