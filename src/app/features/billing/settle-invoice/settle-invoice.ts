import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-settle-invoice',
  imports: [],
  template: `<p>settle-invoice works!</p>`,
  styleUrl: './settle-invoice.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettleInvoice {}
