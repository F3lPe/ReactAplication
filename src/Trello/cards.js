import { VscAdd } from 'react-icons/vsc'

import React, { useState } from 'react'
import Class from './class'

import Cards1 from './Card1'


//GERANDO CARTÕES
function Cards() {
    const [cards, setCards] = useState([])
    

    function addCard() {
        alert("Criou um Card")
        if (cards.length < 6) {

            const id = Math.floor(Math.random() * 10000)

            const card = {

                id: id

            }

            setCards([...cards, card])

        }

    }


    return (

        <section>

            <div id='card' >




                <h2>

                    Crie cartões
                   

                </h2>

                <button onClick={() => addCard()} id="most">
                    <VscAdd />
                </button>

               


            </div>

            <div id="E">

                {
                    cards.map(card =>
                    (
                        <Cards1
                        />
                    )
                    )
                }

            </div>
            <Class/>

        </section>

    )
}

export default Cards 
