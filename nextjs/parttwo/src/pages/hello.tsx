import Head from "next/head";
import Card,{Card2} from "../pages/components"
import Link from "next/link";

 function home(){
    return (
      <>
      <Head>
      
      <title>Next.js Learning</title>

        
    
      </Head>
      <div className="bg-blue-200 p-5">
        {/* <h1 style={{color: 'white',height : 30, fontSize: '18px', backgroundColor: 'green'}} >
          hello world!! I m learning nextJS
        </h1> */}

<Link className="mr-5 hover:text-red-500 " href= {  "http://localhost:3001/about" }>About us </Link>
<Link className="mr-5 hover:text-green-500" href={ "http://localhost:3001/contact"}> Contact</Link>
<Link className="mr-5 hover:text-pink-500" href={ "http://localhost:3001/info"}>Info</Link>
<h1 style={{color: 'white',height:27, fontSize: '18px', backgroundColor: 'blue'}} >
          hello world!! I m learning nextJS
        </h1>
<a href="https://chatgpt.com/c/67a77b0d-6d5c-800b-9606-b684362dcc4a">

        <button className="flex mx-auto mt-16 text-white bg-blue-500 border-3 py-2 px-3 focus:outline-none rounded text-lg">
            Visit My Website
        </button>
        </a>
      </div>
      </>
    )
  }
  export default home ;