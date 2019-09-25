<template>
 <v-row justify="space-around">
    <span v-if="!isLock" > 
    <v-btn
        v-if="isToCancel" 
        @click="switchView"         
        text icon color="red darken-2"   
        > 
        <p style="backgroundColor: white;">
            <v-icon 
                large>
                {{icon}} 
            </v-icon>
            <br>
            <br>
            <span style="fontSize: 11px;"> CANCEL </span>
        </p>
    </v-btn>
    <v-btn 
        v-else
        @click="switchView"  
        text icon color="grey darken-2" 
        > 
        <p style="backgroundColor: white;">
            <v-icon 
                large
                style="backgroundColor: white;">
                {{icon}}
            </v-icon>
            <br>
            <br>
            <span style="fontSize: 11px;"> &nbsp; EDIT &nbsp; </span>
        </p>
    </v-btn>
    </span>
    <v-btn 
        v-if="isChange"
        text icon color="green darken-2"
         @click="handleSave"
        >
        <p style="backgroundColor: white;">
            <v-icon 
                large
                style="backgroundColor: white;"
            > 
                mdi-check-circle
            </v-icon>
            <br>
            <br>
            <span style="fontSize: 11px;"> &nbsp; SAVE &nbsp; </span>
        </p>
    </v-btn>
  </v-row>  
</template>

<style scoped>

</style>

<script>
export default {
    name: 'IconPanel',
    props: ['isLock', 'isChange'],
    data: function() {
      return {
          isToCancel: false,
      }
    },
    methods: {
        switchView() {
            if(this.isToCancel) {
                this.isToCancel = false;
            } else {
                this.isToCancel = true;
            }
            this.$emit('flip');
        },
        handleSave() {
            this.isToCancel = false;
            this.$emit('save');
            
        }
    },
    mounted: function() {   

    },
    computed: {
        icon() {
            if(this.isToCancel) {
                return 'mdi-close-circle';
            } else {
                return 'mdi-pencil-circle';
            }
        }
    } 
}
</script>