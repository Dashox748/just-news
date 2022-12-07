import React from 'react';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import {Routes, Route} from "react-router-dom";
import Header from "./containers/Header/Header"
import Content from "./containers/Content/Content";
import AdvancedNewsInfo from "./components/AdvancedNewsInfo/AdvancedNewsInfo";

import './App.css';


function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    })


    return (
        <div className="App">
            <Header/>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path="/" element={<Content/>}/>
                    <Route path="/category/:category" element={<Content/>}/>
                    <Route path="/search/:keyword" element={<Content/>}/>
                    <Route path="/advancedInfo/" element={<AdvancedNewsInfo/>}/>
                </Routes>
            </QueryClientProvider>
        </div>
    );
}

export default App;
