import React from 'react'
import { useNavigate } from "react-router-dom"

function Signup(props:any) {
  const navigate = useNavigate()


  function submitHandler(e: any) {
    e.preventDefault();

    const text = document.querySelectorAll("input")

    const newEntry = {
      name: text[0].value,
      password: text[1].value
    }

    fetch('http://localhost:8000/signup', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry),
    }).then(res => res.json()).then((res) => {
      if (res.message === "Already exists")
        res.send(res.message)
      else {
        navigate('/admin')
      }
    }).catch((err) => {
      navigate('/signupError')
    });

  }

  return (
    <>
      SIGNUP
      <section className="loginformofAdmin">
        <form id="form" className="adminform">
          <div className="usernameofAdmin">
            <input
              type="text"
              name="username"
              id="NAME"

              placeholder="USERNAME"
            />
          </div>
          <div className="PasswordofAdmin">
            <input
              type="text"
              name="email"
              id="PASSWORD"

              placeholder="PASSWORD"
            />
          </div>

          <button type="submit" onClick={submitHandler} id="submitbuttonoflogin">
            Send
          </button>
        </form>
      </section>
    </>
  );
}

export default Signup