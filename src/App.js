import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {Demo} from "./screens/demo";
import {Course} from "./screens/course";
import {DetailCourse} from "./screens/detailCourse";
import {Router, Route, Switch, BrowserRouter} from "react-router-dom";
import {Temp} from "./screens/lessons/tmpLesson";
import Video from "./screens/video";
import References from "./screens/references";

function App() {
  return (
    <>
        {/*<BrowserRouter>*/}
        {/*    <Switch>*/}
        {/*        <Route exact path="/course" component={Course}/>*/}
        {/*        <Route exact path="/course/:stateCourse/:id" component={DetailCourse}/>*/}
        {/*        <Route exact path="/course/:stateCourse/:id/:typeLesson" component={Temp}/>*/}
        {/*    </Switch>*/}
        {/*</BrowserRouter>*/}
        <References/>
    </>
  );
}

export default App;
