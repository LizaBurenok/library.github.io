let chess = anime.timeline({
  easing: 'easeInOutCirc',
  duration: 2000,
  autoplay: false
})

chess.add({
  targets: '#down_chess',
  translateY: 103.5
})

chess.add({
  targets: '#center_chess1',
  translateY: 103
})

chess.add({
  targets: '#center_chess2',
  translateY: -103
})

chess.add({
  targets: '#up_chess',
  translateY: -103.5
})

let apple = anime.timeline({
  easing: 'easeInOutSine',
  duration: 2000,
  autoplay: false
})

apple.add({
  targets: '.apple_piece',
  translateX: 300,
  translateY: -100,
})

apple.add({
targets: '.apple',
backgroundColor: 'rgb(180, 137, 0)'
})

let cards = anime.timeline({
  easing: 'easeInOutQuad',
  duration: 1000,
  autoplay: false
})

cards.add({
  targets: '.master_first',
  translateY: {
    value: 50
  },
  translateX: {
    value: 30,
    delay: 1500
  }
})

cards.add({
  targets: '.master_second',
  translateY: {
    value: -45,
  },
  translateX: {
    value: 30,
    delay: 1500
  }
})

cards.add({
  targets: ['.master_first', '.master_second'],
  backgroundColor: 'rgb(170, 19, 0)'
})

cards.add({
  targets: '.hidden_heart',
  opacity: 1
})

let line = anime.timeline({
  easing: 'linear',
  duration: 2000,
  autoplay: false
})

line.add({
  targets: '.brown_line',
  rotate: 90
})

line.add({
  targets: '.brown_line',
  translateY: 70,
  direction: 'alternate',
  loop: true,
  easing: 'steps(5)'
})

line.add({
  targets: '.span_line',
  scale: {
    value: .6
  },
  rotate: 90,
})

line.add({
  targets: '.span_line',
  translateY: 110,
  easing: 'steps(7)'
})

line.add({
  targets: '.brown_line',
  backgroundColor: 'rgb(255, 59, 54)',
  rotate: {
    value: 180
  }
})

line.add({
  targets: '.span_line',
  scale: {
    value: 1.1
  },
  translateY: 30
})

line.add({
  targets: '.brown_line',
  translateY: {
    value: -20
  }
})

let player = anime.timeline({
  duration: 3000,
  autoplay: false
})

let code = anime.timeline({
  duration: 2000,
  easing: 'linear',
  autoplay: false
})

code.add({
  targets: '.hidden_x',
  opacity: 1,
  delay: anime.stagger(600)
})

let books = anime.timeline({
  duration: 2500,
  easing: 'linear',
  autoplay: 0
})

books.add({
  targets: '.harry_potter',
  opacity: 0
})

books.add({
  targets: '.harry_potter_series1',
    opacity: {
    value: 1}
})

books.add({
  targets: '.harry_potter_series1',
    opacity: {
    value: 0}
})

books.add({
  targets: '.harry_potter_series2',
  opacity: {
  value: 1}
})

books.add({
  targets: '.harry_potter_series2',
  opacity: {
  value: 0}
})

books.add({
  targets: '.harry_potter_series3',
  opacity: {
  value: 1}
})

books.add({
  targets: '.harry_potter_series3',
  opacity: {
  value: 0}
})

books.add({
  targets: '.harry_potter_series4',
  opacity: {
  value: 1}
})

books.add({
  targets: '.harry_potter_series4',
  opacity: {
  value: 0}
})

books.add({
  targets: '.harry_potter_series5',
  opacity: {
  value: 1}
})

books.add({
  targets: '.harry_potter_series5',
  opacity: {
  value: 0}
})

let hr = anime.timeline({
  duration: 2500,
  easing: 'linear'
})

hr.add({
  targets: '.451_hr',
  backgroundColor: 'rgb(212, 27, 22)',
  height: 1
})

hr.add({
  targets: '.451_hr',
  height: 2
})

hr.add({
  targets: '.451_hr',
  height: 4
})

let retort = anime.timeline({
  duration: 2000,
  autoplay: false
})

retort.add({
  targets: ['.harry_potter', '.harry_glass', '.harry_face', '.chess', '.far_451', '.white_princess', '.master', '.da_vinci', '.plus_one', '.player'],
  opacity: {
    value: 0
  }
})

retort.add({
  targets: ['.war', '.story', '.lady', '.drak', '.bird', '.numb', '.silent', '.shine'],
  opacity:{
    value: 1
  }
})

let btnRetort = document.querySelector('.retort').onclick = retort.restart
/*КАРТЫ ГЕНЕРИРОВАНИЕ
let numberOfCards = 10
for (let i = 0; i < numberOfCards; i += 1) {
  let div = document.createElement('div')
  let size = `${anime.random(0,200)}px`
  div.style.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
  div.style.width = size
  let ace = div
}

let btn08 = document.querySelector('.player').onclick = ace.play
/*
let cover = document.querySelector('.book')
cover.style.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
let btn03 = document.querySelector ('.img_books').onclick = cover.play
*/
let btn01 = document.querySelector ('.chess').onclick = chess.restart
let btn02 = document.querySelector ('.white_princess').onclick = apple.restart
let btn04 = document.querySelector('.master').onclick = cards.restart
let btn05 = document.querySelector('.dostoev').onclick = line.play
let btn06 = document.querySelector('.da_vinci').onclick = code.restart
let btn07 = document.querySelector('.harry_potter').onclick = books.restart

let btn09 = document.querySelector('.far_451').onclick = hr.play
