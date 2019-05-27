<template>
<v-list>
            <v-list-group
              v-for="item in All"
              :key="item.title"
              v-model="item.active"
              no-action
            >
            <v-icon slot="prependIcon" medium :color="levelColor(item)">star</v-icon>

              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>

              <v-list-tile
                v-for="subItem in item.figures"
                :key="subItem.title"
                :to="figureRoute(subItem.title)"
                @click="$emit('figurePicked')"
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-icon>{{ subItem.action }}</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>
          </v-list>

  </template>

  <script>
  export default {
    name: 'SyllabusList',
    props: {
      All: Array
    },
    methods: {
      levelColor(item) {
          switch (item.title)
          {
              case "Newcomer":
                  return "green lighten-2";
              case "Bronze":
                  return "brown";
              case "Silver":
                  return "blue-grey lighten-3";
              case "Gold":
                  return "yellow darken-3";
                }
      },
      figureRoute(name) {
        return `${name.replace(/\s+/g, '-')}`
      }
    },

  }
</script>
