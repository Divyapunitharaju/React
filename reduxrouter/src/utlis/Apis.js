import {BASEURL,PLACESEARCH,WEATHER} from './AppConstrains'

export const placeSearch=async(params)=>{
    const res=await axios.get(`${BASEURL}${PLACESEARCH}`)
    if(res.error){
        errorFn(res.error)
    }
    return res.data
}

export const place=async(params)=>{
    const res=await axios.get(`${BASEURL}${PLACESEARCH}`)
    if(res.error){
        errorFn(res.error)
    }
    return res.data
}

const errorFn=(error)=>{
    console.log(error);
}

