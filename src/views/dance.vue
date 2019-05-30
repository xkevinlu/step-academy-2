<template>
  <div>
    <v-btn block flat large color="primary" @click="selectDance = true">
      <h2>{{headerText}}</h2>
      <v-icon right>arrow_drop_down</v-icon></v-btn>
      <Player :figure="figure" @nextFigure="selectNext = true" @prevFigure="selectPrev = true"></Player>

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
            <SyllabusList :All = "danceList" @figurePicked="selectDance = false" ></SyllabusList>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-dialog>


      <v-dialog v-model="selectPrev" scrollable max-width="300px">
        <v-card>
          <v-card-title>Preceding {{figure.title}}:</v-card-title>
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
          <v-card-title>Following {{figure.title}}:</v-card-title>
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
  import Player from '../components/Player.vue'


  export default {
    name: 'dance',
    components: {SyllabusList, Player},
    computed: {

      figure(){
        return (this.$route.params.figure) ?
        this.dance.find(x =>
          x.title == this.$route.params.figure.replace(/-+/g, " ")
        ) :
        this.defaultFigure;
      },
      headerText() {
        return (this.figure) ? this.figure.title: 'No figure selected';
      },
      dance(){
        switch(this.$route.params.dance) {
          case 'waltz':
          return this.waltzAll;
          case 'tango':
          return this.tangoAll;
          case 'vwaltz':
          return this.vwaltzAll;
          case 'foxtrot':
          return this.foxtrotAll;
          case 'quickstep':
          return this.quickstepAll;
          default:
          return null;
        }
      },
      danceList() {
        switch(this.$route.params.dance) {
          case 'waltz':
          return this.waltzLevelList;
          case 'tango':
          return this.tangoLevelList;
          case 'vwaltz':
          return this.vwaltzLevelList;
          case 'foxtrot':
          return this.foxtrotLevelList;
          case 'quickstep':
          return this.quickstepLevelList;
          default:
          return null;
        }
      },
      precedingFigures() {
        if (this.figure != undefined) {
          // let currentFigure = this.waltzAll.find(figure => figure.title: == this.figure);
          return this.dance.filter(x => x.endFoot == this.figure.startFoot);
        } else {
          return undefined;
        }
      },
      followingFigures() {
        if (this.figure != undefined) {
          // let currentFigure = this.waltzAll.find(figure => figure.title: == this.figure);
          return this.dance.filter(x => x.startFoot == this.figure.endFoot);
        } else {
          return undefined;
        }
      },
      waltzLevelList() {
        return [
          {title: 'Newcomer', figures: this.waltzNewcomer},
          {title: 'Bronze', figures: this.waltzBronze},
          {title: 'Silver', figures: this.waltzSilver},
          {title: 'Gold', figures: this.waltzGold},
        ];
      },
      waltzAll(){
        return this.waltzNewcomer.concat(this.waltzBronze).concat(this.waltzSilver).concat(this.waltzGold);
      },
      tangoLevelList() {
        return [
          {title: 'Newcomer', figures: this.tangoNewcomer},
          {title: 'Bronze', figures: this.tangoBronze},
          {title: 'Silver', figures: this.tangoSilver},
          {title: 'Gold', figures: this.tangoGold},
        ];
      },
      tangoAll(){
        return this.tangoNewcomer.concat(this.tangoBronze).concat(this.tangoSilver).concat(this.tangoGold);
      },
      vwaltzLevelList() {
        return [
          {title: 'Bronze', figures: this.vwaltzBronze},
          {title: 'Silver', figures: this.vwaltzSilver},
          {title: 'Gold', figures: this.vwaltzGold},
        ];
      },
      vwaltzAll(){
        return (this.vwaltzBronze).concat(this.vwaltzSilver).concat(this.vwaltzGold);
      },
      foxtrotLevelList() {
        return [
          {title: 'Newcomer', figures: this.foxtrotNewcomer},
          {title: 'Bronze', figures: this.foxtrotBronze},
          {title: 'Silver', figures: this.foxtrotSilver},
          {title: 'Gold', figures: this.foxtrotGold},
        ];
      },
      foxtrotAll(){
        return this.foxtrotNewcomer.concat(this.foxtrotBronze).concat(this.foxtrotSilver).concat(this.foxtrotGold);
      },
      quickstepLevelList() {
        return [
          {title: 'Newcomer', figures: this.quickstepNewcomer},
          {title: 'Bronze', figures: this.quickstepBronze},
          {title: 'Silver', figures: this.quickstepSilver},
          {title: 'Gold', figures: this.quickstepGold},
        ];
      },
      quickstepAll(){
        return this.quickstepNewcomer.concat(this.quickstepBronze).concat(this.quickstepSilver).concat(this.quickstepGold);
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
        defaultFigure: {
          title: 'Select a figure...',
          commenceFacing: 0,
          offset: [0,0],
          startFoot: 'RFF',
          endFoot: 'LFF',
          steps: [
            {
              count:0,
              instructionBoth:'Instructions will appear here',
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
                opacity:1,
              },
              ll:{
                transX:0,
                transY:0,
                rotation:180,
                opacity:1,
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
                instructionMan:'Begin on RF',
                instructionLady:'Begin on LF',
                ml:{
                  transX:0,
                  transY:0,
                  rotation:0,
                  opacity:0.2,
                },
                mr:{
                  transX:0,
                  transY:0,
                  rotation:0,
                  opacity:1,
                },
                ll:{
                  transX:0,
                  transY:0,
                  rotation:180,
                  opacity:1,
                },
                lr:{
                  transX:0,
                  transY:0,
                  rotation:180,
                  opacity:0.2,
                },
              },
              {
                count:1,
                instructionBoth:'Moving DC',
                instructionMan:'LF Fwd',
                instructionLady:'RF Fwd',
                ml:{
                  transX:0,
                  transY:-80,
                  rotation:0,
                  opacity:1,
                  footwork: 'HT',
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
                  transY:-80,
                  rotation:180,
                  opacity:1,
                  footwork: 'TH',
                },
              },
              {
                count:1.5,
                instructionBoth:'Prepare to move DW',
                instructionMan:'Begin on RF',
                instructionLady:'Begin on LF',
                ml:{
                  transX:0,
                  transY:-80,
                  rotation:0,
                  opacity:1,
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
                  transX:0,
                  transY:-80,
                  rotation:180,
                  opacity:1,
                },
              },
              {
                count:2,
                instructionBoth:'Prepare to move DW',
                instructionMan:'Begin on RF',
                instructionLady:'Begin on LF',
                ml:{
                  transX:0,
                  transY:-80,
                  rotation:0,
                  opacity:0.2,
                },
                mr:{
                  transX:80,
                  transY:-80,
                  rotation:0,
                  opacity:1,
                  footwork:'T',
                },
                ll:{
                  transX:80,
                  transY:-80,
                  rotation:180,
                  opacity:1,
                  footwork:'T',
                },
                lr:{
                  transX:0,
                  transY:-80,
                  rotation:180,
                  opacity: 0.2,
                },
              },
              {
                count:3,
                instructionBoth:'Prepare to move DW',
                instructionMan:'Begin on RF',
                instructionLady:'Begin on LF',
                ml:{
                  transX:80,
                  transY:-80,
                  rotation:0,
                  opacity:1,
                  footwork: 'T',
                },
                mr:{
                  transX:80,
                  transY:-80,
                  rotation:0,
                  opacity:0.2,
                },
                ll:{
                  transX:80,
                  transY:-80,
                  rotation:180,
                  opacity:0.2,
                },
                lr:{
                  transX:80,
                  transY:-80,
                  rotation:180,
                  opacity:1,
                  footwork: 'T',
                },
              },
            ]
          },
          {
            title: 'Natural Turn',
            offset: [-80,-80],
            commenceFacing: 135,
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
                  transX:10,
                  transY:-80,
                  rotation:0,
                  opacity:1,
                  footwork: 'HT',
                },
                ll:{
                  transX:20,
                  transY:-60,
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
                count:2,
                instructionBoth:'Moving DW',
                instructionMan:'Begin on LF',
                instructionLady:'Begin on RF',
                ml:{
                  transX:40,
                  transY:-190,
                  rotation:90,
                  opacity:1,
                  footwork: 'T',
                },
                mr:{
                  transX:10,
                  transY:-80,
                  rotation:90,
                  opacity:0.2,
                },
                ll:{
                  transX:20,
                  transY:-125,
                  rotation:180,
                  opacity:0.2,
                  transOrigin: 'center 70px',
                },
                lr:{
                  transX:30,
                  transY:-160,
                  rotation:315,
                  opacity:1,
                  footwork: 'T',
                },
              },
              {
                count:3,
                instructionBoth:'Moving DW',
                instructionMan:'Begin on LF',
                instructionLady:'Begin on RF',
                ml:{
                  transX:45,
                  transY:-190,
                  rotation:135,
                  opacity:0.2,
                },
                mr:{
                  transX:0,
                  transY:-180,
                  rotation:135,
                  opacity:1,
                  footwork: 'T',
                },
                ll:{
                  transX:10,
                  transY:-155,
                  rotation:315,
                  opacity:1,
                  footwork: 'T',
                  transOrigin: 'center 70px',
                },
                lr:{
                  transX:30,
                  transY:-160,
                  rotation:315,
                  opacity:0.2,
                },
              },
            ]
          },
          {
            title: 'Reverse Turn',
            offset: [-40,40],
            commenceFacing: 45,
            startFoot: 'LFF',
            endFoot: 'RFB',
            steps: [
              {
                count:0,
                instructionBoth:'Prepare to move DX',
                instructionMan:'Begin on RF',
                instructionLady:'Begin on LF',
                ml:{
                  transX:0,
                  transY:0,
                  rotation:0,
                  opacity:0.2,
                },
                mr:{
                  transX:0,
                  transY:0,
                  rotation:0,
                  opacity:1,
                },
                ll:{
                  transX:0,
                  transY:0,
                  rotation:180,
                  opacity:1,
                },
                lr:{
                  transX:0,
                  transY:0,
                  rotation:180,
                  opacity:0.2,
                },
              },
              {
                count:1,
                instructionBoth:'Prepare to move DX',
                instructionMan:'LF Fwd',
                instructionLady:'RF Fwd',
                ml:{
                  transX:-10,
                  transY:-80,
                  rotation:-45,
                  opacity:1,
                  footwork: 'HT',
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
                  transX:-20,
                  transY:-80,
                  rotation:135,
                  opacity:1,
                  footwork: 'TH',
                },
              },
              {
                count:2,
                instructionBoth:'Moving DC',
                instructionMan:'RF to side',
                instructionLady:'LF to side',
                ml:{
                  transX:-10,
                  transY:-80,
                  rotation:-90,
                  opacity:0.2,
                },
                mr:{
                  transX:-35,
                  transY:-160,
                  rotation:-90,
                  opacity:1,
                  footwork: 'T',
                },
                ll:{
                  transX:-50,
                  transY:-150,
                  rotation:90,
                  opacity:1,
                  footwork: 'T',
                },
                lr:{
                  transX:-20,
                  transY:-80,
                  rotation:90,
                  opacity:0.2,
                },
              },
              {
                count:3,
                instructionBoth:'Moving DC',
                instructionMan:'LF close to RF',
                instructionLady:'RF close to LF',
                ml:{
                  transX:10,
                  transY:-150,
                  rotation:-135,
                  opacity:1,
                  footwork: 'T',
                },
                mr:{
                  transX:-30,
                  transY:-160,
                  rotation:-135,
                  opacity:0.2,
                },
                ll:{
                  transX:-50,
                  transY:-170,
                  rotation:45,
                  opacity:0.2,
                },
                lr:{
                  transX:-10,
                  transY:-160,
                  rotation:45,
                  opacity:1,
                  footwork: 'T',
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
                  opacity:0.2,
                },
                mr:{
                  transX:0,
                  transY:0,
                  rotation:0,
                  opacity:1,
                  transOrigin: 'center 100px',
                },
                ll:{
                  transX:0,
                  transY:0,
                  rotation:180,
                  opacity:1,
                },
                lr:{
                  transX:0,
                  transY:0,
                  rotation:180,
                  opacity:0.2,
                },
              },
              {
                count:1,
                instructionBoth:'Prepare to move DW',
                instructionMan:'Begin on LF',
                instructionLady:'Begin on RF',
                ml:{
                  transX:-20,
                  transY:60,
                  rotation:22.5,
                  opacity:1,
                  footwork: 'T',
                },
                mr:{
                  transX:0,
                  transY:0,
                  rotation:0,
                  opacity:0.2,
                  transOrigin: 'center 100px',
                },
                ll:{
                  transX:0,
                  transY:0,
                  rotation:180,
                  opacity:0.2,
                },
                lr:{
                  transX:-10,
                  transY:90,
                  rotation:180,
                  opacity:1,
                  footwork: 'HT',
                },
              },
              {
                count:2,
                instructionBoth:'Prepare to move DW',
                instructionMan:'Begin on LF',
                instructionLady:'Begin on RF',
                ml:{
                  transX:-20,
                  transY:60,
                  rotation:135,
                  opacity:0.2,
                },
                mr:{
                  transX:-50,
                  transY:20,
                  rotation:135,
                  opacity:1,
                  transOrigin: 'center 100px',
                  footwork: 'T',
                },
                ll:{
                  transX:-25,
                  transY:160,
                  rotation:315,
                  opacity:1,
                  transition: 'all 1s ease-in',
                  footwork: 'T',
                },
                lr:{
                  transX:-10,
                  transY:90,
                  rotation:315,
                  opacity:0.2,
                },
              },
              {
                count:2.5,
                instructionBoth:'Lady brush LF to RF',
                instructionMan:'Begin on LF',
                instructionLady:'Begin on RF',
                ml:{
                  transX:60,
                  transY:90,
                  rotation:215,
                  opacity:0.2,
                },
                mr:{
                  transX:40,
                  transY:20,
                  rotation:215,
                  opacity:1,
                  transOrigin: 'center 100px',
                },
                ll:{
                  transX:-25,
                  transY:160,
                  rotation:395,
                  opacity:1,
                  transition: 'all 1.5s',
                },
                lr:{
                  transX:20,
                  transY:170,
                  rotation:395,
                  opacity:0.2,
                  transition: 'all 1.2s',
                },
              },
              {
                count:3,
                instructionBoth:'Prepare to move DW',
                instructionMan:'Begin on LF',
                instructionLady:'Begin on RF',
                ml:{
                  transX:120,
                  transY:80,
                  rotation:215,
                  opacity:1,
                  footwork: 'T',
                },
                mr:{
                  transX:40,
                  transY:20,
                  rotation:215,
                  opacity:0.2,
                  transOrigin: 'center 100px',
                },
                ll:{
                  transX:-25,
                  transY:160,
                  rotation:395,
                  opacity:0.2,
                  transition: 'all 1.5s ease-in',
                },
                lr:{
                  transX:85,
                  transY:105,
                  rotation:395,
                  opacity:1,
                  footwork: 'T',
                },
              },
              {
                count:3.5,
                instructionBoth:'Collect',
                instructionMan:'Begin on LF',
                instructionLady:'Begin on RF',
                ml:{
                  transX:120,
                  transY:80,
                  rotation:215,
                  opacity:1,
                },
                mr:{
                  transX:110,
                  transY:-40,
                  rotation:215,
                  opacity:0.2,
                  transOrigin: 'center 100px',
                },
                ll:{
                  transX:40,
                  transY:95,
                  rotation:395,
                  opacity:0.2,
                },
                lr:{
                  transX:85,
                  transY:105,
                  rotation:395,
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
                  opacity:0.2,
                },
                mr:{
                  transX:0,
                  transY:0,
                  rotation:0,
                  opacity:1,
                },
                ll:{
                  transX:0,
                  transY:0,
                  rotation:180,
                  opacity:1,
                },
                lr:{
                  transX:0,
                  transY:0,
                  rotation:180,
                  opacity:0.2,
                },
              },
              {
                count:1,
                instructionBoth:'Prepare to move DW',
                instructionMan:'Begin on LF',
                instructionLady:'Begin on RF',
                ml:{
                  transX:0,
                  transY:-80,
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
                  transY:-80,
                  rotation:180,
                  opacity:1,
                },
              },
              {
                count:1.5,
                instructionBoth:'Prepare to move DW',
                instructionMan:'Begin on LF',
                instructionLady:'Begin on RF',
                ml:{
                  transX:0,
                  transY:-80,
                  rotation:0,
                  opacity:1,
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
                  transX:0,
                  transY:-80,
                  rotation:180,
                  opacity:1,
                },
              },
              {
                count:2,
                instructionBoth:'Prepare to move DW',
                instructionMan:'Begin on LF',
                instructionLady:'Begin on RF',
                ml:{
                  transX:0,
                  transY:-80,
                  rotation:0,
                  opacity:0.2,
                },
                mr:{
                  transX:40,
                  transY:-40,
                  rotation:0,
                  opacity:1,
                },
                ll:{
                  transX:55,
                  transY:-25,
                  rotation:270,
                  opacity:1,
                },
                lr:{
                  transX:0,
                  transY:-80,
                  rotation:270,
                  opacity:0.2,
                },
              },
              {
                count:3,
                instructionBoth:'Prepare to move DW',
                instructionMan:'Begin on LF',
                instructionLady:'Begin on RF',
                ml:{
                  transX:90,
                  transY:-20,
                  rotation:0,
                  opacity:1,
                },
                mr:{
                  transX:40,
                  transY:-40,
                  rotation:0,
                  opacity:0.2,
                },
                ll:{
                  transX:55,
                  transY:-25,
                  rotation:270,
                  opacity:0.2,
                },
                lr:{
                  transX:100,
                  transY:-10,
                  rotation:270,
                  opacity:1,
                },
              },
            ]
          },
          {
            title: 'Chasse from Promenade Position',
            offset: [0,100],
            commenceFacing: 0,
            startFoot: 'PP',
            endFoot: 'RFF',
            steps: [
              {
                count:0,
                instructionBoth:'Prepare to move DC',
                instructionMan:'Begin on RF',
                instructionLady:'Begin on LF',
                ml:{
                  transX:0,
                  transY:0,
                  rotation:0,
                  opacity:0.2,
                },
                mr:{
                  transX:0,
                  transY:0,
                  rotation:0,
                  opacity:1,
                },
                ll:{
                  transX:0,
                  transY:0,
                  rotation:180,
                  opacity:1,
                },
                lr:{
                  transX:0,
                  transY:0,
                  rotation:180,
                  opacity:0.2,
                },
              },
              {
                count:1,
                instructionBoth:'Prepare to move DC',
                instructionMan:'Begin on RF',
                instructionLady:'Begin on LF',
                ml:{
                  transX:0,
                  transY:-80,
                  rotation:-45,
                  opacity:0.2,
                },
                mr:{
                  transX:0,
                  transY:0,
                  rotation:0,
                  opacity:1,
                },
                ll:{
                  transX:0,
                  transY:0,
                  rotation:180,
                  opacity:1,
                },
                lr:{
                  transX:0,
                  transY:-80,
                  rotation:135,
                  opacity:0.2,
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
        tangoNewcomer: [
          {
            title: 'Left Foot Walk',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'RFF',
          },
          {
            title: 'Right Foot Walk',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'LFF',
          },
          {
            title: 'Progressive Side Step',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'LFF',
          },
          {
            title: 'Point to PP',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'PP',
          },
          {
            title: 'Progressive Link',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'PP',
          },
          {
            title: 'Closed Promenade',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'PP',
            endFoot: 'LFF',
          },
          {
            title: 'Rock Turn',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'LFF',
          },
          {
            title: 'Open Reverse Turn',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'LFF',
          },
          {
            title: 'Back Corte',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'LFF',
          },
        ],
        tangoBronze: [
          {
            title: 'Open Promenade',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'PP',
            endFoot: 'LFF',
          },
          {
            title: 'Progressive Side Step Reverse Turn',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'LFF',
          },
          {
            title: 'Left Foot Rock',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFB',
            endFoot: 'RFB',
          },
          {
            title: 'Right Foot Rock',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFB',
            endFoot: 'LFB',
          },
          {
            title: 'Natural Twist Turn',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'PP',
            endFoot: 'PP',
          },
          {
            title: 'Natural Promenade Turn',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'PP',
            endFoot: 'PP',
          },
        ],
        tangoSilver: [
          {
            title: 'Promenade Link',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'PP',
            endFoot: 'LFF',
          },
          {
            title: 'Four Step',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'PP',
          },
          {
            title: 'Back Open Promenade',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'PP',
            endFoot: 'LFF',
          },
          {
            title: 'Outside Swivel',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFB',
            endFoot: 'LFF',
          },
          {
            title: 'Reverse Outside Swivel',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'LFF',
          },
          {
            title: 'Fallaway Promenade',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'PP',
            endFoot: 'PP',
          },
          {
            title: 'Four Step Change',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'LFF',
          },
          {
            title: 'Brush Tap',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'LFF',
          },
        ],
        tangoGold: [
          {
            title: 'Fallaway Four Step',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'PP',
          },
          {
            title: 'Oversway',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'RFF',
          },
          {
            title: 'Basic Reverse Turn',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'LFF',
          },
          {
            title: 'The Chase',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'PP',
            endFoot: 'PP',
          },
          {
            title: 'Fallaway Reverse & Slip Pivot',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'LFF',
          },
          {
            title: 'Five Step',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'PP',
          },
          {
            title: 'Overturned Five Step',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'PP',
          },
          {
            title: 'Contra Check',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'PP',
          },
        ],
        vwaltzBronze: [
          {
            title: 'Reverse Turn (1-3)',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFB',
            endFoot: 'LFF',
          },
          {
            title: 'Reverse Turn (4-6)',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'RFB',
          },
          {
            title: 'Natural Turn (1-3)',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'LFB',
          },
          {
            title: 'Natural Turn (4-6)',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFB',
            endFoot: 'RFF',
          },
          {
            title: 'Forward Change, Natural to Reverse',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'LFF',
          },
          {
            title: 'Forward Change, Reverse to Natural',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'RFF',
          },
          {
            title: 'Backward Change, Natural to Reverse',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFB',
            endFoot: 'RFB',
          },
          {
            title: 'Backward Change, Reverse to Natural',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFB',
            endFoot: 'LFB',
          },
        ],
        vwaltzSilver: [
          {
            title: 'Reverse Fleckerl',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'LFF',
          },
        ],
        vwaltzGold: [
          {
            title: 'Natural Fleckerl',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFB',
            endFoot: 'RFF',
          },
          {
            title: 'Contra Check',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'LFB',
          },
        ],
        foxtrotNewcomer: [
          {
            title: 'Feather Step',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'LFF',
          },
          {
            title: 'Three Step',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'RFF',
          },
          {
            title: 'Natural Turn',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'LFF',
          },
          {
            title: 'Reverse Turn',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'LFB',
          },
          {
            title: 'Feather Finish',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFB',
            endFoot: 'LFF',
          },
          {
            title: 'Closed Impetus & Feather Finish',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFB',
            endFoot: 'LFF',
          },
        ],
        foxtrotBronze: [
          {
            title: 'Natural Weave',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'LFF',
          },
          {
            title: 'Change of Direction',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFB',
            endFoot: 'RFF',
          },
          {
            title: 'Basic Weave',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'LFF',
          },
        ],
        foxtrotSilver: [
          {
            title: 'Closed Telemark',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'RFF',
          },
          {
            title: 'Open Telemark',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'PP',
          },
          {
            title: 'Feather Ending',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'PP',
            endFoot: 'LFF',
          },
          {
            title: 'Top Spin',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFB',
            endFoot: 'LFF',
          },
          {
            title: 'Hover Feather',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'LFF',
          },
          {
            title: 'Hover Telemark',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'RFF',
          },
          {
            title: 'Natural Telemark',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'LFF',
          },
          {
            title: 'Hover Cross',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'LFF',
          },
          {
            title: 'Open Natural Turn',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'LFB',
          },
          {
            title: 'Outside Swivel',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFB',
            endFoot: 'PP',
          },
          {
            title: 'Open Impetus',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFB',
            endFoot: 'PP',
          },
          {
            title: 'Weave from Promenade Position',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'PP',
            endFoot: 'LFF',
          },
          {
            title: 'Reverse Wave',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'RFF',
          },
        ],
        foxtrotGold: [
          {
            title: 'Natural Twist Turn',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'LFF',
          },
          {
            title: 'Curved Feather',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'LFB',
          },
          {
            title: 'Back Feather',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFB',
            endFoot: 'RFB',
          },
          {
            title: 'Natural Zig Zag from Promenade Position',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'PP',
            endFoot: 'LFF',
          },
          {
            title: 'Fallaway Reverse & Slip Pivot',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'LFF',
          },
          {
            title: 'Natural Hover Telemark',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'LFF',
          },
          {
            title: 'Bounce Fallaway with Weave Ending',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'LFF',
          },
        ],
        quickstepNewcomer: [
          {
            title: 'Quarter Turn to Right',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'RFB',
          },
          {
            title: 'Natural Turn',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'LFB',
          },
          {
            title: 'Natural Turn with Hesitation',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'RFF',
          },
          {
            title: 'Natural Pivot Turn',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'RFF',
          },
          {
            title: 'Natural Spin Turn',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'RFB',

          },
          {
            title: 'Progressive Chasse',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFB',
            endFoot: 'RFF',
          },
          {
            title: 'Chasse Reverse Turn',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'RFB',
          },
          {
            title: 'Forward Lock',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'RFF',
          },
        ],
        quickstepBronze: [
          {
            title: 'Closed Impetus',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFB',
            endFoot: 'LFB',
          },
          {
            title: 'Back Lock',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFB',
            endFoot: 'LFB',
          },
          {
            title: 'Reverse Pivot',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFB',
            endFoot: 'LFF',
          },
          {
            title: 'Progressive Chasse to Right',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'LFB',

          },
          {
            title: 'Tipple Chasse to Right',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFB',
            endFoot: 'LFF',
          },
          {
            title: 'Running Finish',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFB',
            endFoot: 'RFF',
          },
          {
            title: 'Double Reverse Spin',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'LFF',
          },
          {
            title: 'Cross Chasse',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFB',
            endFoot: 'RFF',
          },
          {
            title: 'Change of Direction',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'LFF',
          },
        ],
        quickstepSilver: [
          {
            title: 'Quick Open Reverse',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'RFB',
          },
          {
            title: 'Fishtail',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'RFF',
          },
          {
            title: 'Running Right Turn',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'RFF',
          },
          {
            title: 'Four Quick Run',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFB',
            endFoot: 'RFF',
          },
          {
            title: 'V6',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFB',
            endFoot: 'RFF',
          },
          {
            title: 'Closed Telemark',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'RFF',
          },
        ],
        quickstepGold: [
          {
            title: 'Cross Swivel',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFF',
            endFoot: 'RFF',
          },
          {
            title: 'Six Quick Run',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFB',
            endFoot: 'RFF',
          },
          {
            title: 'Rumba Cross',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'RFF',
          },
          {
            title: 'Tipsy to Right',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'LFB',
            endFoot: 'LFF',
          },
          {
            title: 'Tipsy to Left',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFF',
            endFoot: 'RFB',
          },
          {
            title: 'Hover Corte',
            commenceFacing: 0,
            offset: [0,0],
            startFoot: 'RFB',
            endFoot: 'LFB',
          },
        ],
      }
    },
  }

  </script>
