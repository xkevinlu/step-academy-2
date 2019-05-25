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
      <div class="contents">
        <div class="footarea ml" :style="mlStyle">
          <div v-show='man' class="foot man">ml</div>
        </div>
          <div class="footarea mr" :style="mrStyle">
        <div v-show='man' class="foot man">mr</div>
        </div>
          <div class="footarea ll" :style="llStyle">
        <div v-show='lady' class="foot lady">ll</div>
        </div>
          <div class="footarea lr" :style="lrStyle">
        <div v-show='lady' class="foot lady">lr</div>
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
      <h5 class="headline">{{instruction}}</h5>
    </div>
    <div class="seek">
      <v-btn icon @click="step++" :disabled="step >= maxStep">
        <i class="control fas fa-step-backward"></i>
      </v-btn>

      <v-btn icon @click="step--" :disabled="step < 1">
        <i class="control fas fa-backward"
        ></i>
      </v-btn>

      <v-btn icon>
        <i class="fas fa-play large" @click="play()"></i>
      </v-btn>

      <v-btn icon @click="step++" :disabled="step >= maxStep">
        <i class="control fas fa-forward"></i>
      </v-btn>

      <v-btn icon @click="step++" :disabled="step >= maxStep">
        <i class="control fas fa-step-forward"></i>
      </v-btn>
    </div>

  </div>
</div>

</template>

<script>
export default {
  name: 'Player',
  props: {
    instruction: {default: "Select a Figure"},
    count: { default: 3},
    figure: {default: null},
  },
  watch: {
    zoom: function() {
      if ( this.zoom < 0.5 ) {
        this.zoom = 0.5;
      } else if (this.zoom > 1.5) {
        this.zoom = 1.5;
      }
    }
  },
  methods: {
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
    }
  },
  data() {
    return {
      rotation:0,
      zoom:1,
      man: true,
      lady: true,
      step:0,
    }
  },
  computed: {
    maxStep() {
      return (this.figure != null) ? this.figure.steps.length-1 : 10;
    },
    mlStyle() {
      if (this.figure === null) {
        return null;
      } else {
        let ml = this.figure.steps[this.step].ml;
        let x = (ml.changeX != undefined) ? ml.changeX : 0;
        let y = (ml.changeY != undefined) ? ml.changeY : 0;
        let turn = (ml.changeRotation != undefined) ? ml.changeRotation : 0;
        let opacity = (ml.opacity != undefined) ? ml.opacity : 1;
        return {
          transform: `translate(${x}px, ${y}px) rotate(${turn})`,
          opacity: `${opacity}`
        };
      };
    },
    mrStyle() {
      if (this.figure === null) {
        return null;
      } else {
      let mr = this.figure.steps[this.step].mr;
      let x = (mr.changeX != undefined) ? mr.changeX : 0;
      let y = (mr.changeY != undefined) ? mr.changeY : 0;
      let turn = (mr.changeRotation != undefined) ? mr.changeRotation : 0;
      let opacity = (mr.opacity != undefined) ? mr.opacity : 1;
      return {
        transform: `translate(${x}px, ${y}px) rotate(${turn})`,
        opacity: `${opacity}`
      };
      }
    },

    llStyle() {
      if (this.figure === null) {
        return null;
      } else {
        let ll = this.figure.steps[this.step].ll;
        let x = (ll.changeX != undefined) ? ll.changeX : 0;
        let y = (ll.changeY != undefined) ? ll.changeY : 0;
        let turn = (ll.changeRotation != undefined) ? ll.changeRotation : 0;
        let opacity = (ll.opacity != undefined) ? ll.opacity : 1;
        return {
          transform: `translate(${x}px, ${y}px) rotate(${turn})`,
          opacity: `${opacity}`
        };
      }
    },
    lrStyle() {
      if (this.figure === null) {
        return null;
      } else {
        let lr = this.figure.steps[this.step].lr;
        let x = (lr.changeX != undefined) ? lr.changeX : 0;
        let y = (lr.changeY != undefined) ? lr.changeY : 0;
        let turn = (lr.changeRotation != undefined) ? lr.changeRotation : 0;
        let opacity = (lr.opacity != undefined) ? lr.opacity : 1;
        return {
          transform: `translate(${x}px, ${y}px) rotate(${turn})`,
          opacity: `${opacity}`
        };
      }
    },
  }
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
  height:400px;
  position:relative;
  overflow:hidden;
  overflow-x:scroll;
}
.contents {
  position:relative;
  height:360px;
  width:360px;
  /* border:1px dotted gray; */
  margin-top:24px;
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
  width:15px;
  height:30px;
}

.man {
  background-color:blue;
}

.lady {
  background-color:pink;
}

.ml {
  position: absolute;
  left: 30%;
  top: 40%;
}

.mr {
  position: absolute;
  left:40%;
  top:40%;
}

.ll {
  position: absolute;
  left:45%;
  top:25%;
  transform:rotate(180deg);

}

.lr {
  position: absolute;
  left: 35%;
  top: 25%;
  transform:rotate(90deg);
}

.moveUp {
  transform: translate(0, -80px);
  top:20px;
  left:20px;
}

</style>
