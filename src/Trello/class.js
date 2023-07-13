import { Component } from "react";

class Class extends Component{
 
    render(){
        const a = 'olá mundo'
        const promessa = (idade, nome) => {
        
        const data = {idade, nome}
        let res = 'sucess'
        return new Promise((resolve, reject) => {
            if(res === "sucess") resolve(random);
            else{
                reject('error')
            }            
        })
        
    }
    const A = 1
    const B = 5
    const random = Math.floor(Math.random() * (B-A+1) + A)   
    
    promessa().then((res) => {
    console.log("number 1:" + res) 
    return promessa(random)}).then(res => {
        console.log("number 2:"+res)
        return promessa(random)
    }).then(res => {
        console.log("number 3:" + res)
    }).catch( res => console.log(res))
    
        
        return(
            <p>{a}</p>
        )
    }
}
export default Class;