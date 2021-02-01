$(function() {
    // logic here
    
    let arrImages = [
        {
            frontImg: 'https://robinhuy.github.io/memory-card/img/f12.jpg',
            backImage: 'https://robinhuy.github.io/memory-card/img/back.jpg'
        },
        {
            frontImg: 'https://robinhuy.github.io/memory-card/img/f1.jpg',
            backImage: 'https://robinhuy.github.io/memory-card/img/back.jpg'
        },
        {
            frontImg: 'https://robinhuy.github.io/memory-card/img/f2.jpg',
            backImage: 'https://robinhuy.github.io/memory-card/img/back.jpg'
        },
        {
            frontImg: 'https://robinhuy.github.io/memory-card/img/f3.jpg',
            backImage: 'https://robinhuy.github.io/memory-card/img/back.jpg'
        },
        {
            frontImg: 'https://robinhuy.github.io/memory-card/img/f4.jpg',
            backImage: 'https://robinhuy.github.io/memory-card/img/back.jpg'
        },
        {
            frontImg: 'https://robinhuy.github.io/memory-card/img/f5.jpg',
            backImage: 'https://robinhuy.github.io/memory-card/img/back.jpg'
        },
        {
            frontImg: 'https://robinhuy.github.io/memory-card/img/f6.jpg',
            backImage: 'https://robinhuy.github.io/memory-card/img/back.jpg'
        }
    ]
    
    
    
    
    
    for(i=0; i<=arrImages.length-1; i++) {
        $("#main").append(`<div class="card">
        <div class="card__face card__face--back">
            <img src="${arrImages[i].frontImg}" alt="">
        </div>
        <div class="card__face card__face--front">
        <img src="${arrImages[i].backImage}" alt="">
        </div>
      </div>`);
    }
    
    
    
    var card = document.querySelector('.card');
    card.addEventListener( 'click', function() {
      card.classList.toggle('is-flipped');
    });
    
    
    });