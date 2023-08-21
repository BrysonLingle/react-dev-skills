import './App.css';
import NewSkillForm from '../NewSkillForm';
import SkillListItem from '../SkillListItem'
  
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
      <SkillListItem skills={skills} listName={'Skills'} />
        
      </header>
    </div>
  )
}
export default App;





