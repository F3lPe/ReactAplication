export default function Obj_prototype() {
//métodod; função iterada a um obj

    let pessoa = {
    name: 'felipe',
    idade: (value) => {
        return value;
    },
    
        
    }
    pessoa.dadwa = (value) => value
         
    
    
    let idade = pessoa.idade.bind(pessoa);
    console.log(pessoa.idade(20))
    console.log(pessoa.dadwa(12))
    console.log(pessoa)
    console.log('idade', idade(18))
}

