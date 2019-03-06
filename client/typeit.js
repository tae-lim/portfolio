const instance = new TypeIt('#about-me', {
  speed: 65,
  waitUntilVisible: true,
})
.type('Hi! I\'m Tae,')
.pause(1000)
.break()
.pause(1000)
.type('a Software Developer.')
.break()
.pause(1000)
.type('I love')
.pause(1000)
.delete(4)
.type('<strong>love</strong>')
.pause(1000)
.type(' what I do!')
.go();