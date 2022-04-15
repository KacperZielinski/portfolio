import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Routes} from "react-router-dom";
import ForeignLanguageLearn from "./pages/ForeignLanguageLearn/ForeignLanguageLearn";
import BacklogApp from "./pages/Backlog/BacklogApp";
import PortfolioApp from "./pages/Portfolio/PortfolioApp";
import ProtectedApp from "./pages/Protected/ProtectedApp";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    // components: {
    //     // Name of the component
    //     MuiInput: {
    //         styleOverrides: {
    //             // Name of the slot
    //             root: {
    //                 // Some CSS
    //                 color: "white"
    //             },
    //         },
    //     },
    // },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <HashRouter>
                <Routes>
                    <Route path="/app" element={<ProtectedApp />} />
                    <Route path="/learn" element={<ForeignLanguageLearn />} />
                    <Route path="/todo" element={<BacklogApp />} />
                    <Route path="/" element={<PortfolioApp />} />
                </Routes>
            </HashRouter>
        </ThemeProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
