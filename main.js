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
  duration: 1000,
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
  width: 30
})

hr.add({
  targets: '.451_hr',
  width: 50
})

hr.add({
  targets: '.451_hr',
  width: 70
})

hr.add({
  targets: '.451_hr',
  width: 100
})

let wheel = anime({
  targets: '.wheel_img',
  rotate: [0, 360],
  duration: 2000,
  autoplay: false,
  direction: 'linear',
  transformOrigin: '50% 50%'
})

// /*
let bbl = anime.timeline({
  duration: 4000,
  easing: 'easeInOutCirc',
  autoplay: false,
  delay: 500
})

bbl.add({
  targets: '.bbl1',
  translateY: -360
})

bbl.add({
  targets: '.bbl2',
  translateY: -360
})

bbl.add({
  targets: '.bbl3',
  translateY: -360
})

let letter = anime.timeline({
  duration: 250,
  autoplay: false
})

letter.add({
  targets: '.letter_k',
  opacity: {
    value: 0
  }, delay: 100
})

letter.add({
  targets: '.letter_o',
  opacity: {
    value: 1,
    duration: 300
  },
  color: 'rgb(85, 255, 89)'
})

letter.add({
  targets: '.letter_o',
  opacity: {
    value: 0
  }
})

letter.add({
  targets: '.letter_l',
  opacity: {
    value: 1
  }, color: 'rgb(170, 0, 38)'
})

letter.add({
  targets: '.letter_l',
  opacity: {
    value: 0
  }
})

letter.add({
  targets: '.letter_b',
  opacity: {
    value: 1
  },
  color: 'rgb(116, 0, 203)'
})

letter.add({
  targets: '.letter_b',
  opacity: {
    value: 0
  }
})

letter.add({
  targets: '.letter_a',
  opacity: {
    value: 1
  },
  color: 'rgb(45, 252, 25)'
})

let bubble = anime({
  targets: '.bubble',
  translateX: {
    value: 800
  }, rotate: {
    value: '+=3turn',
    easing: 'linear'
  },   duration: 6000,
    direction: 'alternate',
    loop: true
})

/*КАРТЫ ГЕНЕРИРОВАНИЕ
let numberOfCards = 10
for (let i = 0; i < numberOfCards; i += 1) {
  let div = document.createElement('div')
  let size = `${anime.random(0,20)}px`
  div.style.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
  div.style.width = size
  let ace = div
}
*/

//Generate bubbles
let controller = new ScrollMagic.Controller()

let btnBubl = document.querySelector('.bubble')
btnBubl.onclick = function(){
  let lastSection = document.getElementById('section')
  let loader = document.querySelector('.loader')
  let bubblesWrapper = document.querySelector('.bubbles-wrapper')

  let loadingScene = new ScrollMagic.Scene({
    triggerElement: loader,
    triggerHook: 'onLeave'
  })
  .addTo(controller)
  .on('leave', () => {
    setTimeout( 1000, 40)
  })
  let amount = 40;
  let count = 0;
  while (amount > count) {
    let newDiv = document.createElement('div')
    newDiv.classList.add('bubbles')
    bubblesWrapper.append(newDiv)
    count += 1
  }
}

//Create visible/hidden books function
let state = {
    hiddenBooks: false
}

let btnRetort = document.querySelector('.retort').onclick = function(){
  let visibleBooks = document.querySelectorAll('.visible');
  let hiddenBooks = document.querySelectorAll('.hidden');
  if (state.hiddenBooks) {
        for (let i = 0; i < hiddenBooks.length; i++) {
            hiddenBooks[i].style.visibility = 'hidden'
            visibleBooks[i].style.visibility = 'visible'
        }
        state.hiddenBooks = false
    } else {
        for (let i = 0; i < hiddenBooks.length; i++) {
            hiddenBooks[i].style.visibility = 'visible'
           visibleBooks[i].style.visibility = 'hidden'}
        state.hiddenBooks = true
    }}
//

//Change color of covers
let btnColorCover = document.querySelector('.img_books')
btnColorCover.onclick = function() {
  let cover = document.querySelectorAll('.visible')
  for (let i = 0; i < cover.length; i++){
    cover[i].style.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
  }
}

//Add flowing bubbles
//let btnBubble = document.querySelector('.')



let btn01 = document.querySelector ('.chess').onclick = chess.restart
let btn02 = document.querySelector ('.white_princess').onclick = apple.restart
let btn04 = document.querySelector('.master').onclick = cards.restart
let btn05 = document.querySelector('.dostoev').onclick = line.play
let btn06 = document.querySelector('.da_vinci').onclick = code.restart
let btn07 = document.querySelector('.harry_potter').onclick = books.restart
let btnLet = document.querySelector('.block_lines').onclick = letter.restart
let btn09 = document.querySelector('.far_451').onclick = hr.play
let btn10 = document.querySelector('.plus_one').onclick = wheel.restart
