import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Register = ({member,handleSubmit,setMember}) => {
    const nav = useNavigate()
  return (
    <div className='register-page'>
        <h1 className='heading'>Fitness Club Registeration</h1>
        <form className='form' onSubmit={handleSubmit}>
            <input className='first' type='text' name='name' placeholder='Name' value={member.name} onChange={(e)=>setMember({...member,name:e.target.value})}/>
            <input type='email' name='email' placeholder='Email'value={member.email} onChange={(e)=>setMember({...member,email:e.target.value})}/>
            <input type='number' name='phone' placeholder='Phone Number' value={member.phone} onChange={(e)=>setMember({...member,phone:e.target.value})}/>
            <input type='text' name='address' placeholder='Address' value={member.address} onChange={(e)=>setMember({...member,address:e.target.value})}/>
            <button className='btn' type='submit'>Add Member</button>
        </form>
        <button className='btn' onClick={()=>nav('/member-list')}>View Member List</button>
        
    </div>
  )
}
