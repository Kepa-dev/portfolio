import React from "react";
import ToDo from "./Components/todo-dir/todo";
import NavBar from "./Components/main-dir/navbar";
import TicTac from "./Components/tictac-dir/tictac"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./Components/gallery-dir/gallery";
import Photo from "./Components/gallery-dir/photos";
import Er404 from "./Components/main-dir/er404"
import StartPage from "./Components/start-dir/start"
import './App.css'
import Footer from "./Components/main-dir/footer";
import Cookie_alert from "./Components/main-dir/cookie_alert";



class App extends React.Component {
    render() {
        return (
            <Router>
                <meta charSet="uth8"/>
                
                <div className="page mb-5">
                    <NavBar />
                    <div className="main">
                        <Cookie_alert/>

                    
                        <div className="w-100 ">
                            <Routes>
                                <Route path="*" element={<Er404 />} />cd .
                                <Route path="/" element={<StartPage />} />
                                <Route exact path="/tictac" element={<TicTac />} />
                                <Route path="/gallery/" element={<Gallery />} />
                                <Route path="/tasks" element={<ToDo />} />
                                <Route path="/gallery/photo/:id" element={<Photo />} />


                            </Routes>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Router>
        )
    }
}

export default App;