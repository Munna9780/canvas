import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Product = {
  id: string
  title: string
  description: string
  price: number
  image_url: string
  amazon_link: string
  sizes: string[]
  created_at: string
  updated_at: string
}

export type User = {
  id: string
  email: string
  role: 'admin' | 'user'
  created_at: string
} 