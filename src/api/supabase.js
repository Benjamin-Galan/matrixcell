import { createClient } from '@supabase/supabase-js';

// Configuración de Supabase
const supabaseUrl = 'https://eneccexmoldsivcpzbpj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsbnNxbG9ndmJ1bXVraXBlY3pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUxNDAxMTYsImV4cCI6MjA1MDcxNjExNn0.SpKnOB4EyfoK6k7gjIYB5Tctt7366m4YgnWn6TsrAaA';

// Inicializamos el cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

