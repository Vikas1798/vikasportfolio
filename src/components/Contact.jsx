import React from "react";

const Contact = () => {
  const succussfull = () => {
    document.getElementById("thankyou").innerHTML =
      "thankyou for your response";
  };
  return (
    <>
      <div className="page-title">
        <h4> Contact me </h4>
        <h1> Get in touch </h1>
        <p id="thankyou" className="text-warning"></p>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="col-sm-12">
          <form
            id="contact-form"
            name="contact-form"
            action="https://formsubmit.co/hkvikas1798@gmail.com"
            method="POST"
          >
            {/* <!--Grid row--> */}
            <div className="row">
              {/* <!--Grid column--> */}
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    autoComplete="none"
                    placeholder="your name"
                  />
                  <br />
                </div>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                    autoComplete="none"
                    placeholder="Your Email address"
                  />
                  <br />
                </div>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}

            {/* <!--Grid row--> */}
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    type="number"
                    id="subject"
                    name="phonenumber"
                    className="form-control"
                    autoComplete="none"
                    placeholder="your phone number"
                  />
                  <br />
                </div>
              </div>
            </div>
            {/* <!--Grid row-->

                <!--Grid row--> */}
            <div className="row">
              {/* <!--Grid column--> */}
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                    autoComplete="none"
                    placeholder="Write message"
                  ></textarea>
                  <br />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={() => {
                succussfull();
              }}
            >
              Send
            </button>
          </form>

          <div className="status"></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
