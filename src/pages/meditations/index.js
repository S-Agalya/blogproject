import Link from "next/link"

function home(){
    
    return(
        <>
        <div className="bg-purple-400 p-10 " >EVENTS</div>
        <div>
            <h1>welcome to meditation</h1>
        </div>

    <div class="relative" >
        <div className="text-4xl inline-block h-[50vh] p-60 flex 
                          items-center ">
            <Link href="/Mindfulness meditation " >Mindfulness meditation</Link>
            </div>
            
        </div>
        
<div class="absolute px-5 top-0 right-0 h-full w-full  flex 
                          items-center justify-between">


<button>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>

</button>
<button >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

</button>
</div>

        
        </>
    )
}
export default home

