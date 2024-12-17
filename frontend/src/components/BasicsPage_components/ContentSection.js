import React from "react";

const ContentSection = ({ id, title, children }) => (
  <section id={id} className="container my-5">
    <h2 className="text-center mb-4">{title}</h2>
    {children}
  </section>
);

export default ContentSection;
