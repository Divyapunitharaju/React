import {createSlice} from '@reduxjs/toolkit'

export const myslice=createSlice({
    name:"person",
    initialState:{
        name:"Divya",
        age:22
        
    },
    reducers:{
        personalInfoUpdate:(oldState,useCallbackAction)=>{
            if(useCallbackAction.type==="change_name"){
                oldState.name=useCallbackAction.payload.name
            }
            else if(useCallbackAction.type==="change_age"){
                oldState.age=useCallbackAction.payload.age

            }
        },
        proofUpdate:(oldState,dispatchactionCallback)=>{

        }
    }
})

export const {personalInfoUpdate,proofUpdate}=myslice.actions
export default myslice.reducer