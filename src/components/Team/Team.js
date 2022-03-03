import React from 'react'
import './team.css'
import Simo from '../../images/t-profile1.png'
import Nilton from '../../images/t-profile2.png'
import Ahmed from '../../images/t-profile3.png'
import Task1 from '../../images/task-profile1.png'
import Task2 from '../../images/task-profile2.png'
import Task3 from '../../images/task-profile3.png'
import Task4 from '../../images/task-profile4.png'
import Task5 from '../../images/task-profile5.png'
export default function Team() {
  const teamMembers = [
    {
      name: 'Simo Alami',
      title: 'CEO & Co-Founder',
      img: Simo
    },
    {
      name: 'Nilton Rodrigues',
      title: 'CEO & Co-Founder',
      img: Nilton
    },
    {
      name: 'Ahmed Oubadi',
      title: 'CTO & Blockchain Expert',
      img: Ahmed
    },
  ]
  const taskForces = [
    {img: Task1},
    {img: Task2},
    {img: Task3},
    {img: Task4},
    {img: Task5},
  ]
  return (
    <div className='teamC'>
      <div>
        <h1>Leadership Team</h1>
        <p>A Task Force Of Seasoned Professionals</p>
      </div>
      <div className='d-flex teamImages'>
        {
          teamMembers.map((member, id) => {
            return (
              <div key={id}>
                <p>{member.name}</p>
                <small>{member.title}</small>
                <div>
                  <img src={member.img} alt="" />
                </div>
              </div>
            )
          })
        }
      </div>
      <div>
        <h1>TaskForce</h1>
        <p>At Kynno we are not a team, we are a taskforce of experienced
          professionals working tirelessly to make this project the Unicorn of Crypto!</p>
      </div>
      <div className='d-flex taskImages'>
        {
          taskForces.map((task, id) => {
            return (
              <div key={id}>
                <div>
                  <img src={task.img} alt="" />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
