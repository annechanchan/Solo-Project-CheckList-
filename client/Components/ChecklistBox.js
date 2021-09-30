import React from 'react';

function ChecklistBox(props) {
  //props.checklist
  let taskItems = props.checklist.items.map((el) => {
    return <Task key={el['_id']} taskelement={el} />;
  });
  return (
    <div className='ChecklistBox'>
      <h4>{props.checklist.title}</h4>
      {taskItems}
      <input type='text' placeholder='New Task'></input>
      <button>Add New Task</button>
    </div>
  );
}

function Task(props) {
  return (
    <div>
      <button>star</button>
      <button>checkbox</button>
      <p>{props.taskelement.task}</p>
      <button>X</button>
    </div>
  );
}

export default ChecklistBox;
