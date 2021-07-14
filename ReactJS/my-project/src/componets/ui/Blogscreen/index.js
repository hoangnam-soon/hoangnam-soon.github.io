import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


const useStyles =makeStyles ({


    imagebanner : {
        width : '100%'
    }
});




const Blogscreen = () => {


    const classes = makeStyles();


    return(
        <div>
             <div><img className={classes.imagebanner} src="https://raw.githubusercontent.com/hoangnam-soon/hoangnam-soon.github.io/main/Cat-Cafe/img/BLOG/banner-blog.webp" alt="" /></div>
             <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <div>
              <h2>NHỮNG THỨ KHÔNG NÊN CHO BOSS ĂN</h2>
              <div><img src="https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/BLOG/blog-nh%E1%BB%AFng-th%E1%BB%A9-kh%C3%B4ng-n%C3%AAn.jpg?raw=true" alt="" /></div>
              <div>
                  <h3>Khoai tây sống</h3>
                  <p>Khoai tây là loại rau củ thường được sử dụng để chế biến các món ăn trong gia đình. Đây là thực phẩm có nhiều giá trị đối với con người. Tuy nhiên, đối với mèo, khoai tây không phải là thực phẩm tốt, đặc biệt là khoai tây chưa chín. Các hóa chất được tìm thấy trong lá và vỏ của khoai tây gây độc cho mèo và có thể ảnh hưởng đến hệ thống tiêu hóa gây ra các vấn đề về dạ dày cho hoàng thượng. Nên nếu sen thích khoai tây thì hãy “ăn mảnh” thôi nhé.</p>
                  <h3>Tỏi và hành tây</h3>
                  <p>Hành và tỏi có thể gây hại cho cả mèo và chó. Nhưng mèo thường nhạy cảm với hai loại gia vị này hơn. Một lượng nhỏ hành tây và tỏi cũng có thể khiến cục cưng của bạn bị nôn mửa, suy nhược và tiêu chảy. Nếu cho mèo ăn nhiều hoặc lặp đi lặp lại có thể dẫn đến thiếu máu thậm chí là tử vong. </p>
                  <h3>Thịt sống và cá sống</h3>
                  <p>Tuy mèo có thể ăn được thịt sống và cá sống nhưng “hoàng thượng” vẫn có nguy cơ bị ngộ độc vì các vi khuẩn có trong đó. Nên tốt nhất sen hay nấu chín thức ăn trước khi cho mèo cưng ăn nhé.</p>
                  <h3>Chocolate</h3>
                  <p>Chocolate có nhiều lợi ích đối với sức khỏe con người nhưng đối mèo đây thực sự là độc dược. Một số yếu tố trong chocolate có thể có hại cho mèo, đặc biệt là Theobromine và Caffeine. Những yếu tố này có thể gây ra các tình trạng như nôn mửa, thở nhanh, tăng nhịp tim và co giật. Nếu “hoàng thượng” ăn nhiều chocolate chúng có thể sẽ gặp phải nhiều vấn đề nghiêm trọng. </p>
                  <h3>Các chế phẩm từ sữa</h3>
                  <p>Nhiều bạn sen nghĩ rằng sữa là thực phẩm yêu thích và rất tốt cho mèo nhưng thực tế thì ngược lại. Các loại đường trong sữa có thể ảnh hưởng đến sức khỏe chúng, đặc biệt là mèo trưởng thành. Lượng đường Disaccarit trong các sản phẩm sữa cao hơn so với lượng đường cơ thể mèo có thể xử lý một cách hiệu quả. Vì vậy, việc sử dụng thường xuyên các sản phẩm từ sữa có thể gây hại cho mèo.</p>
                  <h3>Kết luận</h3>
                  <p>Nhu cầu dinh dưỡng của mỗi loài vật là khác nhau. Trước khi cho mèo cưng sử dụng bất cứ thực phẩm nào sen hãy tìm hiểu kỹ xem chúng có phù hợp và tốt với “hoàng thượng” không nhé. Nếu bạn không có thời gian để chuẩn bị thức ăn có thể cho mèo sử dụng thức ăn khô, vừa giàu dinh dưỡng lại an toàn với bé.</p>
              </div>
          </div>
        </Grid>
        
      </Grid>
    </div>
        </div>
    )
}

export default Blogscreen
