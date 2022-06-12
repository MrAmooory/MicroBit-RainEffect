let Rain: game.LedSprite = null
basic.forever(function () {
    Rain = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index <= 4; index++) {
        Rain.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    Rain.delete()
})
