<template>
<div id="q-app" style="min-height: 100vh;">
  <div class="q-px-lg q-pb-md">
    <q-timeline color="blue-10">
      <q-timeline-entry heading body="Recent Update History"></q-timeline-entry>
      <div v-for="item in items">
      <q-timeline-entry>
        <q-card align="evenly">
        <div v-for="(value, key, index) in item.UpdateList">  
        {{ index }}. {{ key }}: {{ value }}
         </div>
        </q-card>
      </q-timeline-entry>
      </div>
    </q-timeline>
  </div>
</div>  
</template>

<style>

</style>

<script>
const Data = 'http://localhost:8000/Data'


export default {
  name: 'Timeline',
  data() {
    return { 
      items: []
    }
  },
  mounted(){
    fetch(Data)
      .then(res => res.json())
      .then(data => this.items = data)
      .catch(err => console.log(err.message))
  }
}
</script>
