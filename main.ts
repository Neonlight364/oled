input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    player_a += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("C")
    ties += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    player_b += 1
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    round += 1
    basic.showString("D")
})
function reset () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("shall we play a game?")
    player_a = 0
    player_b = 0
    ties = 0
    round = 0
    basic.pause(2000)
    updatescoreboard()
}
function updatescoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("player a: " + player_a)
    OLED.newLine()
    OLED.writeStringNewLine("player b: " + player_b)
    OLED.newLine()
    OLED.writeStringNewLine("ties: " + ties)
    OLED.newLine()
    OLED.writeStringNewLine("round: " + round)
}
let round = 0
let player_b = 0
let ties = 0
let player_a = 0
reset()
