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
function removeDuplicateCharacters(str) {
    var arr_char = str.split("");
    console.log('arr_char',arr_char)
      var result_arr = [];
    
      for (var i = 0; i < arr_char.length; i++) {
        if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
          result_arr.push(arr_char[i]);
        }
    
      return result_arr.join("");
    }