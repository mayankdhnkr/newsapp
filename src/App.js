import "./App.css";

import React, {useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    let pageSize = 15;
    const apiKey = process.env.REACT_APP_NEWS_API;

    const [progress, setProgress] = useState(0)
    
    const updateProgress = (progress) => {
        setProgress(progress);
    };

        return (
            <>
                <Router>
                    <Navbar />
                    <LoadingBar
                        color="#0d6efd"
                        progress={progress}
                    />
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <News
                                    apiKey={apiKey}
                                    setProgress={updateProgress}
                                    key="home"
                                    pageSize={pageSize}
                                    country="in"
                                    category="general"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/business"
                            element={
                                <News
                                    apiKey={apiKey}
                                    setProgress={updateProgress}
                                    key="business"
                                    pageSize={pageSize}
                                    country="in"
                                    category="business"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/entertainment"
                            element={
                                <News
                                    apiKey={apiKey}
                                    setProgress={updateProgress}
                                    key="entertainment"
                                    pageSize={pageSize}
                                    country="in"
                                    category="entertainment"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/general"
                            element={
                                <News
                                    apiKey={apiKey}
                                    setProgress={updateProgress}
                                    key="general"
                                    pageSize={pageSize}
                                    country="in"
                                    category="general"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/health"
                            element={
                                <News
                                    apiKey={apiKey}
                                    setProgress={updateProgress}
                                    key="health"
                                    pageSize={pageSize}
                                    country="in"
                                    category="health"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/science"
                            element={
                                <News
                                    apiKey={apiKey}
                                    setProgress={updateProgress}
                                    key="science"
                                    pageSize={pageSize}
                                    country="in"
                                    category="science"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/sports"
                            element={
                                <News
                                    apiKey={apiKey}
                                    setProgress={updateProgress}
                                    key="sports"
                                    pageSize={pageSize}
                                    country="in"
                                    category="sports"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/technology"
                            element={
                                <News
                                    apiKey={apiKey}
                                    setProgress={updateProgress}
                                    key="technology"
                                    pageSize={pageSize}
                                    country="in"
                                    category="technology"
                                />
                            }
                        />
                    </Routes>
                </Router>
            </>
        );
    
}

export default App;