/*
import React,{useReducer,useContext, createContext} from "react"

export const Grandfather = createContext()
//export let reduecerhender={}

export const Reucer = () => {

    const state ={
        user:[],
        Login:{}
    }
    const reucer =(state, action)=>{
        const {type, payload}=action
        switch(type){
            case "login":
                return {...state,Login:payload.user}
                case "signup":
                    return {...state,user:[...state.user,payload.user]}
                    case "logout":
                        return {...state,Login:{}}
                        default:
                            return state
                        }
                    }
    const [reducer,dispatch] = useReducer(reucer,state);
    

  return (
    <div>
      
    </div>
  )
}

/*

const state ={
    user:[],
    Login:{}
}

const reucer =(state, action)=>{
    
    const {type, payload}=action
    switch(type){
        case "login":
            return {...state,Login:payload.user}
            case "signup":
                return {...state,user:[...state.user,payload.user]}
                case "logout":
                    return {...state,Login:{}}
                    default:
                        return state
                    }
                }
const [reducer,useReducer] = useReducer(reucer,state);

export const reduecerhender = {reducer,useReducer}
*/
