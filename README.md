# 🛠️ Mechanic Shop Management System - Frontend & Architecture Overview

Welcome to the **Mechanic Shop Management System** web client! This repository contains the Angular frontend for a comprehensive shop management platform designed to streamline vehicle maintenance, repair task workflows, work order tracking, and automated customer billing.

> **Note:** The backend codebase is maintained in a private repository for security and proprietary business logic reasons. However, a detailed breakdown of its architecture, domain model, and technical capabilities is provided below to give full context to the system's end-to-end design.

---

## 🏗️ Part 1: Backend System Architecture & Capabilities

The backend is built as a robust, enterprise-grade **ASP.NET Core Web API** following **Clean Architecture** principles and the **CQRS (Command Query Responsibility Segments)** pattern to ensure high performance, maintainability, and strict separation of concerns.

### 📐 Software Architecture & Design Patterns

* **Clean Architecture:** Strict layer isolation dividing the system into `Domain`, `Application`, `Infrastructure`, and `Web API`.
* **CQRS Pattern:** Complete separation between Read operations (Queries) and Write operations (Commands) using **MediatR**.
* **Rich Domain Model (DDD):** Encapsulated business rules and domain invariants (e.g., Domain-Driven invoice creation and state validation) without anemic models.
* **Hybrid Caching Strategy:** High-performance caching using .NET 9 **HybridCache** with tag-based cache invalidation (`RemoveByTagAsync`) to guarantee instant invalidation on data changes while maintaining fast read responses.
* **Result Pattern & Error Handling:** Standardized response wrappers returning domain-level errors (using `Result<T>`) avoiding performance overhead from exceptions for flow control.
* **Automated CI Pipeline:** Fully integrated **GitHub Actions CI Pipeline** running automated `xUnit` unit and integration tests on every push/PR.

---

### 💼 Core Business Modules & Use Cases

#### 1. Work Orders Management (`WorkOrders`)
* **State Lifecycle:** Controls the complete lifecycle of a repair job (`Pending`, `InProgress`, `Completed`, `Cancelled`).
* **Resource Assignment:** Assigns vehicles, designated service spots (bays), and mechanics/labors to work orders.
* **Task & Parts Tracking:** Tracks individual repair tasks, including estimated labor costs and required replacement parts (quantities and costs).
* **Advanced Queries:** Supports dynamic filtering (by state, dates, mechanic, spot), full-text search across vehicle/customer/labor details, custom column sorting, and SQL-level optimized pagination.

#### 2. Billing & Invoicing (`Billing`)
* **Automated Invoice Generation:** Issues detailed invoices strictly for `Completed` work orders.
* **Cost Aggregation:** Automatically calculates task labor fees, total parts costs ($Cost \times Quantity$), subtotal, applicable taxes (`TaxRate`), and applied discounts.
* **Line Item Formatting:** Generates structured itemized breakdowns for repair tasks and associated parts.

#### 3. Domain Entities & Relationships
* **Customer & Vehicle:** Customer contact management linked to multiple owned vehicles.
* **Labor / Mechanic:** Mechanic assignment tracking for labor cost estimation and accountability.
* **Invoice & Line Items:** Aggregate domain model handling financial records and billing states.

---

### ⚡ Tech Stack & Tools

* **Framework:** .NET 9 / ASP.NET Core Web API
* **Data Access:** Entity Framework Core (SQL Server) with `AsNoTracking` and explicit projection (`.Select()`) for optimal performance.
* **Caching:** HybridCache (.NET 9) with Tag-based invalidation.
* **Testing:** xUnit, Moq / FluentAssertions
* **CI/CD:** GitHub Actions

---

## 🎨 Part 2: Frontend Application (Angular)

A responsive web application designed to manage automotive repair shop operations, streamlining work orders, invoicing, repair task tracking, and technician assignment.

---

## 🛠️ Tech Stack

* **Angular** (utilizing modern Control Flow `@if`, `@for`)
* **Tailwind CSS** for responsive UI styling
* **Reactive Forms & Signals** for state management and form validation
* **TypeScript** for type-safe frontend architecture

---

## 🚀 Key Features

* **Work Order Management:**
  * Create, update, and track the lifecycle of work orders.
  * Assign technicians and manage repair spots/schedules.
  * Dynamically assign and track repair tasks per work order.

* **Invoicing & Billing:**
  * One-click invoice generation upon work order completion.
  * Detailed financial breakdown and invoice tracking.

* **User Experience & Navigation:**
  * Role-tailored user interfaces for workshop workflows.
  * Dynamic status transitions and interactive task management.

---

## 📂 Project Structure

```text
src/app/
├── core/           # Singleton Services, Interceptors, Guards, & Models
├── features/       # Domain Modules (Work Orders, Invoices, Identity, etc.)
└── shared/         # Reusable Components, Directives, Pipes, & UI Assets
