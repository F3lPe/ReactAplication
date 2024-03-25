import React from "react"

class IndexClasses extends React.Component{
    constructor(props){
        super(props);
        this.state = {nome: "Felipe", counter: 0}   
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
    render(){
        const {nome, counter} = this.state
        
        return(
            <div style={{display:"flex", justifyContent: "space-evenly", width: "100%", height: "100%"}}>  
                <p onClick={() => this.handleClick()}>
                        {`${nome} ${counter}`}
                </p>
                
            </div>
        )
    }
}
    

export default IndexClasses
