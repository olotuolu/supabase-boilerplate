import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://ikgbjhytedihspzbauid.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrZ2JqaHl0ZWRpaHNwemJhdWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MzEyODYsImV4cCI6MTk5MzEwNzI4Nn0.MCAVdo9IL7Kda8sJ8A40pwZ_PHvwD-7G9lA2fARuC80'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks(){
  let { data: Books, error } = await supabase
  .from('Books')
  .select('*');
  
  for(let book of Books){
    let booksTable = document.getElementById("book_table");
    
    booksTable.innerHTML += `<tr>
    <td>${book.Title}</td>
    <td>${book.Author}</td>
    <td>${book.ISBN}</td>
    <td>${book.Description}</td>
    </tr>`;
  }
}

getBooks();