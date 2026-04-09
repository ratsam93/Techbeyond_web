const marqueeItems = [
  "LinkedIn Growth",
  "Web Development",
  "SEO / GEO / AEO",
  "Paid Ads",
  "Branding",
  "Social Media",
  "Mobile Apps",
  "Software Development",
  "CRM & Automation",
  "Video Production",
  "E-commerce",
  "Support Operations",
];

const Marquee = ({ items = marqueeItems, speed = 30 }) => {
  const doubled = [...items, ...items];

  return (
    <div className="tb-marquee">
      <div
        className="tb-marquee-inner"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span className="tb-marquee-item" key={`${item}-${i}`}>
            <span className="tb-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
