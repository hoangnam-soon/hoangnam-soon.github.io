import React from 'react'
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Opacity } from '@material-ui/icons';
const useStyles = makeStyles({
    titleHomeBlog: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '30px'
    },
    titleBlog:{
        '&:after':{
            content: '""',
            width: '50%',
            height: '4px',
            backgroundColor: 'white',
            display: 'block'
        },
        fontSize: '40px',
        textTransform: 'uppercase',
        fontFamily: 'Bebas Neue',
        color: 'white'
    },
    viewMore : {
        display: 'inline-block'
    },
    veiwMoreLink : {
        backgroundColor: '#cf4d24',
        padding: '7px 15px',
        display: 'inline-block'
    },
    wrapBlog : {
        width : '350px',
        display : 'flex',
        margin : '15px 0px 0px ',
    },
    imageBlogFirst : {
        width:'1232px',
        height : 'fit-content'

    },
    blogTitle : {
        fontSize : '18px',
        textTransform : 'none',
        color : '#cf4d24',
        margin :'10px 5px'

    },
    blogComment : {
        fontSize : '14px',
        textTransform : 'none',
        color : 'white',
        Opacity :'0.8',
        margin : '0px 0px 10px 5px'

    },
    imageBlog : {
        width : '350px',

    },
    rightBlog : {
        margin : '0px 10px 20px 0px'
    },
   
  });


const Blog = () => {
 const classes = useStyles();


    const listBlog = [
        // {
        //     img :"https://hoangnam-soon.github.io/Cat-Cafe/img/BLOG/blog-img-1.jpg",
        //     title:'7 BÍ KÍP KHỬ MÙI HÔI CHO CÚN VÀ MIU 100% TỰ NHIÊN',
        //     comment:'THỨ BẢY 22.03.2021 Làm sao để loại bỏ mùi hôi cơ thể của Cún và Miu nhanh chóng và hiệu quả? Cùng tham khảo các phương pháp 100% tự nhiên, đã được kiểm chứng sau đây ... '
        // },
        {
            img :"https://hoangnam-soon.github.io/Cat-Cafe/img/BLOG/blog-img-2.jpg",
            title:'Diệt Bệnh Nấm Cho Mèo Ngay Tại Nhà',
            comment:'Nấm là căn bệnh không lạ lẫm đối với các sen nuôi mèo. Bệnh chủ yếu do ký sinh trùng gây ra và ảnh hưởng xấu đến sức khỏe của “hoàng thượng”. Triệu chứng ban đầu của bệnh rất khó nhận biết , chỉ khi sen kiểm tra mèo thường xuyên.'
        },
        {
            img :"https://hoangnam-soon.github.io/Cat-Cafe/img/BLOG/blog-img-3.jpg",
            title:'Cách để khiến mèo yêu bạn',
            comment:'Mèo cần tình yêu và sự quan tâm để có một cuộc sống khỏe mạnh. Nếu được yêu thương và chăm sóc đúng cách, chú mèo của bạn cũng sẽ yêu bạn. Bài viết này sẽ giúp bạn nuôi dưỡng tình cảm với chú mèo cưng của mình.'
        },
    ]

    return(
        <>
    <div className={classes.titleHomeBlog}>
        <div className={classes.titleBlog}>blog</div>
        <div className={classes.viewMore}><Link className={classes.veiwMoreLink}>xem thêm</Link></div>
    </div>
      <div>
          <div><img className={classes.imageBlogFirst} src="https://hoangnam-soon.github.io/Cat-Cafe/img/BLOG/blog-img-1.jpg" alt="" /></div>
          <div className={classes.blogTitle}>7 BÍ KÍP KHỬ MÙI HÔI CHO CÚN VÀ MIU 100% TỰ NHIÊN </div>
          <div className={classes.blogComment}>THỨ BẢY 22.03.2021 Làm sao để loại bỏ mùi hôi cơ thể của Cún và Miu nhanh chóng và hiệu quả? Cùng tham khảo các phương pháp 100% tự nhiên, đã được kiểm chứng sau đây ...</div>
          <a className='buy-button' href="">xem thêm</a>
      </div>
      <div className={classes.wrapBlog}>
    {
        listBlog.length && listBlog.map((item,index)=>{
          return( <Link className={classes.rightBlog} >
            <div><img className={classes.imageBlog} src={item.img} alt="" /></div>
            <div className={classes.blogTitle}>{item.title}</div>
            <div className={classes.blogComment}>{item.comment}</div>
            <a className='buy-button' href="">xem thêm</a>
          </Link>
          
          )
        })
      }
    </div>



        </>
    )
}
export default Blog