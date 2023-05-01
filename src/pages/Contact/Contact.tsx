import { useIsPresent, motion as m, AnimatePresence } from "framer-motion";
import Heading from "@/components/Heading/Heading";
import Navbar from "@/components/Navbar/Navbar";
import "./Contact.scss";
import TransitionScreen from "@/components/TransitionScreen/TransitionScreen";
import { DiscordSvg, GithubSvg, MailSvg } from "@/components/Svgs";
import { Link } from "react-router-dom";
import Button from "@/components/Button/Button";
import Email from "@/components/Email/Email";
import { useState } from "react";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";

export default function Contact() {
  const isPresent = useIsPresent();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <AnimatePresence>
        <m.main key="contact-page" animate="animate" initial="initial" className="main secondary">
          <Navbar isThemeDark />
          <div className="contact container">
            <Heading>CONTACT ME</Heading>
            <p className="contact__text">wanna work with me? lets get in touch! </p>
            <div className="contact__content">
              <div className="contact__form">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="your name"
                  type="text"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your email"
                  type="email"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="message"
                  rows={5}
                ></textarea>
                <Button buttonStyle="secondarywdot">send a message!</Button>
              </div>
              <div className="contact__contacts">
                <div className="contact__contacts-container">
                  <Link to="mailto:bd@ruwpy.dev" target="_blank">
                    <div className="contact__single-contact">
                      <div className="contact__contact-icon">
                        <MailSvg />
                      </div>
                      <span className="contact__contact-info link">bd@ruwpy.dev</span>
                    </div>
                  </Link>
                  <div className="contact__single-contact">
                    <div className="contact__contact-icon">
                      <DiscordSvg />
                    </div>
                    <span className="contact__contact-info">ruwpy#8222</span>
                  </div>
                  <Link to="https://github.com/ruwpy" target="_blank">
                    <div className="contact__single-contact">
                      <div className="contact__contact-icon">
                        <GithubSvg />
                      </div>
                      <span className="contact__contact-info link">@ruwpy</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </m.main>
      </AnimatePresence>
      <TransitionScreen isPresent={isPresent} />
    </>
  );
}
