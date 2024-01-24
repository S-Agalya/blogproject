import Router, { useRouter } from "next/router"

function vegdetails(){
    const route=useRouter()
    function home(){
  route.replace("/")
    }
    return(
        <>
        <h1>VEGTABLES DETAILS</h1>
        <button onClick={home}> 
            Home
        </button>
        </>
    )
}export default vegdetails