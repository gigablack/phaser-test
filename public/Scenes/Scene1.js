import '../phaser.js'
import Player from '../GameObjects/Player.js'

class Scene1 extends Phaser.Scene {
    constructor(){
        super({key: 'Scene1'})
    }

    preload(){
        this.centerWidth = this.sys.game.config.width / 2
        this.centerHeight = this.sys.game.config.height / 2
    }

    create(){
        this.player = new Player(this,this.centerWidth,this.centerHeight,'player')
        this.player.idle()
    }

    update(){
        this.player.move()
        this.player.attack()
    }
}

export default Scene1