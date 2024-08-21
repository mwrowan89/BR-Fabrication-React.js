import Nav from "../components/Nav";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import { useState, useEffect } from "react";

export default function ContactUs() {
  const [isWindowSize, setIsWindowSize] = useState(false);
  const windowSize = () => {
    if (window.innerWidth < 500) {
      setIsWindowSize(false);
    } else {
      setIsWindowSize(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", windowSize);
    windowSize();
  }, []);
  return (
    <>
      <Header />
      <Nav />
      <ContactForm />
    </>
  );
}
