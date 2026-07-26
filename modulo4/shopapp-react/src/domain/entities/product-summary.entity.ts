// src/domain/entities/product-summary.entity.ts
export interface ProductSummary {
  id: number
  name: string
  price: number
  stock: number
  is_active: boolean
  image_url: string | null
}
