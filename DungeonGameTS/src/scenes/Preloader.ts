import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene {
    constructor()
    {
        super('preloader')
    }

    preload() 
    {
        this.load.image('tiles', 'assets/DungeonTileset/DungeonTileset.png')
        this.load.tilemapTiledJSON('dungeon', 'maps/Dungeon01.json')
        this.load.atlas('fauna', 'assets/Fauna/CompiledSprites/FaunaSprite.png', 'assets/Fauna/CompiledSprites/FaunaSprite.json')

        this.load.atlas('lizard', 'assets/DungeonTileset/enemysprites/lizard1/lizard.png', 'assets/DungeonTileset/enemysprites/lizard1/lizard.json')
    }

    create()
    {
        this.scene.start('game')
    }
}