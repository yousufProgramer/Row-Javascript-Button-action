const body = document.querySelector('body');

function $(createElement) {
    return document.createElement(`${createElement}`)
}

const div = $('div');
const h2 = $('h2');
const divCard = $('div');
const img = $('img');
img.src= "card.jpg" ;
img.alt = 'img' 
img.className = 'img'
const cardBodyDiv = $('div');
const content = `<h4>Name : Yousuf Ahmed</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, hic.</p>

<button class="btn">Redesign Card</button>

<button class="btn1">Back Design</button>
`

body.appendChild(div);
div.className= '';
div.appendChild(h2)
h2.innerText = 'Card Design'

div.appendChild(divCard);
divCard.className = '';
divCard.appendChild(img)
img.className = ''
divCard.appendChild(cardBodyDiv);
cardBodyDiv.className = '';
cardBodyDiv.innerHTML = content;

const button = document.querySelector('.btn');
const button2 = document.querySelector('.btn1')

button.addEventListener('click',() => {
    div.className= 'main-card';
    img.className = 'img'
    divCard.className = 'card';
    cardBodyDiv.className = 'card-body';
})

button2.addEventListener('click',() => {
    div.className= '';
    img.className = ''
    divCard.className = '';
    cardBodyDiv.className = '';
})


///// input flied 


 