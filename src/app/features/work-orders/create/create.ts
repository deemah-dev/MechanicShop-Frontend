import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-create',
  imports: [],
  template: `<p>create works!</p>`,
  styleUrl: './create.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Create {}
