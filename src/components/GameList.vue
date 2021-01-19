<template>
        <div class="gameList">
            <h2>WEB GAMES</h2>
            <ul>
               <li v-for="game in games" :key="game.id">
                    <a :href="game.site">
                        <figure>
                            <img :src="game.imgSrc">
                            <figcaption>
                                <p><small>{{game.detail}}</small></p>
                                <p><strong>{{game.tit}}</strong></p>

                                <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM10.622 8.415a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666l-4.88-3.252z"/></svg>PLAY</p>
                            </figcaption>
                        </figure>
                    </a>
                </li> 
            </ul>
            <router-link to="/games"><button>MORE<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/></svg></button></router-link>
            <router-view />
        </div>
</template>
<script>
export default {
    name:'GameList',

 data:function(){
     return{
         games:[
        {
            id:"1",
            tit:"Mad Shark",
            imgSrc:require("../assets/game_img/acade_img01.jpg"),
            detail:"ACADE",
            site:("../assets/game/mad_shark/")
        },
        {
            id:"2",
            tit:"Stick Soldier",
            imgSrc:require("../assets/game_img/acade_img02.jpg"),
            detail:"ACADE",
            site:"../assets/game/Stick Soldier/"
        },
        {
            id:"3",
            tit:"Ranger vs Zombies",
            imgSrc:require("../assets/game_img/acade_img03.jpg"),
            detail:"ACADE",
            site:"../assets/game/Ranger vs Zombies/"
        },
        {
            id:"4",
            tit:"Ninja Run",
            imgSrc:require("../assets/game_img/acade_img04.jpg"),
            detail:"ACADE",
            site:"../assets/game/NinjaRun/"
        },
        {
            id:"5",
            tit:"Fishing Frenzy",
            imgSrc:require("../assets/game_img/acade_img05.jpg"),
            detail:"ACADE",
            site:"../assets/game/Fishing Frenzy/"
        },
        {
            id:"6",
            tit:"Super Cowboy Run",
            imgSrc:require("../assets/game_img/acade_img06.jpg"),
            detail:"ACADE",
            site:"../assets/game/Super Cowboy Run/"
        }
    ]
     }
 },
 methods:{}
}
</script>
<style>
    .gameList{
        margin:300px auto;
            margin-bottom: 100px;

    }
    .gameList h2{
        text-align: center;
        color:#333;
        font-size:36px;
    }
    .gameList ul{
        margin: 60px auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width:1300px;
        height:700px;
        overflow: hidden;
    }
    .gameList ul li{
        text-align: center;
        width:33%;
        padding:20px;
    }
    .gameList ul li a{
        display: inline-block;
    }
    .gameList ul li a figure{
        margin:0;
        padding:0;
        position: relative;
        width:100%;

        display: flex;
        justify-content: center;
        align-content: center;
        overflow: hidden;
        border-radius: 30px;
        
    }
    .gameList ul li a figure img{
        width:100%;
        border-radius: 30px;
        transition: 1s;
    }
    .gameList ul li a figure figcaption{
        position: absolute;
        top:0; left:0;


        width:100%;
        height: 100%;

        background:rgba(0,0,0,0.5);
        border-radius: 30px;
        padding:50px;

        opacity: 0;
        transition: .5s;
    }
    .gameList ul li a figure:hover img{
        transform: scale(1.2);
    }
    .gameList ul li a figure figcaption:hover{
        opacity: 1;
    }
    
    .gameList ul li a figure figcaption p{
        color:#fff;
        font-size:24px;
    }
    .gameList ul li a figure figcaption p small{
        font-size:16px;
    }
    /* .gameList ul li a figure figcaption p strong{} */
    .gameList ul li a figure figcaption p:nth-of-type(3){
        font-size:20px;
        position: absolute;

        bottom:50px; left:50%;
        transform: translateX(-50%);
        
        }
    .gameList ul li a figure figcaption p svg{
        fill:#fff;
        width:18px;
        vertical-align: bottom;
    }

    .gameList button{
        display:block;
        margin: 0 auto;
        background:none;
        border:1px solid #666;
        color:#666;
        padding:8px 15px;
        transition: .5s;
        outline-style: none;
    }
    .gameList button svg{
        vertical-align: middle;
        fill:#666;
        transition: .5s;
    }
    .gameList button:hover{        
        background:#666;
        color:#fff;}
    .gameList button:hover svg{
        fill:#fff;
    }







    @media (max-width:480px){
    .gameList{
        margin:100px auto;
        margin-bottom: 100px;

    }
    .gameList h2{
        text-align: center;
        color:#333;
        font-size:24px;
    }
    .gameList ul{
        margin: 30px auto;
        display: block;
        flex-wrap: wrap;
        justify-content: center;
        width:100%;
        height:auto;
        overflow: hidden;
        background:#eee;
        border-radius: 30px;
    }
    .gameList ul li{
        text-align: left;
        width:100%;
        padding:20px;
    }
    .gameList ul li a{
        display: inline-block;
    }
    .gameList ul li a figure{
        margin:0;
        padding:0;
        position: relative;
        width:100%;

        display: flex;
        justify-content: center;
        align-content: center;
        overflow: hidden;
        border-radius: 30px;
        
    }
    .gameList ul li a figure img{
        width:30%;
        border-radius: 30px;
        transition: 1s;
    }
    .gameList ul li a figure figcaption{
        position:inherit;
        top:0; left:0;


        width:100%;
        height: 100%;

        background:rgba(0,0,0,0.5);
        border-radius: 30px;
        padding:50px;

        opacity: 1;
        transition: .5s;
    }
    .gameList ul li a figure:hover img{
        transform: scale(1.2);
    }
    .gameList ul li a figure figcaption:hover{
        opacity: 1;
    }
    
    .gameList ul li a figure figcaption p{
        color:#fff;
        font-size:24px;
    }
    .gameList ul li a figure figcaption p small{
        font-size:16px;
    }
    /* .gameList ul li a figure figcaption p strong{} */
    .gameList ul li a figure figcaption p:nth-of-type(3){
        font-size:20px;
        position: absolute;

        bottom:50px; left:50%;
        transform: translateX(-50%);
        
        }
    .gameList ul li a figure figcaption p svg{
        fill:#fff;
        width:18px;
        vertical-align: bottom;
    }

    .gameList button{
        display:block;
        margin: 0 auto;
        background:none;
        border:1px solid #666;
        color:#666;
        padding:8px 15px;
        transition: .5s;
        outline-style: none;
    }
    .gameList button svg{
        vertical-align: middle;
        fill:#666;
        transition: .5s;
    }
    .gameList button:hover{        
        background:#666;
        color:#fff;}
    .gameList button:hover svg{
        fill:#fff;
    }
    }
</style>