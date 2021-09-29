const { Checklist } = require('../Model/model');
//console.log(path.resolve(__dirname, '../Model/model'));
const path = require('path');

const checklistController = {};

//controller to get Checklist
checklistController.getChecklist = async (req, res, next) => {
  console.log('In getCheckList controller');
  try {
    const result = await Checklist.find({}); //this is a promise
    res.locals.allChecklists = result; //we need to wait for the result to come back
    console.log('controller :', res.locals.allChecklists);
    return next();
  } catch (err) {
    console.log('In getChecklist catch error');
    return next({
      log: 'Express error handler caught in getChecklist middleware error',
      message: { err: 'Error in getChecklist' },
    });
  }
};

//controller to add a task to Checklist

//controller to remove a task to Checklist

//controller to update a task to Checklist

/* ------------------------------- */
module.exports = checklistController;
