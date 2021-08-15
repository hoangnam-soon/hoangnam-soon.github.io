// Bài 1

// Viết hàm getDateAgo(date, days) để hiển thị ngày trong tuần ở định dạng ngắn gọn: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

const getdays = () => {
    var date = new Date()
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";


     var today = weekday[date.getDay()]
     return today
}
alert('Today is ' + getdays())
console.log('today',getdays())







// Bài 2

// Tạo một hàm getDateAgo(date, days) để trả về ngày của tháng, ngày trước kể từ ngày.

// Ví dụ: nếu hôm nay là ngày 20, thì getDateAgo(new Date(), 1) phải là 19 và getDateAgo(new Date(), 2) phải là 18.

// Nên hoạt động đúng trong days = 365 hoặc hơn:

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

const daysAgo = () =>{
    var date = new Date()
    var daysAgo = new Date(date)
    daysAgo.setDate(date.getDate()-1)
   
    return daysAgo
}
alert('Yesterday is ' + daysAgo())





// Bài 3

// Viết một hàm getLastDayOfMonth(year, month) trả về ngày cuối cùng của tháng. Đôi khi đó là ngày 30, 31 hoặc thậm chí 28/29 đối với tháng 2.

// Thông số:

// year – năm có bốn chữ số, ví dụ như năm 2012.
// year – tháng, từ 0 đến 11.
// Ví dụ: getLastDayOfMonth(2012, 1) = 29 (năm nhuận, tháng 2).

const getLastDayOfMonth = (year,month) =>{
    return new Date(year,month,0).getDate()

}
alert('Last day of February in 2020 is :' + getLastDayOfMonth(2020,2))




// Bài 4

// Tạo một hàm getSecondsToTomorrow() trả về số giây cho đến ngày mai.



const getSecondsToTomorrow =() =>{
    var date = new Date()
    var tomorrow = new Date(date)
   tomorrow.setDate(date.getDate()+1)
    var  timeToday = date.getTime()
    var timetomorrow = tomorrow.getTime()
    var timeCountdown = timetomorrow - timeToday
    // var days = Math.floor(timeCountdown / (1000 * 60 * 60 * 24));
    // var hours = Math.floor((timeCountdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutes = Math.floor((timeCountdown % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeCountdown /1000));

   
    return seconds
}

alert('Còn ' + getSecondsToTomorrow() + 's là đến ngày mai')
// Bài 5

// Viết một hàm formatDate(date) sẽ định dạng date như sau:

// Nếu kể từ ngày trôi qua dưới 1 giây, thì “ngay bây giờ”.
// Ngược lại, nếu kể từ ngày trôi qua dưới 1 phút, thì “n giây trước”.
// Ngược lại, nếu ít hơn một giờ, thì “m min. Ago”.
// Nếu không, ngày đầy đủ ở định dạng “DD.MM.YY HH: mm”. Đó là: “day.month.year hours: minutes”, tất cả đều ở định dạng 2 chữ số, ví dụ: 31.12.16 10:00.
// Ví dụ:

// alert( formatDate(new Date(new Date - 1)) ); // "right now"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// // yesterday's date like 31.12.16 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );
// Bài 6

// Viết hàm tính toán chênh lệch giữa 2 ngày bất kỳ ở dạng ( dd/mm/yyy hoặc mm/dd/yyyy). Check xem chênh lệch bao nhiêu ngày 
var date1 = new Date("10/11/1995"); 
var date2 = new Date("10/11/2021"); 
  

var Difference_In_Time = date2.getTime() - date1.getTime(); 
  

var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
alert (Difference_In_Days)
function removeDuplicateCharacters(str) {
    var arr_char = str.split("");
    console.log('arr',arr_char)
      var result_arr = [];
    
      for (var i = 0; i < arr_char.length; i++) {
        console.log('str.index',str.indexOf(arr_char[i]));
        // if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
        
        // //   result_arr.push(arr_char[i]);
        }
    
      return result_arr.join("");
    }

    removeDuplicateCharacters("abcaaa")