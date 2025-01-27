import React from "react";
import { Footer, Navbar } from "../components";
import "../styles/index.css";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container container-contact my-3 py-3">
        <h1 className="text-center blue-text">HÄR FINNS VI</h1>
        <hr />
        <p className="text-center">Karl Johansgatan 100, 414 55 Göteborg</p>
        <p className="text-center">070-582 21 42</p>
        <p className="text-center">
          <a href="mailto:drsorkhabi@nopainclinic.se">drsorkhabi@nopainclinic.se</a>
        </p>
        <p className="mx-auto text-center">
          Tidsbokning gör du själv här på hemsidan eller ringer. Tala gärna in
          ett meddelande om vi inte har möjlighet att svara, så ringer vi upp
          så fort vi kan. Maila oss gärna om du har några frågor.
        </p>
        <h4 className="text-center">Ej/sent avbokad tid debiteras. Vänligen avboka senast dagen innan! </h4>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;

