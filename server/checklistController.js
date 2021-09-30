const { Checklist } = require('./Model/model');
//console.log(path.resolve(__dirname, '../Model/model'));
const path = require('path');
const { info } = require('console');

const checklistController = {};

//controller to get Checklist
checklistController.getChecklist = async (req, res, next) => {
  //console.log('In getCheckList controller');
  try {
    const result = await Checklist.find({}); //this is a promise
    res.locals.allChecklists = result; //we need to wait for the result to come back
    //console.log('controller :', res.locals.allChecklists);
    return next();
  } catch (err) {
    //console.log('In getChecklist middleware');
    return next({
      log: 'Express error handler caught in getChecklist middleware',
      message: { err: 'Error in getChecklist' },
    });
  }
};

//controller to add a checklist
checklistController.addChecklist = async (req, res, next) => {
  //console.log('In addChecklist controller');
  const { title } = req.body;

  console.log({ title });

  try {
    const result = await Checklist.create({ title: title });
    //console.log({ result });
    return next();
  } catch (err) {
    console.log('Error: in addChecklist middleware', err);
    return next({
      log: 'Express error handler caught in addChecklist middleware',
      message: { err: 'Error in addChecklist' },
    });
  }
};

//controller to add a task to checklist
checklistController.addTask = async (req, res, next) => {
  //console.log('In addTask controller');

  const { title, items } = req.body;

  try {
    await Checklist.updateOne({ title: title }, { $push: { items: items } });

    return next();
  } catch (err) {
    //  console.log('Error: In addTask middleware', err);
    return next({
      log: 'Express error handler caught in addTask middleware',
      message: { err: 'Error in addTask' },
    });
  }
};

//controller to remove a task to Checklist
checklistController.removeTask = async (req, res, next) => {
  const { title, items } = req.body;
  //console.log(req.body)
  //console.log({items})
  const [task] = items;
  //console.log({task})
  try {
    //  console.log('in try')
    await Checklist.updateOne({ title: title }, { $pull: { items: task } });
    return next();
  } catch (err) {
    //  console.log('Error: In removeTask middleware', err);
    return next({
      log: 'Express error handler caught in removeTask middleware',
      message: { err: 'Error in removeTask' },
    });
  }
};

//controller to update a task to Checklist

/* ------------------------------- */
module.exports = checklistController;

// //controller to add a checklist
// checklistController.addChecklist = async (req, res, next) => {
//   console.log('In addChecklist controller');
//   const { title, items } = req.body;
//   console.log({ reqBody: req.body });
//   console.log({ items });

//   // const allResults = await Checklist.find({});
//   // console.log({ allResults });

//   try {
//     const result = await Checklist.create({ title: title, items: items });
//     console.log({ result });
//     return next();
//   } catch (err) {
//     console.log('Error: in addChecklist middleware', err);
//     return next({
//       log: 'Express error handler caught in addChecklist middleware',
//       message: { err: 'Error in addChecklist' },
//     });
//   }
// };
