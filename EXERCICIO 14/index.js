function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML = 'Agora são'
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = "manha.png"
    } else if(hora >= 12 && hora < 18) {
        //boa tarde
        img.src = "tarde.png"
    }else {
        //boa noite
        img.src = "noite.png"
    }
}