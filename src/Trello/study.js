
function Trainning(){

 /* window.confirm("Bem-vindo kkkkkkkkk");
 const num1 = Number(prompt("digite um número"));
 const num2 = Number(prompt("digite mais um valor"));
 const result = num1 % num2;

 alert(result); */

/* if(a && b){
     alert('operador lógico AND "&&" ocorre se ambos forem true')

    }else if(a || b){
        alert(`'operador lógico OR(||) 'um' deve ser true'`)  
    }
 */
/* const op = false ?? "GABRIEL"
const op1 = (null || undefined )?? "GABRI"



console.log(op,op1); */

/* let c = b ?? 'jejadjad'
let d = undefined && 'é =20'

console.log(c) */

/* const num1 = Number(prompt("digite um valor"))
const num2 = Number(prompt("digite mais um valor"))
const c = (num1 + num2)/2
let  b = c 

alert(`A média é: ${c}`) */



//utilizando ternário ---------------------------

/* let numberOne = 1; 
let result = numberOne === 1 ? ("is " + numberOne) : "is not one"
alert(result); */

 // ----------------------------------------------



// swicth case ----------------------------

/* let number = [15, 17];

switch (number) {
    case 15 :
    case 17 :
        alert('15, 17 ')
        break;

        default:
            alert('erro idade inválida')
} */

// -------------------------------------

//while --------------------

/* let numb = Number;
let frase = prompt('Digite uma palavra');
let fraseResult;

while (numb < 6) {
    console.log(numb,fraseResult)
    numb++;
    fraseResult = frase;
    
} */

/* let max = 5;
let min = 1
let random = Math.floor(Math.random() * (max - min + 1)) + min
let tentativas = 0;
let number;

do {
    tentativas++;
    let input = Number(prompt('Digite um número'));
    number = input;
    if (number === random) {
       alert(`total de tentativas ${tentativas}`) 
    }

} while (random) */




/* for (let a = 1 ; a < 4 ; a++){
    console.log(`'A' é igual a 3 :` , a);
    
    for (let b = 0 ; b < 5; b++){   
    
    }

    if(a >= 4){
        break;
   }

} */
    
/* const idade = Number(prompt("Digite sua idade"));

if(idade < 18){
    alert("Você é menor de idade");
} else if(idade >= 18){
    alert("Você é maior de idade");
} */


const num = [1,2,3,4,5,2,5,4]

const pessoa = [
    {
        id:1 , nome: "felipe", idade: 15
    },

    {
        id: 2 , nome: "joão", idade: 15
    },

    {
        id:3, nome: "andré", idade: 20
    },
 ]
//usar quando for preciso traduzir ou mapear todos os elementos do array
//para outro conjunto de valores.
 const somaTotal  = num.map(element => element * 5)
console.log("Soma" , somaTotal)

//reduce
//usar quando for preciso encontrar um valor cumulativo 
// ou concatanedo 

const total = pessoa.reduce((e,f) =>  e + f.idade, 0)
console.log("reducer-soma total dos número : " ,total)
 //---------------------------------------------------------------------



}



export default Trainning;