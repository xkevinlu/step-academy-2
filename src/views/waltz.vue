<template>
  <div class="about">
    <h1>Waltz - Select a Figure</h1>
    <Player

    ></Player>
    <SyllabusList :All = "All"></SyllabusList>
  </div>
</template>


<script>
import SyllabusList from '../components/SyllabusList.vue'
import Player from '../components/Player.vue'

export default {
  name: 'App',
  components: {SyllabusList, Player},
  data () {
    return {
      drawer: null,
      waltzNewcomer: [
        {title: 'RF Closed Change'},
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
    }
  },
  methods: {
    levelColor(item) {
        console.log(item.title);
        switch (item.title)
        {
            case "Newcomer":
                return "green lighten-2";
                break;
            case "Bronze":
                return "brown";
                break;
            case "Silver":
                return "blue-grey lighten-3";
                break;
            case "Gold":
                return "yellow darken-3";
                break;
              }
    },
  },
}

</script>
