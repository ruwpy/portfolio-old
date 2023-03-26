import { useIsPresent, motion as m, AnimatePresence } from "framer-motion";
import Heading from "../../components/Heading/Heading";
import Navbar from "../../components/Navbar/Navbar";
import "./Contact.scss";
import TransitionScreen from "../../components/TransitionScreen/TransitionScreen";
import { DiscordSvg, GithubSvg, MailSvg } from "../../components/Svgs";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function Contact() {
  const isPresent = useIsPresent();

  return (
    <>
      <AnimatePresence>
        <m.main
          key="contact-page"
          animate="animate"
          initial="initial"
          className="main secondary"
        >
          <Navbar isThemeDark />
          <div className="contact container">
            <Heading>CONTACT ME</Heading>
            <p>wanna work with me? lets get in touch! </p>
            <div className="contact__content">
              <div className="contact__form">
                <input placeholder="your name" type="text" />
                <input placeholder="your email" type="email" />
                <textarea placeholder="message" rows={5}></textarea>
                <Button buttonStyle="secondarywdot">send a message!</Button>
              </div>
              <div className="contact__contacts">
                <div className="contact__contacts-container">
                  <Link to="mailto:bd@ruwpy.dev" target="_blank">
                    <div className="contact__single-contact">
                      <div className="contact__contact-icon">
                        <MailSvg />
                      </div>
                      <span className="contact__contact-info link">
                        bd@ruwpy.dev
                      </span>
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
