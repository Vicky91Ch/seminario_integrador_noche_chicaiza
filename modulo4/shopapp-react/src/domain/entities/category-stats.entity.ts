export interface CategoryStatDetail {
  id: number
  name: string
  num_products: number
  is_active: boolean
}

export interface CategoryStats {
  total: number
  active: number
  inactive: number
  detail: CategoryStatDetail[]
}
