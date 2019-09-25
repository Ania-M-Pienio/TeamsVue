 text icon color="grey darken-2" 


 v-if="isToCancel" large> 
             mdi-close-circle-outline
        </v-icon>
        <v-icon v-else large> 
            mdi-pencil-circle





             <v-snackbar
            v-model="snackbar"
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