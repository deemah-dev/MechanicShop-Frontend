import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { CustomerService } from "../../../core/services/customer.service";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'customer-info',
  imports: [FormsModule],
  templateUrl: './get.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerInfo implements OnInit{

  ngOnInit(): void {
    this.customerId = this.rout.snapshot.paramMap.get("id");

    this.customerService.Get(this.customerId).subscribe({
      next: (data) =>
        this.customerData = data,
      error: (err) =>
        console.error(err)
    });
  };

  private customerService = inject(CustomerService);
  private rout = inject(ActivatedRoute);

  customerId: any;
  customerData: any;
}
