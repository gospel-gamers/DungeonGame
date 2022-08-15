import Phaser from 'phaser'

//import { createLizardAnims} from '../anims/EnemyAnims'
import { createCharacterAnims} from '../anims/CharacterAnims'

export default class Game extends Phaser.Scene
{
	private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
    private fauna!: Phaser.Physics.Arcade.Sprite
    
    constructor()
	{
		super('game')
	}

	preload()
    {
        this.cursors = this.input.keyboard.createCursorKeys()
    }

    create()
    {
       //this.add.image(0, 0, 'tiles')
       
       createCharacterAnims(this.anims)
       //createLizardAnims(this.anims)
       const map = this.make.tilemap({ key: 'dungeon'})
       const tileset = map.addTilesetImage('dungeon', 'tiles', 16, 16)

       map.createLayer('Ground', tileset)
       const wallsLayer = map.createLayer('Walls', tileset) 

       wallsLayer.setCollisionByProperty({ collides: true})

       this.fauna = this.physics.add.sprite(128, 128, 'fauna', 'sprites/walk-down/walk-down-3.png')
       this.fauna.body.setSize(this.fauna.width * 0.5, this.fauna.height * 0.8)


       this.fauna.anims.play('fauna-idle-down')
       this.physics.add.collider(this.fauna, wallsLayer)
       this.cameras.main.startFollow(this.fauna, true)

       //const lizard = this.physics.add.sprite(256, 128, 'lizard', 'lizard_m_idle_anim_f1.png')

       

       //lizard.anims.play('lizard-run')
       // debug wall collisions
       /*
       const debugGraphics = this.add.graphics().setAlpha(0.75);
       wallsLayer.renderDebug(debugGraphics, {
        tileColor: null, // Color of non-colliding tiles
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
        faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
        }) */
       
    }

    update(time: number, delta: number) {
        if (!this.cursors || !this.fauna)
        {
            return
        }

        const speed = 100
        if (this.cursors.left?.isDown)
        {
            this.fauna.anims.play('fauna-run-side', true)
            this.fauna.setVelocity(-speed, 0)
            this.fauna.scaleX = - 1
            this.fauna.body.offset.x = 24
        }
        else if (this.cursors.right?.isDown)
        {
            this.fauna.setVelocity(speed, 0)
            this.fauna.anims.play('fauna-run-side', true)
            this.fauna.scaleX = 1
            this.fauna.body.offset.x = 8
        }
        else if (this.cursors.up?.isDown)
        {
            this.fauna.setVelocity(0, -speed)
            this.fauna.anims.play('fauna-run-up', true)
        }
        else if (this.cursors.down?.isDown)
        {
            this.fauna.setVelocity(0, speed)
            this.fauna.anims.play('fauna-run-down', true)
        }
        else 
        {
            const parts = this.fauna.anims.currentAnim.key.split('-')
            parts[1] = 'idle'
            this.fauna.play(parts.join('-'))
            this.fauna.setVelocity(0, 0)
            //this.fauna.play('fauna-idle-down')
        }
    }
}
