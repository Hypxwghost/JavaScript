let amigo = {nome: 'José',
Sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}
}
amigo.engordar(2)
console.log(typeof amigo)