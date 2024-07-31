import React from "react"

class IndexClasses extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nome: "Felipe",
            counter: 0,
            listagem: []
        }
        this.valores = {december: 1599.34 -  (245.95 + 232.67), nextYear: null}    
    }

    handleClick(){
        const {nome, counter} = this.state
        let {december, nextYear} = this.valores
        this.setState({nome: "felipin", counter: counter + 1});
        console.log(december);
        nextYear = (december + 1100) - (150 + 300 + 239.88)
        console.log(nextYear)
        console.log(nextYear * 3)
        console.log(1100 - (150 + 300 + 239.88))
        console.log(this.state)
    }

    getListagem(){
        fetch('http://localhost:3001/users', {
            method: 'GET',
        })
            .then(response => {

                if(response.ok) {
                    return response.json()
                } else{
                    const data = response.text()

                    throw new Error(data.then(e => {
                        return e
                    }))
                }

            }).then(data =>{
                this.setState({listagem: data})
            }).catch(erro => {
                console.log(erro)
            })
    }
    render(){
        const {nome, counter,listagem} = this.state
        return(
            <div style={{display:"flex", justifyContent: "space-evenly", width: "100%", height: "100%"}}>  
                <p onClick={() => this.getListagem()}>
                        {`${nome} ${counter}`}
                </p>

                <div>
                    {listagem?.map(e => (
                        <p key={e.id}>
                            {e.name}
                        </p>
                        ))
                    }

                </div>
                
            </div>
        )
    }
}
    

export default IndexClasses
