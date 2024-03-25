import { Component } from "react";

class Class extends Component{
    constructor(props) {
        super(props)
        this.state = {
            nome: ""
        }
    }
    render(){
        const a = 'olá mundo'
        const A = 1
        const B = 3
        this.setState({nome: a})
        const random = Math.floor(Math.random() * (B-A+1) + B)
        const promessa = (idade, nome) => {
        
        const data = {idade, nome}
        let res = 'sucess'
        return new Promise((resolve, reject) => {
            if(res === "sucess" && typeof idade !== "string") resolve(random);
            else{
                reject('value invalid')
            }            
        })
        
    }
       
    
    promessa(random).then((res) => {
    /* console.log("number 1:" + res)  */
    return promessa(random)}).then(res => {
        /* console.log("number 2: "+res) */
        return promessa(random)
    } , res => {
        /* console.log(res)  */
    }).then(res => {
       /*  console.log("number 3:" + res) */
    }).catch( res => console.log(res))
    
        
        return(
            <p>{a}</p>
        )
    }
}
export default Class;