import './NewSkillForm.css';

function NewSkillForm(props) {
  return (
    <form className="NewSkillForm">
      <label>
        Skill
        <input className='input' type='text' name='skill'></input>
      </label>
      <label>
        Level:
        <select>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        <button>Add Skill</button>
      </label>
    </form>
  );
}

export default NewSkillForm; 
