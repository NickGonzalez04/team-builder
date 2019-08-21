import React, {useState} from 'react';
import Form from './Components/Form.js';
import TeamList from './Components/TeamList.js';
import teamData from './teamData.js';
// import './App.css';



function App() {
  const [team, setTeam] = useState(teamData);

  const addNewMember = person =>{
    setTeam([...team, person])
  }
  return (
    <div className="App">
      <h2>Team Form</h2>
      <Form addNewMember={addNewMember}/>
      <TeamList teamList={team}/>
    </div>
  );
}

export default App;
