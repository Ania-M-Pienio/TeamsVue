<template>
    <v-select
        v-model="sell"
        :items="all"
        item-text="name"
        return-object
        label=""  
        @change="handleChange" 
    >
     <template 
      v-slot:selection="{item, index}"> 
        <span v-if="index === 0"
          class="grey--text caption"
        >
          <v-chip outlined style="width: 250px; marginLeft: -5px;">
            {{sell.name}}
          </v-chip>    
        </span>
    </template>

    <template v-slot:prepend-item >
      <v-list-item       
        ripple
        @click="toggle"       
      >
        <v-list-item-action>
            <v-avatar class="profile" size="40" >
                <img
                    src="https://www.sccpre.cat/mypng/full/132-1323403_vector-library-stock-female-stock-photography-royalty-happy.png"
                    alt="sell.name"
                >
            </v-avatar>          
        </v-list-item-action>
        <v-list-item-action>
          <v-icon :color="sell.length > 0 ? 'indigo darken-4' : ''"></v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title> {{sell.name}} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="mt-2"></v-divider>
    </template>        
  </v-select>  
</template>


<style scoped>
.shorten {
    overflow: hidden;
    word-wrap: break-word;
}
</style>

<script>
import _ from 'lodash';

export default {
    name: 'LeadDrop',
    props: ['items', 'selected', 'hello'],
    data: function() {
      return {
          all: [],
          sell: {}
       }
    }, 
    mounted: function()  {   
      this.all = this.items.slice();
      this.sell = _.cloneDeep(this.selected); 
    },
    computed: {

    },   
    methods: {
      toggle() {},
      handleChange() {
        this.$emit('change', 'lead', this.sell);
      }
    }    
}
</script>