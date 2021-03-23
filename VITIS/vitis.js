function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
$(function(){
  $.get(`http://localhost:3000/listStudent`,function(data,status){
    console.log("data",data)
    data.forEach(item => {
      $(".sale").append(` <div class="row">
      <div class="col-sm-3 col">
                    <div class="sale-item1">
                        <div class="img-sale">
                        <img src="${item.img}" alt="">
        
                        </div>
        
                        <div class="infor-sale">
                           ${item.inforSale}
        
                        </div>
                        <div class="price">
                            <div class="cost"> ${item.cost} </div>
                            <div class="pay">${item.pay}</div>
        
                        </div>
                        <div class="sale-off-top">
                            <div class="sale-title-top">
                                ${item.titleTop}
                            </div>
        
                        </div>
                        <div class="heart deafault-icon">
                            <svg class="deafault-icon" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                                <defs>
                                    <path id="2j0n45s2ia"
                                        d="M16 31.959l-.472-.469C11.885 27.881 0 15.632 0 9.555 0 4.285 3.978 0 8.868 0c2.73 0 5.362 1.417 7.037 3.79l.095.136.093-.134C17.77 1.417 20.401 0 23.133 0 28.022 0 32 4.286 32 9.555c0 6.189-13.94 20.34-15.53 21.933l-.47.47z" />
                                </defs>
                                <g fill="none" fill-rule="evenodd">
                                    <g>
                                        <g transform="translate(-376 -720) translate(376 720)">
                                            <mask id="bseh256w8b" fill="#fff">
                                                <use xlink:href="#2j0n45s2ia" />
                                            </mask>
                                            <use fill="#050000" xlink:href="#2j0n45s2ia" />
                                            <g fill="#333" mask="url(#bseh256w8b)">
                                                <path d="M0 0H32V32H0z" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
        
        
                        </div>
                        <div class="glass deafault-icon bottom">
                            <svg class="deafault-icon bottom" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                viewBox="0 0 32 32">
                                <g fill="none" fill-rule="evenodd">
                                    <g fill="#333">
                                        <g>
                                            <path
                                                d="M10 32c-.552 0-1-.448-1-1s.448-1 1-1h5.007v-9.15h-.012c-2.095-.216-4.022-1.11-5.637-2.631l-.252-.246c-1.169-1.173-1.993-2.688-2.381-4.376-.442-1.916-.471-3.93-.087-5.854l.089-.41L8.353.316c.028-.12.118-.214.232-.25l.071-.014L9.261 0h13.458c.604 0 .855.301 1.027 1.001l.08.37 1.237 5.351.152.684.126.619.103.564c.167.991.217 1.767.173 2.644-.092 1.838-.615 3.6-1.512 5.096-1.491 2.492-4.11 4.188-7.013 4.542l-.103.01L16.988 30H22c.552 0 1 .448 1 1s-.448 1-1 1H10zM21.929 1.98H10.003l-1.344 5.8c-.377 1.62-.407 3.328-.09 4.962l.086.407c.308 1.331.951 2.518 1.856 3.426 1.776 1.788 4.03 2.615 6.341 2.328 2.296-.28 4.374-1.624 5.553-3.592.673-1.122 1.089-2.44 1.209-3.83l.023-.35.008-.183c.021-.64-.021-1.231-.15-1.997l-.086-.483-.11-.535-.13-.6-1.24-5.352z"
                                                transform="translate(-496 -656) translate(496 656)" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
        
        
                        </div>
      
      
      
      
      
      
      
      
      
      
      </div>  `)
    });


  })
})