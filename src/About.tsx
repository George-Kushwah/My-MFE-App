
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./Redux/Store";
import * as actions from "./Redux/Reducer";

const About=()=> {
  // const { err, apidt }: any = useSelector(
  //   (state: RootState) => state.app_mfe
  // );
   //const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(actions.load())
  // },[])
  return (
    <div className='container-fluid pl-2 pr-2 mt-3'>
   <h3> About us page app</h3>
  </div>
  )
}
export default About;
