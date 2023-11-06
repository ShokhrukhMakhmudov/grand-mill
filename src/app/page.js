import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About";
import Products from "@/components/Products/Products";
import Footer from "@/components/Footer";
import Contacts from "@/components/Contacts";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
