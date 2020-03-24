let retortEntry = anime.timeline({
  targets: '.retort_wrapper',
  autoplay: false,
  rotate: {
  value: 180,
  delay: 1500
},
  duration: 1000,
  easing: 'linear',
})

retortEntry.add({
  targets: '.wrap',
  backgroundColor: 'rgb(206, 87, 154)',
  duration: 1500
})

retortEntry.add ({
  targets: '.drop_one',
  translateX: {
    value: 5
  },
  translateY: -50,
  opacity: {
    value: 1,
    delay: 1500
  },
  translateY: {
    value: -160,
    delay: 1500
  }
})

retortEntry.add({
  targets: '.drop_two',
  translateX: 5,
  translateY: -50,
  opacity: {
    value: 1,
    delay: 450
  }, translateY: {
    value: -170,
    delay: 1500
  }
})

retortEntry.add({
  targets: '.drop_three',
  translateX: 5,
  tranlsateY: -50,
  opacity: {
    value: 1,
    delay: 400
  }, translateY: {
    value: -170,
    delay: 1500
  }
})

let chessGame = anime.timeline({
  targets: '.horse_chess',
  duration: 500,
  easing: 'easeInOutQuint',
  autoplay: false
})

chessGame.add({
  opacity: {
    value: 1,
    duration: 100
  },
  translateY: {
    value: -49,
    delay: 100
  },
  translateX:
  {
    value: 54,
    delay: 300
  }
})

chessGame.add({
  translateY: {
    value: -104
  },
  translateX: {
    value: 110,
    delay: 300
  },
  opacity: {
    value: 0,
    delay: 500
  }
})

let whiteNumbers = anime({
  targets: '.numbers',
  rotate: {
    value: -40,
    delay: 200,
    duration: 800
  },
  scale: {
    value: 2,
    delay: 700
  },

  duration: 1000,
  autoplay: false
})

let btnChess = document.querySelector('.chess')
btnChess.onclick = chessGame.restart

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
  color: 'rgb(0, 63, 172)'
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
  }, color: 'rgb(34, 23, 18)'
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
  color: 'rgb(0, 63, 172)'
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
  color: 'rgb(34, 23, 18)'
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

let cardFlip = anime({
  targets: '.flip-card-inner',
  rotateY: 180,
  duration: 100,
  autoplay: false
})

let btnCard = document.querySelector('.flip-card')
btnCard.onclick = cardFlip.restart

//Create visible/hidden books function
let position = {
    hiddenBooks: false
}

let btnRetort = document.querySelector('.retort').onclick = function(){
  let visibleBooks = document.querySelectorAll('.visible');
  let hiddenBooks = document.querySelectorAll('.hidden');
  if (position.hiddenBooks) {
        for (let i = 0; i < hiddenBooks.length; i++) {
            hiddenBooks[i].style.visibility = 'hidden'
            visibleBooks[i].style.visibility = 'visible'
        }
        position.hiddenBooks = false
    } else {
        for (let i = 0; i < hiddenBooks.length; i++) {
            hiddenBooks[i].style.visibility = 'visible'
           visibleBooks[i].style.visibility = 'hidden'}
        position.hiddenBooks = true
    }}
//


//Change color of covers
let btnColorCover = document.querySelector('.img_books')
btnColorCover.onclick = function() {
  let changedBlock = document.querySelectorAll('.book')
  let btnarrow = document.querySelector('.arrow')
      btnarrow.style.bottom = '80%'
      btnarrow.style.opacity = '1'
  let colorWrapperArray = ["#fcca2a", "#f9f4ff","#221712", "#003fac", "#ba1200" ]
   {
                var changeBackgr = Math.floor(Math.random() * colorWrapperArray.length);
                var selectedColor = colorWrapperArray[changeBackgr];
      for (let i = 0; i < changedBlock.length; i++){
      changedBlock[i].style.background = selectedColor
    }}
    btnarrow.onclick = function(){
      for (let i = 0; i < changedBlock.length; i++){
        let harryCover = document.querySelector('.harry_potter')
        harryCover.style.background = 'rgb(186, 18, 0)'
        let chessCover = document.querySelector('.chess')
        chessCover.style.background = 'rgb(0, 63, 172)'
        let princessCover = document.querySelector('.white_princess')
        princessCover.style.background = 'rgb(186, 18, 0)'
        let codeCover = document.querySelector('.da_vinci')
        codeCover.style.background = 'rgb(0, 63, 172)'
        let masterCover = document.querySelector('.master')
        masterCover.style.background = 'rgb(186, 18, 0)'
        let farCover = document.querySelector('.far_451')
        farCover.style.background = 'rgb(0, 63, 172)'
        let plusOneCover = document.querySelector('.plus_one')
        plusOneCover.style.background = 'rgb(0, 63, 172)'
        let punishCover = document.querySelector('.dostoev')
        punishCover.style.background = 'rgb(186, 18, 0)'
        let playerCover = document.querySelector('.player')
        playerCover.style.background = 'rgb(0, 63, 172)'
        let coverArray = {
          harryCover: 'rgb(186, 18, 0)',
          playerCover: 'rgb(0, 63, 172)',
          chessCover: 'rgb(0, 63, 172)',
          princessCover: 'rgb(186, 18, 0)',
          codeCover: 'rgb(0, 63, 172)',
          masterCover: 'rgb(186, 18, 0)',
          farCover: 'rgb(0, 63, 172)',
          plusOneCover: 'rgb(0, 63, 172)',
          punishCover: 'rgb(186, 18, 0)'
        }
        changedBlock[i].style.background =  coverArray
  }}}

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

let btn02 = document.querySelector ('.white_princess').onclick = apple.restart
let btn04 = document.querySelector('.master').onclick = cards.restart
let btn05 = document.querySelector('.dostoev').onclick = line.play
let btn06 = document.querySelector('.da_vinci').onclick = code.restart
let btn07 = document.querySelector('.harry_potter').onclick = books.restart
letbtnLet = document.querySelector('.block_lines').onclick = letter.restart
let btn10 = document.querySelector('.plus_one').onclick = wheel.restart
let btn11 = document.querySelector('.animal').onclick = animalCover.restart
