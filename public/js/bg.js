// From https://uigradients.com
var dreamBGGradients = [
  [],
  ['#000000', '#434343'], // Deep Space
  ['#c31432', '#240b36'], // Witching Hour
  ['#b92b27', '#1565C0'], // Evening sunshine
  ['#23074d', '#cc5333'], // Taran Tado
  ['#200122', '#6f0000'], // Love and Liberty
  ['#3B4371', '#F3904F'], // Dawn
  ['#0099F7', '#F11712'], // Superman
  ['#8E0E00', '#1F1C18'], // Netflix
]

var dreamBody = $('body')
var dreamFront = $('.flip-container .front')
var dreamBack = $('.flip-container .back')

var dreamPrevBgIndex = 0
var dreamBodyBgSwitch = []
var dreamBodyBgSwitchIndex = 0

var dreamBg = dreamBGGradients[getRandomInt(0, dreamBGGradients.length)]
dreamBodyBgSwitch.push(dreamBg)
setBackground(dreamFront, dreamBg)

setBackground(dreamBody, dreamBg)

dreamBg = dreamBGGradients[getRandomInt(0, dreamBGGradients.length)]
dreamBodyBgSwitch.push(dreamBg)
setBackground(dreamBack, dreamBg)

function connect(arr) {
  var str = ''
  for (var i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      str += arr[i] + ', '
    } else {
      str += arr[i]
    }
  }
  return str
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  var random
  while (1) {
    random = Math.floor(Math.random() * (max - min)) + min
    if (random !== dreamPrevBgIndex) {
      dreamPrevBgIndex = random
      break
    }
  }
  return random
}

function setBackground(target, gradient) {
  target.css({
    background: gradient[0]
  })
  target.css({
    background: 'linear-gradient(to right, ' + connect(gradient) + ')'
  })
}
