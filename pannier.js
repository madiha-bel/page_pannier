const Shoes = [

    {
        'marque': 'Adidas',
        'model': 'super-star',
        'price': 150,
        'image': 'img/img1.jpg'
    },
    {
        'marque': 'NewBalance',
        'model': 'NB69',
        'price': 65,
        'image': 'img/img2.jpg'
    },
    {
        'marque': 'Asics',
        'model': 'Asics69',
        'price': 45,
        'image': 'img/img3.jpg'

    }
]
let panier = document.querySelector('.panier')
let prixUnite = document.querySelector('.prix-unite')
let quantite = document.querySelector('.quantite')
let modal = document.querySelector('.modal')
let totalPrix = document.querySelector('.T_P')
let Shoes_choice = document.querySelector('.choes_choice')
let choice = document.querySelectorAll('.btnAjouter')

panier.addEventListener('click', function () {
    modal.style.display = 'block'
})

let total = 0;
for (let i = 0; i < choice.length; i++) {

    choice[i].addEventListener('click', function () {
        console.log('❤')
        updatePanier()
        changeValueQty(i)
        console.log(quantity)
  
        total += Shoes[i].price*quantity[i];
  
         
        totalPrix.textContent = 'Total panier' + " " + total +"€"

       
        const newProduct = document.createElement('div');

        const newPrice = document.createElement('p');
        newPrice.textContent += Shoes[i].price*quantity[i]+"€"

        const newModel = document.createElement('p');
        newModel.textContent = Shoes[i].marque + ' ' + Shoes[i].model;

        const newQty = document.createElement('p');
        newQty.textContent = 'Quantité: ' + quantity[i]

        const newPrixUnite = document.createElement('p');
        newPrixUnite.textContent = 'Prix unité: ' + Shoes[i].price

        const newBtnSupprimer = document.createElement('p');
        newBtnSupprimer.textContent = '❌'
       
         newBtnSupprimer.addEventListener('click', supElement)

         function supElement(){
            newProduct.style.display = 'none' }

        newProduct.append(newModel, newPrice, newQty, newPrixUnite, newBtnSupprimer)
        Shoes_choice.appendChild(newProduct)

        

      let fermer = document.querySelector('.ferme')
    fermer.addEventListener('click', closedPannier)

   
    })
}

 function closedPannier(){
        modal.style.display = 'none'
    }


function updatePanier() {
    let addDiv = document.createElement('div')
    let article = document.querySelector('.article-nb')
    article.appendChild(addDiv)
    console.log(article)
}


let btnPlusAll = document.querySelectorAll('.qty-plus');
let btnMinusAll = document.querySelectorAll('.qty-minus');
let qty = document.querySelectorAll('.qty');
let quantity = [0,0,0]



for (let i = 0; i < Shoes.length; i++) {
    btnPlusAll[i].addEventListener('click', function(){
        increaseQuantity(i)
    })
    btnMinusAll[i].addEventListener('click', function(){
        decreaseQuantity(i)
    })
}


console.log(qty[0].textContent)

function increaseQuantity(i){
    quantity[i]++
    changeValueQty(i)
    calcPrix(quantity,i)
}

function decreaseQuantity(i){
    if( quantity[i] > 0){
        quantity[i]--
        changeValueQty(i)
        calcPrix(quantity,i)
    }
   
}


let prixAfficher = document.querySelectorAll('.prixUnite')

for (let i = 0; i < Shoes.length; i++) {
    prixAfficher[i].textContent = Shoes[i].price+"€"
}

function changeValueQty(i){
   
    qty[i].value = quantity[i]
}

function calcPrix(quantity,i){
    prixCalculer = Shoes[i].price*quantity[i];
    prixAfficher[i].textContent = prixCalculer+"€"

    
}


