radio.onReceivedNumber(function (receivedNumber) {
    cmd = receivedNumber
    OLED12864_I2C.showNumber(
    0,
    0,
    cmd,
    1
    )
    if (cmd == 62) {
        music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
        basic.showArrow(ArrowNames.North)
        basic.pause(1000)
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    } else if (cmd == 65) {
        music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Backward, 100)
        basic.showArrow(ArrowNames.South)
        basic.pause(1000)
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    } else if (cmd == 103) {
        music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, 50)
        basic.showArrow(ArrowNames.West)
        basic.pause(500)
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    } else if (cmd == 104) {
        music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 50)
        basic.showArrow(ArrowNames.East)
        basic.pause(500)
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    } else if (cmd == 5) {
        music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
        basic.showIcon(IconNames.No)
    } else if (cmd == 6) {
        music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.AllLed, maqueenPlusV2.MyEnumSwitch.Open)
        maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Blue)
    } else if (cmd == 7) {
        music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.AllLed, maqueenPlusV2.MyEnumSwitch.Close)
        maqueenPlusV2.ledBlank()
    } else if (cmd == 141) {
        music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        pins.servoWritePin(AnalogPin.P1, 40)
    } else if (cmd == 142) {
        music.play(music.createSoundExpression(WaveShape.Square, 2966, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        pins.servoWritePin(AnalogPin.P1, 90)
    } else if (cmd == 47) {
    	
    } else {
    	
    }
})
let cmd = 0
maqueenPlusV2.I2CInit()
led.enable(false)
OLED12864_I2C.init(60)
radio.setGroup(42)
cmd = 999
maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
music.setVolume(220)
OLED12864_I2C.showString(
0,
0,
"Hello Robot!",
1
)
basic.pause(2000)
OLED12864_I2C.clear()
