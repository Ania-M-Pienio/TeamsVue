import  _ from "lodash";

const Url = "https://assignment-1-web422.herokuapp.com/";

const getData = function(what) {
  return fetch(Url + what)
    .then(response => {
      // If we don't get a 200 OK response, throw an error to the .catch()
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      // Parse the response body from JSON to JS (an Array)
      return response.json();
    })

        
/* **********************  EMPLOYEES  ******************** */
/* ********************************************************/

    .then(data => {    
      if (what === "employees") {
        data = data.map(emp => {
          return {
            _id: emp._id,
            name: emp.FirstName + " " + emp.LastName
          };
        });
        data = _.sortBy(data, ["name", "_id"]);
        // end of EMPLOYEES

        
/* **********************  PROJECTS  ***********************/
/* ********************************************************/

      } else if (what === "projects") {
        data = data.map(proj => {
          return {
            _id: proj._id,
            name: proj.ProjectName
          };
        });
        data.forEach(proj => {
          let pname = proj.name.split(" ");
          let pnum = parseInt(pname[1]);
          proj.pnum = pnum;
        });
        data
          .sort((a, b) => {
            return b.pnum - a.pnum;
          })
          .reverse();
        // end of PROJECTS


/* **********************  TEAMS ************************ */
/* ********************************************************/

      } else {        
        data = data.map(team => {
          return {
            _id: team._id,
            name: team.TeamName,
            teamLead: {
              _id: team.TeamLead._id,
              name: team.TeamLead.FirstName + " " + team.TeamLead.LastName
            },
            teamProjects: team.Projects.map(proj => {
              return {
                _id: proj._id,
                name: proj.ProjectName
              };
            }),
            teamEmployees: team.Employees.map(emp => {
              return {
                _id: emp._id,
                name: emp.FirstName + " " + emp.LastName
              };
            })
          };
        });
        data.forEach(team => {
          let tname = team.name.split(" ");
          let tnum = parseInt(tname[1]);
          team.tnum = tnum;
          team.save = false;
          team.editLock = false;
          team.changeStat = false;
        });
        data.sort((a, b) => {
            return b.tnum - a.tnum;
          })
          .reverse();
      } // end of TEAMS
      return data;
    }); // end of then
}; // end of function getData

const saveData = function(what, body) {
  var URI = Url + what;
  return fetch(URI, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }).then(response => {
    // If we don't get a 200 OK response, throw an error to the .catch()
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    // Parse the response body from JSON to JS (an Array)
    return response.json();
  });
}; // end of function saveData
export { getData, saveData };