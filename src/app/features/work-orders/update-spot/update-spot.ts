import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-update-spot',
  imports: [],
  template: `<p>update-spot works!</p>`,
  styleUrl: './update-spot.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateSpot {}
