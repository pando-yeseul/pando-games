<template>
    <div class="games">
        <div class="tab">
            <button v-for="(tab, index) in tabs" :key="tab.index" v-bind:class="{active :  tab === selectedTab}" v-on:click="onClickTab(tab,index)">#{{tab}}</button>
        </div>
            <div class="contents">
                <a v-for="game in games" :key="game.id" :href="game.site">
                        <figure v-if="selectedTab === 'ALL'">
                                <img :src="game.imgSrc">
                                <figcaption>
                                    <p><small>{{game.detail}}</small></p>
                                    <p><strong>{{game.tit}}</strong></p>
                                    <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM10.622 8.415a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666l-4.88-3.252z"/></svg>PLAY</p>
                                </figcaption>
                        </figure>
                        <figure v-else-if="selectedTab === game.detail">
                                <img :src="game.imgSrc">
                                <figcaption>
                                    <p><small>{{game.detail}}</small></p>
                                    <p><strong>{{game.tit}}</strong></p>
                                    <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM10.622 8.415a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666l-4.88-3.252z"/></svg>PLAY</p>
                                </figcaption>
                        </figure>
                    </a>
            </div>

            <div class="top">
                <button onclick="window.scrollTo(0,0);"> TOP </button>
            </div>
    </div>
</template>
<script>
export default {
    name:'Games',
    data:function(){
        return{
            query: '',
            submitted: false,
            active_tab: 0,
            tabs: ['ALL', 'ACADE','BOARD','ACTION'],
            selectedTab: '',
            searchResult: [],
            onClickTab(tab) {     
                this.selectedTab = tab    
            },
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
            tit:"Super Frog",
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
    methods:{},
    created(){
        this.selectedTab = this.tabs[0]
    },
}
</script>
<style>
    .tab{
        text-align: center;
    }

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

    .contents{
        margin:0 auto;
        display: flex;
        flex-wrap: wrap;
        width:1500px;
        
        padding-top:40px;
    }
    .contents a{
        display: inline-block;
    }
    .contents a figure{
        text-align: center;
        margin:20px 0;
        padding:0;
        position: relative;
        width:95%;

        display: flex;
        justify-content: center;
        align-content: center;
        overflow: hidden;
        border-radius: 30px;
    }
    .contents a figure img{
        width:99%;
        border-radius: 30px;
        transition: 1s;
    }
    .contents a figure figcaption{
        position: absolute;
        top:0; left:0;


        width:100%;
        height: 100%;

        background:rgba(0,0,0,0.5);
        border-radius: 30px;
        padding:20px;

        opacity: 0;
        transition: .5s;
    }
        .contents a figure:hover img{
        transform: scale(1.2);
    }

    .contents a figure figcaption:hover{
        opacity: 1;
    }
    
    .contents a figure figcaption p{
        color:#fff;
        font-size:20px;
    }
    .contents a figure figcaption p small{
        font-size:16px;
    }
    /* .contents a figure figcaption p strong{} */
    .contents a figure figcaption p:nth-of-type(3){
        font-size:20px;
        position: absolute;

        bottom:20px; left:50%;
        transform: translateX(-50%);
        
        }
    .contents a figure figcaption p svg{
        fill:#fff;
        width:18px;
        vertical-align: bottom;
    }
    .top{
        position: fixed;
        bottom:10%;
        right:10%;
    }
    .top button{
        border:none;
        background:#fff;
        padding:20px 15px;
        border-radius: 100%;
        box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.3);
        outline-style: none;
        cursor: pointer;
        transition: .5s;
    }
    .top button:hover{
        background:#5f1985;
        color:#fff;
    }


    @media (max-width: 480px){
    .tab{
        text-align: center;
    }

    .tab button{
        margin:0 2px;
        background:#fff;
        display: inline-block;

        padding:10px 15px;
        border-radius: 10px;
        color:#333;
        font-weight: 700;
        border: none;
        outline-style: none;
        font-size:13px;
    }

    .games{
        margin:0px auto;
        margin-bottom: 60px;
        margin-top:80px;
    }

    .contents{
        margin:20px auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width:90%;
        
        padding:20px 10px;

        background:#fff;
        border-radius: 10px;
    }
    .contents a{
        display: inline;
        width:30%;
        /* margin-bottom: 10px; */
    }
    .contents a figure{
        text-align: center;
        margin:0px;
        padding:0;
        position: relative;
        width:100%;

        display: block;
        justify-content: center;
        align-content: center;
        overflow: hidden;
        border-radius: 0px;
    }
    .contents a figure img{
        width:100%;
        border-radius: 0px;
        transition: 1s;
    }
    .contents a figure figcaption{
        position: static;
        top:0; left:0;


        width:100%;
        height: 100%;

        background:none;
        border-radius: 30px;
        padding:0px;

        opacity: 1;
        transition: .5s;
        margin-bottom: 10px;
    }

    .contents a figure figcaption p{
        color:#333;
        font-size:14px;
        text-overflow: ellipsis;
    }
    .contents a figure figcaption p small{
        font-size:10px;
        white-space: pre-line;
        display: none;
    }
    /* .contents a figure figcaption p strong{} */
    .contents a figure figcaption p:nth-of-type(3){
        font-size:20px;
        position: absolute;

        bottom:20px; left:50%;
        transform: translateX(-50%);

        display: none;
        
        }
    .contents a figure figcaption p svg{
        fill:#fff;
        width:18px;
        vertical-align: bottom;
    }

    .top{
        position: fixed;
        bottom:5%;
        right:10%;
    }
    .top button{
        border:none;
        background:#fff;
        padding:15px 10px;
        border-radius: 100%;
        box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.3);
        outline-style: none;
        cursor: pointer;
        transition: .5s;
        font-size:12px;
    }
}
</style>