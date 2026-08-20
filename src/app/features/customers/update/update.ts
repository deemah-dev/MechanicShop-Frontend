import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { CustomerService } from "../../../core/services/customer.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'customer-update',
  imports: [FormsModule],
  templateUrl: './update.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateCustomer implements OnInit{

  ngOnInit(): void {
    this.customerId = this.route.snapshot.paramMap.get("id");

    this.customerService.Get(this.customerId).subscribe({
      next: (data) =>
        this.updateData = data,
      error: (err) =>
        console.error(err)
    });
  };

  private customerService = inject(CustomerService);
  private router = inject(Router);
  private route = inject(ActivatedRoute)

  updateData = {
    Name: '',
    Phone: '',
    Email: '',
    Address: '',
    Vehicles: []
  }

  customerId: any;
  isLoading = false;

  OnUpdate(){
    this.isLoading = true;
    this.customerService.Update(this.customerId, this.updateData).subscribe({
      next: () =>{
        this.isLoading = true;
        this.router.navigate(['customers/list'])
      },
      error: (err) => {
        this.isLoading = true;
        console.error(err);
      }
    })
  }
}
