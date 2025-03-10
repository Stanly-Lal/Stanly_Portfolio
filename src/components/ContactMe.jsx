import React, { useEffect, useState } from "react";
import "../styles/ContactMe.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineLocalPhone } from "react-icons/md";
import emailjs from "@emailjs/browser";
import countryDialCode from "../api/countryDialCode";

const ContactMe = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState(countryDialCode[0]);
  const [contactFormData, setContactFormData] = useState({
    clientName: "",
    clientMail: "",
    clientNumber: "",
    clientText: "",
    myName: "Stanly",
    myMail: "stanlylal17@gmail.com",
    cientDialCode: "",
  });
  const envVars = {
    whatsAppLink: import.meta.env.VITE_WHATSAPP_LINK,
    telegramLink: import.meta.env.VITE_TELEGRAM_LINK,
    phoneNumberLink: import.meta.env.VITE_PHONE_NUMBER_LINK,
  };

  // FOR ANIMATION ON SCROLL EFFECT###############
  useEffect(() => {
    AOS.init();
  }, []);
  // END

  // FOR FETCHING ALL FORM INPUT VALUES(TWO WAY BINDING)####################
  const formDataHandler = (e) => {
    let { name, value } = e.target;

    // When typing in the contact number field
    if (name === "clientNumber") {
      const filteredValue = value.replace(/[^0-9+-]/g, '');
      const typedPrefix = filteredValue;
      const matchingCountry = countryDialCode.find((country) =>  // Find the matching country based on the typed prefix
        typedPrefix.startsWith(country.dialCode)
      );

      if (matchingCountry) {
        setSelectedCountryCode(matchingCountry); // Update selected country
      } else {
        setSelectedCountryCode(countryDialCode[0]); // If no match, set the selected country to the first one (default)
      }

      setContactFormData({ ...contactFormData, clientNumber: filteredValue}); // Update clientNumber in form data
    } else {
      setContactFormData({ ...contactFormData, [name]: value }); // For other input fields
    }
  };
  // END

  // TO SUBMIT FORM DATA TO MAIL ID###############################
  const submitHandler = (e) => {
    e.preventDefault();

    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;

    emailjs.send(serviceId, templateId, contactFormData, {
        publicKey: publicKey,
      })
      .then(() => {
          toast.success("Sent Successfully... ✅", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          toast.error(`Failed to send, please try after some time...  (${error})❌`, {
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              position: "top-right",
            }
          );
        }
      );

    setContactFormData({
      clientName: "",
      clientMail: "",
      clientNumber: "",
      clientText: "",
      myName: "Stanly",
      myMail: "stanlylal17@gmail.com",
    });
  };
  // END

  // TO GET DIALCODE SELECTED VALUE INTO slectedCountryCode STATE################
  const dialCodeValue = (e) => {
    const allValue = e.target.value;
    const finalValue = countryDialCode.find((dialCodeData) => dialCodeData.dialCode === allValue);

    setSelectedCountryCode(finalValue);
    setContactFormData((prevState) => {
      const currentNumber = prevState.clientNumber.slice(selectedCountryCode.dialCode.length); // Remove old prefix
      return {
        ...prevState,clientNumber: finalValue.dialCode + currentNumber, // Add new prefix
      };
    });
  };
  // END

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="contact-section" id="contactMe">
        <div className="contactMeHeading-container">
          <h1
            className="contactMe-heading"
            data-aos="zoom-in"
            data-aos-offset="150"
            data-aos-duration="600"
            data-aos-easing="linear"
          >
            Contact Me
          </h1>
        </div>
        <div
          className="queryForm-container"
          data-aos="flip-down"
          data-aos-offset="200"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <form
            className="query-form"
            onSubmit={(e) => submitHandler(e)}
            autoComplete="off"
          >
            <div className="clientDetails-container">
              <input
                onChange={formDataHandler}
                className="query-inputs"
                placeholder="Enter your full name here..."
                type="text"
                id="input-name"
                name="clientName"
                value={contactFormData.clientName}
                required
              />
              <input
                onChange={formDataHandler}
                className="query-inputs"
                placeholder="Enter your e-mail here..."
                type="email"
                name="clientMail"
                value={contactFormData.clientMail}
                required
              />
              <div className="numberInput-container">
                <input
                  onChange={formDataHandler}
                  className="query-inputs"
                  placeholder="Enter your contact number here..."
                  type="text"
                  id="input-number"
                  name="clientNumber"
                  value={contactFormData.clientNumber}
                  required
                />
                <select
                  className="dropDown-container"
                  onChange={dialCodeValue}
                  value={selectedCountryCode.dialCode}
                >
                  {countryDialCode.map((countryList, idx) => {
                    return (
                      <option
                        className="dropDown-options"
                        key={idx}
                        value={countryList.dialCode}
                      >
                        {countryList.flag} {countryList.name}{" "}
                        {countryList.countryCode} {countryList.dialCode}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="clientQuery-container">
              <textarea
                onChange={formDataHandler}
                className="text-area"
                placeholder="Add your query here..."
                name="clientText"
                maxLength={1000}
                required
                value={contactFormData.clientText}
              ></textarea>
            </div>
            <div className="submitQueryBtn-container">
              <button className="submitQuery-btn">Send</button>
            </div>
          </form>
        </div>
        <div className="socialMediaContact-Container">
          <div
            className="socialMediaIcons-container"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-duration="250"
            data-aos-easing="linear"
          >
            <span className="socialMedia-icons">
              <a href="https://github.com/Stanly-Lal" target="_blank">
                <FaGithub />
              </a>
            </span>
            <span className="socialMedia-icons">
              <a
                href="https://www.linkedin.com/in/stanly-lal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </span>
            <span className="socialMedia-icons">
              <a
                href="mailto:stanlylal17@gmail.com?cc=stanlylal4@gmail.com&subject= Project Work Related Query &body=Hey! Stanly, I am <YOUR NAME HERE> and I am from <Your Country Here>. I have mailed you regarding <ENTER YOUR SUBJECT HERE>. Please revert me back at <YOUR E-MAIL HERE> or <YOUR CONTACT NUMBER HERE> asap, Thanks."
                target="_blank"
              >
                <IoMail />
              </a>
            </span>
            <span className="socialMedia-icons">
              <a href="https://www.instagram.com/stanly_0910" target="_blank">
                <FaInstagram />
              </a>
            </span>
            <span className="socialMedia-icons">
              <a
                href="https://x.com/Stanly_0910?t=Loa3hSfFkZpa2fchkoR3gQ&s=09"
                target="_blank"
              >
                <FaXTwitter />
              </a>
            </span>
            <span className="socialMedia-icons">
              <a href={envVars.whatsAppLink} target="_blank">
                <FaWhatsapp />
              </a>
            </span>
            <span className="socialMedia-icons">
              <a href={envVars.telegramLink} target="_blank">
                <FaTelegramPlane />
              </a>
            </span>
            <span className="socialMedia-icons">
              <a href={envVars.phoneNumberLink} target="_blank">
                <MdOutlineLocalPhone />
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
