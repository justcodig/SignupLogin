import React,{useRef, useState,useContext, useEffect} from 'react'
import { Sig,Box,Imgbox,Sigbox,In,Wrait,Signup,Welcome,Sigpass,Form,Foot,Footname,Logbutton,Input,Label,Button} from './Signup.styled'
import { Login } from '../Login/Login.styled'
import {Grandfather} from '../../App'
import { useNavigate } from 'react-router-dom'



const SignupForm = () => {
    console.log("test")
   const {reducer,dispatch}=useContext(Grandfather)
   
    const _input = {
        idinput:useRef(),
        pwinput:useRef(),
        aginpwinput:useRef()
    }


    const nav = useNavigate()

    const sigheadler =(e)=>{
        console.log(_input.idinput.current.value);
        console.log(_input.pwinput.current.value);
        console.log(_input.aginpwinput.current.value);
        const userdata = {
            idinput:_input.idinput.current.value,
            pwinput:_input.pwinput.current.value,
            aginpwinput:_input.aginpwinput.current.value
        }
        dispatch({type:"signup", payload:{user:userdata}})
    }

    const moveloginpage=()=>{
        nav("/login")
    }
    useEffect(()=>{
        console.log(reducer.user)
    },[reducer.user])
    return (
    <Sig>
        <Box>
        <Imgbox>
                Welcome!
        </Imgbox>
        <Sigbox>
            <In>
            <Wrait>
            <Signup>Signup</Signup>
                <Welcome>Welcome! Please login to your<br></br>account.</Welcome>
            </Wrait>
            </In>
            <Sigpass>
            <Form  >
                <Label>User Name</Label>
                <Input type="text" ref={_input.idinput} />
                <Label>Password</Label>
                <Input type="password" ref={_input.pwinput} />
                <Label>Recheck Password</Label>
                <Input type="password" ref={_input.aginpwinput}/>
                        <Button onClick={sigheadler}>Signup</Button>
                    <Foot>
                        <Footname>Already User?</Footname>
                        <Logbutton onClick={moveloginpage}>Login</Logbutton>
                    </Foot>
            </Form>
            </Sigpass>
        </Sigbox>
        </Box>
    </Sig>
    )

}
export default SignupForm
