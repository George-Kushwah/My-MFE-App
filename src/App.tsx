import React,{useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from "./Redux/Store"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./Redux/Store";
import * as actions from "./Redux/Reducer";

import './index.css'
import About from './About';

const App = () => {

  return (
    <>
      <About />
    </>
  )
}
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
  <Provider store={store}>
    <App />
    </Provider>
    )