import React, { useEffect, useState } from 'react'
import Signup from './Signup';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { loggedout } from '../features/login-slice';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Tabs } from 'antd';
import Colabtable from './Colabtable';
import NavbarAdmin from './NavbarAdmin';
const { TabPane } = Tabs;
function Admin() {
    const navigate = useNavigate();
    const loginornot = useAppSelector(state => state.login.value);
    const [data, setData] = useState([])
    const [signup, setSignup] = useState(false)
    const dispatch = useAppDispatch();
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
    function logouthandler(e) {
    //    navigate('/');
        dispatch(loggedout())
    }

    // console.log(data);
    if (!loginornot){
    console.log("BSDK login kr pehle");
    toast.error('Access Denied! Login to proceed');
    return(<Navigate to="/" replace />)
}
    return (
    
        signup ? <Signup signfunc={setSignup} /> : <>
        <NavbarAdmin logouthandler={logouthandler}/>
        {/* <button onClick={signuphandler}>Add user</button>
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
            <button onClick={logouthandler}>Log Out</button> */}
            <div className='container ml-5'>
              <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Collaborations" key="1">
                    <div className='container ml-5'>
                        <Colabtable uri={"/collab"}/>
                    </div>
                    </TabPane>
                    <TabPane tab="Certifications" key="2">
                    <div className='container ml-5'>
                        <Colabtable uri='/certifications'/>
                    </div>
                    </TabPane>
                </Tabs>
                </div>
        </>
    )
}

export default Admin