const categories = [
  {
    title: 'Sci-Fi Stuff',
    clues: [
      {
        text: `The latex prosthetic ears worn by this 'Star Trek' actor in the late '60s even have some residual makeup left on them`,
        value: 200,
        answer: `Who is Leonard Nimoy`
      },
      {
        text: `The piece here is really green cast resin in crystal form, but in 'Superman III', it was called this, & appeared onscreen with Christopher Reeve`,
        value: 400,
        answer: `What is Kryptonite`
      },
      {
        text: `Seen in Dr. Zaius' private chambers, the Lawgiver statue from this 1968 film looks to be stone, but is actually made of cast & carved rigid polyfoam`,
        value: 600,
        answer: `What is Planet of the Apes`
      }
    ]
  },
  {
    title: 'TV Shows By Couple',
    clues: [
      {
        text: `Monica & Chandler`,
        value: 200,
        answer: `What is Friends`
      },
      {
        text: `Carrie & Mr. Big`,
        value: 400,
        answer: `What is Sex and the City`
      },
      {
        text: `Jim Halpert & Pam Beesly, who hooked up at work`,
        value: 600,
        answer: `What is The Office`
      }
    ]
  },
  {
    title: 'Mother Goose',
    clues: [
      {
        text: `They were the 'Three Men in a Tub'`,
        value: 200,
        answer: `Who is the butcher, the baker, the candlestick maker`
      },
      {
        text: `March winds & April showers brings forth these`,
        value: 400,
        answer: `What is May Flowers`
      },
      {
        text: `After 'Jack fell down and broke his crown', he 'went to bed to mend his head' using brown paper & this liquid`,
        value: 600,
        answer: `What is Vinegar`
      }
    ]
  }
]
// //Step 2 replace all the HTML inside the board

const board = document.getElementById('board')

board.innerHTML = ''

const categoryGroup = []

for(const category of categories){
  categoryGroup.push(`<div class="category">`)
  categoryGroup.push(`<div class="title">${category.title}</div>`)
  const clues = category.clues

      for(const clue of clues){
      categoryGroup.push(`<div class="cell" data-clue="${clue.text}" data-answer="${clue.answer}">${clue.value}</div>`)
    }
    categoryGroup.push(`</div>`)
}

board.innerHTML = categoryGroup.join(" ")

//Step 3 When click any cell, insert the cells clue and answer into the overlay and add the class show to the overlay.
// retrieve buttons
const $button = document.querySelectorAll('.cell')
const $showAnswer = document.getElementById('close')

// retrieve elements
const $answers = document.getElementById('answer')
const $overlay = document.getElementById('overlay')
const $clues = document.getElementById('clue')

// Event Listener to insert the cells clue and answer into overlay and add the class show to the overlay.
board.addEventListener('click', function (e) {
  let clickedClue = e.target.dataset.clue
  $clues.textContent = clickedClue
  let clickedAnswer = e.target.dataset.answer
  $answers.textContent = clickedAnswer
  $overlay.classList.add('show')
})

// Step 4 Clicking on the 'Show Answer' button should add the class show on the answer and switch the text of the button to 'Close'. 
// Clicking on the button again should remove the class of show from the answer and the overlay and change the text of the button to 'Show Answer'.
$showAnswer.addEventListener('click', function (e) {
  $answers.classList.toggle('show')
  if ($answers.classList.contains('show')) {
    $showAnswer.textContent = 'Close'
  } else {
    $overlay.classList.remove('show')
    $showAnswer.textContent = 'Show Answer'
  }
})



