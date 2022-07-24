import { createClient } from '@supabase/supabase-js'

const PROJECT_URL = "https://fxcgjophqqtzfvusgxbl.supabase.co"
const PUBLIC_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4Y2dqb3BocXF0emZ2dXNneGJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTcwODY5MjgsImV4cCI6MTk3MjY2MjkyOH0.4w3IVObvTseOwJElUWnC9EO9sCVrchq4V8i-BUtK4Aw"


const supabase = createClient(PROJECT_URL, PUBLIC_ANON_KEY)

export{
    supabase
}