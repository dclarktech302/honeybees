import { createClient as createSupabaseClient } from '@supabase/supabase-js'

// Used only for: invite creation (admin.inviteUserByEmail) and admin-only operations.
// Never import this in a Client Component.
export const createAdminClient = () =>
  createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } },
  )
