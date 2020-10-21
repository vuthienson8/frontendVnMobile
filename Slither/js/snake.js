class snake{
    constructor(game){
        this.game = game;
        this.x = GAME_WIDTH/2;
        this.y = GAME_HEIGHT/2;
        this.listenMouseEvent();

        this.angle = 0;
        this.tailPositions = [];
        this.eye = new eye(this)

        this.createTail();

    }
    listenMouseEvent(){
        this.game.canvas.addEventListener('mousemove', (event) =>{
            var rect = this.game.canvas.getBoundingClientRect();
            this.procesMouseMove({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top,
            });
        });
    }

    createTail(){
        for(let i = 0; i<250;i++){
            this.tailPositions.push({
                x: this.x - (i*SNAKE_SPEED),
                y: this.y
            })
        } 
    }

    procesMouseMove(mousePos){
        this.angle = Math.atan2(
            mousePos.y - (SCREEN_HEIGHT / 2),
            mousePos.x - (SCREEN_WIDTH / 2)
        );
    }
    update(){
        let newTailPosition = {
            x: this.x += Math.cos(this.angle) * SNAKE_SPEED,
            y: this.y += Math.sin(this.angle) * SNAKE_SPEED
        }
        this.tailPositions.unshift(newTailPosition);
        this.tailPositions.pop();
        this.x = newTailPosition.x;
        this.y = newTailPosition.y;
    }
    draw(){
        //shadow
        for (let i = this.tailPositions.length - 1; i>1; i-- ){
                this.game.screen.drawCircle(
                    {   
                        x: this.tailPositions[i].x, 
                        y: this.tailPositions[i].y
                    }, 
                    'shadow'
                );
        }
        //body
        for (let i = this.tailPositions.length - 1; i>1; i-- ){
            if(i % 5 == 0){
                this.game.screen.drawCircle(
                    {   
                        x: this.tailPositions[i].x, 
                        y: this.tailPositions[i].y
                    }, 
                    'snakes'
                );
            }
            
        }
        //draw head
        this.game.screen.drawCircle(
            {   
                x: this.x, 
                y: this.y
            }, 
            'snakes'
        );
        //eye
        this.eye.draw();
             
    }
}