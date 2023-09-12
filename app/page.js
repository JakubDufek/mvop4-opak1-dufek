import { data } from 'browserslist';
import Image from 'next/image'



export default function Home() {

 async function fetchMoviesJSON() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;

} 
fetchMoviesJSON().then(data => {
  data; 
});

  return (
    <div>  <p>home</p>
    <p></p>
     </div>

  )
}
