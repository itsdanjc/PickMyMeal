import {Routes, Route } from "react-router-dom";
import NotFoundError from "./components/NotFoundError";
import {Component} from "react";

export default class AppRoutes extends Component {
    render(){
        return(
            <Routes>
                <Route path="*" element={<NotFoundError/>}/>
            </Routes>
        );
    }
}
