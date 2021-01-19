<template>
    <div class="games">
        <div class="tab">
            <button v-for="(tab, index) in tabs" :key="tab.index" v-bind:class="{active: currentTab === index}" v-on:click="currentTab = index">#{{tab}}</button>
        </div>
        <ul>
               <li v-show="currentTab==0" v-for="game in games" :key="game.id">
                    <a :href="game.site">
                        <figure>
                            <img :src="game.imgSrc">
                            <figcaption>
                                <p><small>{{game.detail}}</small></p>
                                <p><strong>{{game.tit}}</strong></p>
                            </figcaption>
                        </figure>
                    </a>
                </li>
                <li v-show="currentTab==1" v-for="game in games" :key="game.id">
                    <a :href="game.site">
                        <figure>
                            <img :src="game.imgSrc">
                            <figcaption>
                                <p><small>{{game.detail}}</small></p>
                                <p><strong>{{game.tit}}</strong></p>
                            </figcaption>
                        </figure>
                    </a>
                </li>
            </ul>
    </div>
</template>
<script>
export default {
    name:'Games',
    data:function(){
        return{
            currentTab:0,
            tabs:['ALL','ACTION','BOARD','ARCADE'],
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
        },
        {
            id:"7",
            tit:"Shoot Robbers",
            imgSrc:require("../assets/game_img/acade_img07.jpg"),
            detail:"ACADE",
            site:"../assets/game/Shoot Robbers/"
        },
        {
            id:"8",
            tit:"Zombie Shooter",
            imgSrc:require("../assets/game_img/acade_img08.jpg"),
            detail:"ACADE",
            site:"../assets/game/Zombie Shooter/"
        },
        {
            id:"9",
            tit:"Christmas Match",
            imgSrc:require("../assets/game_img/acade_img09.jpg"),
            detail:"ACADE",
            site:"../assets/game/Christmas Match/"
        },
        {
            id:"10",
            tit:"Great Air Battles",
            imgSrc:require("../assets/game_img/acade_img10.jpg"),
            detail:"ACADE",
            site:"../assets/game/Great Air Battles/"
        },
        {
            id:"11",
            tit:"MAD SHARK",
            imgSrc:require("../assets/game_img/acade_img11.jpg"),
            detail:"ACADE",
            site:"../assets/game/MAD SHARK/"
        },
        {
            id:"12",
            tit:"Brick Out",
            imgSrc:require("../assets/game_img/acade_img12.jpg"),
            detail:"ACADE",
            site:"../assets/game/Brick Out/"
        },
        {
            id:"13",
            tit:"Super Frog Plataformer Adventure",
            imgSrc:require("../assets/game_img/action_img01.jpg"),
            detail:"ACTION",
            site:"../assets/game/Super Frog Plataformer Adventure/"
        },
        {
            id:"14",
            tit:"Jelly in portal",
            imgSrc:require("../assets/game_img/action_img02.jpg"),
            detail:"ACTION",
            site:"../assets/game/Jelly in portal/"
        },
        {
            id:"15",
            tit:"Puzzle for kids",
            imgSrc:require("../assets/game_img/action_img03.jpg"),
            detail:"ACTION",
            site:"../assets/game/Puzzle for kids/"
        },
        {
            id:"16",
            tit:"MAD SHARK",
            imgSrc:require("../assets/game_img/action_img04.jpg"),
            detail:"ACTION",
            site:"../assets/game/Mad Shark/"
        },
        {
            id:"17",
            tit:"Gold Coast",
            imgSrc:require("../assets/game_img/action_img05.jpg"),
            detail:"ACTION",
            site:"../assets/game/Gold Coast/"
        },
        {
            id:"18",
            tit:"Grand Commander",
            imgSrc:require("../assets/game_img/action_img06.jpg"),
            detail:"ACTION",
            site:"../assets/game/Grand Commander/"
        },
        {
            id:"19",
            tit:"Hit Em Up",
            imgSrc:require("../assets/game_img/action_img07.jpg"),
            detail:"ACTION",
            site:"../assets/game/Hit Em Up/"
        },
        {
            id:"20",
            tit:"Kingdom Defense",
            imgSrc:require("../assets/game_img/action_img08.jpg"),
            detail:"ACTION",
            site:"../assets/game/Kingdom Defense/"
        },
        {
            id:"21",
            tit:"MAD SHARK",
            imgSrc:require("../assets/game_img/action_img09.jpg"),
            detail:"ACTION",
            site:"../assets/game/Mad Shark/"
        },
        {
            id:"22",
            tit:"Warriors VS Evil Spirits",
            imgSrc:require("../assets/game_img/action_img10.jpg"),
            detail:"ACTION",
            site:"../assets/game/Warriors VS Evil Spirits/"
        },
        {
            id:"23",
            tit:"Crazy Runner",
            imgSrc:require("../assets/game_img/action_img11.jpg"),
            detail:"ACTION",
            site:"../assets/game/Crazy Runner/"
        },
        {
            id:"24",
            tit:"Traffic",
            imgSrc:require("../assets/game_img/action_img12.jpg"),
            detail:"ACTION",
            site:"../assets/game/Traffic/"
        },
        {
            id:"25",
            tit:"Tower Blocks",
            imgSrc:require("../assets/game_img/board_img01.jpg"),
            detail:"BOARD",
            site:"../assets/game/Tower Blocks/"
        },
        {
            id:"26",
            tit:"Tower Blocks",
            imgSrc:require("../assets/game_img/board_img02.jpg"),
            detail:"BOARD",
            site:"../assets/game/Tower Blocks/"
        },
        {
            id:"27",
            tit:"MAD SHARK",
            imgSrc:require("../assets/game_img/board_img03.jpg"),
            detail:"BOARD",
            site:"../assets/game/Mad Shark/"
        },
        {
            id:"28",
            tit:"Slide",
            imgSrc:require("../assets/game_img/board_img04.jpg"),
            detail:"BOARD",
            site:"../assets/game/Slide/"
        },
        {
            id:"29",
            tit:"FILL",
            imgSrc:require("../assets/game_img/board_img05.jpg"),
            detail:"BOARD",
            site:"../assets/game/FILL/"
        },
        {
            id:"30",
            tit:"Match 4",
            imgSrc:require("../assets/game_img/board_img06.jpg"),
            detail:"BOARD",
            site:"../assets/game/Match 4/"
        },
        {
            id:"31",
            tit:"Connect Merge",
            imgSrc:require("../assets/game_img/board_img07.jpg"),
            detail:"BOARD",
            site:"../assets/game/Connect Merge/"
        },
        {
            id:"32",
            tit:"Pool 8",
            imgSrc:require("../assets/game_img/board_img08.jpg"),
            detail:"BOARD",
            site:"../assets/game/Pool 8/"
        },
        {
            id:"33",
            tit:"Puzzle Color",
            imgSrc:require("../assets/game_img/board_img09.jpg"),
            detail:"BOARD",
            site:"../assets/game/Puzzle Color/"
        },
        {
            id:"34",
            tit:"MAD SHARK",
            imgSrc:require("../assets/game_img/board_img10.jpg"),
            detail:"BOARD",
            site:"../assets/game/Mad Shark/"
        },
        {
            id:"35",
            tit:"Push It",
            imgSrc:require("../assets/game_img/board_img11.jpg"),
            detail:"BOARD",
            site:"../assets/game/Push It/"
        },
        {
            id:"36",
            tit:"Number Maze",
            imgSrc:require("../assets/game_img/board_img12.jpg"),
            detail:"BOARD",
            site:"../assets/game/Number Maze/"
        }
    ]
        }
    },
    methods:{}
}
</script>
<style>
    .tab{margin-left:370px    }

    .tab button{
        margin:0 5px;
        background:#f0f0f0;
        display: inline-block;

        padding:10px 30px;
        border-radius: 30px;
        color:#333;
        font-weight: 800;
        border: none;
        outline-style: none;
    }

    .tab button.active{
        background:#5f1985;
        color:#fff;
    }

    .games{
        margin:0px auto;
        margin-bottom: 100px;
        margin-top:150px;
    }
    .games ul{
        margin: 20px auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width:1300px;
        /* overflow: hidden; */
    }
    .games ul li{
        text-align: center;
        width:33%;
        padding:20px;
    }
    .games ul li a{
        display: inline-block;
    }
    .games ul li a figure{
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
    .games ul li a figure img{
        width:100%;
        border-radius: 30px;
        transition: 1s;
    }
    .games ul li a figure figcaption{
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
        .games ul li a figure:hover img{
        transform: scale(1.2);
    }

    .games ul li a figure figcaption:hover{
        opacity: 1;
    }
    
    .games ul li a figure figcaption p{
        color:#fff;
        font-size:24px;
    }
    .games ul li a figure figcaption p small{
        font-size:16px;
    }
    /* .games ul li a figure figcaption p strong{} */
    .games ul li a figure figcaption p:nth-of-type(3){
        font-size:20px;
        position: absolute;

        bottom:50px; left:50%;
        transform: translateX(-50%);
        
        }
    .games ul li a figure figcaption p svg{
        fill:#fff;
        width:18px;
        vertical-align: bottom;
    }


    @media (max-width: 480px){
        .tab{
            margin-left:0px;
            text-align: center;
        }

    }
</style>