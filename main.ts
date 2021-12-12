input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.hello.playUntilDone()
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    soundExpression.slide.playUntilDone()
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Surprised)
    soundExpression.giggle.playUntilDone()
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    soundExpression.soaring.playUntilDone()
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.Asleep)
    soundExpression.yawn.playUntilDone()
})
