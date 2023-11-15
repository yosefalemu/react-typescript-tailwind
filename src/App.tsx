import Navbar from "@/components/NavBar";
import Home from "./components/Home";
import Benefits from "./components/Benefits";
import OurClass from "./components/OurClass";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

export default function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 10;
      setIsTopOfPage(isTop);

      if (isTop) {
        setSelectedPage(SelectedPage.Home);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app text-3xl font-bold w-full">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClass setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage} />
    </div>
  );
}
