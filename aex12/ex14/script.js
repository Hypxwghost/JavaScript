function carregar() {
    var img = window.document.getElementById('imagem')
    function hours () {
        var hours = document.getElementById ('msg')
        var date1 = new Date ()
        var gthours = date1.getHours()
        var gtminutes = date1.getMinutes()
        var gtseconds = date1.getSeconds()
    
            if (gthours < 10) {
                gthours = `0${gthours}`
            }
            if (gtminutes < 10) {
                gtminutes = `0${gtminutes}`
            }
    
            if (gtseconds < 10) {
                gtseconds =`0${gtseconds}`
            }
                    
        hours.textContent = `Agora são ${gthours} horas,${gtminutes} minutos e ${gtseconds} segundos`
    }
        var tictac = setInterval (hours, 1000)
    hours()
    var data = new Date()
    var hora = data.getHours()
    var mensagem = document.getElementById('msg2')
    if (hora >= 0 && hora < 12) {
        //Bom Dia!!
        img.src = "manha.png"
        document.body.style.background = '#637b9c'
        mensagem.textContent = 'Bom Dia!'
    } else if (hora >= 12 && hora <= 18) {
        // Boa Tarde
        img.src = "tarde.png"
        document.body.style.background = '#ffb366'
        document.body.style.color = '#ffb366'
        mensagem.textContent = 'Boa Tarde!'
    } else {
        // Boa Noite
        img.src = 'noite1.png'
        document.body.style.background = '#1a0033'
        document.body.style.color = '#1a0070'
        mensagem.textContent = 'Boa Noite!'
    }
}