import Phaser from 'phaser'

const createCharacterAnims = (anims: Phaser.Animations.AnimationManager) => 
{
    anims.create({
        key: 'fauna-idle-down',
        frames: [{ key: 'fauna', frame: 'sprites/walk-down/walk-down-3.png'}]
    })

    anims.create({
        key: 'fauna-idle-up',
        frames: [{ key: 'fauna', frame: 'sprites/walk-up/walk-up-3.png'}]
    })

    anims.create({
        key: 'fauna-idle-side',
        frames: [{ key: 'fauna', frame: 'sprites/walk-side/walk-side-3.png'}]
    })

    anims.create({
        key: 'fauna-run-down',
        frames: anims.generateFrameNames('fauna', { start: 1, end: 8, prefix: 'sprites/run-down/run-down-', suffix: '.png'})
        repeat: -1,
        frameRate: 13
    })

    anims.create({
        key: 'fauna-run-up',
        frames: anims.generateFrameNames('fauna', { start: 1, end: 8, prefix: 'sprites/run-up/run-up-', suffix: '.png'})
        repeat: -1,
        frameRate: 12
    })

    anims.create({
        key: 'fauna-run-side',
        frames: anims.generateFrameNames('fauna', { start: 1, end: 8, prefix: 'sprites/run-side/run-side-', suffix: '.png'})
        repeat: -1,
        frameRate: 16
    })
}

export {
    createCharacterAnims
}