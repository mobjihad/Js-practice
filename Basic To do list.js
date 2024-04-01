const HTask = [];
function Start(){
     console.log("-----------------------------");
     console.log("1. Instert a Task");
     console.log("2. View all task");
     console.log("3. Update task");
     console.log("4. Exit");
     console.log("-----------------------------");
     var option = prompt("Select A choice  ")

    switch(option){

      case "1":
         InsertTask();
         console.log("Task Inserted ");
         Start();
         break;
      case "2":
         viewAllTask();
         Start();
         break;

      case "3":
         updateTask();
         Start();
         break;

      case "4":
         console.log("Tataaaaaaaaaaa");
         break;
      default: 
 console.log("Sorry wrong input   :( ");

};

};

function updateTask(){
        console.log("All Task are Listed Below , Please input the serial of the task you want to modify: ");
        viewAllTask();
        var uOption = prompt("Serial number of the Task ");
        console.log(".....................");
        console.log("1. Update Due Date ");
        console.log("2. Update Status ");
        var eOption = prompt("Select an option to update");
        switch(eOption){


            case "1":
                console.log("Current Due Date : "+HTask[uOption-1].Due);
                HTask[uOption-1].Due = prompt("Set A new deu Date : ");
                console.log("Due date updated !!! "); 
                Start();
                break;

            case "2":

                console.log("Current Status : "+HTask[uOption-1].Status);
                HTask[uOption-1].Status= prompt("Update Status -> Done , Delayed ");
                console.log("Status Updated");
                Start();
                break;

            defualt:
               console.log("Wrong input , Select the appropriate input !! ");
        };

};

function viewAllTask(){
     console.log("Name of The task | Due | Severity | Status "); 
      var j= 1; 
   for (let i = 0; i < HTask.length; i++) {
    console.log(j+". "+HTask[i].NameofTask+" | "+HTask[i].Due+" | "+HTask[i].severity+" | "+HTask[i].Status);
   j++;
 
    
};


};


function InsertTask(){

      const obj = {

        NameofTask: prompt("Name ? "),
        Due: prompt("Due "),
        severity: prompt("Severity -> Critical , Normal , Medium "),
        Status:"Ongoing"

 };
HTask.push(obj);


};

Start();