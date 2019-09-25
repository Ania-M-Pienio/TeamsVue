<template>

<div class="shift">
    <v-col> 
        <v-row class="ViewTitle">
            Team Lead
        </v-row>
        <v-row class="ViewInfo">
            <v-chip             
            style="width: 360px;" 
            >{{team.teamLead.name}}</v-chip>
        </v-row>  
        <v-row class="ViewTitle">
            Team Members
        </v-row>
        <v-row class="ViewInfo">
            <v-chip             
            style="width: 360px;" 
            >{{team.teamEmployees.length}} of {{emps.length}}</v-chip>
        </v-row> 
        <v-row class="ViewTitle">
            Team Projects
        </v-row>
        <v-row class="ViewInfo">
            <v-chip              
            style="width: 360px;" 
            ><span class="shorten" v-for="pro in firstThreeSorted" :key="pro._id"> {{pro.name}} &nbsp; </span></v-chip>
        </v-row> 

    </v-col>
</div>   

</template>


<style scoped>


.ViewTitle {
    margin-bottom: 12px;
}

.ViewInfo {
    margin-bottom: 11.5px;
    min-width: 200px;
}

.shift {
    margin-top: 3px;
}

.shorten {
    overflow: hidden;
    word-wrap: break-word;
}

</style>

<script>
import _ from 'lodash';
export default {
    name: 'viewSet',
    props: ['team', 'emps', 'projs', 'hello'],    
    computed: {
        firstThreeSorted: function() {            
            let three = [];            
            for(let i = 0; i < 3; i++) {
                if (this.team.teamProjects[i]) {
                three.push(this.team.teamProjects[i]);
                }
            }              
            three = _.forEach(three, proj => {
                let slices = proj.name.split(" ");
                proj._number = parseInt(slices[1]);
            })
            three.sort((a, b) => {
            return b._number - a._number;
            })
            .reverse();
            return three;
        }
    },
    mounted: function() {

    }  
}
</script>