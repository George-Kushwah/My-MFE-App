
import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./Redux/Store";
import * as actions from "./Redux/Reducer";

const About = () => {
  const [as,setas]=useState<any>("ddd")
  const { err, apidt }: any = useSelector(
    (state: RootState) => state.app_mfe
  );
const dispatch = useDispatch();
  useEffect(() => {
    setas("Hello")
    dispatch(actions.load())
  }, [])
  return (
    <>
    <div className='container-fluid pl-2 pr-2 mt-3'>
        <h3> About us page app {as}</h3>
        {apidt && apidt.length > 0 ? apidt.map((item: any, ind: any) => {
          return (<p key={ind}>{item.name}</p>)
        }):err}
      </div>
      </>
  )
}
export default About;
