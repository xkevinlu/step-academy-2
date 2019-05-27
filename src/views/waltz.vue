<template>
  <div>
    <h4>Waltz</h4>
    <a><h1 @click="selectDance = true">{{headerText}}</h1></a>
    <router-view @nextFigure="selectNext = true" @prevFigure="selectPrev = true"></router-view>

    <v-dialog v-model="selectDance" scrollable fullscreen hide-overlay transition ='dialog-bottom-transition'>
        <v-card>
          <v-toolbar dark color="primary">
         <v-btn icon dark @click="selectDance = false">
           <v-icon>close</v-icon>
         </v-btn>
         <v-toolbar-title>Select a Figure:</v-toolbar-title>
       </v-toolbar>
          <v-divider></v-divider>
          <v-card-text style="height: 100%;">
              <SyllabusList :All = "All" @figurePicked="selectDance = false" ></SyllabusList>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-dialog>


    <v-dialog v-model="selectPrev" scrollable max-width="300px">
        <v-card>
          <v-card-title>Select Preceding Figure:</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="max-height: 400px;">
            <v-radio-group v-model="targetPrev" column>
              <v-radio v-for="item in precedingFigures" :label="item.title" :value="item.title"></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" flat @click="selectPrev = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="selectPrev = false" :to="getRoute(targetPrev)">Go</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    <v-dialog v-model="selectNext" scrollable max-width="300px">
        <v-card>
          <v-card-title>Select Following Figure:</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="max-height: 400px;">
            <v-radio-group v-model="targetNext" column>
              <v-radio v-for="item in followingFigures" :label="item.title" :value="item.title"></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" flat @click="selectNext = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="selectNext = false" :to="getRoute(targetNext)">Go</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </div>
</template>


<script>
import SyllabusList from '../components/SyllabusList.vue'

export default {
  name: 'App',
  components: {SyllabusList},
  computed: {
    headerText() {
      return this.figure == undefined ? 'Select a Figure' : this.figure;
    },
    figureId () {
       return this.$route.params.figure;
    },
    figure (){
       return (this.figureId != undefined) ? this.$route.params.figure.replace(/-+/g, " ") : undefined;
   },
   precedingFigures() {
     if (this.figureId != undefined) {
     let currentFigure = this.AllOneList.find(figure => figure.title == this.figure);
       return this.AllOneList.filter(figure => figure.endFoot == currentFigure.startFoot);
     }
   },
   followingFigures() {
     if (this.figureId != undefined) {
     let currentFigure = this.AllOneList.find(figure => figure.title == this.figure);
     return this.AllOneList.filter(figure => figure.startFoot == currentFigure.endFoot);
     }
   },
    All() {
      return [
        {title:'Newcomer', figures: this.waltzNewcomer},
        {title:'Bronze', figures: this.waltzBronze},
        {title:'Silver', figures: this.waltzSilver},
        {title:'Gold', figures: this.waltzGold},
      ];
    },
    AllOneList(){
      return this.waltzNewcomer.concat(this.waltzBronze).concat(this.waltzSilver).concat(this.waltzGold);
    },

  }, //Computed
  methods: {
    getRoute(figure) {
      return figure.replace(/\s+/g, '-');
    },
  },
  data () {
    return {
      selectDance:false,
      selectNext:false,
      selectPrev:false,
      targetNew: ' ',
      targetNext: ' ',
      targetPrev: ' ',
      waltzNewcomer: [
        {
          title: 'RF Closed Change',
          commenceFacing: 0,
          offset: [0,0],
          startFoot: 'RFF',
          endFoot: 'LFF',
          steps: [
            {
              count:0,
              instructionBoth:'Prepare to move DW',
              instructionMan:'Begin on LF',
              instructionLady:'Begin on RF',
              ml:{
                transX:0,
                transY:0,
                rotation:0,
                opacity:1,
              },
              mr:{
                transX:0,
                transY:0,
                rotation:0,
                opacity:0.2,
              },
              ll:{
                transX:0,
                transY:0,
                rotation:180,
                opacity:0.2,
              },
              lr:{
                transX:0,
                transY:0,
                rotation:180,
                opacity:1,
              },
            },
            {
              count:1,
              instructionBoth:'Moving DW',
              instructionMan:'RF forward (HT)',
              instructionLady:'LF back (TH)',
              ml:{
                transX:0,
                transY:0,
                rotation:0,
                opacity:0.2,
              },
              mr:{
                transX:0,
                transY:-80,
                rotation:0,
                opacity:1,
                footwork: 'HT',
              },
              ll:{
                transX:0,
                transY:-80,
                rotation:180,
                opacity:1,
                footwork: 'TH',
              },
              lr:{
                transX:0,
                transY:0,
                rotation:180,
                opacity:0.2,
              },
            },
            {
              count:1.5,
              instructionBoth:'Moving DW',
              instructionMan:'RF forward (HT)',
              instructionLady:'LF back (TH)',
              ml:{
                transX:0,
                transY:-80,
                rotation:0,
                opacity:0.2,
              },
              mr:{
                transX:0,
                transY:-80,
                rotation:0,
                opacity:1,
              },
              ll:{
                transX:0,
                transY:-80,
                rotation:180,
                opacity:1,
              },
              lr:{
                transX:0,
                transY:-80,
                rotation:180,
                opacity:0.2,
              },
            },
            {
              count:2,
              instructionBoth:'Moving DW',
              instructionMan:'RF forward (HT)',
              instructionLady:'LF back (TH)',
              ml:{
                transX:-80,
                transY:-80,
                rotation:0,
                opacity:1,
                footwork: 'T',
              },
              mr:{
                transX:0,
                transY:-80,
                rotation:0,
                opacity:0.2,
              },
              ll:{
                transX:0,
                transY:-80,
                rotation:180,
                opacity:0.2,
              },
              lr:{
                transX:-80,
                transY:-80,
                rotation:180,
                opacity:1,
                footwork: 'T',
              },
            },
            {
              count:3,
              instructionBoth:'Moving DW',
              instructionMan:'RF forward (HT)',
              instructionLady:'LF back (TH)',
              ml:{
                transX:-80,
                transY:-80,
                rotation:0,
                opacity:0.2,
              },
              mr:{
                transX:-80,
                transY:-80,
                rotation:0,
                opacity:1,
                footwork: 'T',
              },
              ll:{
                transX:-80,
                transY:-80,
                rotation:180,
                opacity:1,
                footwork: 'T',
              },
              lr:{
                transX:-80,
                transY:-80,
                rotation:180,
                opacity:0.2,
              },
            }
          ],
        },
        {
          title: 'LF Closed Change',
          offset: [-80,-80],
          commenceFacing: 0,
          startFoot: 'LFF',
          endFoot: 'RFF',
          steps: [
            {
              count:0,
              instructionBoth:'Prepare to move DW',
              instructionMan:'Begin on LF',
              instructionLady:'Begin on RF',
              ml:{
                transX:0,
                transY:0,
                rotation:0,
                opacity:1,
              },
              mr:{
                transX:0,
                transY:0,
                rotation:0,
                opacity:0.2,
              },
              ll:{
                transX:0,
                transY:0,
                rotation:180,
                opacity:0.2,
              },
              lr:{
                transX:0,
                transY:0,
                rotation:180,
                opacity:1,
              },
            },
          ]
        },
        {
          title: 'Natural Turn',
          offset: [0,100],
          commenceFacing: 0,
          startFoot: 'RFF',
          endFoot: 'LFB',
          steps: [
            {
              count:0,
              instructionBoth:'Prepare to move DW',
              instructionMan:'Begin on LF',
              instructionLady:'Begin on RF',
              ml:{
                transX:0,
                transY:0,
                rotation:0,
                opacity:1,
              },
              mr:{
                transX:0,
                transY:0,
                rotation:0,
                opacity:0.2,
              },
              ll:{
                transX:0,
                transY:0,
                rotation:180,
                opacity:0.2,
              },
              lr:{
                transX:0,
                transY:0,
                rotation:180,
                opacity:1,
              },
            },
            {
              count:1,
              instructionBoth:'Moving DW',
              instructionMan:'Begin on LF',
              instructionLady:'Begin on RF',
              ml:{
                transX:0,
                transY:0,
                rotation:0,
                opacity:0.2,
              },
              mr:{
                transX:0,
                transY:-100,
                rotation:0,
                opacity:1,
              },
              ll:{
                transX:10,
                transY:-80,
                rotation:225,
                opacity:1,
              },
              lr:{
                transX:0,
                transY:0,
                rotation:180,
                opacity:0.2,
              },
            },
          ]
        },
        {
          title: 'Reverse Turn',
          offset: [0,0],
          commenceFacing: 45,
          startFoot: 'LFF',
          endFoot: 'RFB',
          steps: [
            {
              count:0,
              instructionBoth:'Prepare to move DW',
              instructionMan:'Begin on LF',
              instructionLady:'Begin on RF',
              ml:{
                transX:0,
                transY:0,
                rotation:0,
                opacity:1,
              },
              mr:{
                transX:0,
                transY:0,
                rotation:0,
                opacity:0.2,
              },
              ll:{
                transX:0,
                transY:0,
                rotation:180,
                opacity:0.2,
              },
              lr:{
                transX:0,
                transY:0,
                rotation:180,
                opacity:1,
              },
            },
          ]
        },
        {
          title: 'Spin Turn',
          offset: [0,0],
          commenceFacing: -90,
          startFoot: 'LFB',
          endFoot: 'LFB',
          steps: [
            {
              count:0,
              instructionBoth:'Prepare to move DW',
              instructionMan:'Begin on LF',
              instructionLady:'Begin on RF',
              ml:{
                transX:0,
                transY:0,
                rotation:0,
                opacity:1,
              },
              mr:{
                transX:0,
                transY:0,
                rotation:0,
                opacity:0.2,
              },
              ll:{
                transX:0,
                transY:0,
                rotation:180,
                opacity:0.2,
              },
              lr:{
                transX:0,
                transY:0,
                rotation:180,
                opacity:1,
              },
            },
          ]
        },
        {
          title: 'Whisk',
          commenceFacing: 135,
          offset: [0,0],
          startFoot: 'LFF',
          endFoot: 'PP',
          steps: [
            {
              count:0,
              instructionBoth:'Prepare to move DW',
              instructionMan:'Begin on LF',
              instructionLady:'Begin on RF',
              ml:{
                transX:0,
                transY:0,
                rotation:0,
                opacity:1,
              },
              mr:{
                transX:0,
                transY:0,
                rotation:0,
                opacity:0.2,
              },
              ll:{
                transX:0,
                transY:0,
                rotation:180,
                opacity:0.2,
              },
              lr:{
                transX:0,
                transY:0,
                rotation:180,
                opacity:1,
              },
            },
          ]
        },
        {
          title: 'Chasse from Promenade Position',
          offset: [0,0],
          commenceFacing: 135,
          startFoot: 'PP',
          endFoot: 'RFF',
          steps: [
            {
              count:0,
              instructionBoth:'Prepare to move DW',
              instructionMan:'Begin on LF',
              instructionLady:'Begin on RF',
              ml:{
                transX:0,
                transY:0,
                rotation:0,
                opacity:1,
              },
              mr:{
                transX:0,
                transY:0,
                rotation:0,
                opacity:0.2,
              },
              ll:{
                transX:0,
                transY:0,
                rotation:180,
                opacity:0.2,
              },
              lr:{
                transX:0,
                transY:0,
                rotation:180,
                opacity:1,
              },
            },
          ]
        },
      ],
      waltzBronze: [
        {
          title: 'Closed Impetus',
          commenceFacing: -90,
          startFoot: 'LFB',
          endFoot: 'LFB',
        },
        {
          title: 'Hesitation Change',
          commenceFacing: -90,
          startFoot: 'LFB',
          endFoot: 'LFF',
        },
        {
          title: 'Outside Change',
          commenceFacing: -90,
          startFoot: 'LFB',
          endFoot: 'RFF',
        },
        {
          title: 'Reverse Corte',
          commenceFacing: -90,
          startFoot: 'RFB',
          endFoot: 'LFB',
        },
        {
          title: 'Back Whisk',
          commenceFacing: 0,
          startFoot: 'LFB',
          endFoot: 'PP',
        },
        {
          title: 'Basic Weave',
          commenceFacing: 0,
          startFoot: 'RFB',
          endFoot: 'RFF',
        },
        {
          title: 'Double Reverse Spin',
          commenceFacing: 0,
          startFoot: 'LFF',
          endFoot: 'LFF',
        },
        {
          title: 'Reverse Pivot',
          commenceFacing: 0,
          startFoot: 'RFB',
          endFoot: 'LFF',
        },
        {
          title: 'Back Lock',
          commenceFacing: 0,
          startFoot: 'LFB',
          endFoot: 'LFB',
        },
        {
          title: 'Progressive Chasse to Right',
          commenceFacing: 45,
          startFoot: 'LFF',
          endFoot: 'LFB',
        },
      ],
      waltzSilver: [
        {
          title: 'Weave from Promenade Position',
          commenceFacing: 0,
          startFoot: 'PP',
          endFoot: 'RFF',
        },
        {
          title: 'Closed Telemark',
          commenceFacing: 0,
          startFoot: 'LFF',
          endFoot: 'RFF',
        },
        {
          title: 'Open Telemark',
          commenceFacing: 0,
          startFoot: 'LFF',
          endFoot: 'PP',
        },
        {
          title: 'Open Impetus',
          commenceFacing: 0,
          startFoot: 'LFB',
          endFoot: 'PP',
        },
        {
          title: 'Cross Hesitation',
          commenceFacing: 0,
          startFoot: 'RFF',
          endFoot: 'LFF',
        },
        {
          title: 'Wing',
          commenceFacing: 0,
          startFoot: 'RFF',
          endFoot: 'LFF',
        },
        {
          title: 'Outside Spin',
          commenceFacing: 0,
          startFoot: 'LFB',
          endFoot: 'RFF',
        },
        {
          title: 'Turning Lock to L',
          commenceFacing: 0,
          startFoot: 'RFB',
          endFoot: 'RFF',
        },
        {
          title: 'Drag Hesitation',
          commenceFacing: 0,
          startFoot: 'LFF',
          endFoot: 'LFB',
        },
      ],
      waltzGold: [
        {
          title: 'Left Whisk',
          commenceFacing: 0,
          startFoot: 'RFB',
          endFoot: 'LFB',
        },
        {
          title: 'Contra Check',
          commenceFacing: 0,
          startFoot: 'LFF',
          endFoot: 'PP',
        },
        {
          title: 'Closed Wing',
          commenceFacing: 0,
          startFoot: 'RFF',
          endFoot: 'LFF',
        },
        {
          title: 'Turning Lock to Right',
          commenceFacing: 0,
          startFoot: 'RFB',
          endFoot: 'PP',
        },
        {
          title: 'Fallaway Reverse & Slip Pivot',
          commenceFacing: 0,
          startFoot: 'LFF',
          endFoot: 'LFF',
        },
        {
          title: 'Hover Corte',
          commenceFacing: 0,
          startFoot: 'RFB',
          endFoot: 'LFB',
        },
      ],
    }
  },
}

</script>
