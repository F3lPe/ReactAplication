import React, { useState } from 'react'
import { VscAdd } from 'react-icons/vsc'

function Cards2() {

    const [enable, setEnable] = useState(false)
    const [s,setS] = useState(true)
    const [s1,setS1] = useState(false)
    const [s2,setS2] = useState(true)
    const [s3,setS3] = useState(false)
    function sumir3(){
        setS(false)
        setS1(true)
    }
    function sumir4(){
        setS2(false)
        setS3(true)
    }

    return (




        <div className='newCard2'>
           

           {s &&
           <>
           
           <button onClick={sumir3}  className="most1">
                    <VscAdd/>
                  
                </button>
           
           </>
           
           
           }

           {s1 &&
            <>
            <input
                    type="text" placeholder="NOME DO CARD" className='input' disabled={enable} >
                </input>
            
            </>
           }

           {s2 &&

           <>
                  <button onClick={sumir4}  className="most1">
                    <VscAdd/>
                  
                </button>
           </>

           }

           {s3 &&

           <>
            <input type="text" placeholder="DESCRIÇÃO"

                    className='input' disabled={enable}>

                </input>
           </>


           }
                


               


                <button type='submit' id="buttonMost"
                    onClick={setEnable} disabled={enable}  >
                    Criar
                </button>
            

        </div>
    )
}


export default Cards2