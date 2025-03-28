let des = document.getElementById('des').getContext('2d')

let carro = new Carro(600,225,100,45,'./img/main_carro.png')
let c2 = new Carro2(-40,400,100,45,'./img/rival.png')
let c3 = new Carro2(-280,200,100,45,'./img/rival.png')
let c4 = new Carro2(-120,200,100,45,'./img/rival.png')
let c5 = new Carro2(-120,200,100,45,'./img/rival.png')
let estrada = new Estrada(0,0,710,500,'./img/road.png')
let estrada2 = new Estrada(-700,0,710,500,'./img/road.png')
let coin = new Coin(-20,300, 25, 25, './img/coin.png')
let drive = new Estrada(0,0, 700, 500, './img/drive.jpg')
let crash = new Estrada(0,0, 700, 500, './img/car_crash.jpg')
let t1 = new Text()
let t2 = new Text()
let t3 = new Text()
let t4 = new Text()
let t5 = new Text()
let t6 = new Text()
let t7 = new Text()
let t8 = new Text()
let showlevel = false
cap = 10

let level = 1
let jogar = 3
let musica = new Audio('./iamfire.mp3')
let motor = new Audio('./motor.mp3')
musica.volume = 0.8
musica.loop = true



document.addEventListener('keydown',(e)=>{
    // console.log(e.key)
    if(e.key === 'w'){
        carro.dir = -7
    }else if(e.key === 's'){
        carro.dir = 7
    } else if((e.key === 'p') && ((jogar == 1) || (jogar == 3))){
        if (jogar == 1){
            jogar = 3
        } else{
            jogar = 1
        }
        
    }else if((e.key === 'r') && ((jogar == 0)||(jogar == 2))){
        jogar = 1
        carro.vida = 5
        level = 1
        carro.pts = 0
        cap = 10
        c2.velocidadeCarro = 2
        c2.recomeca()
        c3.velocidadeCarro = 2
        c3.recomeca()
        c4.velocidadeCarro = 2
        c4.recomeca()
        c5.velocidadeCarro = 2
        c5.recomeca()
        estrada.velocidadeEstrada = 2
        estrada2.velocidadeEstrada = 2
    }
})
document.addEventListener('keyup', (e)=>{
    if(e.key === 'w'){
        carro.dir = 0
    }else if(e.key === 's'){
        carro.dir = 0
    }
})

function pause(){

}

function game_over(){
    if(carro.vida <=0){
        jogar = 0
        musica.pause()
    }
}



function colisao(){
    if(carro.colid(c2)){
        carro.vida -= 1
        c2.recomeca()
    }else if(carro.colid(c3)){
        carro.vida -= 1
        c3.recomeca()
    }else if(carro.colid(c4)){
        carro.vida -= 1
        c4.recomeca()
    }else if(carro.colid(c5)){
        carro.vida -= 1
        c5.recomeca()
    } else if(carro.colid(coin)){
        carro.pts += 2
        coin.recomeca_coin()
    }
}
function sumiu(){
    showlevel = false
}
function nextlevel(){
    if ((carro.pts >= cap) && (level <=2)){
        cap += 5
        estrada.velocidadeEstrada += 2
        estrada2.velocidadeEstrada += 2
        c2.velocidadeCarro += 2
        c3.velocidadeCarro += 2
        c4.velocidadeCarro += 2
        c5.velocidadeCarro += 2
        level += 1
        carro.pts = 0
        showlevel = true
        setTimeout(sumiu, 2000)
    } else if ((carro.pts >= cap) && (level == 3)){
        jogar = 2
    }
}


function desenha(){
    
    if(jogar == 1){
        estrada.des_estrada_img()
        estrada2.des_estrada_img()
        c2.des_car_img()
        c3.des_car_img()
        coin.des_coin_img()
        t1.des_text('Pontos: ' + carro.pts,24,100,'yellow','13px Daydream')
        t3.des_text('Vida: ' + carro.vida,24,60,'yellow','13px Daydream')
        t7.des_text("Level: " + level,24, 140, 'yellow', '13px Daydream')
        carro.des_car_img()
        if(level >= 2){
            c4.des_car_img()
        }
        if(level >= 3){
            c5.des_car_img()
        }
        
    }else if (jogar == 0){
        crash.des_estrada_img()
        t5.des_text('Game Over',280,30,'yellow','23px Daydream')
        t2.des_text('aperte (R) para reicinar', 140, 480,'yellow','23px Daydream')
        
    } else if (jogar == 2){
        drive.des_estrada_img()
        t5.des_text('You win',280,30,'yellow','23px Daydream')
        t2.des_text('aperte (R) para reicinar', 140, 480,'yellow','23px Daydream')
    }else if (jogar == 3){
        drive.des_estrada_img()
        t5.des_text('Drive',280,30,'yellow','23px Daydream')
        t2.des_text('aperte (P) para Iniciar', 140, 480,'yellow','23px Daydream')
    }
    document.addEventListener('keydown', (e)=>{
        
    })
}
function atualiza(){
    if(jogar == 1){
        musica.play()
        estrada.mov_est()
        estrada2.mov_est()
        c2.mov_carro2()
        c3.mov_carro2()
        coin.mov_coin()
        carro.mov_carro()
        colisao()
        nextlevel()
        game_over()
        if(level >= 2){
            c4.mov_carro2()
        }
        if(level >= 3){
            c5.mov_carro2()
        }
        if (showlevel == true){
            t8.des_text("Level: " + level,250,250,'red','36px Daydream')
        }
    }
}
function main(){
    des.clearRect(0,0,1400,500)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()