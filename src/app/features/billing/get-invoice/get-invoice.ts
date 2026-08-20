import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-get-invoice',
  imports: [],
  template: `<p>get-invoice works!</p>`,
  styleUrl: './get-invoice.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetInvoice {}
