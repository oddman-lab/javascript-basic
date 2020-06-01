var getPrice = function (hours, isUrgentTask) {
    var costPerHour = 1500;
    
    if (isUrgentTask === true) {
      hours = hours / 2;
      costPerHour = costPerHour * 2.5;
    } 
    if (hours > 150) {
      costPerHour = costPerHour - 250;
    }
    return hours * costPerHour;
  };

  getPrice(140, false);

  // var getProfitableProject = function (hours, costIsUrgent) {
//   var urgentProject = getPrice(hours, true);
//   var usualProject = getPrice(hours, false);
  
//   if (costIsUrgent - urgentProject > usualProject) {
//     return 'Выгодней срочный проект. Потратишь на него ' + urgentProject;
//   } else {
//     return 'Выгодней обычный проект. Потратишь на него ' + usualProject;
//   }
// };

var getProfitableProject = function (hours, profit) {
    var urgentProject = getPrice(hours, true) - profit;
    var notUrgentProject = getPrice(hours, false);
    var value;
    var expences;
    
    if (urgentProject < notUrgentProject) {
      value = 'срочный';
      expences = urgentProject;
      } else {
      value = 'обычный';
      expences = notUrgentProject;
      }
      
      return 'Выгодней ' + value + ' проект. Потратишь на него '+ expences;
    };
  
  getProfitableProject(100, 40000);