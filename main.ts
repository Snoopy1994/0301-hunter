input.onButtonPressed(Button.A, function () {
    target += -1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(target)
    radio.sendValue("id", 17)
    radio.sendValue("try", target)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    target += 1
})
radio.onReceivedValue(function (name, value) {
	
})
let target = 0
radio.setGroup(99)
basic.showIcon(IconNames.Heart)
target = 50
