import React from 'react';
import { Footer, Navbar } from "../components";
import '../styles/index.css';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center blue-text">Om oss</h1>
        <hr />
        <div className="container container-about-us">
          <p className="about-text p-2">
            Vår vision är att leverera rätt och snabb behandling med professionell, hög och bred kompetens under samma tak med patientens hela hälsa i fokus för att förbättra och bibehålla god livskvalitet.
          </p>
          <p className='about-text p-2'>Vi värnar om att just du ska känna dig sedd och omhändertagen med ditt besvär. Vi tar oss tid för att lyssna, ställa frågor och undersöka dig för att hitta rätt behandlingsplan.</p>
            <p className='about-text p-2'>Behandlingen kan innebära att vi hjälper dig med manuell behandling, råd och information samt rehabträning. Det kan även innebära att vi hänvisar dig till rätt vårdinstans.</p> 
      <hr />
        
        </div>

        {/* How to Find Us Section */}
        <div className="container my-3 py-3">
          <h2 className="text-center blue-text">Hitta hit</h2>
          <hr />
          <div className="row">
            <h4 className='text-center p-3'>Vi finns på Karl Johansgatan 100, 414 55 Göteborg</h4>
            <div className="col-md-12">
              <div className="map-container">
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.453840212694!2d11.97523081532602!3d57.71984867530073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ffb7e8d23a74b%3A0xe8c4a30c1a0b4b!2sKarl%20Johansgatan%20100%2C%20414%2055%20G%C3%B6teborg!5e0!3m2!1sen!2sse!4v1691565371432!5m2!1sen!2sse"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
