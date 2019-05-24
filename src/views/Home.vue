<template>
  <div class="home">
    <h3>Step Academy - Ballroom dancing steps visualized</h3>
    <v-layout>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-img
        src="https://i.pinimg.com/originals/d7/49/46/d749469e003595274ee560706a898627.jpg"
        aspect-ratio="2.75"
      ></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Waltz</h3>
          <div> {{ card_text }} </div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange">Steps</v-btn>
        <v-btn flat color="orange">Routines</v-btn>
      </v-card-actions>
    </v-card>
    <v-card>
      <v-img
        src="http://www.wikidancesport.com/Attachments/dances/Tango/Mirko-Gozzoli-and-Edita-Daniute-tango.jpg"
        aspect-ratio="2.75"
      ></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Tango</h3>
          <div> {{ card_text }} </div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange">Steps</v-btn>
        <v-btn flat color="orange">Routines</v-btn>
      </v-card-actions>
    </v-card>
    <v-card>
      <v-img
        src="https://i.ytimg.com/vi/qopJkgvLDVE/maxresdefault.jpg"
        aspect-ratio="2.75"
      ></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Viennese Waltz</h3>
          <div> {{ card_text }} </div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange">Steps</v-btn>
        <v-btn flat color="orange">Routines</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
