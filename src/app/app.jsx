import React from "react";
import "./app.scss";
import { useSelector,useDispatch} from "react-redux";
import {login,logout} from '../actions';

const App = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="app">
      {isLogged ? (
        <>
          <span>Logado</span>
          &nbsp;
          <button onClick={()=>dispatch(logout())}>logout</button>
        </>
      ) : (
        <>
          <span>Nao Logado</span>
          &nbsp;
          <button onClick={()=>dispatch(login())}>login</button>
        </>
      )}
    </div>
  );
};

export default App;
