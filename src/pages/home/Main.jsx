import React from "react";
import { Card } from "../../components";
import data from "../../data.json";

console.log(data);

function Main() {
  return (
    <main>
      <section className="main_section_container">
        <h1 className="main_heading">1337?</h1>
        <p className="main_description">
          Before delving into the Leet Community and its clubs, let's first
          understand 1337!
          <br />
          <br />
          1337 is the school that gave rise to all these clubs, and its talented
          students continuously strive to uphold and enhance the clubs, ensuring
          a fantastic experience for all members.
        </p>
        <iframe
          id="video"
          src="https://www.youtube.com/embed/DLkEs0puCOs?si=sdGH1YqPNBnEa1br"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <a
          className="main_cta"
          href="https://1337.ma"
          target="_blank"
          rel="noreferrer"
        >
          VISIT WEBSITE
        </a>
      </section>
      <section className="main_section_container">
        <h1 className="main_heading">LEET CLUB</h1>
        <p className="main_description">
          Each club is a sub-community of the leet community. The clubs aim to
          foster a group of students that have a specific interest and lead them
          to achieve success in that specific field
        </p>
        <article className="cards_container"></article>
      </section>
    </main>
  );
}

export default Main;
