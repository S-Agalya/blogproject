import Image from 'next/image';
import Link from "next/link"

function home(){
  return(
    <>
    <div className="bg-purple-300 p-10">
    search: <input type="text" placeholder="search...." class="border border-500"></input>
    <div className="inline-block mr-400 space-x-4">
    <Link href="/meditations">meditations</Link>
    <Link href="/excercises">excercises</Link>
    <Link href="/aboutus">Aboutus</Link>
    

    </div>
    </div>
    

<br></br>
<div className="bg-orange-200 p-10 w-1/2 h-52">
<h1 className="text-6xl font-bold ease-in-out">Inhale the future, exhale the past</h1>
<imagecomponent />
</div>
<div className="bg-orange-200 p-10 w-1/2 h-52">
  


</div>
<div className="bg-orange-200 p-10 w-1/2 h-40">
  <h1></h1>
</div>
    </>
  )
}export default home

