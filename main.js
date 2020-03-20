let chess = anime.timeline({
  easing: 'easeInOutCirc',
  duration: 1000,
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
  duration: 500,
  autoplay: false
})

cards.add({
  targets: '.master_first',
  translateY: {
    value: 50
  },
  translateX: {
    value: 30,
    delay: 1000
  }
})

cards.add({
  targets: '.master_second',
  translateY: {
    value: -45,
  },
  translateX: {
    value: 30,
    delay: 1000
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
  duration: 1000,
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
  duration: 2500,
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
  duration: 700,
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

let wheel = anime({
  targets: '.wheel_img',
  rotate: [0, 360],
  duration: 2000,
  autoplay: false,
  direction: 'linear',
  transformOrigin: '50% 50%'
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
/*
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
*/
let animalCover = anime.timeline({
  easing: 'easeOutSine',
  duration: 2000,
  autoplay: false
})

animalCover.add({
  targets: '.animal_mask1',
  translateX: {
    value: 55,
    duration: 100
  },
  translateY: {
    value: 60,
    duration: 100
  },
  opacity: {
    value: 1,
    duration: 3000
  }, scale: {
    value: 1.2,
    duration: 3000,
    delay: 1000
  }
})

animalCover.add({
targets: '.animal_mask1',
opacity: {
  value: 0,
  delay: 200,
  duration: 4000
}
})

animalCover.add({
  targets: '.animal_mask',
  translateX: {
    value: 55,
    duration: 100
  },
  translateY: {
    value: 60,
    duration: 100
  },
  opacity: {
    value: 1,
    duration: 3000
  }, scale: {
    value: 1.2,
    duration: 3000
  }
})

animalCover.add({
  targets: '.animal_mask1',
  translateX: {
    value: 55,
    duration: 100
  },
  translateY: {
    value: 60,
    duration: 100
  },
  opacity: {
    value: 1,
    duration: 1500
  }, scale: {
    value: 1.2,
    duration: 1500,
    delay: 1000
  }
})
/*
let blinkingBlock = anime.timeline({
  loop: true
})

blinkingBlock.add({
  targets: '#first_one',
  background: {
    value: 'rgb(252, 202, 42)',
    duration: 700
  }
})

blinkingBlock.add({
  targets: '#first_one',
  background: {
    value: 'rgb(249, 244, 255)',
    duration: 700
  }
})

let stopBlik = document.getElementById('first_one')
stopBlik.onclick = function(){
  let stopBlikingBlock = document.getElementById('first_one')
  stopBlikingBlock.stop()
}

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
//Create a button > onclick change color and shape of covers
let btnTransformCover = document.querySelector('#fist_two')
btnTransformCover.onclick = function() {
  let changedBook = document.querySelectorAll('.book')
  for (let i = 0; i < changedBook.length; i++){
    changedBook[i].style.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
    changedBook[i].style.transform = `translate(${anime.random(0,8)}vw,${anime.random(0,8)}vh) rotate(${anime.random(0,360)}deg)`
  }
}

let btnInitialCover = document.querySelector('#first_one')
btnInitialCover.onclick = function() {
  let initialBook = document.querySelectorAll('.book')
  for (let i = 0; i < initialBook.length; i++){
    let harryCover = document.querySelector('.harry_potter')
    harryCover.style.background = 'rgb(235, 60, 28)'
    let chessCover = document.querySelector('.chess')
    chessCover.style.background = 'rgb(40, 135, 200)'
    let princessCover = document.querySelector('.white_princess')
    princessCover.style.background = 'rgb(235, 60, 28)'
    let codeCover = document.querySelector('.da_vinci')
    codeCover.style.background = 'rgb(140, 144, 200)'
    let masterCover = document.querySelector('.master')
    masterCover.style.background = 'rgb(235, 60, 28)'
    let farCover = document.querySelector('.far_451')
    farCover.style.background = 'rgb(112, 112, 204)'
    let plusOneCover = document.querySelector('.plus_one')
    plusOneCover.style.background = 'rgb(40, 135, 200)'
    let punishCover = document.querySelector('.dostoev')
    punishCover.style.background = 'rgb(235, 60, 28)'
    let coverArray = {
      harryCover: 'rgb(235, 60, 28)',
      playerCover: 'rgb(143, 216, 216)',
      chessCover: 'rgb(40, 135, 200)',
      princessCover: 'rgb(235, 60, 28)',
      codeCover: 'rgb(140, 144, 200)',
      masterCover: 'rgb(235, 60, 28)',
      farCover: 'rgb(112, 112, 204)',
      plusOneCover: 'rgb(40, 135, 200)',
      punishCover: 'rgb(235, 60, 28)'
    }
    initialBook[i].style.background =  coverArray
    initialBook[i].style.transform = `translate(${anime.random(0,0)}vw, 1.5vh) rotate(${anime.random(0,0)}deg)`
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
  let cover = document.querySelectorAll('.block')
  for (let i = 0; i < cover.length; i++){
    cover[i].style.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
  }
}
/*change blank books in filled with color*/

let btnBlankCover = document.querySelector('.third_line_four')
btnBlankCover.onclick = function(){
  let blankCover = document.querySelectorAll('.visible')
  let playerCover = document.querySelector('.player')
  playerCover.style.background = 'rgb(143, 216, 216)'
let harryCover = document.querySelector('.harry_potter')
harryCover.style.background = 'rgb(235, 60, 28)'
let chessCover = document.querySelector('.chess')
chessCover.style.background = 'rgb(40, 135, 200)'
let princessCover = document.querySelector('.white_princess')
princessCover.style.background = 'rgb(235, 60, 28)'
let codeCover = document.querySelector('.da_vinci')
codeCover.style.background = 'rgb(140, 144, 200)'
let masterCover = document.querySelector('.master')
masterCover.style.background = 'rgb(235, 60, 28)'
let farCover = document.querySelector('.far_451')
farCover.style.background = 'rgb(112, 112, 204)'
let plusOneCover = document.querySelector('.plus_one')
plusOneCover.style.background = 'rgb(40, 135, 200)'
let punishCover = document.querySelector('.dostoev')
punishCover.style.background = 'rgb(235, 60, 28)'
let coverArray = {
  harryCover: 'rgb(235, 60, 28)',
  playerCover: 'rgb(143, 216, 216)',
  chessCover: 'rgb(40, 135, 200)',
  princessCover: 'rgb(235, 60, 28)',
  codeCover: 'rgb(140, 144, 200)',
  masterCover: 'rgb(235, 60, 28)',
  farCover: 'rgb(112, 112, 204)',
  plusOneCover: 'rgb(40, 135, 200)',
  punishCover: 'rgb(235, 60, 28)'
}
  let coverState = {
    filledBooks: false
  }
  if (state.filledBooks){
    for (let i = 0; i < blankCover.length; i++){
    blankCover[i].style.background = 'transparent'
    blankCover[i].style.borderWidth = 'bold'
  } state.filledBooks = false}
  else {
    for (let i = 0; i < blankCover.length; i++){
    blankCover[i].style.background = coverArray
    state.filledBooks = true
  }}
}/*

{
  let blankCover = document.querySelectorAll('.visible')
  for (let i = 0; i < blankCover.length; i++){
  blankCover[i].style.background = 'transparent'
  blankCover[i].style.borderWidth = 'medium'
  blankCover[i].style.borderColor = "green purple"
  }
}
/*generate bubbles*/
let btnCircle = document.querySelector('.far_img')
btnCircle.onclick = function (){
  let numberOfCircles = 8;
  for (let i = 0; i <= numberOfCircles; i+= 1){
    let bookInsert = document.querySelector('.fareng_space')
    let littleCircles = document.createElement('div')
    littleCircles.classList.toggle('little_circle')
    bookInsert.append(littleCircles)
    littleCircles.addEventListener('mouseout', function() {
        littleCircles.style.display = 'none'})
  }}


/*
  for (let i = 0; i < numberOfCirles; i += 1) {
    let littleCircles = document.createElement('div')
    document.body.append(littleCircles)
    if (anime.random(0,100) % 2 === 0) {
      let size = `${anime.random(0,100)}px`
      div.style.width = size
      div.style.height = size
      div.style.borderRadius = '50%'
    } else {
      div.style.width = `${anime.random(0,500)}px`
      div.style.height = `${anime.random(0,500)}px`
    }*/
/*Create moving line*/
let btnMovingLine = document.querySelector('.block_blackline')
btnMovingLine.onclick = function(){
let start = Date.now()
let lineTimer = setInterval(function() {
let timePassed = Date.now() - start;
  if (timePassed >= 7000) {
      clearInterval(lineTimer);
      return;
    } draw(timePassed);

  }, 40);
  function draw(timePassed) {
  let movingLine = document.querySelector('.block_blackline')
  movingLine.style.left = timePassed / 5 + 'px';
}
  let timePassed = Date.now() - start;
}

let btn01 = document.querySelector ('.chess').onclick = chess.restart
let btn02 = document.querySelector ('.white_princess').onclick = apple.restart
let btn04 = document.querySelector('.master').onclick = cards.restart
let btn05 = document.querySelector('.dostoev').onclick = line.play
let btn06 = document.querySelector('.da_vinci').onclick = code.restart
let btn07 = document.querySelector('.harry_potter').onclick = books.restart
letbtnLet = document.querySelector('.block_lines').onclick = letter.restart
let btn10 = document.querySelector('.plus_one').onclick = wheel.restart
let btn11 = document.querySelector('.animal').onclick = animalCover.restart
