controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`bull`,
    500,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level`)
mySprite = sprites.create(assets.image`myImage2`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(50, 58))
controller.moveSprite(mySprite)
