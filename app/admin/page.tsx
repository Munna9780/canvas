import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import ProductForm from '@/components/admin/ProductForm'
import ProductList from '@/components/admin/ProductList'

export default async function AdminDashboard() {
  const supabase = createServerComponentClient({ cookies })
  
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    redirect('/login')
  }

  const { data: user } = await supabase
    .from('users')
    .select('role')
    .eq('id', session.user.id)
    .single()

  if (user?.role !== 'admin') {
    redirect('/')
  }

  return (
    <div className="pt-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
            <ProductForm />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Manage Products</h2>
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  )
} 