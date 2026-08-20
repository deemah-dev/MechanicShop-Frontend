import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-get-all',
  imports: [],
  template: `<p>get-all works!</p>`,
  styleUrl: './get-all.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetAll {}
