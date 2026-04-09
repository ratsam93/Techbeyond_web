import { useState } from "react";

const FaqAccordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div>
      {items.map((item, i) => (
        <div className="tb-accordion-item" key={item.q || i}>
          <button
            type="button"
            className="tb-accordion-btn"
            aria-expanded={openIndex === i}
            onClick={() => toggle(i)}
          >
            {item.q}
          </button>
          <div className={`tb-accordion-body ${openIndex === i ? "open" : ""}`}>
            {item.a}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
