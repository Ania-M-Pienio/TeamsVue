<template>
    <v-card class="main">     
      <v-responsive :aspect-ratio="16/8"> 
        <v-container fluid>
          <v-row>
            <v-col cols="12"> 
               <v-row                  
                  justify="center"
                  class="blue-grey darken-4"
                  style="minHeight: 300px; maxHeight:100%"
                >    
                <p v-if="projects"> 
                <span style="color: #FFFFFF"> </span> 
                </p>
                  <team-card
                    v-for="team in teams"
                    :key="team._id"  
                    :team="team"  
                    :emps="employees" 
                    :projs="projects"  
                    :hello="hello"  
                    v-on:edit="onEdit(team._id)"
                    v-on:cancel="onCancel"
                    v-on:changing="onChanging"     
                    v-on:saving="onSaving(team, team._id)"              
                  >            
                  </team-card>             
               </v-row>             
            </v-col>         
          </v-row>
        </v-container>      
      </v-responsive>
      <v-snackbar
        v-model="snackbar"
        :top="true"
        >
        {{ text }}
        <v-btn
          color="pink"
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
    </v-card>       
</template>

<style scoped>
  .main {
    margin-top: 80px;
  }  
</style>

<script>
import TeamCard from './TeamCard';
import {getData } from '../data.js';
import {saveData} from '../data.js';
import _ from 'lodash';

export default {
  name: 'MainContainer',
  data: function() {
      return {
        teams: [],
        employees: [],
        projects: [],
        /*--------------------------*/
        hello: '',
        editId: '',
        editName: '',
        newLead: {},
        newMembers: [],
        newProjects: [],
        snackbar: false,
        text: 'Welcome! Teams are ready to be edited.',
      }
    },
  methods: {   
    onEdit(id) {
     //[1] mark the ones that are not edited as true
      _.forEach(this.teams, (team) => {
        if (id != team._id) {
          team.editLock = true;
        } else {
    //[2] save the id of the team being edited atm
          this.editId = id;
          _.forEach(this.teams, (team) => {
            if(team._id == this.editId) {
              this.editName = team.name;
            }
          })
        }
      })
    },
    onCancel() {
      //[1] mark all teams as locked false
      _.forEach(this.teams, (team) => {        
          team.editLock = false;
      //[2] clear any saved - no team is edited atm
          this.masterReset();
      })
    },
    onChanging(id, updated) {
      if(id == 'lead') {
        this.newLead = updated;
      } else if (id == 'members') {
        this.newMembers = updated;
      } else {
        this.newProjects = updated;
      }
    },
    masterReset() {
      this.editId = '';
      this.editName = '';
      this.newLead = '';
      this.newMembers = [];
      this.newProjects = [];
    },
    onSaving(tm, id) {
      tm = {
        TeamName: this.editName + "",
        TeamLead: this.newLead != '' ? this.newLead._id  : tm.teamLead._id,
        Projects: this.newProjects.length > 0 ? this.newProjects : _.cloneDeep(tm.teamProjects.map(proj => {
          return proj._id;
        })),
        Employees: this.newMembers.length > 0 ? this.newMembers : _.cloneDeep(tm.teamEmployees.map(emp => {
          return emp._id;
        })),       
      }; 
      saveData("team/" + id, tm).then(response => {

        getData("teams").then((_teams) => {
          this.teams = _teams.slice();
        })
        .catch((err) => {
          console.log("teams " + err);
        });
        getData("projects").then((_projects) => {
          this.projects = _projects.slice();
        })
        .catch((err) => {
          console.log("projects " + err);
        });
        getData("employees").then((_employees) => {
          this.employees = _employees.slice();
        })
        .catch((err) => {
          console.log("employees " + err);
        });
          this.text = 'Success!' + ' ' + tm.TeamName + ' has been updated.';
          this.snackbar = true;  
          this.masterReset();     
        })
        .catch(err => {
          console.log(err);
        });       
    },
  },
    components: {
          TeamCard
        },
    mounted: function () {    
          getData("teams")
          .then((_teams) => {
            this.teams = _teams.slice();
          })
          .catch((err) => {
            console.log("teams " + err);
          });

          getData("projects")
          .then((_projects) => {
            this.projects = _projects.slice();

          })
          .catch((err) => {
            console.log("projects ");
          });

          getData("employees")
          .then((_employees) => {
          this.employees = _employees.slice();
          this.snackbar = true;
          })
          .catch((err) => {
          console.log("employees " + err);
          });
          
          
        }
  }
</script>



