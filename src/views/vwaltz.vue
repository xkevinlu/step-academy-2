<template>
  <div class="about">
    <h1>Syllabus Viennese Waltz Figures</h1>
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
      drawer: null,
      Bronze: [
        {title: 'Reverse Turn'},
        {title: 'Natural Turn'},
        {title: 'Forward Change, Natural to Reverse'},
        {title: 'Forward Change, Reverse to Natural'},
        {title: 'Backward Change, Natural to Reverse'},
        {title: 'Backward Change, Reverse to Natural'},
      ],
      Silver: [
        {title: 'Reverse Fleckerl'},
      ],
      Gold: [
        {title: 'Natural Fleckerl'},
        {title: 'Contra Check'},
      ],
    }
  },
  computed: {
    All() {
      return [
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
