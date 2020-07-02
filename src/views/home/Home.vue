<template>
  <div class="home">
    <div class="box" @click="noTouch">
      <img class=" bell-img" src="../../assets/img/Qbell.png" alt="">
      <div style="margin-bottom: 10px; color: #a6a6a6; font-size: 20px">{{$t("home.touch.before")}}<del>prpr</del>{{$t("home.touch.after")}}
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bell4"></use>
        </svg>
      </div>
    </div>

    <div class="box bell-data-box">
      <div class="fan" style="color: #01affd" @click="getBFan">B站客人们: {{bilibilifan}}</div>おかくさま
      <div class="fan" style="color: #ff2424" @click="getYFan">YouTube客人们: {{youtubefan}}</div>
      <div>
        <a href="https://space.bilibili.com/487550002" target="_blank" class="link-button bilibili-link">
          <img src="../../assets/img/bilibili.svg" alt="" style="width: 30px; height: 30px; position: absolute; left: 35px; bottom: 50%; transform: translate3d(0px, 50%, 0px);">
          <span style="margin-left: 30px">猫芒ベル_Official</span>
        </a>
      </div>
      <div>
        <a href="https://www.youtube.com/channel/UCflNPJUJ4VQh1hGDNK7bsFg" target="_blank" class="link-button youtube-link">
          <svg viewBox="0 0 24 24" style="width: 30px; height: 30px; position: absolute; left: 15px; bottom: 50%; transform: translate3d(0px, 50%, 0px);"><path fill="white" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"></path></svg>
          <span style="margin-left: 30px">猫芒ベル-Bell Nekonogi</span>
        </a>
      </div>
      <div>
        <a href="https://twitter.com/bell_nekonogi" target="_blank" class="link-button bilibili-link">
          <svg viewBox="0 0 24 24" style="width: 30px; height: 30px; position: absolute; left: 25px; bottom: 50%; transform: translate3d(0px, 50%, 0px);"><path fill="white" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path></svg>
          <span  style="margin-left: 30px">猫芒ベル🔔ViViD所属</span>
        </a>
      </div>
      <div>
        <a href="https://vividnia.com/" target="_blank" class="link-button youtube-link">
          <span>ViViD</span>
        </a>
      </div>
      <div style="margin-bottom: 10px; color: #a6a6a6; font-size: 20px">{{$t("home.follow.before")}}<del>prpr</del>{{$t("home.follow.after")}}</div>
      <a href="https://icp.gov.moe" target="_blank" style="font-size: 17px; color: #00a2ca">萌ICP备 </a><a href="https://icp.gov.moe/?keyword=2020020222" target="_blank"  style="font-size: 17px; color: #00a2ca"> 2020020222号</a>
    </div>
  </div>
</template>

<script>


  import {getBiliBiliFan, getYouTubeFan} from "../../network/home";

export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      bilibilifan: "点击获取",
      youtubefan: "点击获取",
      audio: null,
      audioPath: require("assets/audio/不要摸我！.mp3"),
    }
  },
  methods: {
    getBFan(){
      getBiliBiliFan().then(res => {
        this.bilibilifan = res.data.follower;
      })
    },
    getYFan(){
      getYouTubeFan().then(res => {
        this.youtubefan = res.items[0].statistics.subscriberCount;
      })
    },
    noTouch(){
      if (this.audio===null){
        this.audio = new Audio(this.audioPath);
      }
      if (this.audio.paused||this.audio.ended){
        this.audio.play();
      }
    }
  }
}
</script>

<style scoped>
  .home{
    font-size: 25px;
    font-weight: bold;
    margin-top: 100px;
  }
  .box{
    display: inline-block;
    margin: 0 25px 50px 25px;
    background: var(--color-background);
    box-shadow: 6px 4px 24px rgba(136,165,191,.36), -8px -4px 16px hsla(0,0%,100%,.6);
    border-radius: 16px;
    transition: 0.5s;
    vertical-align: middle;
  }

  .box:hover{
    box-shadow: 6px 4px 30px rgba(136,165,191,.5), -8px -4px 16px hsla(0,0%,100%,.6);
    transform:translate(-3px, -3px);
    transition: 0.5s;
  }
  .bell-img{
    width: 70%;
  }
  .bell-data-box{
    width: 85%;
  }
  .fan{
    margin-top: 20px;
  }
  .link-button{
    display: inline-block;
    height: 45px;
    width: 300px;

    position: relative;
    border-radius: 16px;
    margin: 10px;
    padding: 10px;
    color: #fff;
    font-size: 20px;

    transition: 0.3s;
  }
  .link-button:hover{

    transform:translate(-3px, -3px);
    transition: 0.3s;
  }
  .bilibili-link{
    background: linear-gradient(83.54deg,#009ffc -7.64%,#00a2ca 145.94%);
    box-shadow: 2px 3px 5px rgba(0,63,88,.42), -2px -2px 5px hsla(0,0%,100%,.6);
  }
  .bilibili-link:hover{
    box-shadow: 2px 3px 10px rgba(0,63,88,.6), -2px -2px 5px hsla(0,0%,100%,.6);
  }
  .youtube-link{
    background: linear-gradient(83.54deg,#ff2424 -7.64%,#ca0000 145.94%);
    box-shadow: 2px 3px 5px rgba(75,0,0,.42), -2px -2px 5px hsla(0,0%,100%,.6);
  }
  .youtube-link:hover{
    box-shadow: 2px 3px 10px rgba(75,0,0,.6), -2px -2px 5px hsla(0,0%,100%,.6);
  }
</style>
