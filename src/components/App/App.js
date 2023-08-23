import './App.css';
import NewSkillForm from './NewSkillForm.js';
import SkillListItem from './SkillListItem.js'
  
const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3},
  { name: "JavaScript", level: 4},
  { name: "Python", level: 2},
];

function App() {
  return (
    <div className='App'>
      <header className="App-header">
        <h1>React Dev Skills</h1>
        <ul>
          {skills.map((skill, index) => (
            <SkillListItem key={index} skill={skill} index={index} />
          ))}
        </ul>
        <NewSkillForm/>
        
      </header>
    </div>
  )
}
export default App;





