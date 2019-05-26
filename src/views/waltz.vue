<template>
  <div class="about">
    <h4>Waltz</h4>
    <router-view></router-view>
    <SyllabusList :All = "All"></SyllabusList>
  </div>
</template>


<script>
import SyllabusList from '../components/SyllabusList.vue'

export default {
  name: 'App',
  components: {SyllabusList},
  data () {
    return {
      figure: '',
      drawer: null,
      waltzNewcomer: [
        {title: 'RF Closed Change',
          commenceFacing: 135,
          startFoot: 'RFF',
          endFoot: 'LFF',
          steps: [
            {
              count:0,
              instructionBoth:'Prepare to move DW',
              instructionMan:'Begin on LF',
              instructionLady:'Begin on RF',
              ml:{
                changeX:0,
                changeY:0,
                changeRotation:0,
                changeOpacity:1,
              },
              mr:{
                changeX:0,
                changeY:0,
                changeRotation:0,
                changeOpacity:-0.8,
              },
              ll:{
                changeX:0,
                changeY:0,
                changeRotation:0,
                changeOpacity:-0.8,
              },
              lr:{
                changeX:0,
                changeY:0,
                changeRotation:0,
                changeOpacity:1,
              },
            },
            {
              count:1,
              instructionBoth:'Moving DW',
              instructionMan:'RF forward (HT)',
              instructionLady:'LF back (TH)',
              ml:{
                changeRotation:0,
                changeOpacity:-0.8,
              },
              mr:{
                changeY:-80,
                changeOpacity:0.8,
                footwork:'HT',
              },
              ll:{
                changeY:-80,
                changeOpacity:0.8,
                footwork:'TH',
              },
              lr:{
                changeOpacity:-0.8,
              },
            },
            {
              count:1.5,
              instructionBoth:'Moving DW',
              instructionMan:'RF forward (HT)',
              instructionLady:'LF back (TH)',
              ml:{
                changeX:0,
                changeY:-80,
                changeRotation:0,
                changeOpacity:0.8,
                transformOrigin:'center',
                transition:'all 2s',
                footwork:'HT',
              },
              mr:{
                changeX:0,
                changeY:-80,
                changeRotation:0,
                changeOpacity:0.8,
                transformOrigin:'center',
                transition:null,
                footwork:null,
              },
              ll:{
                changeX:0,
                changeY:-80,
                changeRotation:0,
                changeOpacity:0.8,
                transformOrigin:'center',
                transition:null,
                footwork:null,
              },
              lr:{
                changeX:0,
                changeY:-80,
                changeRotation:0,
                changeOpacity:0.8,
                transformOrigin:'center',
                transition:'all 2s',
                footwork:'TH',
              },
            },
            {
              count:2,
              instructionBoth:'Moving DW',
              instructionMan:'RF forward (HT)',
              instructionLady:'LF back (TH)',
              ml:{
                changeX:-80,
                changeY:-80,
                changeRotation:0,
                changeOpacity:0,
                transformOrigin:'center',
                transition:'all 2s',
                footwork:'HT',
              },
              mr:{
                changeX:0,
                changeY:-80,
                changeRotation:0,
                changeOpacity:0,
                transformOrigin:'center',
                transition:'all 2s',
                footwork:'HT',
              },
              ll:{
                changeX:0,
                changeY:-80,
                changeRotation:0,
                changeOpacity:0,
                transformOrigin:'center',
                transition:'all 2s',
                footwork:'HT',
              },
              lr:{
                changeX:-80,
                changeY:-80,
                changeRotation:0,
                changeOpacity:0,
                transformOrigin:'center',
                transition:'all 2s',
                footwork:'HT',
              },
            },
            {
              count:3,
              instructionBoth:'Moving DW',
              instructionMan:'RF forward (HT)',
              instructionLady:'LF back (TH)',
              ml:{
                changeX:-80,
                changeY:-80,
                changeRotation:0,
                changeOpacity:0,
                transformOrigin:'center',
                transition:'all 2s',
                footwork:'HT',
              },
              mr:{
                changeX:-80,
                changeY:-80,
                changeRotation:0,
                changeOpacity:0,
                transformOrigin:'center',
                transition:'all 2s',
                footwork:'HT',
              },
              ll:{
                changeX:-80,
                changeY:-80,
                changeRotation:0,
                changeOpacity:0,
                transformOrigin:'center',
                transition:'all 2s',
                footwork:'HT',
              },
              lr:{
                changeX:-80,
                changeY:-80,
                changeRotation:0,
                changeOpacity:0,
                transformOrigin:'center',
                transition:'all 2s',
                footwork:'HT',
              },
            }
          ],
        },
        {title: 'LF Closed Change'},
        {title: 'Natural Turn'},
        {title: 'Reverse Turn'},
        {title: 'Spin Turn'},
        {title: 'Whisk'},
        {title: 'Chasse from Promenade Position'},
      ],
      waltzBronze: [
        {title: 'Closed Impetus'},
        {title: 'Hesitation Change'},
        {title: 'Outside Change'},
        {title: 'Reverse Corte'},
        {title: 'Back Whisk'},
        {title: 'Basic Weave'},
        {title: 'Double Reverse Spin'},
        {title: 'Reverse Pivot'},
        {title: 'Back Lock'},
        {title: 'Progressive Chasse to Right'},
      ],
      waltzSilver: [
        {title: 'Weave from Promenade Position'},
        {title: 'Closed Telemark'},
        {title: 'Open Telemark'},
        {title: 'Open Impetus'},
        {title: 'Cross Hesitation'},
        {title: 'Wing'},
        {title: 'Outside Spin'},
        {title: 'Turning Lock to L'},
        {title: 'Drag Hesitation'},
      ],
      waltzGold: [
        {title: 'Left Whisk'},
        {title: 'Contra Check'},
        {title: 'Closed Wing'},
        {title: 'Turning Lock to Right'},
        {title: 'Fallaway Reverse & Slip Pivot'},
        {title: 'Hover Corte'},
      ],
    }
  },
  computed: {
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
    }
  },
}

</script>
