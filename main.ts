input.onButtonPressed(Button.A, function () {
    if (contador == 5) {
        bloqueo = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (control.millis() - 0 < 1300) {
        contador += 1
        tiempo = control.millis()
    } else {
        basic.showIcon(IconNames.Happy)
        while (true) {
            basic.pause(100)
        }
    }
})
let bloqueo = 0
let tiempo = 0
let contador = 0
basic.showString("contraseña")
contador = 0
tiempo = control.millis()
bloqueo = 1
basic.forever(function () {
    if (bloqueo == 0) {
        basic.showString("hello")
    } else {
        if (control.millis() - tiempo > 1300) {
            basic.showIcon(IconNames.Happy)
            while (true) {
                basic.pause(100)
            }
        }
    }
})
