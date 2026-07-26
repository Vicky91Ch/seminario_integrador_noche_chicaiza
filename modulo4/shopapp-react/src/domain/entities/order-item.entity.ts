// src/domain/entities/order-item.entity.ts
import type { ProductSummary } from './product-summary.entity'

export interface OrderItem {
  id: number
  product: ProductSummary
  quantity: number
  unit_price: number
  subtotal: number
}
