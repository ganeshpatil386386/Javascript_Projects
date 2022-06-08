const button = document.querySelector('#bg')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']
const label = document.querySelector('#demo')

body.style.backgroundColor = 'violet'
button.addEventListener('click', e => 
{
    const colorIndex= parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
    buttons.style.backgroundColor = colors[colorIndex]
})

