<template>
 <!--item component -->
  <div class="item" @click="isIdActive = !isIdActive">
    <h3 v-if="isIdActive">{{ 'Id: ' + item.id }}</h3>    
    <h3 v-else>{{ 'user Id: ' + item.userId }}</h3>    
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: {
      type: Object
    }
  },
  data(){
    return {
      isIdActive: true
    }
  }
}
</script>
