<template>
     <v-card
        class="ma-6 pa-11"
        outlined
        tile
        style="height: 400px; width: 360px; padding: 0px;"        
     >
       <v-card-title
        style="marginTop: -40px; marginLeft: -30px; fontSize: 22px; fontWeight: bold;"
       > 
       {{team.name}} 
       </v-card-title>
       <v-divider style="marginTop: -8px; marginLeft: -30px; minWidth: 300px;"></v-divider>
       <p v-if="isViewMode">           
            <view-set
                :team="team"  
                :emps="emps" 
                :projs="projs" 
                :hello="hello"  
            > </view-set>            
       </p>
       <p v-else> 
            <select-set
                :team="team"  
                :emps="emps" 
                :projs="projs" 
                :hello="hello" 
                v-on:changed="onChanged"          
           ></select-set> 
       </p>    
       <v-divider style="marginTop: -8px; marginLeft: -30px; minWidth: 300px;"></v-divider>
         <div class="text-center">
             <icon-panel 
                :isLock="team.editLock"
                :isChange="isChanging"    
                v-on:flip="flipView" 
                v-on:save="relaySave"  
                style="marginTop: 8px;"             
                >                              
            </icon-panel>            
        </div>
    </v-card> 
</template>
<style scoped>
</style>


<script>
import ViewSet from './ViewSet';
import SelectSet from './SelectSet';
import IconPanel from './IconPanel';

export default {
    name: 'TeamCard',
    props: ['team', 'projs', 'emps', 'hello'],
    data: function() {
      return {
          isViewMode: true, 
          isChanging: false,
      }
    },
    watch() {

    },
    methods: {
        flipView() {
            if (this.isViewMode) {
                this.isViewMode = false;
                this.$emit('edit', this.team._id);                
            } else {
                this.isViewMode = true;
                this.isChanging = false;
                this.$emit('cancel');
            }            
        },
        onChanged(id, updated) {
            this.isChanging = true;        
            this.$emit('changing', id, updated, this.team);
        },
        relaySave() {
            this.$emit('saving');
            this.flipView();
            this.isChanging = false;
        }      
    },
    components: {
        ViewSet,
        SelectSet,
        IconPanel
    },   
    mounted: function() {
       
    }       
}
</script>
