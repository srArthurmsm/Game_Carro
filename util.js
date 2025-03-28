class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }
    des_obj(){
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h,this.a)
    }
}

class Carro extends Obj{
    dir = 0
    pts = 0
    vida = 5
    tempo = 0

    des_car_img(){
        let img = new Image()
        img.src = this.a
        des.drawImage(img, this.x, this.y, this.w, this.h)
    }

    

    mov_carro(){
        this.y += this.dir
        if(this.y <=2){
            this.y = 2
        }else if(this.y >= 416){
            this.y = 416
        }
    }

    
    colid(objeto){
        if((this.x < objeto.x + objeto.w)&&
          (this.x + this.w > objeto.x)&&
          (this.y < objeto.y + objeto.h)&&
          (this.y + this.h > objeto.y)){
            return true
        }else{
            false
        }
    }


}

class Carro2 extends Carro{
    velocidadeCarro = 2
    mov_carro2(){
        this.x += this.velocidadeCarro
        if(this.x >= 780){
            this.recomeca()
        }
    }
    
    recomeca(){
        this.x = -100
        this.y = Math.floor(Math.random() * ((416 - 2 + 1) + 2)) // quando o carro sair da tela
    }
}

class Estrada extends Obj{
    velocidadeEstrada = 2
    des_estrada_img(){
        let img = new Image()
        img.src = this.a
        des.drawImage(img, this.x, this.y, this.w, this.h)
    }
    mov_est(){
        this.x += this.velocidadeEstrada * 2
        if(this.x >= 700){
            this.x = -700
        }
    }
}
class Coin extends Obj{
    des_coin_img(){
        let img = new Image()
        img.src = this.a
        des.drawImage(img, this.x, this.y, this.w, this.h)
    }
    mov_coin(){
        this.x += 6
        if(this.x >= 725){
            this.recomeca_coin()
        }
    }
    recomeca_coin(){
        this.x = -60
        this.y = Math.floor(Math.random() * ((416 - 2 + 1) + 2)) // quando o carro sair da tela
    }
}
class Text{
    des_text(text,x,y,cor,font){
        des.fillStyle = cor
        des.lineWidth = '5'
        des.font = font
        des.fillText(text,x,y)
    }
}