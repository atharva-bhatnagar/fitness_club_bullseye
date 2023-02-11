
import { useEffect, useState } from 'react';
import './App.css';
import { Register } from './components/Register';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { MemberList } from './components/MemberList';

function App() {
  const [members,setMembers]=useState([])
  const [member,setMember]=useState({
    name:'',
    email:'',
    phone:'',
    address:''
  })
  /*useEffect(()=>{
    localStorage.setItem('members',members)
  },[members])*/
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(member)
    if(member.name&&member.email&&member.phone.length===10&&member.address){
      setMembers([...members,member])
      alert('User added Successfully!!!')
      setMember({
        name:'',
        email:'',
        phone:'',
        address:''
      })
      console.log(members)
    }else{
      alert("Don't leave any field empty and phone must be only ten digits long!!!")
    }
  }
  

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Register member={member} handleSubmit={handleSubmit} setMember={setMember} />}/>
          <Route path='/member-list' element={<MemberList members={members}/>}/>
        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;
