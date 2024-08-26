import React, { useEffect,useContext,useRef } from 'react'
import { Log,Box,Imgbox,Logbox,In,Wrait,Login,Welcome,Logpass,Form,Checkbox,Rem,Forget,Foot,Footname,Sigbutton,Input,Label,Button,Check } from './Login.styled'
import img from '../Imgs/물결이미지.avif'
import {Grandfather} from '../../App'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
// const {reducer,dispatch} : 상태 , 상태를 변환하는 함수 키로 가져옴
// useContext(Grandfather) Grandfather(전역)에 지정되어있는 객체를 useContext참조하는함수
  const {reducer,dispatch}=useContext(Grandfather)


  // idinput,pwinput를 useRef참조하겠다(이어놓겠다) 예)ref={_input.idinput}
  const _input = {
    idinput:useRef(),
    pwinput:useRef()
}

// const nav = useNavigate() : 로케이션과 비슷 이동시켜줌
const nav = useNavigate()



const loginheadler = (e)=>{
  // 입력한 값들을 가져와서 저장한 객체
    const userdata ={
      idinput:_input.idinput.current.value,
      pwinput:_input.pwinput.current.value
    }

    // find 한가를 찾아줌 (여기안 조건쓰면됨)
    const user=reducer.user.find(e=>e.idinput===userdata.idinput&&e.idinput===userdata.pwinput)
    //const user=reducer.user.find(e=>e.id===userdata.idinput&&e.pw===userdata.pwinput)

    //조건에 맞으면 상태를 바꿔줌
    if(user)
      dispatch({type:"login",payload:{user:userdata}})
    nav("/logout")
  }


const movesignupPage=()=>{
  nav('/signup')
}

// reducer.Login 상태를 주시함 Login요거를 주시 정상적으로 변화가있을때 실행됨
  useEffect(()=>{
console.log(reducer.login);

  },[reducer.login])


  return (
  <Log>
      <Box>
        <Imgbox>
              Welcome <br></br>Back!
        </Imgbox>
        <Logbox>
          <In>
            <Wrait>
            <Login>Login</Login>
              <Welcome>Welcome back! Please login to your<br></br>account.</Welcome>
            </Wrait>
          </In>
          <Logpass>
            <Form>
              <Label>User Name</Label>
              <Input type="text" ref={_input.idinput}/>
              <Label>Password</Label>
              <Input type="password" ref={_input.pwinput}/>
              <Checkbox>
              <Check type="checkbox" /> 
              <Rem>Remember Me</Rem>
              <Forget>Forget Password?</Forget>
              </Checkbox>
              <Button onClick={loginheadler}>Login</Button>
              <Foot>
                <Footname>New User?</Footname>
                <Sigbutton onClick={movesignupPage}>Signup</Sigbutton>
              </Foot>
            </Form>
          </Logpass>
        </Logbox>
      </Box>
  </Log>
  )
}

export default LoginForm
