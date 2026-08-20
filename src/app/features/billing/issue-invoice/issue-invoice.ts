import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-issue-invoice',
  imports: [],
  template: `<p>issue-invoice works!</p>`,
  styleUrl: './issue-invoice.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueInvoice {}
