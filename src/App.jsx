import React from "react";

import Footer from "./components/Footer";
import Header from "./components/header/Header";
import NewsBoard from "./components/news/NewsBoard";
import NewsActionProvider from "./provider/NewsActionProvider";
import NewsProvider from "./provider/NewsProvider";

function App() {
    return (
        <React.Fragment>
            <NewsActionProvider>
                <NewsProvider>
                    <Header />
                    <NewsBoard />
                </NewsProvider>
            </NewsActionProvider>
            <Footer />
        </React.Fragment>
    );
}

export default App;
