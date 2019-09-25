<template>
    <div class="shift"> 
        <v-row class="SelectTitle">
            Team Lead <span style="color: #FFFFFF;"> {{team.teamLead.name}} </span>
        </v-row>
        <lead-drop style="marginTop: -1px;"
            :items="emps"
            :selected="team.teamLead"
            :hello="hello"  
            v-on:change="relayChange"   
        > </lead-drop>        
       
        <v-row class="SelectTitle">
            Team Members <span style="color: #FFFFFF;"> {{emps.length}} </span>
        </v-row>
        <member-drop style="marginTop: -1px;"
            :items="emps"
            :selected="team.teamEmployees"
            :hello="hello"
            v-on:change="relayChange"     
        > </member-drop> 
        <v-row class="SelectTitle">
            Team Projects <span style="color: #FFFFFF;"> {{projs.length}} </span>
        </v-row>
        <project-drop style="marginTop: -1px;"
            :items="projs"
            :selected="team.teamProjects"
            :hello="hello" 
            v-on:change="relayChange"      
        > </project-drop>   
    </div>    
</template>

<style scoped>
.div.v-messages.theme--light {
    height: 1px;
    margin-top: -2px;
}
.SelectTitle {
     margin-bottom: -13.2px;
     margin-top: -1.7px;
     margin-left: -2px;
}
.shift {
    margin-top: 17px;
}
</style>


<script>
import MemberDrop from './MemberDrop';
import ProjectDrop from './ProjectDrop';
import LeadDrop from './LeadDrop';

export default {
    name: 'SelectSet',
    props: ['team', 'emps', 'projs', 'hello'],
    methods: {     
    },      
    components: {
       MemberDrop,
       ProjectDrop,
       LeadDrop
    },   
      mounted: function() {          
 
    },
    methods: {
      relayChange(id, updated) {
        this.$emit('changed', id, updated);
      }
    },
    mounted: function() {

    }      
}
</script>