import Link from "next/link"
import Image from "next/image"
import cucumber from "../images/cucumber.png"
import rad from "../images/rad.png"
import  { useRouter } from "next/router"
function veg(){
    const router=useRouter()
    function knowmore(){
        router.replace("/Details")
    }
    return(
        <>
        <h1 class="text-center text-5xl">VEGETABLES</h1><br></br>

        <div class="grid-col-3 grid grid-rows-3 space-y-4  mx-16 p-2 justify-between ">

        <div class="  my-4 bg-left-top  border border-solid border-black w-26 h-26 ">
        <Image src={cucumber} width={300}></Image>
            <Link href="/cucumber">cucumber</Link><br></br>
            <button onClick={knowmore} class="border border-black p-2">
                Know more
            </button>
        </div>
        

        <div class=" my-4 bg-left  border border-solid border-black w-26 h-26 ">
        <Image src={rad} width={300}></Image>
            <Link href="/raddish">raddish</Link><br></br>
            <button onClick={knowmore} class="border border-black p-2">
                Know more
            </button>
        </div>

        <div class="  my-4 bg-right-top  border border-solid border-black w-26 h-26 ">
        <Image src={cucumber} width={300}></Image>
            <Link href="/cucumber">cucumber</Link><br></br>
            <button onClick={knowmore} class="border border-black p-2">
                Know more
            </button>

        </div>
        </div>
        
        </>
    )
}export default veg