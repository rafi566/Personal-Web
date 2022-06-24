<template>
<center>
  <q-responsive :ratio="16/9">
    <q-card-section class="border-radius-inherit flex flex-center bg-blue-1">
    <div class="column">
        <div class="col1">        
            <h4>{{number}}</h4>
        </div>
        <div class="col1">
            <button @click="number++">Plus 1</button>
        </div>
    </div>    
    </q-card-section>
  </q-responsive>
</center>     
</template>

<script>
export default {
    data(){
        return{
            number : 0
        }
    }
}
</script>

<style>

</style>