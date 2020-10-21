const EYE_DISTANCE = 17;
const EYE_ANGLE = 0.7;
class eye{
    constructor(snake){
        this.snake = snake;

    }

    update(){

    }

    draw(){
        let eye1Pos = {
            x: this.snake.x + Math.cos(this.snake.angle - EYE_ANGLE) * EYE_DISTANCE,
            y: this.snake.y + Math.sin(this.snake.angle - EYE_ANGLE) * EYE_DISTANCE,
        }
        this.snake.game.screen.drawCircle(eye1Pos, 'eye')

        //
        let eye2Pos = {
            x: this.snake.x + Math.cos(this.snake.angle + EYE_ANGLE) * EYE_DISTANCE,
            y: this.snake.y + Math.sin(this.snake.angle + EYE_ANGLE) * EYE_DISTANCE,
        }
        this.snake.game.screen.drawCircle(eye2Pos, 'eye')
    }
}