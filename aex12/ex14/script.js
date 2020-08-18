function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        //Bom Dia!!
        img.src = "manha.png"
        document.body.style.background = '#637b9c'
    } else if (hora >= 12 && hora <= 18) {
        // Boa Tarde
        img.src = "tarde.png"
        document.body.style.background = '#ffb366'
    } else {
        // Boa Noite
        img.src = 'noite1.png'
        document.body.style.background = '#1a0033'
    }
}