import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ginlnwtbdeqhxwrgdxyc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdpbmxud3RiZGVxaHh3cmdkeHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0NTAwOTEsImV4cCI6MjAyMjAyNjA5MX0.ab9dCXEBAatbznpvmgRy519R1abOTwbIqSWqtsf5_2M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
