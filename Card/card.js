var cards = ['1', '2', '3', '4', '5', '6', '7', '8'];
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
    for (var i = 0, i < cards.length, i++) {
        $('.card').append(` <div class="front">
        <img src="./New folder/1.jpg" alt="">
           </div>
        <div class="back">
        <img src="./New folder/Lol_worlds_logo.png" alt="">
    </div>`)
    }
})

