<template>
    <div>
        <div class="ban">
            <VueSlickCarousel v-bind="settings" ref="carousel">
                <div><a><img src="../assets/img_ban01.png" alt=""></a></div>
                <div><a><img src="../assets/img_ban02.png" alt=""></a></div>
                <div><a><img src="../assets/img_ban03.png" alt=""></a></div>
            </VueSlickCarousel>
            
            <button @click="showNext">show me the next</button>
        <span class="grd"></span>
    </div>

    <div class="visual">
        <ul>
            <li>
                <a href="#"><img src="../assets/img_card03.png" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="../assets/img_card02.png" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="../assets/img_card05.png" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="../assets/img_card04.png" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="../assets/img_card01.png" alt=""></a>
            </li>
        </ul>
    </div>
    
    <GameList />
    </div>
</template>
<script>

import GameList from './GameList'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
    name:'Main',
    components:{GameList , VueSlickCarousel},
    data:function(){
        return{
            settings:{
                "dots": true,
                "dotsClass": "slick-dots custom-dot-class",
                "edgeFriction": 0.35,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "autoplay":true,
                "autoplaySpeed":3000
            },
            bans:[
                {
                    id:"1",
                    img:require("../assets/img_ban01.png"),
                    site:"#"
                },
                {
                    id:"2",
                    img:require("../assets/img_ban02.png"),
                    site:"#"
                },
                {
                    id:"3",
                    img:require("../assets/img_ban03.png"),
                    site:"#"
                }
            ]
        }
    },
    methods: {
      showNext() {
        this.$refs.carousel.next()
      },
    },
}
</script>
<style>
    ul,li{list-style: none; padding:0; margin:0;}
    .ban{
        position: relative;
        height: 950px;
        width:100%;
        margin: 0 auto;
        padding:0;
        overflow: hidden;
    }
    .ban .slick-next,
    .ban .slick-prev{
    opacity: 0;
    position:absolute;
    }
    .ban div{
        height: 100%;
        width:100%;
        display: flex;
        position: relative;
    }

    .ban div a{
        width:100%;
        height:100%;
        flex:0 0 auto;
    }

.ban .slick-dots {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform:translateX(-50%);
    list-style: none;
    margin: 0;
    padding: 0;
    z-index: 50;
    
    
  }
  
  .ban .slick-dots li {
    display: inline-block;
    margin: 0 3px;
  }

    .ban .slick-dots li button {
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background: rgba(255, 255, 255, 0.8);
    font-size: 0;
    border: none;
    padding: 0;
    transition: .5s;
    outline-style: none;
  }
  
  .ban .slick-dots li.slick-active button {
    background: #FF9292;
    width:36px;
    border-radius: 30px;
  }
    .ban div a img{
        width:100%;
        height: 100%;;
    }

    .grd{
        position: absolute;
        bottom:0;
        left:0;
        width:100%;
        height: 150px;
        background:url('../assets/bottom_bg.png') repeat-x;
    }


    .visual{
        position: absolute;
        top: 800px;
        left:50%;
        transform:translateX(-50%);
    }
    .visual ul{
        display: flex;
        justify-content: center;
    }
    .visual ul li{
        padding:0 15px;
        transition: .5s;
    }

    .visual ul li:hover{
        transform: scale(1.1);
    }
        #carousel .slick-list {
        border-radius: 12px;
        overflow: hidden;
    }

    #carousel .slick-slide {
        float: left;
        height: 100%;
        min-height: 1px;
    }


@media (max-width:480px){
    .ban{
        position: relative;
        height: 300px;
        width:90%;
        margin: 0 auto;
        padding:0;
        overflow: hidden;
        border-radius: 30px;
        margin-top:80px;
    }
    .grd{
        position: absolute;
        bottom:0;
        left:0;
        width:100%;
        height: 150px;
        background:url('../assets/bottom_bg.png') repeat-x;

        display: none;
    }

    .ban .slick-dots {
        position: absolute;
        bottom: 8%;
        left: 50%;
        transform:translateX(-50%);
        list-style: none;
        margin: 0;
        padding: 0;
        z-index: 50;
  }
    .ban .slick-dots li button {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background: rgba(255, 255, 255, 0.8);
        font-size: 0;
        border: none;
        padding: 0;
        transition: .5s;
        outline-style: none;
    }

    .visual{
    position: absolute;
    top: 250px;
    left:50%;
    transform:translateX(-50%);
    display: none;
    }

}
</style>