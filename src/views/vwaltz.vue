<template>
  <div class="about">
    <h4>Viennese Waltz</h4>
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
    AllOneList(){
      return (this.Bronze).concat(this.Silver).concat(this.Gold);
    }
  },

}

</script>
