<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer
      app
      v-model="drawer"
      absolute
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Step Academy</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.route"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


      <v-toolbar app dark color="primary">
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>

        <v-toolbar-title class="white--text">{{subheaderText}}</v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn> -->
      </v-toolbar>


          <router-view></router-view>


    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    subheaderText() {
      switch(this.$route.params.dance) {
        case 'waltz':
          return 'Slow Waltz';
        case 'tango':
          return 'Tango';
        case 'vwaltz':
          return 'Viennese Waltz';
        case 'foxtrot':
          return 'Slow Foxtrot';
        case 'quickstep':
          return 'Quickstep';
        default:
          return 'Home';
      }
    },
  },
  data () {
    return {
      drawer: null,
      menuItems: [
        {title:"Home", route: "/"},
        {title:"Waltz", route: "/waltz/"},
        {title:"Tango", route: "/tango/"},
        {title:"Viennese Waltz", route: "/vwaltz/"},
        {title:"Foxtrot", route: "/foxtrot/"},
        {title:"Quickstep", route: "/quickstep/"},
      ],
    }
  }
}

</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
