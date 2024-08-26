import React ,{useContext}from 'react'
import { BodyBack,Loginbox ,Signupbox,Loginlink,Signuplink,Bodylog,Bodysig} from './Main.styled'
import { Link } from 'react-router-dom'
import {Grandfather} from '../../App'

const Main = () => {

//   const {reducer:{Login},dispatch}=useContext(Grandfather)

//    const logout =()=>{
//      dispatch({type:"logout"})
//    }
//  if(Login)return (
//  <>
//  <div>
//    <span>{Login.idinput}</span>
//    <span  onClick={logout}>로그아웃</span>
//  </div>
//  </>
//  )

  return (
    <>
      <BodyBack>
        <Bodylog>
            <Link to={'/login'} style={{ textDecoration: "none"}}><Loginlink>로그인으로 이동</Loginlink></Link>
        <Loginbox>
          
        </Loginbox>
        </Bodylog>
          <Bodysig>
        <Link to={'/signup'} style={{ textDecoration: "none"}}><Signuplink>회원가입으로 이동</Signuplink></Link>
        <Signupbox>

        </Signupbox>
          </Bodysig>
      </BodyBack>
    </>
  )
}

export default Main
