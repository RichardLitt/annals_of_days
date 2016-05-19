// TODO What does this actually do again? Find out
// Do I need a semicolon after it? Why not?
'use strict'

// TODO Get offline docs.

// TODO Get an automatic commenter, so that I don't need to write
// // After each line.

const days = 7
const constants = [
  'The sun rises.',
  'The sun is high in the sky.',
  'The sun sets.',
  'And it is night.'
]

// var variables = [
//   'The frog plops into the pond.',
//   'A heron stalks the shore.',
//   'The rice bowl is emptied.',
//   'Autumn winds stir, again',
//   'Traveller is my name.',
//   'I see the face of God in the flowers.',
//   'This banana tree is verdant.'
// ]

// TODO What is the actual different between const and var?
var annals = ''
var i = 0, k = 0, j = 0

// Write the days
function writeDays (days) {
  // Make a copy of the variables, so we can cut from it.
  // This doesn't work.
  var variables = [
    'The frog plops into the pond.',
    'A heron stalks the shore.',
    'The rice bowl is emptied.',
    'Autumn winds stir, again',
    'Traveller is my name.',
    'I see the face of God in the flowers.',
    'This banana tree is verdant.'
  ]

  // This could probably be a for loop. I can't remember how to make
  // a for-loop synchronous, or how to return a value from one
  // Which seems like a pretty bad gap in my knowledge. TODO find out
  while (i <= days) {
    // Start the day
    annals += `\n\nDay ${i}\n`
    // Add in the constants
    while (j < constants.length) {
      // Add the first constant
      // console.log(constants[j])
      annals += constants[j] + '\n'
      // Add in some events that happen in the day
      // Don't add more than you've got delineated; aka don't copy
      for (k = 0; k < Math.floor(variables.length * Math.random()); k++) {
        if (variables[k]) {
          annals += `${variables[k]}\n`
          delete variables[k]
        }
      //   annals += variables[Math.floor]
      }
      j++
    }
    if (j == constants.length) { j = 0 }
    if (i == days) {
      return annals
    }
    i++
  }
}

console.log(writeDays(days))
