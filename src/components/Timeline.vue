<template>
<div id="q-app" style="min-height: 100vh;">
  <div class="q-px-lg q-pb-md">
    <q-timeline color="blue-10">
      <q-timeline-entry heading body="Recent Update History"></q-timeline-entry>
      <div v-for="item in items" :key="item.UpdateList">
      <q-timeline-entry
      subtitle = Test 
      >
        <q-card align="evenly">  
        <ul>
          <li>
            <span>{{ item.UpdateList.LastUpdateDate }}</span>
          </li>
        </ul>
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
