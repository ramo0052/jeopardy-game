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

const $buttons = document.querySelectorAll('.cell')

function show () {
  var overlay = document.getElementById("overlay");
  overlay.classList.add("show");

}


for (let $button of $buttons) {
  $button.addEventListener('click',show)
}




//loopoverbuttons//addtheeventlistener


  
// Clicking on any cell on the board should insert the cells clue and answer into the overlay and add the class show to the overlay.

// If this cell is clicked...

// <div class="cell" data-clue="Monica & Chandler" data-answer="What is Friends">200</div>

// The overlay should look like this

// <div id="overlay" class="overlay show">
//   <div id="clue" class="clue">Monica & Chandler</div>

//   <div class="responses">
//     <div id="answer" class="answer">What is Friends</div>
//     <button id="close" class="button close">Show Answer</button>
//   </div>

// </div>