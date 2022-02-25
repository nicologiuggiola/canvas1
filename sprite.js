class RectSprite{
    constructor(x, y, w, h, speedX, speedY, color){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }

    update(canvas){
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
        if (this.x > canvas.width - this.w || this.x < 0) {
            this.speedX = this.speedX * -1;
        }
    
        if (this.y > canvas.height -this.h || this.y < 0) {
            this.speedY = this.speedY * -1;
        }
    }

    draw(context){
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.w, this.h);
    }
}

class CircleSprite{

    constructor(x, y, radius, speedX, speedY, color){
        this.x = x;
        this.y = y;
        this.radius = radius
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
        this.tempRadius = radius
    }

    update(canvas){
        let randomWalk = Math.random() * 100; 
        let randomWalky = Math.random() * 100;
        let randomSize = Math.random() * 100;

        if (randomWalk < 2) {
            this.speedX = this.speedX * -1;
        }
        
        if (randomWalky < 2) {
            this.speedY = this.speedY * -1;
        }

        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
        if (this.x > canvas.width - this.radius || this.x < this.radius) {
            this.speedX = this.speedX * -1;
        }
    
        if (this.y > canvas.height -this.radius || this.y < this.radius) {
            this.speedY = this.speedY * -1;
        }

        if (randomSize < 2) {
            this.radius = MathC.randomIntFromInterval(this.tempRadius, (this.tempRadius * 3))
        }
    }

    draw(context){
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill();
    }
}