export default function chatgpt(){
    return(
        <>
        <div className="text-base md:text-lg lg:text-xl">Responsive Text</div>
        <button className="bg-blue-500 text-white px-5 py-2 rounded">Click Me</button>
        <div className="flex justify-between items-center p-4">
  <span>Left</span>
  <span>Right</span>
</div>
<div className="m-4 p-6">Spacing Example</div>

<p className="text-gray-700 bg-yellow-300 opacity-75">Styled Text</p>
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Dark Mode Example
</div>
<button className="bg-blue-500 hover:bg-blue-700 focus:ring-2 active:bg-blue-900 text-white rounded py-3 px-4 m-4">
  Interactive Button
</button>
        
        
        </>

    )
}