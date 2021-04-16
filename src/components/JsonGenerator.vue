<template>
 <!--item generator component, after getting items, they passed as prop to Item component -->
  <div class="json-generator">
    <Item v-for="(item, index) in items"  :key="index" :item="item"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Item from '@/components/Item.vue'
export default {
  name: 'JsonGenerator',
  components: {
   Item 
  },
  data() {
    return {
      items: []
    }
  },
  created(){
    //action getItems from store
    this.getItems().then(response => {
      this.items = response 
    })
  },
  methods: {
    ...mapActions({
      getItems : 'items/getItems'
    })
  }
}
</script>

