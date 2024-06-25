import { configureStore } from "@reduxjs/toolkit";
import myslice from "./Personredux";

export default configureStore(
    {
        reducer:{
            testdata:myslice
        }
    }
)