import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LearnApp from "./pages/ForeignLanguageLearn/LearnApp";
import BacklogApp from "./pages/Backlog/BacklogApp";
import PortfolioApp from "./pages/Portfolio/PortfolioApp";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/learn" element={<LearnApp />} />
                <Route path="/todo" element={<BacklogApp />} />
                <Route path="/" element={<PortfolioApp />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
