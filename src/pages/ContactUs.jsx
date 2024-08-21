import Nav from "../components/Nav";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import { useState, useEffect } from "react";

export default function ContactUs() {
  return (
    <>
      <Header />
      <Nav />
      <ContactForm />
    </>
  );
}
