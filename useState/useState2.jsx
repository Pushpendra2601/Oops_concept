import React,{useState} from 'react'

function Form() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const printValues=(e)=>{
        // e.preventDefult();
        console.log(username,password);
    }

  return (
    <div>
        <form onSubmit={printValues}>
            <label>Username:</label>
            <input type='text' onChange={event=> setUsername(event.target.value)}
            value={username} name='username'></input>

            <label>Password:</label>
            <input type='text' onChange={event=> setPassword(event.target.value)}
            value={password} name='password'></input>

            <button>Submit</button>



        </form>
    </div>
  )
}

export default Form;