import { Input } from "postcss";

export default function SignUp(){
    return(
        <div>
            <h1>
                use button
            </h1>
            <div style={{
                 display: 'flex',
              justifyContent:'center',
            alignItems:'center',
            
            paddingTop: 60,
                // justifyItems: 'center'
            }}>
                <div style={{ display:'flex',
                justifyItems: 'center',
                justifyContent: 'center',
               
                width: 340,
                height: 240    ,
                  border: '2px solid',       // sets border width and style
    borderColor: '#ff6600',    // sets the border color
    borderRadius: '12px',      // makes corners rounded
    backgroundColor: '#f9f9f9',
    padding: '20px',
                

                        }}>
                    <h2>
                        Email
                    </h2>
                    
               
               


            </div>
            </div>
        </div>
    );
}