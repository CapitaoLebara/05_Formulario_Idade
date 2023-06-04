//
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO]")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'image/84c71283d4cd056462c5b17a6c826a80-Recuperado.png')
                    //criança
            } else if (idade < 21) {
                img.setAttribute("src", "image/4e0249eb45bb71aab461e775d1c3f03e-Recuperado.png")



            } else if (idade < 50) {
                img.setAttribute("src", "image/1644d2d8eb954d5fa79d81e499ca0626.png")

                //adulto

            } else {
                img.setAttribute("src", "image/7e9d3bbad0758275b0aba79c85e5d19b.png")

                //velho
            }

        } else if (fsex[1].checked) {
            genero = "Mulher"

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'image/a.png')

                //criança
            } else if (idade < 21) {
                img.setAttribute('src', 'image/sorria.png')

                //jovem

            } else if (idade < 50) {
                img.setAttribute("src", "image/sakura.png")

                //adulto

            } else {
                img.setAttribute("src", "image/any.png")

                //velho
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `você é ${genero} de ${idade} anos`
        res.appendChild(img)
        img.style.width = "500px"
    }

}


 


 


function Monstros_sa(){
    link.setAttribute("src","image/Memes/Monstros Sa/Mike Wazowski 100 PUTO_360P.mp4")
    
}
function Ratatoulle(){
    link.setAttribute("src","image/Memes/Ratatoulle/y2meta.com - MEME RATATOUILLE (Original) _ Fabricio Memes(360p).mp4")
}
function Superman(){
    link.setAttribute("src","image/Memes/Sumer man/sai do mei.mp4")
    
}
function Velozes_Furiosos(){
    link.setAttribute("src","image/Memes/velozes e furiosos/y2meta.com - Tomas Turbando.mp4")
    
}
function Venon(){
    link.setAttribute("src","image/Memes/Venon/y2meta.com-VENOM VERSÃO CHAVES ��-(1080p) (online-video-cutter.com).mp4")
    
}


