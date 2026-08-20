import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { CustomerService } from "../../../core/services/customer.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'customer-list',
  imports: [FormsModule],
  templateUrl: './list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerList implements OnInit{

  ngOnInit(): void {
    this.customerService.GetAll().subscribe({
      next: (data) =>
        this.customersList = data,
      error: (err) =>
        console.error(err)
    });
  };

  private customerService = inject(CustomerService);

  customersList: any[] = [];
}
