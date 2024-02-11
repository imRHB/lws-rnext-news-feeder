import Footer from "./components/Footer";
import Header from "./components/header/Header";
import NewsBoard from "./components/news/NewsBoard";
import NewsActionProvider from "./provider/NewsActionProvider";
import NewsProvider from "./provider/NewsProvider";

function App() {
    return (
        <NewsActionProvider>
            <NewsProvider>
                <Header />
                <NewsBoard />
                <Footer />
            </NewsProvider>
        </NewsActionProvider>
    );
}

export default App;
