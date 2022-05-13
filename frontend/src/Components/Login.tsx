import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import { useNavigate } from "react-router-dom"

export default function Login() {

  const [login, setLogin] = useState(false)


  const navigate = useNavigate()

  // useEffect(() => {
  //   fetch('http://localhost:8000/admin/all').then((res) => res.json()).then((res) => console.log(res)
  //   ).catch((err) => console.log(err))

  // }, [])

  function submitHandler(e: any) {
    e.preventDefault();

    const text = document.querySelectorAll("input")

    const newEntry = {
      name: text[0].value,
      password: text[1].value
    }

    fetch('http://localhost:8000/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry),
    })
      .then(response => response.json())
      .then(res => {
        console.log(res.message);
        
        if (res.message === "Valid User") {
          setLogin(true)
        }
        else{
          navigate("/loginError")
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        navigate("/loginError")
      });

  }

  return (
    <>
      {login ? <Admin /> :
        
        <section className="loginformofAdmin">
              LOGIN
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
    }
    </>
  );
}
