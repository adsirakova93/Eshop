import React from "react";
import "./Footer.css";

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Tamil",
  "Hindi",
  "Chinese",
  "Russian",
  "Japanese",
  "Arabic",
];
const currency = ["$ - USD", "₹ - INR", "£ - GBP", "€ - EUR", "¥ - JPY"];
const footerLinks = [
  {
    title: "Get to Know Us",
    list: ["About Eshop", "Connect with Us", "Eshop Cares", "Gift a Smile"],
  },
  {
    title: "Make Money with Us",
    list: [
      "Sell products on Eshop",
      "Sell apps on Eshop",
      "Become an Affiliate",
      "Advertise Your Products",
      "Self-Publish with Us",
      "Host an Eshop Hub",
      "› See More",
    ],
  },
  {
    title: "Eshop Payment",
    list: [
      "Eshop Business Card",
      "Shop with Points",
      "Reload Your Balance",
      "Eshop Currency Converter",
    ],
  },
  {
    title: "Let Us Help You",
    list: [
      "Eshop and COVID-19",
      "Shipping Rates & Policies",
      "Returns & Replacements",
      "Manage Your Devices",
      "Eshop Assistant",
    ],
  },
];

function Footer() {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__disclaimer">
          <strong>Disclaimer:</strong> This is not real shopping store. It is a redesign, built for ReactJs Course Retake.
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div className="footer__row">
              <h6>{link.title}</h6>
              <ul>
                {link.list.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <img
            src="https://play-lh.googleusercontent.com/sSeZFpu2INnle6VutctWDZuAcdTSeSDWnhDvUzjE__XOBgH4hzv4hhuOIiYmIRCzZU0"
            className="footer__logo"
          />
          <span className="footer__copy">
            &copy; 2021 | Developed by{" "}
            <a href="https://github.com/adsirakova93">Anastasia Sirakova</a>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Footer;
