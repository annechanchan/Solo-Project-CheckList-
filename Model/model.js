const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://annechanchan:Twice123@cluster0.ovbwk.mongodb.net/Cluster0?retryWrites=true&w=majority' 

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'checklist'
})
.then(() => console.log('Connected to Mongo DB.'))
.catch(err => console.log(err));

const Schema = mongoose.Schema;

// sets a schema for the 'checklist' collection
const checklistSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true,
        unique: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    priority: {
        type: Boolean,
        default: false
    },
  });
  
// creates a model for the 'checklist' collection that will be part of the export
const Checklist = mongoose.model('checklist', checklistSchema);

//export the model
module.exports = {Checklist}; 