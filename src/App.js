
import {useReducer, createContext} from 'react'
import Main from "./components/Main/Main"
import {Routes,Route} from "react-router-dom"
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Logout from './Logout/Logout';

export const Grandfather = createContext()
function App() {

  // 상태 지정
  const state ={
    user:[],
    Login:null
}
// 리듀서 상태를 변화하는 함수 state 상태 
// action :상태를 변화 시키는 함수를 호출할때 보내줄 인자값을 받아주는 매개변수
const reucer =(state, action)=>{
    const {type, payload}=action
    switch(type){
        case "login":
            return {...state,Login:payload.user}
            case "signup":
                return {...state,user:[...state.user,payload.user]}
                case "logout":
                    return {...state,Login:null}
                    default:
                        return state
                    }
                }
                // 리듀서에 등록 
                //reucer 셋스테이트 함수 상태를 변경할내용
                //state 초기상태
const [reducer,dispatch] = useReducer(reucer,state);
// 전역 상태로 넣기위해 만든 오브젝트 상태와 변경시킬 함수가 들어있음
const reduecerhender={reducer,dispatch}

  return (
    <div className="App">
      <Grandfather.Provider value={reduecerhender}>

      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/logout" element={<Logout />}/>
      </Routes>
         </Grandfather.Provider>
    </div>
  );
}

export default App;
