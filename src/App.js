import React from 'react';
import "./App.css"
import {HashRouter as Router, Switch, Route, Redirect, NavLink} from "react-router-dom";
import Posts from "./Components/Post/post";
import Contacts from "./Components/Contacts/Contacts";
import Photo from "./Components/Photo/photo";

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

class App extends React.Component{
    render() {
        return (
            <Router>
                <div>
                    <nav className="menu">
                        <span className="menu__item">
                            <NavLink className="menu__link" to="/posts">Posts</NavLink>
                        </span>
                        <span className="menu__item">
                            <NavLink className="menu__link" to="/contacts">Contacts</NavLink>
                        </span>
                        <span className="menu__item">
                            <NavLink className="menu__link" to="/photo">Photo</NavLink>
                        </span>
                    </nav>
                    <Switch>
                        <Route path="/posts" exact components={Posts}>
                            <Posts author={{
                                name: "Anakin skywalker",
                                photo: ANAKIN_IMAGE,
                                nickname: "@dart_vader"
                            }}
                                   content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
                                   image={RAY_IMAGE}
                                   date={"26 февр."}
                            />
                        </Route>
                        <Route path="/contacts" exact componets={Contacts}>
                            <Contacts />
                        </Route>
                        <Route path="/photo" exact componets={Contacts}>
                            <Photo />
                        </Route>
                        <Route path="/" exact render={() => <Redirect to="/posts"/>}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}



export default App;
