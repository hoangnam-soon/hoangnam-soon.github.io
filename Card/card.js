var current = null
let cards= [
    {
        frontImg:'https://hoangnam-soon.github.io/Card/img/1.jpg',
        backImg:'https://hoangnam-soon.github.io/Card/img/Lol_worlds_logo.png',
       data : '1'
    },
    {
        frontImg:'https://hoangnam-soon.github.io/Card/img/2.jpg',
        backImg:'https://hoangnam-soon.github.io/Card/img/Lol_worlds_logo.png',
       data : '2'
    },
    {
        frontImg:'https://hoangnam-soon.github.io/Card/img/3.jpg',
        backImg:'https://hoangnam-soon.github.io/Card/img/Lol_worlds_logo.png',
       data : '3'
    },
    {
        frontImg:'https://hoangnam-soon.github.io/Card/img/4.jpg',
        backImg:'https://hoangnam-soon.github.io/Card/img/Lol_worlds_logo.png',
       data : '4'
    },
    {
        frontImg:'https://hoangnam-soon.github.io/Card/img/5.jpg',
        backImg:'https://hoangnam-soon.github.io/Card/img/Lol_worlds_logo.png',
       data : '5'
    },
    {
        frontImg:'https://hoangnam-soon.github.io/Card/img/6.jpg',
        backImg:'https://hoangnam-soon.github.io/Card/img/Lol_worlds_logo.png',
       data : '6'
    },
    {
        frontImg:'https://hoangnam-soon.github.io/Card/img/7.jpg',
        backImg:'https://hoangnam-soon.github.io/Card/img/Lol_worlds_logo.png',
       data : '7'
    },
    {
        frontImg:'https://hoangnam-soon.github.io/Card/img/8.jpg',
        backImg:'https://hoangnam-soon.github.io/Card/img/Lol_worlds_logo.png',
       data : '8'
    },
]
function shuffle(array) {
    var currentIndex = array.length, temproaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temproaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temproaryValue
    }
    return array
}
function flip(card) {
    $(card).toggleClass('flipped')
}
$(function () {
    // Nhân đôi mảng để tạo các thẻ bài
    cards = cards.concat(cards)
    // Đảo vị trí các quân bài
    cards = shuffle(cards)
    // Chèn nội dung vào các quân bài trong element có nhóm class là content
    debugger
    for(i=0; i<=cards.length-1; i++){
        $(".content").append(` <div class="grid">
        <div class="card" data="cards[i]">
            <div class="front">
                <img src="${cards[i].backImg}" alt="">
            </div>
            <div class="back">
                <img src="${cards[i].frontImg}" alt="">
            </div>
        </div>
    </div>`)
    }
})

