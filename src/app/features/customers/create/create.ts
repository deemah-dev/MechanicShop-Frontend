import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CustomerService } from '../../../core/services/customer.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'customer-create',
  imports: [FormsModule],
  templateUrl: './create.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCustomer {
  private customerService = inject(CustomerService);
  private router = inject(Router);

  createData = {
    Name: '',
    Phone: '',
    Email: '',
    Address: '',
    Vehicles: [] as any[],
  };

  currentVehicle = {
    Make: '',
    Model: '',
    VIN: '',
  };

  addVehicleToList() {
    this.createData.Vehicles.push({ ...this.currentVehicle });

    ((this.currentVehicle.Make = ''),
      (this.currentVehicle.Model = ''),
      (this.currentVehicle.VIN = ''));
  }

  removeVehicleFromList(index: number) {
    this.createData.Vehicles.splice(index, 1);
  }

  isLoading = false;

  OnCreate() {
    this.isLoading = true;
    this.customerService.Create(this.createData).subscribe({
      next: () => {
        this.isLoading = true;
        this.router.navigate(['customers/list']);
      },
      error: (err) => {
        this.isLoading = true;
        console.error(err);
      },
    });
  }
}
