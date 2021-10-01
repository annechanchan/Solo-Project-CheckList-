import React from 'react';

function ChecklistBox(props) {
  //props.checklist
  let taskItems = props.checklist.items.map((el) => {
    return (
      <div id={el['_id']}>
        <button>star</button>
        <button>checkbox</button>
        <p>{el['task']}</p>
        <button onClick={() => deleteTask(el['task'])}>X</button>
      </div>
    );

    //<Task key={el['_id']} id={el} taskelement={el} />; //passing each element into the Task function
  });

  //   function Task(props) {
  //     return (
  //       <div>
  //         <button>star</button>
  //         <button>checkbox</button>
  //         <p>{props.taskelement.task}</p>
  //         <button onClick={deleteTask}>X</button>
  //       </div>
  //     );
  //   }

  console.log('props in checklistBox', props.checklist);

  function addTask() {
    let title = props.checklist['title'];
    let inputTask = document.getElementById('inputTask').value;
    console.log({ inputTask, title });
    fetch('/task', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify({ title: title, items: [{ task: inputTask }] }),
    })
      .then((taskData) => taskData.json())
      .then((taskData) => console.log({ taskData }));
  }

  function deleteTask(string) {
    console.log({ string });
    let title = props.checklist['title'];
    // let task = document.getElementById('deletebutton').value;
    console.log({ title });
    // console.log(document.getElementById('deletebutton').value);
    fetch('/task', {
      method: 'DELETE',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify({ title: title, items: [{ task: string }] }),
    })
      .then((taskData) => taskData.json())
      .then((taskData) => console.log({ taskData }));
  }

  return (
    <div key={props.checklist['_id']} className='checklistBox'>
      <h4>{props.checklist.title}</h4>
      {taskItems}
      <input id='inputTask' type='text' placeholder='New Task'></input>
      <button onClick={addTask}>Add New Task</button>
    </div>
  );
}

export default ChecklistBox;
