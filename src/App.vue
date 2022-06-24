<template>
<Timeline />
</template>

<script>
import { ref } from 'vue'
import Navbar from './components/Nav-bar.vue'
import axios from 'axios'
import Counter from './components/counter.vue'
import {createApp} from 'vue'
import StoriesPage from './stories/Page.vue'
import Timeline from './components/Timeline.vue'
import getimagesbyparty from './components/data/getimagesbyparty.json'

export default {
  name: "App",
  data() {
    return {
      info: null
    }
  },
  components: {
    Navbar,
    Counter,
    StoriesPage,
    Timeline
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
