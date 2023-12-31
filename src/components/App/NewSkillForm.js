import './NewSkillForm.css';
import { useState } from 'react';

export default function NewSkillForm({ addSkill }) {
  const [newSkill, setNewSkill] = useState({
  name: '',
    level: '1'
  });

  function handleOnChange(evt) {
    const updatedSkill = { ...newSkill, [evt.target.name]: evt.target.value };
    console.log(updatedSkill)
    setNewSkill(updatedSkill);
  }
  function handleNewForm(evt) {
    evt.preventDefault();
    addSkill(newSkill);
    setNewSkill({
      name: '',
      level: '1'
    });
  }
  

  return (
    <form className="NewSkillForm">
      <label>
        Skill:
        <input
          className='input'
          type='text'
          name='name'
          value={newSkill.skill}
          onChange={handleOnChange}
        />
      </label>
      <label>
        Level:
        <select
          className="selector"
          value={newSkill.level}
          onChange={handleOnChange}
          name="level"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <button onClick={handleNewForm}>Add Skill</button>
    </form>
  );
}


