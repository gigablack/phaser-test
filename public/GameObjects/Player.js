import '../phaser.js'

class Player extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,texture){
        super(scene,x,y,texture)
        scene.add.existing(this)
        this.setScale(3)
        this.cursor = this.scene.input.keyboard.createCursorKeys()
        this.attacking = false
    }

    idle(){
        this.anims.play('idle')
    }

    walk(){
        this.anims.play('walk')
    }

    kick(){
        this.anims.play('kick')
    }

    move(){
        if(!this.attacking){
            if((this.cursor.right.isDown || this.cursor.left.isDown) && this.anims.getCurrentKey() !== 'walk'){
                if(this.attacking){
                    this.scene.anims.get('kick').on('complete',()=> this.walk())
                } else {
                    this.walk()
                }
            } else if(this.cursor.space.isUp && this.attacking){
                this.scene.anims.get('kick').on('complete',()=> this.idle())
            } else if(this.cursor.right.isUp && this.cursor.left.isUp && this.anims.getCurrentKey() !== 'idle'){
                this.idle()
            }
        }
        if(this.cursor.right.isDown){
            this.setFlipX(false)
        } else if(this.cursor.left.isDown){
            this.setFlipX(true)
        } 
    }

    attack(){
        if(this.cursor.space.isDown && this.anims.getCurrentKey() !== 'kick'){
            this.kick()
            this.attacking = true
        }
        this.scene.anims.get('kick').on('complete',()=>this.attacking = false)
    }
}

export default Player