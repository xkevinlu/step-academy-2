<template>
  <div>
    <div class="top-controls">
        <v-btn icon @click="rotation -= 45">
          <v-icon>rotate_left</v-icon>
        </v-btn>

        <v-btn icon @click="rotation += 45">
          <v-icon>rotate_right</v-icon>
        </v-btn>

        <v-btn icon @click="zoom -= 0.10">
          <v-icon>zoom_out</v-icon>
        </v-btn>

        <v-btn icon @click="zoom += 0.10">
          <v-icon>zoom_in</v-icon>
        </v-btn>
        <v-btn icon @click="setManOn" >
          <v-icon :color="!lady ? 'blue' : ''">fa-male</v-icon>
        </v-btn>

        <v-btn icon @click="setLadyOn">
          <v-icon :color="!man ? 'red' : ''">fa-female</v-icon>
        </v-btn>

        <v-btn icon @click="setBothOn">
          <v-icon :color="man && lady ? 'purple' : ''">wc</v-icon>
        </v-btn>
    </div>


  <div class="player">
    <div class="perspective" :style="{ transform: `rotate(${rotation}deg) scale(${zoom})`}">
      <div class="contents"
        :style="{
          transform: `translate(${figure.offset[0]}px,${figure.offset[1]}px)
                      rotate(${figure.commenceFacing}deg)`
      }">

        <div class="footarea ml" :style="mlStyle">
          <div v-show='man' class="foot">
            <svg viewBox="0 0 70 185" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>ML</title>
                <g id="ML" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="MH" transform="translate(11.000000, 127.000000)" fill="#069FE6" fill-rule="nonzero" :class="mlhFootwork">
                        <path d="M0,6.56572385 C0,6.56572385 0.125093888,14.4845192 1.47905126,26.8913712 C3.73809971,47.4240459 14.5403249,60.141439 31.3764905,57.701474 C51.3326448,54.8178791 55.7256478,40.5773564 53.4592409,20.0372879 C52.0905666,7.62304199 49.654915,0 49.654915,0 L0,6.56572385 Z" id="Path"></path>
                    </g>
                    <g id="MT" fill="#069FE6" fill-rule="nonzero" :class="mltFootwork">
                        <path d="M35.6263064,0.0344372048 C49.034781,-0.73455534 66.8329347,11.1920837 69.8150143,54.2919395 C71.1500572,73.5312624 64.9537167,88.5556356 61.0284003,101.004609 C59.4466646,106.010315 57.4948899,107.838486 53.3011138,106.83009 C41.8879479,104.06607 22.6168935,104.929373 10.3185361,107.845741 C6.90111644,108.658261 5.04366542,106.12639 4.48497897,103.405897 C-12.2393359,22.1175816 22.2250874,0.810684396 35.6263064,0.0344372048 Z" id="Path"></path>
                    </g>
                </g>
            </svg>
          </div>
        </div>
          <div class="footarea mr" :style="mrStyle">
        <div v-show='man' class="foot">
          <svg viewBox="0 0 70 185" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="MR" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="MH" transform="translate(32.000000, 156.000000) scale(-1, 1) translate(-32.000000, -156.000000) translate(5.000000, 127.000000)" fill="#069FE6" fill-rule="nonzero" :class="mrhFootwork">
                      <path d="M0,6.56572385 C0,6.56572385 0.125093888,14.4845192 1.47905126,26.8913712 C3.73809971,47.4240459 14.5403249,60.141439 31.3764905,57.701474 C51.3326448,54.8178791 55.7256478,40.5773564 53.4592409,20.0372879 C52.0905666,7.62304199 49.654915,0 49.654915,0 L0,6.56572385 Z" id="Path"></path>
                  </g>
                  <g id="MT" transform="translate(35.000000, 54.000000) scale(-1, 1) translate(-35.000000, -54.000000) " fill="#069FE6" fill-rule="nonzero" :class="mrtFootwork">
                      <path d="M35.6263064,0.0344372048 C49.034781,-0.73455534 66.8329347,11.1920837 69.8150143,54.2919395 C71.1500572,73.5312624 64.9537167,88.5556356 61.0284003,101.004609 C59.4466646,106.010315 57.4948899,107.838486 53.3011138,106.83009 C41.8879479,104.06607 22.6168935,104.929373 10.3185361,107.845741 C6.90111644,108.658261 5.04366542,106.12639 4.48497897,103.405897 C-12.2393359,22.1175816 22.2250874,0.810684396 35.6263064,0.0344372048 Z" id="Path"></path>
                  </g>
              </g>
          </svg>
        </div>
        </div>
          <div class="footarea ll" :style="llStyle">
        <div v-show='lady' class="foot">
          <svg viewBox="0 0 70 185" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="LL" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="LH" transform="translate(17.000000, 131.000000)" fill="#FF51A6" :class="llhFootwork">
                      <path d="M0,0 L34,0 L34,18 C34,35.3333333 28.3333333,44 17,44 C5.66666667,44 0,35.3333333 0,18 L0,0 Z" id="Rectangle"></path>
                  </g>
                  <g id="LT" transform="translate(5.000000, 0.000000)" fill="#FF51A6" :class="lltFootwork">
                      <path d="M32.8036627,103 C50.9206254,103 59.8184438,90.0697256 59.8184438,72.5830328 C59.8184438,67.2630812 62.6374008,0 37.1128909,0 C11.5883811,0 4.54747351e-13,67.9662947 4.54747351e-13,71.3375418 C4.54747351e-13,88.8242346 14.6867001,103 32.8036627,103 Z" id="Oval"></path>
                  </g>
              </g>
          </svg>
        </div>
        </div>
        <div class="footarea lr" :style="lrStyle">
        <div v-show='lady' class="foot">
          <svg viewBox="0 0 70 185" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="LR" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="LH" transform="translate(17.000000, 131.000000)" fill="#FF51A6" :class="lrhFootwork">
                      <path d="M0,0 L34,0 L34,18 C34,35.3333333 28.3333333,44 17,44 C5.66666667,44 0,35.3333333 0,18 L0,0 Z" id="Rectangle"></path>
                  </g>
                  <g id="LT" transform="translate(34.500000, 51.500000) scale(-1, 1) translate(-34.500000, -51.500000) translate(3.000000, 0.000000)" fill="#FF51A6" :class="lrtFootwork" >
                      <path d="M33.8791926,103 C52.5901541,103 61.7797042,90.0697256 61.7797042,72.5830328 C61.7797042,67.2630812 64.6910861,0 38.329707,0 C11.968328,0 4.54747351e-13,67.9662947 4.54747351e-13,71.3375418 C4.54747351e-13,88.8242346 15.1682312,103 33.8791926,103 Z" id="Oval"></path>
                  </g>
              </g>
          </svg>
        </div>
        </div>
      </div>
    </div>
  </div>


  <div class="controls">
    <v-slider class="slider"
      ticks
      :max="maxStep"
      v-model="step"
    ></v-slider>
    <div class="instruction">
      <h5 class="headline">{{count}}. {{instruction}}</h5>
    </div>
    <div class="seek">
      <v-btn icon @click="$emit('prevFigure')" >
        <i class="control fas fa-step-backward"></i>
      </v-btn>

      <v-btn icon @click="step--" :disabled="step < 1">
        <i class="control fas fa-backward"
        ></i>
      </v-btn>

      <v-btn icon>
        <i class="fas large" :class="{'fa-play' : !isPlaying, 'fa-pause' : isPlaying}" @click="play()"></i>
      </v-btn>

      <v-btn icon @click="step++" :disabled="step >= maxStep">
        <i class="control fas fa-forward"></i>
      </v-btn>

      <v-btn icon @click="$emit('nextFigure')">
        <i class="control fas fa-step-forward"></i>
      </v-btn>
    </div>

  </div>
</div>

</template>

<script>
export default {
  name: 'Player',
  data() {
    return {
      rotation:0,
      zoom:1,
      man: true,
      lady: true,
      step:0,
      isPlaying: false,
      playTimer: null,
      isActive: {
        ml: [false,false],
        mr: [false,false],
        ll: [false,false],
        lr: [false,false],
      },
    }
  },
  watch: {
    zoom() {
      if ( this.zoom < 0.5 ) {
        this.zoom = 0.5;
      } else if (this.zoom > 1.5) {
        this.zoom = 1.5;
      }
    },
    figure() {
        this.step = 0;
    },
    step () {
      // this.isActive.mr[0] = true;
      // this.isActive.mr[1] = true;
      console.log(this.figure.steps[this.step].mr.footwork);
    }
  },
  methods: {
    wait(ms) {
      return new Promise( resolve => setTimeout(resolve, ms));
    },
    play() {
        this.isPlaying = !this.isPlaying;
        if (this.step == this.maxStep) {
          this.step = 0;
          this.playTimer = setInterval(this.next, 1500);
        } else if (this.isPlaying) {
          this.playTimer = setInterval(this.next, 1500);
          this.next();
      } else {
          clearInterval(this.playTimer);
      }
    },
    next() {
      if (this.step < this.maxStep){
        this.step++;
      } else {
        clearInterval(this.playTimer);
        this.isPlaying = false;
      }
    },
    setManOn() {
      this.man = true;
      this.lady = false;
    },
    setLadyOn() {
      this.man = false;
      this.lady = true;
    },
    setBothOn() {
      this.man = true;
      this.lady = true;
    },
    figureName(route) {
      return (route == undefined) ? 'Select a figure' : route.replace(/-+/g, ' ');
    },
    updateFoot(data) {
      return {
        x: (data.transX != undefined) ? data.transX : 0,
        y: (data.transY != undefined) ? data.transY : 0,
        rotation: (data.rotation != undefined) ? data.rotation : 0,
        op: (data.opacity != undefined) ? data.opacity : 1,
      }
    }
  },
  computed: {
    figure() {
      let id = this.$route.params.figure;
      let searchString = id.replace(/-+/g, ' ');
      let figure = this.$parent.AllOneList.find(x => x.title == searchString);
        return figure;
    },
    count() {
      if (typeof this.figure.steps[this.step].count != 'undefined') {
          return this.figure.steps[this.step].count;
      } else {
        return 0;
      }
    },
    instruction() {
      if (typeof this.figure.steps != 'undefined') {
          return this.figure.steps[this.step].instructionBoth;
      } else {
        return "None";
      }
    },
    maxStep() {
      return (this.figure.steps != undefined) ? this.figure.steps.length-1 : 10;
    },
    mlStyle() {
      if (this.figure.steps != undefined) {
        let foot = this.updateFoot(this.figure.steps[this.step].ml);
        return {
          transform: `translate(${foot.x}px, ${foot.y}px) rotate(${foot.rotation}deg)`,
          opacity: foot.op
        };
      }
      },
    mrStyle() {
      if (this.figure.steps != undefined) {
        let foot = this.updateFoot(this.figure.steps[this.step].mr);
        return {
          transform: `translate(${foot.x}px, ${foot.y}px) rotate(${foot.rotation}deg)`,
          opacity: foot.op
        };
      }
    },

    llStyle() {
      if (this.figure.steps != undefined) {
        let foot = this.updateFoot(this.figure.steps[this.step].ll);
        return {
          transform: `translate(${foot.x}px, ${foot.y}px) rotate(${foot.rotation}deg)`,
          opacity: foot.op
        };
      }
    },
    lrStyle() {
      if (this.figure.steps != undefined) {
        let foot = this.updateFoot(this.figure.steps[this.step].lr);
        return {
          transform: `translate(${foot.x}px, ${foot.y}px) rotate(${foot.rotation}deg)`,
          opacity: foot.op
        };
      }
    },
    mlhFootwork() {
      let data = this.figure.steps[this.step];
      return {
        'man-on-no-delay': (data.ml.footwork) == 'HT',
        'man-on-delay': (data.ml.footwork) == 'TH',
      }
    },
    mltFootwork() {
      let data = this.figure.steps[this.step];
      return {
        'man-on-delay': (data.ml.footwork) == 'HT',
        'man-on-no-delay': (data.ml.footwork == 'TH') || (data.ml.footwork == 'T'),
      }
    },
    llhFootwork() {
      let data = this.figure.steps[this.step];
      return {
        'lady-on-no-delay': (data.ll.footwork) == 'HT',
        'lady-on-delay': (data.ll.footwork) == 'TH',
      }
    },
    lltFootwork() {
      let data = this.figure.steps[this.step];
      return {
        'lady-on-delay': (data.ll.footwork) == 'HT',
        'lady-on-no-delay': (data.ll.footwork == 'TH') || (data.ll.footwork == 'T'),
      }
    },
    mrhFootwork() {
      let data = this.figure.steps[this.step];
      return {
        'man-on-no-delay': (data.mr.footwork) == 'HT',
        'man-on-delay': (data.mr.footwork) == 'TH',
      }
    },
    mrtFootwork() {
      let data = this.figure.steps[this.step];
      return {
        'man-on-delay': (data.mr.footwork) == 'HT',
        'man-on-no-delay': (data.mr.footwork == 'TH') || (data.mr.footwork == 'T'),
      }
    },
    lrhFootwork() {
      let data = this.figure.steps[this.step];
      return {
        'lady-on-no-delay': (data.lr.footwork) == 'HT',
        'lady-on-delay': (data.lr.footwork) == 'TH',
      }
    },
    lrtFootwork() {
      let data = this.figure.steps[this.step];
      return {
        'lady-on-delay': (data.lr.footwork) == 'HT',
        'lady-on-no-delay': (data.lr.footwork == 'TH') || (data.lr.footwork == 'T'),
      }
    },
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.top-controls {
  display:flex;
  justify-content:space-around;
  margin-bottom:30px;
}
.controls {
  width:100%;
  height:200px;
  background-color:#E5E5E5;
  border:1px solid gray;
}


.blue {
  color:blue;
}

.pink {
  color:pink;
}

.instruction {
  padding:16px;
  text-align:center;
  font-size:32px;
}

.slider {
  margin-top:-17px;
  margin-bottom:0px;
  height:20px;
}

.seek {
  width:100%;
  height:80px;
  display:flex;
  justify-content:space-around;
  align-items:center;
}

.large {
  font-size:2.5em;
}

.control {
  font-size:1.4em;
}

.player {
  width:100%;
  height:300px;
  position:relative;
  overflow:hidden;
  overflow-x:scroll;
}
.contents {
  position:relative;
  border:1px solid black;
  height:360px;
  width:360px;
  /* border:1px dotted gray; */
  margin-left:auto;
  margin-right:auto;
}

.footarea {
  width:100px;
  height:100px;
  /* border:1px solid red; */
  display:flex;
  align-items:center;
  justify-content:center;
  transition: all 1.5s;
}

.foot {
  width:12px;
  height:25px;
  /* border:1px solid black; */
}

.ladyAccent {
  fill:#E10071;
}

.man-on-no-delay {
  animation: manOn 1s 0.6s;
}

.man-on-delay {
  animation: manOn 1s 1s;
}

.lady-on-no-delay {
  animation: ladyOn 1s 0.6s;
}

.lady-on-delay {
  animation: ladyOn 1s 1s;
}

@keyframes ladyOn {
  0% {fill:#E10071;}
  98% {fill:#E10071;}
}

@keyframes manOn {
  0% {fill:#003C78;}
  98% {fill:#003C78;}
}

.ml {
  position: absolute;
  left: 30%;
  top: 50%;
}

.mr {
  position: absolute;
  left:38%;
  top:50%;
}

.ll {
  position: absolute;
  left:42%;
  top:40%;
  transform:rotate(180deg);

}

.lr {
  position: absolute;
  left: 34%;
  top: 40%;
  transform:rotate(180deg);
}

.moveUp {
  transform: translate(0, -80px);
  top:20px;
  left:20px;
}

</style>
