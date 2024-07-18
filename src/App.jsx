import Header from "./header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import About from "./About.jsx";
import Subscribe from "./Subscription.jsx";
import navigation from "./Navigation.jsx";

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <navigation scrollToSection={scrollToSection} />
      <Header />
      <Card></Card>
      <About></About>
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
