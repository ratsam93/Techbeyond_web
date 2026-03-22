(function () {
  var LEGAL_ROUTE_MAP = {
    '/privacy-policy': '/privacy-policy.html',
    '/privacy-policy/': '/privacy-policy.html',
    '/terms': '/terms.html',
    '/terms/': '/terms.html',
    '/cookies': '/cookies.html',
    '/cookies/': '/cookies.html',
  };

  var TRACKING_PATTERNS = [
    'googletagmanager.com',
    'google-analytics.com',
    'connect.facebook.net',
    'doubleclick.net',
    'hotjar',
    'clarity.ms',
    'mixpanel',
  ];
  var ACTIVE_CLASSES = ['text-[#5edcb0]', 'text-[#08a47c]', 'font-semibold', 'border-b-2', 'pb-1'];

  function isTrackingUrl(url) {
    return TRACKING_PATTERNS.some(function (pattern) {
      return url.indexOf(pattern) !== -1;
    });
  }

  function removeTrackingScripts() {
    var scripts = document.querySelectorAll('script[src]');
    scripts.forEach(function (script) {
      var src = script.getAttribute('src') || '';
      if (isTrackingUrl(src)) {
        script.remove();
      }
    });
  }

  function disableTrackingGlobals() {
    window.dataLayer = [];
    window.gtag = function () {};
    window.fbq = function () {};
    window._fbq = function () {};
    window.clarity = function () {};
  }

  function rewriteMinorCopy() {
    var map = new Map([
      ['Book Your Free Strategy Call', 'Book a Growth Strategy Call'],
      ['Get My Free AI Audit', 'Get Your AI Workflow Audit'],
      ['Start conversation', 'Start a conversation'],
      ['Our Services', 'Growth Services'],
    ]);

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }
    nodes.forEach(function (node) {
      var text = node.nodeValue;
      map.forEach(function (replacement, original) {
        if (text.indexOf(original) !== -1) {
          text = text.replaceAll(original, replacement);
        }
      });
      node.nodeValue = text;
    });
  }

  function clearActiveClasses(el) {
    ACTIVE_CLASSES.forEach(function (className) {
      el.classList.remove(className);
    });
  }

  function setActiveClasses(el) {
    clearActiveClasses(el);
    el.classList.add('text-[#08a47c]', 'font-semibold', 'border-b-2', 'pb-1');
  }

  function ensureLinkedInServiceLink() {
    var navContainers = document.querySelectorAll('nav');
    navContainers.forEach(function (container) {
      var anchors = Array.from(container.querySelectorAll('a'));
      if (!anchors.length) return;

      var servicesAnchors = anchors.filter(function (a) {
        return (a.textContent || '').trim().toLowerCase() === 'services';
      });
      servicesAnchors.forEach(function (servicesAnchor) {
        var parent = servicesAnchor.parentElement;
        if (!parent) return;
        var siblingAnchors = Array.from(parent.querySelectorAll('a'));
        var hasLinkedIn = siblingAnchors.some(function (a) {
          return (a.textContent || '').trim().toLowerCase() === 'linkedin services';
        });
        if (hasLinkedIn) return;

        var link = servicesAnchor.cloneNode(true);
        link.textContent = 'LinkedIn Services';
        link.href = '/linkedin-services.html';
        link.setAttribute('data-tb-linkedin-nav', '1');
        clearActiveClasses(link);
        link.style.marginLeft = '16px';
        servicesAnchor.insertAdjacentElement('afterend', link);
      });
    });
  }

  function normalizeLinkedInAndServicesActiveState() {
    var path = window.location.pathname.toLowerCase();
    var isLinkedInRoute = path === '/linkedin-services.html';
    var isServicesRoute = path === '/services' || path.indexOf('/services/') === 0;
    var navContainers = document.querySelectorAll('nav');

    navContainers.forEach(function (container) {
      var anchors = Array.from(container.querySelectorAll('a'));
      if (!anchors.length) return;

      var services = anchors.filter(function (a) {
        return (a.textContent || '').trim().toLowerCase() === 'services';
      });
      var linkedIn = anchors.filter(function (a) {
        return (a.textContent || '').trim().toLowerCase() === 'linkedin services';
      });

      if (!services.length && !linkedIn.length) return;

      services.forEach(function (a) {
        if (isServicesRoute && !isLinkedInRoute) setActiveClasses(a);
        else clearActiveClasses(a);
      });

      linkedIn.forEach(function (a) {
        if (isLinkedInRoute) setActiveClasses(a);
        else clearActiveClasses(a);
      });
    });
  }

  function rewriteTestimonials() {
    var heading = Array.from(document.querySelectorAll('h2,h3,h4')).find(function (el) {
      return /founder stories|testimonials/i.test((el.textContent || '').trim());
    });
    if (!heading) {
      return;
    }

    var section = heading.closest('section') || heading.parentElement;
    if (!section) {
      return;
    }

    var names = ['Arjun Malhotra', 'Neha Verma', 'Karan Bedi', 'Meera Sethi'];
    var roles = ['SaaS Founder', 'Agency Partner', 'Growth Lead', 'B2B Consultant'];
    var quotes = [
      'We moved from random outreach to a repeatable pipeline rhythm in less than a month.',
      'Visibility-first LinkedIn motion gave us better reply quality, not just reply volume.',
      'The weekly optimization loop helped us fix messaging gaps fast and book stronger calls.',
      'Our team now has a cleaner outbound system with less manual chaos.',
    ];

    var nameNodes = section.querySelectorAll('p.font-bold.text-white');
    var roleNodes = section.querySelectorAll('p.text-gray-400');
    var quoteNodes = section.querySelectorAll('p.italic');

    nameNodes.forEach(function (node, index) {
      if (names[index]) {
        node.textContent = names[index];
      }
    });
    roleNodes.forEach(function (node, index) {
      if (roles[index]) {
        node.textContent = roles[index];
      }
    });
    quoteNodes.forEach(function (node, index) {
      if (quotes[index]) {
        node.textContent = quotes[index];
      }
    });
  }

  function normalizeLegalRoutes() {
    var path = window.location.pathname.toLowerCase();
    var target = LEGAL_ROUTE_MAP[path];
    if (target && window.location.pathname !== target) {
      window.location.replace(target);
    }
  }

  function updateLegalLinks() {
    var anchors = document.querySelectorAll('a[href]');
    anchors.forEach(function (a) {
      var href = (a.getAttribute('href') || '').trim().toLowerCase();
      if (LEGAL_ROUTE_MAP[href]) {
        a.setAttribute('href', LEGAL_ROUTE_MAP[href]);
      }
    });
  }

  function applyEnhancements() {
    removeTrackingScripts();
    disableTrackingGlobals();
    ensureLinkedInServiceLink();
    normalizeLinkedInAndServicesActiveState();
    updateLegalLinks();
    rewriteMinorCopy();
    rewriteTestimonials();
  }

  var observer = new MutationObserver(function () {
    applyEnhancements();
  });

  normalizeLegalRoutes();

  document.addEventListener('DOMContentLoaded', function () {
    applyEnhancements();
    observer.observe(document.body, { childList: true, subtree: true });
  });
})();
