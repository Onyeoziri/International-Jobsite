import "./App.css";
// import Navbar from "./components/navbar/Navbar";
// import Header from "./components/header/Header";
// import Features from "./components/features/Features";
// import Download from "./components/download/Download";
// import Subscribe from "./components/subscribe/Subscribe";
// import Footer from "./components/footer/Footer";
import CreateProfile from "./components/createProfile/CreateProfile";

import {
  Navbar,
  Header,
  Features,
  Subscribe,
  Faq,
  Footer,
  
} from "./components";

function App() {
  return (
    <>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Features data-aos="fade-up" />
      <CreateProfile/>
      <Subscribe />
      <Faq />
      <Footer />
    </>
  );
}

export default App;