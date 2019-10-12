import '../phaser.js'

class BootLoader extends Phaser.Scene {
    constructor(){
        super({key: 'BootLoader'})
    }

    preload(){
        this.load.spritesheet('player','/Assets/hand-combat.png',{frameWidth: 50,frameHeight:37})
        this.load.once('complete',()=>{
            this.scene.start('Scene1')
        })
    }

    create(){
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('player',{
                start: 0,
                end: 1
            }),
            repeat: -1,
            frameRate: 5
        })

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('player',{
                start: 46,
                end: 51
            }),
            repeat: -1,
            frameRate: 7
        })

        this.anims.create({
            key: 'kick',
            frames: this.anims.generateFrameNumbers('player',{
                start: 20,
                end: 27
            }),
            frameRate: 14
        })
    }
}

export default BootLoader