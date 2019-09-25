<template>

    <v-select
        v-model="sell"
        :items="all"
        item-text="name"
        return-object
        label=" "
        multiple
        @change="handleChange"    
    >
    <template v-slot:selection="{item, index}"> 
        <span v-if="index === 0"
          class="grey--text caption"
        >
          <v-chip outlined style="width: 250px; marginLeft: -5px;">
            {{sell.length}} of {{all.length}}
          </v-chip>    
        </span>
    </template>

    <template v-slot:prepend-item>
      <v-list-item
        ripple
        @click="toggle"
      >
        <v-list-item-action>
          <v-icon :color="sell.length > 0 ? 'indigo darken-4' : ''">{{ icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Select All {{all.length}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="mt-2"></v-divider>
    </template>
    <template v-slot:append-item>
      <v-divider class="mb-2"></v-divider>
      <v-list-item disabled>
        <v-list-item-avatar color="grey lighten-3">
          <v-icon>mdi-pencil-circle-outline</v-icon>
        </v-list-item-avatar>
        <v-list-item-content v-if="likesAllItems">
          <v-list-item-title> All items have been selected </v-list-item-title>
        </v-list-item-content>
        <v-list-item-content v-else-if="likesSomeItems">
          <v-list-item-title>Item Count</v-list-item-title>
          <v-list-item-subtitle>{{ sell.length }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content v-else>
          <v-list-item-title>
            A team needs items!
          </v-list-item-title>
          <v-list-item-subtitle>
            Go ahead, add some.
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
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
export default {
    name: 'MemberDrop',
    props: ['items', 'selected', 'hello'], 
     data: function() {
      return {
          all: [],
          sell: [],
      }
    }, 
    mounted: function()  { 

        this.all = this.items.slice();
        this.sell = this.selected;
 
    },
    computed: {
      likesAllItems () {
        return this.sell.length === this.all.length;
      },
      likesSomeItems () {
        return this.sell.length > 0 && !this.likesAllItems;
      },
      icon () {
        if (this.likesAllItems) return 'mdi-close-box';
        if (this.likesSomeItems) return 'mdi-minus-box';
        return 'mdi-checkbox-blank-outline';
      },
    },
    methods: {
      toggle () {
        this.$nextTick(() => {
          if (this.likesAllItems) {
            this.sell = [];
          } else {
            this.sell = this.all.slice();
          }
        })
      },
      handleChange() {
        this.$emit('change', 'members', this.sell);        
      }
    }
    
}
</script>