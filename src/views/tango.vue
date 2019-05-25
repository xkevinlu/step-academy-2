<template>
  <div class="about">
    <h1>Syllabus Tango Figures</h1>
    <SyllabusList :all="All"></SyllabusList>
  </div>
</template>

<script>
import SyllabusList from '../components/SyllabusList.vue'

export default {
  name: 'App',
  components: {SyllabusList},
  data () {
    return {
      drawer: null,
      Newcomer: [
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
      Bronze: [
        {title: 'Open Promenade'},
        {title: 'Progressive Side Step Reverse Turn'},
        {title: 'Left Foot Rock'},
        {title: 'Right Foot Rock'},
        {title: 'Natural Twist Turn'},
        {title: 'Natural Promenade Turn'},
      ],
      Silver: [
        {title: 'Promenade Link'},
        {title: 'Four Step'},
        {title: 'Back Open Promenade'},
        {title: 'Outside Swivel'},
        {title: 'Reverse Outside Swivel'},
        {title: 'Fallaway Promenade'},
        {title: 'Four Step Change'},
        {title: 'Brush Tap'},
      ],
      Gold: [
        {title: 'Fallaway Four Step'},
        {title: 'Oversway'},
        {title: 'Basic Reverse Turn'},
        {title: 'The Chase'},
        {title: 'Fallaway Reverse & Slip Pivot'},
        {title: 'Five Step'},
        {title: 'Overturned Five Step'},
        {title: 'Contra Check'},
      ],
    }
  },
  computed: {
    All() {
      return [
        {title:'Newcomer', figures: this.Newcomer},
        {title:'Bronze', figures: this.Bronze},
        {title:'Silver', figures: this.Silver},
        {title:'Gold', figures: this.Gold},
      ];
    },
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
    }
  }
}

</script>
