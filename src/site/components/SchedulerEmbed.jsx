import { useEffect, useMemo, useRef } from "react";

const TIDYCAL_SCRIPT_SRC = "https://asset-tidycal.b-cdn.net/js/embed.js";

const extractTidyCalPath = (value) => {
  const input = String(value || "").trim();
  if (!input) {
    return "";
  }

  const dataPathMatch = input.match(/data-path=["']([^"']+)["']/i);
  if (dataPathMatch?.[1]) {
    return dataPathMatch[1].trim().replace(/^\/+/, "");
  }

  if (input.includes("<div") || input.includes("<script")) {
    return "";
  }

  try {
    const parsed = new URL(input);
    if (parsed.hostname.toLowerCase().includes("tidycal")) {
      return parsed.pathname.replace(/^\/+/, "").replace(/\/+$/, "");
    }
  } catch {
    return input.replace(/^\/+/, "");
  }

  return "";
};

const SchedulerEmbed = ({ value, title, className = "", minHeight = 760 }) => {
  const mountRef = useRef(null);
  const tidyCalPath = useMemo(() => extractTidyCalPath(value), [value]);
  const iframeUrl = useMemo(() => {
    if (!value || tidyCalPath) {
      return "";
    }

    try {
      return new URL(value).toString();
    } catch {
      return "";
    }
  }, [tidyCalPath, value]);

  useEffect(() => {
    if (!tidyCalPath || !mountRef.current) {
      return undefined;
    }

    const host = mountRef.current;
    host.innerHTML = "";

    const embed = document.createElement("div");
    embed.className = "tidycal-embed";
    embed.dataset.path = tidyCalPath;
    host.appendChild(embed);

    const script = document.createElement("script");
    script.src = TIDYCAL_SCRIPT_SRC;
    script.async = true;
    host.appendChild(script);

    return () => {
      host.innerHTML = "";
    };
  }, [tidyCalPath]);

  if (tidyCalPath) {
    return <div ref={mountRef} className={className} />;
  }

  if (iframeUrl) {
    return (
      <iframe
        title={title}
        src={iframeUrl}
        className={className}
        style={{ width: "100%", minHeight: `${minHeight}px`, border: 0, borderRadius: "1rem", background: "#fff" }}
      />
    );
  }

  return null;
};

export default SchedulerEmbed;
