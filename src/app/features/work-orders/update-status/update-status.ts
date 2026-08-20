import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-update-status',
  imports: [],
  template: `<p>update-status works!</p>`,
  styleUrl: './update-status.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateStatus {}
