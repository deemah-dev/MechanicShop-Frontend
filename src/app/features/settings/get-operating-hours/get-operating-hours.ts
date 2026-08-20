import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-get-operating-hours',
  imports: [],
  template: `<p>get-operating-hours works!</p>`,
  styleUrl: './get-operating-hours.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetOperatingHours {}
