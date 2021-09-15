input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # . # #
        # . # . #
        # # . # #
        # # # # #
        `)
    basic.showArrow(ArrowNames.West)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Soy Andres")
    basic.showNumber(500 + 450)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # # # .
        # . # . #
        `)
    basic.showNumber(Math.sqrt(7350464))
    basic.clearScreen()
})
basic.forever(function () {
	
})
