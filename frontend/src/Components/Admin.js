import React, { useEffect, useState } from 'react'
import Signup from './Signup'

function Admin() {

  const [data, setData] = useState([])
  const [signup, setSignup] = useState(false)

  useEffect(() => {
    fetch('http://localhost:8000/admin/images').then((res) => res.json()).then((res) => {
      setData(res)
    }
    ).catch((err) => console.log(err))

  }, [])
    

  function addHandler(e) {
    const input = document.querySelectorAll("input")
    // console.log(text);
    const text = input[0].value
    const type = input[1].value
        
    fetch('http://localhost:8000/admin/images', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: text, type: type }),
    }).then(res => res.json()).then(res => setData((prev) => {
      return [...prev, res]
    })).catch(err => console.log(err))

  }
  
  function deleteImage(e) {
    // console.log(e.target);
    const delImage = { url: e.target.value }
    fetch('http://localhost:8000/admin/delImage', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(delImage),
    })

    fetch('http://localhost:8000/admin/images').then((res) => res.json()).then((res) => {
      setData(res)
    }
    ).catch((err) => console.log(err))
  }

  function signuphandler(e) {
    setSignup(true)
  }

  // console.log(data);
  
  return (
    
    signup ? <Signup signfunc={ setSignup} /> : <><button onClick={signuphandler}>Add user</button>
          <input
                type="text"
                name="url"
                placeholder="IMAGE LINK"
              />
          <input
                type="text"
                name="url"
                placeholder="TYPE"
              />
      <button onClick={addHandler}>CLick</button>
      {data.length !== 0 && data.map((ele, idx) => {
        return <h4 >{ele.imageURL} <button value={ele.imageURL} onClick={deleteImage}>Delete</button></h4>
      })}
      <a href='/'><button>Log Out</button></a>
    </>
  )
}

export default Admin