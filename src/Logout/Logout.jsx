import React,{useContext} from 'react'
import {Grandfather} from '../App'
import { Out,Logoutbox,Box,Imgbox,Logbox,In,Wrait,Welcome,Outpass,Form,Foot,Footname,Sigbutton,Input,Label,Button } from '../Logout/Logout.styled'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const {reducer:{Login},dispatch}=useContext(Grandfather)

    const nav = useNavigate()
    const logout =()=>{
      dispatch({type:"logout"})
      nav("/")
    }


    const movesignupPage=()=>{
        nav('/signup')
      }

  if(Login)return (
    <Logoutbox>
      <Box>
        <Imgbox>
              
        See you<br></br>next time.
        </Imgbox>
        <Logbox>
          <In>
            <Wrait>
            <Out>Logout</Out>
              <Welcome>Bye and see you next time<br></br>next time.</Welcome>
            </Wrait>
          </In>
          <Outpass>
            <Form>
              <Label>User Name</Label>
              <Input type="text" value={Login.idinput}/>
              <Button onClick={logout}>로그아웃</Button>
              <Foot>
                <Footname>New User?</Footname>
                <Sigbutton onClick={movesignupPage}>Signup</Sigbutton>
              </Foot>
            </Form>
          </Outpass>
        </Logbox>
      </Box>
  </Logoutbox>


//   <>
//   <div>
//     <span>{Login.idinput}</span>
//     <span  onClick={logout}>로그아웃</span>
//   </div>
//   </>
  )
}

export default Logout
