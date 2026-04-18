const  Card = () => {
let message:string  = 'building component';
return(
    <div>
        <h1>
            {message}
        </h1>
    </div>
)
}

export const Card2 = () =>{
    let message: string = 'exploring nextjs'
    return(
        <div>
            <h1>
                {message}
            </h1>
        </div>
    )
}

export default Card;
