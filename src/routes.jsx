import {Routes, Route } from "react-router-dom";

function Home() {
    return <>Home</>;
}

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    );
}
