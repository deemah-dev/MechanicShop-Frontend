import { Routes } from "@angular/router";
import { CreateCustomer } from "./create/create";
import { UpdateCustomer } from "./update/update";
import { CustomerInfo } from "./get/get";
import { CustomerList } from "./list/list";

export const customerRoutes: Routes = [
  { path: 'create', component: CreateCustomer},
  { path: 'update', component: UpdateCustomer},
  { path: 'get', component: CustomerInfo},
  { path: 'list', component: CustomerList},
  { path: '', redirectTo: 'list', pathMatch: 'full'}
]
