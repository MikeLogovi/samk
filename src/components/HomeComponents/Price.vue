<template>
    <section class="price">
        <section>
            <div class="container-fluid">
                <div class="container">
                    <div class="row">
                         <div class="col-sm-4">
                              <div class="card">
                                  <div class="title">
                                      <i class="fa fa-paper-plan"></i>
                                      <h2>Basic</h2>
                                  </div>
                                  <div class="price">
                                      <h4><sup>$</sup>25</h4>
                                  </div>
                                  <div class="option">
                                      <ul>
                                        <li><i class="fa fa-check">10 GB Space</i></li>
                                        <li><i class="fa fa-check">3 GB Space</i></li>
                                        <li><i class="fa fa-check">2 GB Space</i></li>
                                        <li><i class="fa fa-check">1 GB Space</i></li>
                                       </ul>
                                  </div>
                                  <a href="#">Enroll now!</a>
                             </div>
                         </div>

                         <div class="col-sm-4">
                              <div class="card">
                                  <div class="title">
                                      <i class="fa fa-paper-plan"></i>
                                      <h2>Basic</h2>
                                  </div>
                                  <div class="price">
                                      <h4><sup>$</sup>25</h4>
                                  </div>
                                  <div class="option">
                                      <ul>
                                        <li><i class="fa fa-check">10 GB Space</i></li>
                                        <li><i class="fa fa-check">3 GB Space</i></li>
                                        <li><i class="fa fa-check">2 GB Space</i></li>
                                        <li><i class="fa fa-check">1 GB Space</i></li>
                                       </ul>
                                  </div>
                                  <a href="#">Enroll now!</a>
                             </div>
                         </div>

                          <div class="col-sm-4">
                              <div class="card">
                                  <div class="title">
                                      <i class="fa fa-paper-plan"></i>
                                      <h2>Basic</h2>
                                  </div>
                                  <div class="price">
                                      <h4><sup>$</sup>25</h4>
                                  </div>
                                  <div class="option">
                                      <ul>
                                        <li><i class="fa fa-check">10 GB Space</i></li>
                                        <li><i class="fa fa-check">3 GB Space</i></li>
                                        <li><i class="fa fa-check">2 GB Space</i></li>
                                        <li><i class="fa fa-check">1 GB Space</i></li>
                                       </ul>
                                  </div>
                                  <a href="#">Enroll now!</a>
                             </div>
                         </div>

                    </div>
                </div>
            </div>
        </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
section{
    width:100%;
    height:100vh;
    box-sizing:border-box;

}
.card{
    position:relative;
    max-width:300px;
    height:auto;
    background-image:linear-gradient(-45deg,#fe8847,#feae3f);
    border-radius:15px;
    margin:0 auto;
    box-shadow:0 10px 15px ;
    transition:all 0.5s;
    padding:40px 20px;
}
.col-sm-4:nth-child(1) .card,
.col-sm-4:nth-child(1) .card .title .fa
{
    background:linear-gradient(-45deg,#f403d1,#64b5f6);
}
.col-sm-4:nth-child(2) .card,
.col-sm-4:nth-child(2) .card .title .fa{
    background:linear-gradient(-45deg,#ff6c61,#f321d7);
}
.col-sm-4:nth-child(3) .card,
.col-sm-4:nth-child(3) .card .title .fa{
    background:linear-gradient(-45deg,#24ff72,#9a4eff);
}
.card:before{
    content:'';
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:40%;
    background:rgba(255,255,255,1);
    z-index:1;
    transform:skewY(-5deg) scale(1.5);
}
.title .fa{
    color:#fff;
    font-size:60px;
    width:100px;
    height:100px;
    border-radius:50%;
    text-align:center;
    line-height:100px;
    box-shadow:0 10px 10px rgba(0,0,0,0.33);
}
.title h2{
    position:relative;
    margin:20px 0 0;
    padding:0;
    color:white;
    font-size:28px;
    z-index:2;
}
.price{
    position:relative;
    z-index:2;

}
.price h4{
    margin:0;
    padding:20px 0;
    color:#fff;
    font-size:60px;

}
.option{
    position:relative;
    z-index:2;
}
.option ul{
    margin:0;
    padding:0;
}
.option ul li{
    margin:0;
    padding:0;
    list-style:none;
    color:#fff;
    font-size:16px;
}
.card a{
    position:relative;
    z-index:2;
    background:#fff;color:;
    width:150px;height:40px;
    display:block;
    text-align:ceter;
    margin:20px auto 0;
    border-radius:40px;
    font-size:16px;
    cursor:none;
    box-shadow:0 5px 10px;
}
.card a:hover{
    text-decoration:none;
}
</style>
