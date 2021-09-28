const { Checklist } = require('../Model/model');
//console.log(path.resolve(__dirname, '../Model/model'));
const path = require('path');

const checklistController ={};

//controller to get Checklist
checklistController.getChecklist('/checklist', (req, res, next) =>{
    try{
      console.log('In getCheckList controller')
      const result = await Checklist.find({});
      res.locals.allChecklists = result;
      return next();
    } catch (err) {
        next({
            log:'Express error handler caught in getChecklist middleware error',
            message:{err: 'Error in getChecklist'}
        })
    }
})

//controller to add a task to Checklist

//controller to remove a task to Checklist

//controller to update a task to Checklist 

/* ------------------------------- */ 
module.exports = checklistController;