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
       return (this.figure )? this.figure.title : 'No figure selected';
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
     // let currentFigure = this.waltzAll.find(figure => figure.title == this.figure);
       return this.dance.filter(x => x.endFoot == this.figure.startFoot);
     } else {
       return undefined;
     }
   },
   followingFigures() {
     if (this.figure != undefined) {
     // let currentFigure = this.waltzAll.find(figure => figure.title == this.figure);
     return this.dance.filter(x => x.startFoot == this.figure.endFoot);
   } else {
     return undefined;
   }
   },
    waltzLevelList() {
      return [
        {title:'Newcomer', figures: this.waltzNewcomer},
        {title:'Bronze', figures: this.waltzBronze},
        {title:'Silver', figures: this.waltzSilver},
        {title:'Gold', figures: this.waltzGold},
      ];
    },
    waltzAll(){
      return this.waltzNewcomer.concat(this.waltzBronze).concat(this.waltzSilver).concat(this.waltzGold);
    },
    tangoLevelList() {
      return [
        {title:'Newcomer', figures: this.tangoNewcomer},
        {title:'Bronze', figures: this.tangoBronze},
        {title:'Silver', figures: this.tangoSilver},
        {title:'Gold', figures: this.tangoGold},
      ];
    },
    tangoAll(){
      return this.tangoNewcomer.concat(this.tangoBronze).concat(this.tangoSilver).concat(this.tangoGold);
    },
    vwaltzLevelList() {
      return [
        {title:'Bronze', figures: this.vwaltzBronze},
        {title:'Silver', figures: this.vwaltzSilver},
        {title:'Gold', figures: this.vwaltzGold},
      ];
    },
    vwaltzAll(){
      return (this.vwaltzBronze).concat(this.vwaltzSilver).concat(this.vwaltzGold);
    },
    foxtrotLevelList() {
      return [
        {title:'Newcomer', figures: this.foxtrotNewcomer},
        {title:'Bronze', figures: this.foxtrotBronze},
        {title:'Silver', figures: this.foxtrotSilver},
        {title:'Gold', figures: this.foxtrotGold},
      ];
    },
    foxtrotAll(){
      return this.foxtrotNewcomer.concat(this.foxtrotBronze).concat(this.foxtrotSilver).concat(this.foxtrotGold);
    },
    quickstepLevelList() {
      return [
        {title:'Newcomer', figures: this.quickstepNewcomer},
        {title:'Bronze', figures: this.quickstepBronze},
        {title:'Silver', figures: this.quickstepSilver},
        {title:'Gold', figures: this.quickstepGold},
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
                transY:-50,
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
                transX:45,
                transY:-180,
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
                transY:-50,
                rotation:180,
                opacity:0.2,
              },
              lr:{
                transX:35,
                transY:-145,
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
                transY:-180,
                rotation:135,
                opacity:0.2,
              },
              mr:{
                transX:5,
                transY:-170,
                rotation:135,
                opacity:1,
                footwork: 'T',
              },
              ll:{
                transX:-5,
                transY:-135,
                rotation:315,
                opacity:1,
                footwork: 'T',
              },
              lr:{
                transX:35,
                transY:-145,
                rotation:315,
                opacity:0.2,
              },
            },
          ]
        },
        {
          title: 'Reverse Turn',
          offset: [0,0],
          commenceFacing: 0,
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
      tangoNewcomer: [
        {title: 'Left Foot Walk'},
        {title: 'Right Foot Walk'},
        {title: 'Progressive Side Step'},
        {title: 'Point to PP'},
        {title: 'Progressive Link'},
        {title: 'Closed Promenade'},
        {title: 'Rock Turn'},
        {title: 'Open Reverse Turn'},
        {title: 'Back Corte'},
      ],
      tangoBronze: [
        {title: 'Open Promenade'},
        {title: 'Progressive Side Step Reverse Turn'},
        {title: 'Left Foot Rock'},
        {title: 'Right Foot Rock'},
        {title: 'Natural Twist Turn'},
        {title: 'Natural Promenade Turn'},
      ],
      tangoSilver: [
        {title: 'Promenade Link'},
        {title: 'Four Step'},
        {title: 'Back Open Promenade'},
        {title: 'Outside Swivel'},
        {title: 'Reverse Outside Swivel'},
        {title: 'Fallaway Promenade'},
        {title: 'Four Step Change'},
        {title: 'Brush Tap'},
      ],
      tangoGold: [
        {title: 'Fallaway Four Step'},
        {title: 'Oversway'},
        {title: 'Basic Reverse Turn'},
        {title: 'The Chase'},
        {title: 'Fallaway Reverse & Slip Pivot'},
        {title: 'Five Step'},
        {title: 'Overturned Five Step'},
        {title: 'Contra Check'},
      ],
      vwaltzBronze: [
        {title: 'Reverse Turn'},
        {title: 'Natural Turn'},
        {title: 'Forward Change, Natural to Reverse'},
        {title: 'Forward Change, Reverse to Natural'},
        {title: 'Backward Change, Natural to Reverse'},
        {title: 'Backward Change, Reverse to Natural'},
      ],
      vwaltzSilver: [
        {title: 'Reverse Fleckerl'},
      ],
      vwaltzGold: [
        {title: 'Natural Fleckerl'},
        {title: 'Contra Check'},
      ],
      foxtrotNewcomer: [
        {title: 'Feather Step'},
        {title: 'Three Step'},
        {title: 'Natural Turn'},
        {title: 'Reverse Turn & Feather Finish'},
        {title: 'Closed Impetus & Feather Finish'},
      ],
      foxtrotBronze: [
        {title: 'Natural Weave'},
        {title: 'Change of Direction'},
        {title: 'Basic Weave'},
      ],
      foxtrotSilver: [
        {title: 'Closed Telemark'},
        {title: 'Open Telemark'},
        {title: 'Feather Ending'},
        {title: 'Top Spin'},
        {title: 'Hover Feather'},
        {title: 'Hover Telemark'},
        {title: 'Natural Telemark'},
        {title: 'Hover Cross'},
        {title: 'Open Natural Turn'},
        {title: 'Outside Swivel'},
        {title: 'Open Impetus'},
        {title: 'Weave from Promenade Position'},
        {title: 'Reverse Wave'},
      ],
      foxtrotGold: [
        {title: 'Natural Twist Turn'},
        {title: 'Curved Feather'},
        {title: 'Back Feather'},
        {title: 'Natural Zig Zag from Promenade Position'},
        {title: 'Fallaway Reverse & Slip Pivot'},
        {title: 'Natural Hover Telemark'},
        {title: 'Bounce Fallaway with Weave Ending'},
      ],
      quickstepNewcomer: [
        {title: 'Quarter Turn to Right'},
        {title: 'Natural Turn'},
        {title: 'Natural Turn with Hesitation'},
        {title: 'Natural Pivot Turn'},
        {title: 'Natural Spin Turn'},
        {title: 'Progressive Chasse'},
        {title: 'Chasse Reverse Turn'},
        {title: 'Forward Lock'},
      ],
      quickstepBronze: [
        {title: 'Closed Impetus'},
        {title: 'Back Lock'},
        {title: 'Reverse Pivot'},
        {title: 'Progressive Chasse to Right'},
        {title: 'Tipple Chasse to Right'},
        {title: 'Running Finish'},
        {title: 'Double Reverse Spin'},
        {title: 'Cross Chasse'},
        {title: 'Change of Direction'},
      ],
      quickstepSilver: [
        {title: 'Quick Open Reverse'},
        {title: 'Fishtail'},
        {title: 'Running Right Turn'},
        {title: 'Four Quick Run'},
        {title: 'V6'},
        {title: 'Closed Telemark'},
      ],
      quickstepGold: [
        {title: 'Cross Swivel'},
        {title: 'Six Quick Run'},
        {title: 'Rumba Cross'},
        {title: 'Tipsy to Right'},
        {title: 'Tipsy to Left'},
        {title: 'Hover Corte'},
      ],
    }
  },
}

</script>
