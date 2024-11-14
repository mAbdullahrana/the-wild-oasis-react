import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zeufxerfmxlfliwsfjwc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpldWZ4ZXJmbXhsZmxpd3NmandjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3MjE0NjYsImV4cCI6MjA0NjI5NzQ2Nn0.noXv2OWh5D1qMXWJD5xSF4U_jAXbZyG6rluslX_tPck";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase