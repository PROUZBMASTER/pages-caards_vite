import React from "react";
import { Routes ,Route} from "react-router-dom";
import {RenderRoute} from "./RenderRoute"

const index = ()=>{

    return(
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
           {RenderRoute.map((value)=>{
             return <Route key={value.id} element={<value.component/>} path={value.path} />
           })}
        </Routes>
      </React.Suspense>
    )
}

export default index;