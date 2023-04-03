import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(0);
  const [gImage, setGImage] = useState(null);
  const [uImage, setUImage] = useState(null);
  const [rAndSImage, setRAndSImage] = useState(null);
  const genuine = useRef(null);
  const undead = useRef(null);
  const pinTarget = useRef(null);
  const main = useRef(null);
  const riseAndShine = useRef(null);
  const imageDiv1 = useRef(null);
  const imageDiv2 = useRef(null);

  const appWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    appWidth();
    const pt = pinTarget.current;
    const ctx = gsap.context(() => {
      const intro = document.getElementById("intro");
      const helper = document.getElementById("helper");
      const container = document.getElementById("container");

      gsap.to(container, {
        x: () => -(container.offsetWidth - innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: intro,
          start: "bottom top",
          invalidateOnRefresh: true,
          markers: true,
          scrub: 1,
          end: () => "+=" + (container.offsetWidth - innerWidth),
        },
      });
    }, pt);
    return () => ctx.revert();
  }, [loading]);

  useEffect(() => {
    appWidth();
    // if (theme === "dark") {
    //   setRAndSImage("/images/animation/rise-dark.svg");
    //   setGImage("/images/animation/genuine1.svg");
    //   setUImage("/images/animation/undead1.svg");
    // } else {
    //   setRAndSImage("/images/animation/rise-light.svg");
    //   setGImage("/images/animation/genuine2.svg");
    //   setUImage("/images/animation/undead2.svg");
    // }
  }, []);

  return (
    <div ref={pinTarget} syle={{ scrollBehavior: "smooth" }}>
      <div id="intro">
        <div className="sub-page">
          <h1 className="header">Intro page</h1>
        </div>
      </div>
      <div></div>
      <div id="container">
        <div class="module pink">
          <div className="sub-page">
            <h1 className="header">Slide 1</h1>
          </div>
        </div>
        <div class="module yellow ">
          <div className="sub-page">
            <h1 className="header">Slide 2</h1>
          </div>
        </div>
        <div class="module purple">
          <div className="sub-page">
            <h1 className="header">Slide 3</h1>
          </div>
        </div>
        <div class="module orange ">
          <div className="sub-page">
            <h1 className="header">Slide 4</h1>
          </div>
        </div>
        <div class="module blue ">
          <div className="sub-page">
            <h1 className="header">Slide 5</h1>
          </div>
        </div>
        <div class="module red">
          <div className="sub-page">
            <h1 className="header">Slide 6</h1>
          </div>
        </div>
      </div>
      <div>Hello</div>
    </div>
  );
}

export default Landing;
