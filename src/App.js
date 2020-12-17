import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { SignInPage } from "./screens/signIn";
import { SignUpPage } from "./screens/signUp";
import { Video } from "./screens/video";
import { References } from "./screens/references";
import { LandingPage } from "./screens/landing";
import { Course } from "./screens/course";
import { DetailCourse } from "./screens/detailCourse";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import { Temp } from "./screens/lessons/tmpLesson";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={SignInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/videos" component={Video} />
          <Route exact path="/references" component={References} />
          <Route exact path="/course" component={Course} />
          <Route
            exact
            path="/course/:stateCourse/:id"
            component={DetailCourse}
          />
          <Route
            exact
            path="/course/:stateCourse/:id/:typeLesson"
            component={Temp}
          />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
