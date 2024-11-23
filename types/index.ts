export interface ComponentRequest {
    id: string
    name: string
    email: string
    component_name: string
    image_url: string
    created_at: string
  }
  
  export interface ApiResponse {
    message?: string
    error?: string
    data?: ComponentRequest[]
  }