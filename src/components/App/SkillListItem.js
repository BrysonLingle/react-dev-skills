import './SkillListItem.css'
import React from 'react'
export default function SkillListItem ({skill,index}) {
    return (
        <li className='SkillListItem'>
            {skill.name}<span className='level'>{`LEVEL ${skill.level}`}</span>
        </li>
    )
}
