<template>
    <div id="header">
      <h1><router-link to="/"><img src="../assets/logo.png" alt="logo"></router-link></h1>

      <div class="gnb">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.5-8v2H11v2h2v-2h1a2.5 2.5 0 1 0 0-5h-4a.5.5 0 1 1 0-1h5.5V8H13V6h-2v2h-1a2.5 2.5 0 0 0 0 5h4a.5.5 0 1 1 0 1H8.5z"/>
          </svg> POINT</a>
          <i class="sa_bar"></i>
        <a href="">SIGN IN</a>
      </div>

      <div class="login">
        <a href="#">LOGIN</a>
      </div>
    </div>
</template>
<script>
export default {
    name:'Header',
}
</script>
<style>
    

  #header{
    position: fixed;
    width:100%;
    height: 100px;
    top:0; left:0;
    padding:40px 40px 10px 40px;
    background:rgba(0,0,0,0.3);

    display: flex;
    justify-content: space-between;
    align-items:center;
    z-index: 999;
  }


  #header h1{
    width:120px
  }

  #header h1 a img{
    width:100%;
  }

.gnb{
  position: absolute;
  top:10px; right:40px;
}

  .gnb a{
    color:#fff;
    font-size:14px;
    font-weight: 700;
    transition: .5s;
  }

  .gnb a:hover{
    color:yellowgreen;
  }
  .sa_bar{
  display: inline-block;
  width:1px;
  height: 10px;
  background:#fff;
  margin:0px 10px;
  }
  .gnb a svg{
    fill:#fff;
    vertical-align: bottom;
    transition: .5s;
  }

  .gnb a:hover svg{
    fill:yellowgreen;
  }

  .login a{
    display: inline-block;
    color:#fff;
    background:#5f1985;

    padding:10px 20px;
    border-radius: 30px;
    font-weight: bold;
    transition: .5s;
  }
  .login a:hover{
    background:yellowgreen;
  }



  @media (max-width:480px){
      #header{
        position: fixed;
        width:100%;
        height: 60px;
        top:0; left:0;
        padding:20px 20px 10px 10px;
        background:rgba(0,0,0,0.3);

        display: flex;
        justify-content: space-between;
        align-items:center;
        z-index: 999;
    }


    #header h1{
      width:80px
    }


  .gnb{
    position: absolute;
    top:22px; right:80px;
  }

    .gnb a{
      color:#fff;
      font-size:8px;
      font-weight: 700;
      transition: .5s;
    }

    .sa_bar{
    display: inline-block;
    width:1px;
    height: 10px;
    background:#fff;
    margin:0px 10px;
    }
    .gnb a svg{
      fill:#fff;
      vertical-align: bottom;
      transition: .5s;
      display: none;
    }


    .login a{
      display: inline-block;
      color:#fff;
      background:#5f1985;

      padding:5px 10px;
      border-radius: 30px;
      font-weight: bold;
      transition: .5s;
      font-size:8px;
    }
  }

</style>