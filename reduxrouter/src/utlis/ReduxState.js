import {createSlice} from '@reduxjs/toolkit'

export const personSlice=createSlice({
    name:"Auth",
    initialState:{
        name:"Hema",
        roll:"Student",
        isAuthenticate:false,
        email:"divy@gmail.com"
    },
    reducers:{
        userUpdate:(state,action)=>{
        //   alert(JSON.stringify(action))
            if(action.payload.type==="name_change"){
                state.name=action.payload.name
            }
            else if(action.payload.type==="email_change")
            {
                state.email=action.payload.email 
            }
        },
        authUpdate:(state,action)=>{
           alert(JSON.stringify(action))
        }

    }
})
export const {userUpdate,authUpdate}=personSlice.actions
export default personSlice.reducer
