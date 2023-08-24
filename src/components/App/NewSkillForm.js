import './NewSkillForm.css';
import { useState } from 'react'



function NewSkillForm({ addSkill }) {
  const [newSkill, setNewSkill] = useState("");
  
  // function handleAddSkill() {
  //   addSkill (newSkill)
  // }

function handleNewForm(evt){
  evt.preventDefault() 
  addSkill(newSkill)
  setNewSkill({name: "", level: 3})    
}

function handleOnChange (evt) {
  setNewSkill({...newSkill, [evt.target.name]:evt.target.value})
}

  return (
    <form className="NewSkillForm">
      <label>
        Skill:
        </label>
        <input className='input' type='text' name='skill'></input>
      <label>
        Level:
        <select className="selector" value={newSkill} onChange={(evt) => setNewSkill(evt.target.value)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button onClick={(evt)=> addSkill(evt)} > Add Skill</button>
      </label>
    </form>
  );
}

export default NewSkillForm; 
