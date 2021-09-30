const mongoose = require('mongoose');
const MONGO_URI =
  'mongodb+srv://annechanchan:Twice123@cluster0.ovbwk.mongodb.net/Cluster0?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'checklist',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

//one to many relationship between the checklist and the tasks
const checklistSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  items: [
    {
      task: {
        type: String,
        // required: true,
      },
      completed: {
        type: Boolean,
        default: false,
      },
      priority: {
        type: Boolean,
        default: false,
      },
    },
  ],
});
// creates a model for the 'checklist' collection that will be part of the export
const Checklist = mongoose.model('checklist', checklistSchema);
//const Task = mongoose.model('task', taskSchema);
//export the model
module.exports = { Checklist };
