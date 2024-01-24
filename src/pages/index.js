import Link from "next/link"
import Image from "next/image"
import sunrise1 from "../images/sunrise1.png"
import nestle1 from "../images/nestle1.png"
import { useRouter } from "next/router"

function main(){
  const router=useRouter()
  function handleclick(){
  router.replace("/grocerieslist")
  }
  return(
    <>
    <div><h1 class="p-4 text-center">welcome to global grocery shop</h1></div>
<div class="justify-between"></div>
    <div class="inline-block mx-500  pl-10 space-x-4">
      <Link href="/Aboutus">About us</Link>
      <Link href="/customersupport">customer support</Link>
      
    
      
      <div class="flex pl-8 ">
      <Link href="/login" class="pl-60 ">login</Link>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</div></div><hr/>
<br></br><br></br>
<div class="flex pl-8">
  search: <input type="text" placeholder="  search..." class="border rounded-xl"></input>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
<div class="mx-60 justify-between space-y-4 ">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

  </div>
</div>
<br></br> <hr/>


<div class="inline-block space-x-4 mx-60">
  <Link href="/grocerieslist">groceries list</Link>
  <Link href="/deals">Deals</Link>
  <Link href="/mostpopular">Most Popular</Link>
  <Link href="/myorders">My orders</Link>
</div>

<br></br><hr/>
  
 
  <h1 class="flex justify-center  text-5xl ml-4">Easy, Fresh & Convenient
  </h1><br></br>
   <h1 class="flex justify-center font-bold text-5xl ml-4 ">Stock Up on 
    Daily Essentials</h1><br></br>
  <h1 class="flex justify-center font-bold text-5xl ml-4">Save Big on Your Favorite Brands</h1>
  
  <br></br><br></br>
  <div class="flex justify-center  text-5xl ">
      <button onClick={handleclick} class=" border border-solid text-white rounded-xl border-2 bg-red-500  px-4 py-2" >
        shop now
      </button>
    </div>
<Image src={sunrise1} width={500} height={500}></Image>
  
    
    

</>
  )
}export default main