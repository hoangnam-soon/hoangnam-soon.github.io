$(function () {




// Hàm search
  $('#search-name').keyup(function (event) {
    if (event.which === 13) {
      // xóa body cũ thay body mới là rỗng
      $("#body-item").html("");
      $.get(`http://localhost:3000/dataList?name_like=${event.target.value}`, function (data, status) {
        data.forEach(item => {
          $("#body-item").append(`
                        <tr>
                          <td>${item.name}</td>
                          <td>${item.age}</td>
                          <td>${item.email}</td>
                          <td>${item.description}</td>
                          <td class="delete-data"  data-id=${item.id}><i class="fas fa-trash"></i></td>
                          <td class="update-data"  data-id=${item.id} ><i class="fas fa-user-edit"></i></td>
                        </tr>
                        `)
        });
      })




    }


  })



  const reUpdateDom = () => {
    $.get(`http://localhost:3000/dataList`, function (data, status) {

      let newDom = ''
      data.forEach(item => {
        newDom = newDom + `
        <tr>
          
          <td>${item.name}</td>
          <td>${item.age}</td>
          <td>${item.email}</td>
          <td>${item.description}</td>
          <td class="delete-data"  data-id=${item.id} ><i class="fas fa-trash"></i></td>
          <td class="update-data"  data-id=${item.id}><i class="fas fa-user-edit"></i></td>
          
        </tr>
        `
      })
      let newBody = ` <tbody id="body-item">${newDom}</tbody>`
      $('#body-item').replaceWith(newBody)
      listenClick()




    }


    )
  }

  const listenClick = () => {
    $(".delete-data").click(function (event) {
      let { id } = event.currentTarget.dataset
      $.ajax({
        url: `http://localhost:3000/dataList/${id}`,
        type: 'DELETE',
        success: function (result) {

          // replaceWith lại body
          reUpdateDom()

        }
      });
    })
    $(".update-data").click(function (event) {
      let { id, name,age,email } = event.currentTarget.dataset
      $('#exampleModal').modal('show');
      let field_name = $('#field-name').val(name)
      let field_age = $('#field-age').val(age)
      let field_email=$('#field-email').val(email)
      

     

    })
  }

  $('#onUpdate').click(function (event) {
    let { id } = event.currentTarget.dataset
    
    let field_name = $('#field-name').val()
    let field_age = $('#field-age').val()
    let field_email=$('#field-email').val()

    $.ajax({
      type:  'PUT',
      url: `http://localhost:3000/dataList/${id}`,
      data: {
        field_name,
        field_age,
        field_email,
        description: "i'm " + field_name
      },
      success: function (result) {
        console.log('result',result)
        // debugger
        // $('#exampleModal').modal('toggle')
        // reUpdateDom()
      }
    });

  })








  $.get(`http://localhost:3000/dataList`, function (data, status) {
    console.log("data", data);

    data.forEach(item => {
      $("#body-item").append(`
                    <tr>
                      <td>${item.name}</td>
                      <td>${item.age}</td>
                      <td>${item.email}</td>
                      <td>${item.description}</td>
                      <td class="delete-data"  data-id=${item.id}><i class="fas fa-trash"></i></td>
                      <td class="update-data"  data-id=${item.id} data-name=${item.name} data-age=${item.age} data-email=${item.email} data-description=${item.description}><i class="fas fa-user-edit"></i></td>
                    </tr>
                    `)
    });
    listenClick()

  });



  $('#onAdd').click(function (event) {
    let { id } = event.currentTarget.dataset 
    // lay data cua 3 field
    let name = $('#field-name').val()
    let age = $('#field-age').val()
    let email = $('#field-email').val()

    $.ajax({
      type:  "POST",
      url: "http://localhost:3000/dataList",
      data: {
        name,
        age,
        email,
        description: "i'm " + name
      },
      success: function (result) {
        $('#exampleModal').modal('toggle')
        reUpdateDom()
      }
    });

  })




  // typescript ---> Ngôn ngữ hướng đối tượng





})







// // var [{prop:x}]=[]
// var [{prop:x} = {prop:123}]=[]
// console.log('x',x)


// // khác nhau giữa let và var
// if(true){
//     var d =2 
// }
// console.log('d',d)
// if(false){
//     let c = 3
// }
// console.log('c',c)

// // var sẽ đưa lên đầu còn let thì không
// console.log('a',a)
 
// var a = 'ok'


// const na={
//     name: 'nam'
//     age : 17
// }
// na.age=16
// console.log('na',na)
// // hàm map là trả về một mảng mới tương ứng độ dài với mảng cũ mỗi lần lặp sẽ trả về một gì đó
// let arr=[1,2,3,4]

// // let a = arr.map((item,index) =>{
// //     return{
// //         key : index,
// //         value : item
// //     }
// // })
// // console.log('a',a)

// // // tương tự ở es6
// let retunObj= (arr) => arr.map((item,index) => ({key:index,value:item}))
// console.log('retunObj',retunObj(arr))
function removeDuplicateCharacters(str) {
  var arr_char = str.split("");
  console.log('arr',arr_char)
    var result_arr = [];
  
    for (var i = 0; i < arr_char.length; i++) {
      if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
        result_arr.push(arr_char[i]);
      }
  
    return result_arr.join("");
  }