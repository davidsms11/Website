var height = 0
var width = 0
lifes = 1
var time = 10
var createMosquitoTime = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    createMosquitoTime = 1500
}else if (nivel === 'hard'){
    createMosquitoTime = 1000
} else if (nivel === 'chuckNorris') {
    createMosquitoTime = 750
}

function takeSizeField() {
    height = window.innerHeight
    width = window.innerWidth
    console.log(width, height)
}

takeSizeField()

var stopWatch = setInterval( function () {
    time -=1

    if (time < 0) {
        clearInterval(stopWatch)
        clearInterval(createMosquito)
        window.location.href = 'winner.html'
    } else{
           document.getElementById('stopWatch').innerHTML = time
    }
}, 1000)

function randonPosition() {

    //to remove the last mosquito
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (lifes > 3) {
            window.location.href = 'end_game.html'
        } else{
               document.getElementById('life' + lifes).src="'/assets/img/coracao_vazio.png'"
        lifes++
        }
     
    }
    

    var positionX = Math.floor(Math.random() * width) - 90
    var positionY = Math.floor(Math.random() * height) - 90

    /*-----------The same---------
    if (positionX < 0 ) {
        positionX = 0
    } else {
        positionX = positionX
    }
    
    if (positionY < 0 ) {
        positionY = 0
    } else {
        positionY = positionY
    } ------------ The same---------- */

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY



    console.log(positionX, positionY)

    // to creat a element Html
    var mosquito = document.createElement('img')
    mosquito.src = './assets/img/mosca.png'
    mosquito.className = randonSize() + ' ' + randonSide()
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }



    document.body.appendChild(mosquito)

    console.log(randonSide())
}





function randonSize() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:

            return 'mosquito1';

        case 1:

            return 'mosquito2';

        case 2:

            return 'mosquito3';

    }
}

function randonSide() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:

            return 'sideA';

        case 1:

            return 'sideB';



    }
}

