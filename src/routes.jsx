import {Routes, Route } from "react-router-dom";
import NotFoundError from "./components/NotFoundError";
import Home from "./pages/Home.jsx";
import MenuEditor from "./pages/MenuEditor.jsx";
import {Component} from "react";

export default class AppRoutes extends Component {
    render(){
        return(
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/new" element={<MenuEditor />}/>
                <Route path="*" element={<NotFoundError/>}/>
            </Routes>
        );
    }
}
