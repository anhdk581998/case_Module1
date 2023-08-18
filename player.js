class Player {
    constructor(game) {
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.image = document.getElementById('player');
        this.speed = 0;
        this.maxSpeed = 1;
    }
    update(input){
        // this.x++;
        // chuyen dong ngang
        this.x += this.speed;
        if(input.includes('ArrowRight'))this.speed = this.maxSpeed;
        else if (input.includes('ArrowLeft'))this.speed = -this.maxSpeed;
        else this.speed = 0;
        if(this.x<0)this.x= 0;
        if (this.x> this.game.width)this.x = this.game.width;


    }
    draw(context){
        // context.fillStyle = 'rgba(0, 0, 0, 0)';
        context.fillStyle = 'red';
        // context.fillRect(this.x,this.y,this.width,this.height);
        context.drawImage(this.image,0,0,550,540, this.x, this.y, this.width, this.height);

    }
}