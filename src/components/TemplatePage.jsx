import React, { useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function extractBody(html) {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const content = match ? match[1] : html;
  return content.replace(/<script[\s\S]*?<\/script>/gi, '');
}

function extractStyles(html) {
  const styles = [];
  const pattern = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let match = pattern.exec(html);
  while (match) {
    styles.push(match[1]);
    match = pattern.exec(html);
  }
  return styles;
}

function resolvePath(label) {
  const text = label.trim().toLowerCase();
  if (
    text === 'home' ||
    text.includes('book free strategy call') ||
    text.includes('free strategy') ||
    text.includes('start building')
  ) {
    return '/';
  }
  if (
    text.includes('services') ||
    text.includes('ai strategy') ||
    text.includes('crm systems') ||
    text.includes('web development')
  ) {
    return '/services';
  }
  if (text.includes('portfolio') || text.includes('view portfolio') || text.includes('our work')) {
    return '/portfolio';
  }
  if (text.includes('about us') || text === 'about') {
    return '/about-us';
  }
  if (
    text.includes('contact') ||
    text.includes('free ai audit') ||
    text.includes('audit') ||
    text.includes('book your free') ||
    text.includes('book a call') ||
    text.includes('let') && text.includes('talk')
  ) {
    return '/contact-us';
  }
  return null;
}

export function TemplatePage({ html }) {
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const body = useMemo(() => extractBody(html), [html]);
  const styles = useMemo(() => extractStyles(html), [html]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return undefined;
    }

    const onClick = (event) => {
      const target = event.target.closest('a,button');
      if (!target || !root.contains(target)) {
        return;
      }
      const href = target.getAttribute('href');
      const label = target.textContent || '';
      const path = resolvePath(label);
      if (!path) {
        return;
      }
      if (target.tagName === 'A' && href && href !== '#') {
        return;
      }
      event.preventDefault();
      navigate(path);
    };

    root.addEventListener('click', onClick);
    return () => root.removeEventListener('click', onClick);
  }, [navigate, body]);

  return (
    <div ref={rootRef}>
      {styles.map((styleText, index) => (
        <style key={index} dangerouslySetInnerHTML={{ __html: styleText }} />
      ))}
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}
