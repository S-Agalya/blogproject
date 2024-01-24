import Link from "next/link"

function list(){
    return(
        <>
        <br></br>
        <div class="text-center">LIST OF GROCERIES </div>
        <br></br>
        <hr/>
        <br></br>
        <div class="inline-block mx-500  pl-440 space-x-4 mx-60 space-y-4">
        <Link href="/vegetables">vegetables</Link>
        <Link href="/fruits">fruits</Link>
        <Link href="/beverages">beverages</Link>
        <Link href="/meat">meat</Link>
        </div>
        <br></br>  <br></br>
        <hr/>
        </>
    )
}

export default list