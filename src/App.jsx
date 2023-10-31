import { createClient } from '@supabase/supabase-js';
import './App.css'


const URL = import.meta.env.VITE_URL;
const KEY = import.meta.env.VITE_KEY;

const supabase = createClient(URL, KEY);

function App() {

  return (
    <div>
      
    </div>
  )
}

export default App
export { supabase }

