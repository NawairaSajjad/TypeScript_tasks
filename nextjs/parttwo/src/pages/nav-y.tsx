import Link from "next/link";

export default function ytNav(){
    return(
        <div>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-purple-300">
         <a className="flex titlefont font-medium items-center text-grey-900 mb-4 md:mb-0">
         <img
             src="https://cdn4.vectorstock.com/i/1000x1000/74/48/diamond-alphabetic-letter-n-vector-3167448.jpg" 
            alt="lofo"
            className="rounded-full h-10 w-10" />
            <span className="ml3-3 text-xl"> jewellery store</span>
         </a>
         <nav className=" md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-grey-400 flex flex-wrap items-center text-base justify-center">
        <Link className="mr-5 hover:text-red-500 " href= {  "http://localhost:3000/about" }>About us </Link>
<Link className="mr-5 hover:text-green-500" href={ "http://localhost:300/contact"}> Contact</Link>
<Link className="mr-5 hover:text-pink-500" href={ "http://localhost:3000/info"}>Information</Link>   
<Link className="mr-5 hover:text-pink-500" href={ "http://localhost:3000/navbar"}>My Navbar</Link> 
        </nav>
        <div className="flex space-x-4 mt-4 md:mt-0">
            <button className="inline-flex items-center bg-yellow-300 text-white border-0 py-1 px-3 focus: outline-none rounded hover:bg-blue-700 text-base">
                Login
            </button>
            <button className="inline-flex items-center bg-orange-400 text-white border-0 py-1 px-3 focus: outline-none rounded hover:bg-blue-700 text-base">
                Sign Up
            </button>
        </div>
          </div>
        </header>
       
        </div>
    )
}