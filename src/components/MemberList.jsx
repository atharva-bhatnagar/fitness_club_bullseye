import React from 'react'
import { useNavigate } from 'react-router-dom'

export const MemberList = ({members}) => {

    const nav=useNavigate()

  return (
    <div className='register-page'>
        <h1 className='heading'>Member List</h1>
        <table className='table'>
            <tbody>
            <tr className='row-head'>
                <th className='t-heading'>Name</th>
                <th className='t-heading'>Email</th>
                <th className='t-heading'>Phone Number</th>
                <th className='t-heading'>Address</th>
            </tr>
            {
                members.map((member)=>{
                    return(
                    <tr className='row'>
                        <td>{member.name}</td>
                        <td>{member.email}</td>
                        <td>{member.phone}</td>
                        <td>{member.address}</td>
                    </tr>)
                })
            }
            </tbody>
        </table>
        <button onClick={()=>nav('/')} className='btn'>Back To Home</button>
    </div>
  )
}
