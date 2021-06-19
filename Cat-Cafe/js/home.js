$(function () {

    $.get("http://localhost:3000/posts", function (data) {
        //kiểm tra xem lấy đk data chưa
        console.log('data', data)
        let the_cha = $('.menu-homepage .container .row .home-list-item')
        data.forEach(element => {
            the_cha.append(`
            <div class="item">
            <div class="item-img">
                <img src="${element.img}" alt="">
            </div>
            <div class="item-infor">
               ${element.infor}
            </div>
            <div class="item-cost">
               ${element.cost}
            </div>

        </div>
            `)
        });
    });
})