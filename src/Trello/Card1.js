import React, { useState } from 'react'
import { BsArrowDownCircle } from 'react-icons/bs'
import { VscAdd } from 'react-icons/vsc' 
import Cards2 from './cards2'


function Cards1(props) {


    const [enable, setEnable] = useState(false)

    const [disable, setDisable] = useState(true)
    const [disable1, setDisable1] = useState(false)
    const [disable2, setDisable2] = useState(true)
    const [disable3, setDisable3] = useState(false)


    const [cards, setCards] = useState([])


    function sumir() {
        setDisable(false)
        setDisable1(true)


    }
    function sumir1() {
        setDisable2(false)
        setDisable3(true)
    }

  


    function addCard() {

        if (cards.length < 5) {

            const id = Math.floor(Math.random() * 10000)

            const card = {

                id: id

            }

            setCards([...cards, card])

        }

    }

    return (
        <div className='newCard'>


            {disable &&
                <>

                    <button onClick={sumir} className="most1">
                        <VscAdd />
                    </button>

                </>

            }
            {disable1 &&

                <>

                    <input
                        type="text" placeholder = "NOME DO CARD"  className='input' disabled={enable} >
                    </input>





                </>

            }

            {disable2 &&
                <button onClick={sumir1}  className="most1">
                    <VscAdd /> 
                  
                </button>
            }

            {disable3 &&
                <>



                    <input type="text"

                        className='input' placeholder= "DESCRIÇÃO" disabled={enable}>

                    </input>

                </>
            }







           
            <div id="AD">
                <button type='submit' id="buttonMost"
                    onClick={setEnable} disabled={enable} >
                    <span>Criar</span>
                </button>

                <button type="button" id="downArrow"
                    onClick={() => addCard()} >

                    
                       <BsArrowDownCircle  />
                    

                </button>
            </div>
                


            <div id="B">
                {
                    cards.map(card =>
                    (
                        <Cards2 />

                    ))
                }

            </div>




        </div>

    )
}

export default Cards1

