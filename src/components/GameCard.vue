<template>
  <div class="game">
    <header class="wrap">
      <!-- <h1>Snake</h1> -->
      <div style="display:flex; flex-direction:column; align-items: center; margin: 0px auto;" class="score">
        <img style="margin-bottom:20px" width="60%" src="../assets/score.svg" alt="">
        <div class="score_counter" id="score_value">
          <img class="score_counter_item" src="../assets/0.svg">
          <img class="score_counter_item"  src="../assets/0.svg">
        </div>

      </div>
    </header>
    <canvas class="wrap" id="snake" width="320" height="320" tabindex="1"></canvas>

    <!-- Game Over Screen -->
    <div id="gameover">
      <img width="50%" src="../assets/loadens.svg" alt="">
      <div class="settings_item settings_item_wide">
        <img src="../assets/wdywb.svg" alt="">
      </div>
      <FormInput />

      <div class="settings_item">
        <img id="newgame_gameover" src="../assets/new-game.svg" alt="">
      </div>
      <!-- <p>press <span style="background-color: #FFFFFF; color: #000000">space</span> to begin</p> -->
      <div class="settings_item">
        <img src="../assets/setings.svg" id="setting_gameover" />
      </div>

    </div>

    <!-- Setting screen -->
    <div id="setting">
      <!-- <img width="60%" src="../assets/setings.svg" alt="" style="margin-bottom:10px"> -->

      <img width="90%" style="margin-bottom:10%" id="newgame_setting" src="../assets/new-game.svg">

      <div class="settings_item2">
        <div class="setting_header">
          <img src="../assets/speed.svg" alt="">
        </div>
        <div class="setting_sets">
          <div class="setting_sets_item" :class="{ 'setting_active': speed == 120 }">
            <input id="speed1" v-model="speed" type="radio" name="speed" value="120" checked />
            <label for="speed1">
              <img class="setting_sets_img" src="../assets/slow.svg" alt="">
            </label>
          </div>
          <div class="setting_sets_item" :class="{ 'setting_active': speed == 75 }">
            <input id="speed2" v-model="speed" type="radio" name="speed" value="75" />
            <label for="speed2">
              <img class="setting_sets_img" src="../assets/normal.svg" alt="">
            </label>
          </div>
          <div class="setting_sets_item" :class="{ 'setting_active': speed == 35 }">
            <input id="speed3" v-model="speed" type="radio" name="speed" value="35" />
            <label for="speed3">
              <img class="setting_sets_img" src="../assets/fast.svg" alt="">
            </label>
          </div>
        </div>
      </div>

      <div class="settings_item2">
        <div class="setting_header">
          <img src="../assets/wall.svg" alt="">
        </div>
        <div class="setting_sets">
          <div class="setting_sets_item" :class="{ 'setting_active': wall == 1 }">
            <input id="wallon" v-model="wall" type="radio" name="wall" value="1" checked />
            <label for="wallon">
              <img class="setting_sets_img" src="../assets/on.svg" alt="">
            </label>
          </div>
          <div class="setting_sets_item" :class="{ 'setting_active': wall == 0 }">
            <input id="walloff" v-model="wall" type="radio" name="wall" value="0" />
            <label for="walloff">
              <img class="setting_sets_img" src="../assets/off.svg" alt="">
            </label>
          </div>

        </div>

      </div>

    </div>

    <!-- Main Menu Screen -->
    <div id="menu" class="settings_list">
      <img class="settings_item" src="../assets/loadens.svg" alt="">
      <img class="settings_item" id="newgame_menu" src="../assets/new-game.svg">
      <img class="settings_item" src="../assets/setings.svg" id="setting_menu">
    </div>
   <ControlBtn/>
  </div>
</template>

<script>
import FormInput from "./FormInput.vue";
import ControlBtn from "./ControlBtn.vue";
export default {
  name: 'GameCard',
  components: { FormInput,ControlBtn },
  props: {
    msg: String
  },
  data() {
    return {
      speed: 75,
      wall: 1,
      get score() {
        return localStorage.getItem('snakeScore') || 0;
      },
      set score(value) {
        localStorage.setItem('snakeScore', value);
      }
    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
input {
  font-size: 20px;
  color: black;
  background-color: rgb(165, 202, 109);
  padding: 10px;
  border: 2px solid black;
  outline: none;
  font-family: 'Arial';
  border-radius: 20px;
  height: 50px;
}

img {
  cursor: pointer;
}

img:hover {
  /* transform: scale(1.1); */
}

.game {
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -55%);

}

@import url("https://fonts.googleapis.com/css?family=VT323");

::selection {
  color: #FFFFFF;
  background: transparent;
}

::-moz-selection {
  color: #FFFFFF;
  background: transparent;
}

* {
  margin: 0;
  padding: 0;
  font-family: "VT323";
  box-sizing: border-box;
}

body {
  background-color: #000000;
}

.wrap {
  margin-left: auto;
  margin-right: auto;
}

header {
  width: 340px;
  font-size: 0;
}

canvas {
  display: none;
  border-style: solid;
  border-width: 10px;
  border-color: #FFFFFF;
}

canvas:focus {
  outline: none;
}

/* Top Styles */
h1 {
  display: inline-block;
  width: 100px;
  font-size: 32px;
  color: #FFFFFF;
}

.score {
  display: inline-block;
  width: 240px;
  font-size: 20px;
  color: #FFFFFF;
  text-align: right;
}


/* All screens style */
#gameover a,
#setting a,
#menu a {
  display: block;
}

#gameover a,
#setting a:hover,
#menu a:hover {
  cursor: pointer;
}

#gameover a:hover::before,
#setting a:hover::before,
#menu a:hover::before {
  /* content: ">"; */
  margin-right: 10px;
}

/* Menu Screen Style */
#menu {
  display: block;
  width: 340px;
  /* padding-top: 95px; */
  padding-bottom: 95px;
  font-size: 40px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #FFF;
}

#menu img:first-child {
  -webkit-animation: logo-ani 1000ms linear infinite;
  animation: logo-ani 1000ms linear infinite;
  margin-bottom: 30px;

}

#menu a {
  font-size: 30px;
}

@-webkit-keyframes logo-ani {
  50% {
    -webkit-transform: scale(1.3, 1.3);
  }

  100% {
    -webkit-transform: scale(1.0, 1.0);
  }
}

@keyframes logo-ani {
  50% {
    transform: scale(1.3, 1.3);
  }

  100% {
    transform: scale(1.0, 1.0);
  }
}


/* Game Over Screen Style */

#gameover {
  display: none;
  max-width: 340px;
  width: 100%;
  /* padding-top: 95px; */
  padding-bottom: 95px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 30px;
  color: #FFF;
}

#gameover p {
  margin-top: 25px;
  font-size: 20px;
}

/* Settings Screen Style */
#setting {
  display: none;
  max-width: 340px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  /* padding-top: 85px; */
  padding-bottom: 85px;
  font-size: 30px;
  color: #FFF;
  text-align: center;
}

#setting h2 {
  margin-bottom: 15px;
}

#setting p {
  margin-top: 10px;
}

#setting input {
  display: none;
}

#setting label {
  cursor: pointer;
}

#setting input:checked+label {
  /* background-color: #fff; */
  /* background-color: #FFF;
  color: #000; */
}

.settings_item {
  max-width: 60%;
  width: 100%;
  margin: 10px auto;
  /* transition: 0.3s; */
}

.settings_item_wide {
  max-width: 100%;
}

.settings_item:hover {
  opacity: 0.8;
}

.settings_item2 {
  margin-bottom: 25px;
}

.setting_sets {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

.setting_sets_item {
  margin: 0 7px;
  padding: 5px;

  width: 100%;
}

.setting_sets_item label {
  display: flex;
  align-items: center;
  justify-content: center;
}

.setting_sets_item.setting_active {
  background: rgba(0, 207, 14, 0.5);
  border-radius: 10px;
  border: 1px solid white;
}

.setting_sets_img {
  height: 30px;
  width: auto;
}

.setting_header {
  max-width: 50%;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 15px;
}

.setting_header img {
  width: 100%;
}
.score_counter{
  display: flex;
  margin-bottom: 20px;
}
.score_counter_item{
  height: 30px;
  margin: 0 2px;
}
@media screen and (max-width: 450px) {
  .setting_sets{
    flex-direction: column;
  }
}
</style>
