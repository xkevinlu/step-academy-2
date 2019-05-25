<template>
  <div class="about">
    <h1>Syllabus Quickstep Figures</h1>
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
        {title: 'Quarter Turn to Right'},
        {title: 'Natural Turn'},
        {title: 'Natural Turn with Hesitation'},
        {title: 'Natural Pivot Turn'},
        {title: 'Natural Spin Turn'},
        {title: 'Progressive Chasse'},
        {title: 'Chasse Reverse Turn'},
        {title: 'Forward Lock'},
      ],
      Bronze: [
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
      Silver: [
        {title: 'Quick Open Reverse'},
        {title: 'Fishtail'},
        {title: 'Running Right Turn'},
        {title: 'Four Quick Run'},
        {title: 'V6'},
        {title: 'Closed Telemark'},
      ],
      Gold: [
        {title: 'Cross Swivel'},
        {title: 'Six Quick Run'},
        {title: 'Rumba Cross'},
        {title: 'Tipsy to Right'},
        {title: 'Tipsy to Left'},
        {title: 'Hover Corte'},
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
