import React from "react";
import { Nav } from "../../components";

function Header() {
  return (
    <header>
      <Nav />
      <article className="header_banner">
        <section className="header_heading_container">
          <h1 className="header_heading">
            <strong>LEET COMMUNITY,</strong> <br />
            Where Innovation
            <br />
            Unites, Growth Ignites.
          </h1>
        </section>
        <section className="header_description_container">
          <p className="header_description">
            Explore the diverse landscape of the Leet Community, home to clubs
            like Elites' Security, Web & Mobile Dev, Sharks, Makers, AI, and
            more — a fusion of expertise fostering innovation and collective
            advancement.
          </p>
          <button className="header_cta">EXPLORE CLUBS</button>
        </section>
      </article>
    </header>
  );
}

export default Header;
