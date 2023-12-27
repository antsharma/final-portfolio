import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                {/* <h2 className="mb-1x">{introdata.title}</h2> */}
                <h2 className="mb-1x">I'm Anant Sharma</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">Ever since I had come to my senses,
                 often found myself spending time doing art, be it painting, sketching, calligraphy to craft,
                  and even more time washing all those shades of colours at a sink. Untill later i was introduced to web development and here I am....    
                   a pre final year student at IIIT Allahabad combining best of both worlds ;)</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  {/* <Link to="/contact"> */}
                    <div id="button_r" className="ac_btn btn">
                    <a href="https://drive.google.com/file/d/1E11aEDLbvRj0azGI_r1Xxw14UgZC9etT/view?usp=sharing">Resume</a>
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
