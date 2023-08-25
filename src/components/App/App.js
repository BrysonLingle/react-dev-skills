import './App.css';
import NewSkillForm from './NewSkillForm';
import SkillListItem from './SkillListItem';
import { useState } from 'react';

function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

  const [showSkills, setShowSkills] = useState(true);

  function addSkill(newSkill) {
    setSkills([...skills, newSkill]);
  }  

  return (
    <div className='App'>
      <header className="App-header">
        <h1>React Dev Skills</h1>
        <button onClick={() => setShowSkills(!showSkills)}>
          {showSkills ? 'HIDE' : 'SHOW'}
        </button>
        <ul>
          {skills.map((skill, index) => (
            <SkillListItem key={index} skill={skill} index={index} />
          ))}
        </ul>
        <NewSkillForm addSkill={addSkill} />
      </header>
    </div>
  );
}

export default App;
