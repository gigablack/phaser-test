import './phaser.js'
import BootLoader from './Scenes/BootLoader.js'
import Scene1 from './Scenes/Scene1.js'

new Phaser.Game({
    type: Phaser.CANVAS,
    width: 300,
    height: 500,
    parent: 'container',
    backgroundColor: '#777',
    scene: [BootLoader,Scene1]
})