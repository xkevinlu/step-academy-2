<template>
  <div class="about">
    <h4>Slow Foxtrot</h4>
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
      Newcomer: [
        {title: 'Feather Step'},
        {title: 'Three Step'},
        {title: 'Natural Turn'},
        {title: 'Reverse Turn & Feather Finish'},
        {title: 'Closed Impetus & Feather Finish'},
      ],
      Bronze: [
        {title: 'Natural Weave'},
        {title: 'Change of Direction'},
        {title: 'Basic Weave'},
      ],
      Silver: [
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
      Gold: [
        {title: 'Natural Twist Turn'},
        {title: 'Curved Feather'},
        {title: 'Back Feather'},
        {title: 'Natural Zig Zag from Promenade Position'},
        {title: 'Fallaway Reverse & Slip Pivot'},
        {title: 'Natural Hover Telemark'},
        {title: 'Bounce Fallaway with Weave Ending'},
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
    AllOneList(){
      return this.Newcomer.concat(this.Bronze).concat(this.Silver).concat(this.Gold);
    }
  },

}

</script>
