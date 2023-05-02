import { useIsPresent, motion as m, AnimatePresence } from "framer-motion";
import Heading from "@/components/Heading/Heading";
import Navbar from "@/components/Navbar/Navbar";
import "./Contact.scss";
import TransitionScreen from "@/components/TransitionScreen/TransitionScreen";
import { DiscordSvg, GithubSvg, MailSvg } from "@/components/Svgs";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Contact() {
  const isPresent = useIsPresent();
  const isMobile = useIsMobile();

  return (
    <>
      <AnimatePresence>
        <m.main key="contact-page" animate="animate" initial="initial" className="main secondary">
          <Navbar isThemeDark />
          <div className="contact container">
            <div className="contact__content">
              <div className="contact__heading">
                <div className="contact__upper">
                  <span>con</span>
                  <div className="contact__email">
                    {isMobile && (
                      <span>
                        Hello. I've been <br /> waiting for you
                      </span>
                    )}
                    <span>send me a message</span>
                    <Link target="_blank" to="mailto:bd@ruwpy.dev">
                      bd@ruwpy.dev
                    </Link>
                  </div>
                </div>
                <div className="contact__bottom">
                  <span>ta</span>
                  <div className="contact__line"></div>
                  <span>ct</span>
                </div>
              </div>
              <div className="contact__links">
                <Link target="_blank" className="contact__link" to="https://github.com/ruwpy">
                  <GithubSvg />
                </Link>
                <Link target="_blank" className="contact__link" to="https://github.com/ruwpy">
                  <MailSvg />
                </Link>
                <Link target="_blank" className="contact__link" to="https://github.com/ruwpy">
                  <DiscordSvg />
                </Link>
              </div>
            </div>
          </div>
        </m.main>
      </AnimatePresence>
      <TransitionScreen isPresent={isPresent} />
    </>
  );
}
