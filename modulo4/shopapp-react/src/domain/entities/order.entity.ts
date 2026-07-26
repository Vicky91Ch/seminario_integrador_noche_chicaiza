// src/domain/entities/order.entity.ts
import type { OrderStatus } from '../enums/order-status.enum'
import type { OrderItem } from './order-item.entity'

export interface Order {
  id: number
  username: string
  status: OrderStatus
  total: number
  num_items: number
  items: OrderItem[]
  created_at: string
  updated_at: string
}
