import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://fcrjnhrptzjtyxvafdqc.supabase.co"; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjcmpuaHJwdHpqdHl4dmFmZHFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzMzk0ODUsImV4cCI6MjA1NjkxNTQ4NX0.DNHFhL3zPIfTg2QbcooOeunrAXgdi_VusICHI1Co240"; // Replace with your Supabase anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
