/**
* Template Name: iLanding
* Template URL: https://bootstrapmade.com/ilanding-bootstrap-landing-page-template/
* Updated: Nov 12 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * Service Details hash 기반 콘텐츠 전환
   */
  const contents = {
    "#A": { templateId: "template-A", title: "시니어 헬스케어 사이니지" },
    "#B": { templateId: "template-B", title: "장기요양기관 등하원 관리" },
    "#C": { templateId: "template-C", title: "(벨루스) 핸디형 피부·두피 진단" },
    "#D": { templateId: "template-D", title: "(아나젠) 두피·모발 진단" }
  };

  function renderContent() {
    const hash = window.location.hash || "#A";
    const data = contents[hash];
    const container = document.getElementById("dynamic-content");
    container.textContent = "";

    if (data?.templateId) {
      const template = document.getElementById(data.templateId);
      if (template) {
        container.appendChild(template.content.cloneNode(true));
      }
    }
  }

  function updateActiveLink() {
    const hash = window.location.hash || "#A";
    document.querySelectorAll(".services-list a").forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === hash);
    });
  }

  function updatePageTitle() {
    const hash = window.location.hash || "#A";
    const titleElement = document.getElementById("page-title");
    titleElement.textContent = contents[hash]?.title || "Service Details";
  }

  function handleHashChange() {
    renderContent();
    updateActiveLink();
    updatePageTitle();
  }

  window.addEventListener("DOMContentLoaded", handleHashChange);
  window.addEventListener("hashchange", handleHashChange);
})();

(function () {
  translations = {
    "text-hero-title": {
      "ko": "헬스클라우드(주)",
      "en": "HealthCloud Inc."
    },
    "text-hero-description": {
      "ko": "디지털 헬스케어 영역을 중심으로 최신 ICT 역량/노하우를 활용합니다.\n최적의 서비스를 제공하고 사용자 건강과 행복 달성을 실현합니다.",
      "en": "We leverage the latest ICT capabilities and know-how focusing on digital healthcare.\nProviding optimal services to achieve user health and happiness."
    },
    "text-about-meta": {
      "ko": "MORE ABOUT US",
      "en": "MORE ABOUT US"
    },
    "text-about-title": {
      "ko": "초고령화 사회,\n돌봄의 새로운 패러다임이 필요합니다.",
      "en": "Super-aged society, a new paradigm of care is needed."
    },
    "text-about-description": {
      "ko": "치료를 넘어, 어르신들이 스스로 건강을 관리하고 활기찬 삶을 이어갈 수 있도록 돕는 혁신 솔루션이 필요합니다.\n헬스클라우드(주)는 어르신들의 건강한 삶을 위한 혁신을 만들어갑니다.",
      "en": "Beyond treatment, innovative solutions are needed to help seniors manage their own health and maintain an active life.\nHealthCloud Inc. is creating innovations for seniors' healthy lives."
    },
    "text-feature-1-title": {
      "ko": "예방 중심 케어",
      "en": "Prevention-focused care"
    },
    "text-feature-1-desc": {
      "ko": "조기 진단과 지속적인 건강 관리를 통해 더 나은 삶을 지원합니다.",
      "en": "Supports a better life through early diagnosis and continuous health management."
    },
    "text-feature-2-title": {
      "ko": "사용자 편의성",
      "en": "User convenience"
    },
    "text-feature-2-desc": {
      "ko": "어르신들도 쉽게 사용할 수 있는 직관적이고 편리한 디지털 헬스케어 서비스를 제공합니다.",
      "en": "Provides intuitive and convenient digital healthcare services that seniors can easily use."
    },
    "text-feature-3-title": {
      "ko": "데이터 기반 맞춤형 케어",
      "en": "Data-driven personalized care"
    },
    "text-feature-3-desc": {
      "ko": "AI와 데이터 분석 기술을 활용해 개인별 건강 상태에 최적화된 맞춤형 솔루션을 제공합니다.",
      "en": "Utilizes AI and data analysis technology to provide optimized solutions for each individual's health condition."
    },
    "text-feature-4-title": {
      "ko": "삶의 질을 높이는 혁신",
      "en": "Innovation improving quality of life"
    },
    "text-feature-4-desc": {
      "ko": "기존 의료 서비스의 한계를 넘어, 어르신들의 일상과 건강을 근본적으로 개선하는 솔루션을 연구합니다.",
      "en": "Researches solutions that fundamentally improve seniors’ daily life and health beyond conventional healthcare services."
    },
    "text-ceo-name": {
      "ko": "임태호",
      "en": "Taeho Lim"
    },
    "text-ceo-position": {
      "ko": "CEO",
      "en": "CEO"
    },
    "text-contact-label": {
      "ko": "Call us anytime",
      "en": "Call us anytime"
    },
    "text-contact-number": {
      "ko": "+82 33-1522-8930",
      "en": "+82 33-1522-8930"
    },
    "text-years": {
      "ko": " 년 경력",
      "en": " Years"
    },
    "text-experience-desc": {
      "ko": "의료·헬스케어 전문 노하우",
      "en": "Medical and healthcare expertise"
    },
    "text-features-title": {
      "ko": "Solution",
      "en": "Solution"
    },
    "text-features-description": {
      "ko": "AI와 디지털 기술을 기반으로, 누구나 건강하고 활기찬 삶을 누릴 수 있도록 맞춤형 헬스케어 솔루션을 제공합니다.",
      "en": "We provide personalized healthcare solutions based on AI and digital technologies so that everyone can live a healthy and active life."
    },
    "text-feature-tab-1": {
      "ko": "영상·이미지 AI 솔루션",
      "en": "Video & Image AI Solution"
    },
    "text-feature-tab-2": {
      "ko": "시니어 디지털 헬스케어 솔루션",
      "en": "Senior Digital Healthcare Solution"
    },
    "text-feature-1-title": {
      "ko": "영상·이미지 AI 솔루션",
      "en": "Video & Image AI Solution"
    },
    "text-feature-1-desc": {
      "ko": "헬스클라우드(주)는 영상·이미지 데이터 분석 기술을 기반으로,\n의료·헬스케어 분야에서 확장 가능한 AI 솔루션을 제공합니다.",
      "en": "HealthCloud Inc. provides scalable AI solutions in healthcare based on video & image data analysis technology."
    },
    "text-feature-1-item-1": {
      "ko": "벨루스 프로젝트 기반의 피부 및 피부톤, 두피 진단 서비스",
      "en": "Skin & scalp diagnostic service based on Bellus project"
    },
    "text-feature-1-item-2": {
      "ko": "아나젠 프로젝트 기반의 두피 진단 서비스",
      "en": "Scalp diagnostic service based on Anagen project"
    },
    "text-feature-1-img1-caption": {
      "ko": "아나젠 — 두피 진단",
      "en": "Anagen — Scalp Diagnostic"
    },
    "text-feature-1-img2-caption": {
      "ko": "벨루스 — 피부 및 두피 진단",
      "en": "Bellus — Skin & Scalp Diagnostic"
    },
    "text-feature-2-title": {
      "ko": "시니어 디지털 헬스케어 솔루션",
      "en": "Senior Digital Healthcare Solution"
    },
    "text-feature-2-desc": {
      "ko": "헬스클라우드(주)는 오프라인 장기요양기관 운영 경험과\n네트워크를 바탕으로 신뢰성 있는 솔루션을 제공합니다.",
      "en": "HealthCloud Inc. provides reliable solutions based on experience and network in offline long-term care institutions."
    },
    "text-feature-2-item-1": {
      "ko": "노인의 건강한 삶을 위한 맞춤형 인지 및 신체 관리 서비스",
      "en": "Personalized cognitive and physical care service for seniors' healthy life"
    },
    "text-feature-2-item-2": {
      "ko": "노인 복지 시설 이용을 위한 등·하원 서비스",
      "en": "Pick-up and drop-off service for seniors using welfare facilities"
    },
    "text-feature-2-img1-caption": {
      "ko": "시니어 헬스케어 사이니지",
      "en": "Senior Healthcare Signage"
    },
    "text-feature-2-img2-caption": {
      "ko": "장기요양기관 등하원 서비스",
      "en": "Long-term care institution pick-up/drop-off service"
    },
    "text-services-title": {
      "ko": "Services",
      "en": "Services"
    },
    "text-services-description": {
      "ko": "건강 관리부터 피부·두피 진단까지 개인 맞춤형 헬스케어 서비스를 제공합니다.",
      "en": "We provide personalized healthcare services, from health management to skin and scalp diagnostics."
    },
    "text-service-1-title": {
      "ko": "시니어 헬스케어 사이니지",
      "en": "Senior Healthcare Signage"
    },
    "text-service-1-desc": {
      "ko": "AI 기술과 사이니지 기기를 기반으로, 고령자의 건강한 노후 생활을 돕기 위한 통합 건강지원 서비스를 제공합니다. 인지 기능과 신체 능력을 체계적으로 진단하고, 개인 맞춤형 개선 프로그램을 통해 인지력 향상과 신체 활력 회복을 지원합니다.",
      "en": "Provides integrated health support services using AI technology and signage devices to help seniors maintain a healthy life. Systematically diagnoses cognitive and physical abilities and supports cognitive improvement and physical vitality recovery through personalized programs."
    },
    "text-service-1-link": {
      "ko": "Read More",
      "en": "Read More"
    },
    "text-service-2-title": {
      "ko": "장기요양기관 등하원 관리",
      "en": "Long-term Care Institution Pick-up/Drop-off Management"
    },
    "text-service-2-desc": {
      "ko": "고령자 및 돌봄 대상자의 등·하원 정보를 정확하고 효율적으로 관리할 수 있는 스마트 출결 관리 서비스를 제공합니다. 얼굴 인식 등하원 관리부터 관련 증빙 자료 생성까지, 신뢰도 높은 관리 시스템을 구현합니다.",
      "en": "Smart attendance management service providing accurate and efficient pick-up/drop-off information for seniors and care recipients. Implements a reliable management system including face recognition and document generation."
    },
    "text-service-2-link": {
      "ko": "Read More",
      "en": "Read More"
    },
    "text-service-3-title": {
      "ko": "(벨루스) 핸디형 피부·두피 진단",
      "en": "(Bellus) Handy Skin & Scalp Diagnostic"
    },
    "text-service-3-desc": {
      "ko": "벨루스 전용 디바이스를 활용하여 피부와 두피 상태를 정밀하게 진단하고, AI 분석 결과를 바탕으로 개인별 맞춤형 관리 방법과 화장품을 추천합니다. 정확한 진단과 과학적 솔루션을 통해 피부·두피 건강을 효과적으로 개선합니다.",
      "en": "Utilizes Bellus dedicated device to precisely diagnose skin and scalp conditions, recommending personalized care methods and products based on AI analysis results. Effectively improves skin and scalp health with accurate diagnostics and scientific solutions."
    },
    "text-service-3-link": {
      "ko": "Read More",
      "en": "Read More"
    },
    "text-service-4-title": {
      "ko": "(아나젠) 두피·모발 진단",
      "en": "(Anagen) Scalp & Hair Diagnostic"
    },
    "text-service-4-desc": {
      "ko": "아나젠 전용 디바이스를 활용하여 고해상도 이미지 분석과 딥러닝 알고리즘을 통해 두피와 모발 상태를 정밀하게 진단합니다. 과학적 데이터 기반의 분석으로 개인 맞춤형 두피·모발 관리 솔루션을 제공합니다",
      "en": "Utilizes Anagen dedicated device to precisely diagnose scalp and hair conditions using high-resolution image analysis and deep learning algorithms. Provides personalized scalp and hair care solutions based on scientific data."
    },
    "text-service-4-link": {
      "ko": "Read More",
      "en": "Read More"
    },
    "text-contact-title": {
      "ko": "Contact",
      "en": "Contact"
    },
    "text-contact-info-title": {
      "ko": "Contact Info",
      "en": "Contact Info"
    },
    "text-contact-info-desc": {
      "ko": "문의 사항은 언제든지 환영합니다.",
      "en": "We welcome your inquiries at any time."
    },
    "text-contact-location-title": {
      "ko": "Our Location",
      "en": "Our Location"
    },
    "text-contact-location-name": {
      "ko": "헬스클라우드(주) 본사",
      "en": "HealthCloud Inc. Headquarters"
    },
    "text-contact-location-address": {
      "ko": "강원특별자치도 원주시 혁신로 19, H타워 A동 708호 (26460)",
      "en": "19, H Tower A-708, Hyoksin-ro, Wonju-si, Gangwon-do 26460, Korea"
    },
    "text-contact-phone-title": {
      "ko": "Phone Number",
      "en": "Phone Number"
    },
    "text-contact-phone-number": {
      "ko": "+82 33-1522-8930\n(평일 09:00 – 18:00)",
      "en": "+82 33-1522-8930\n(Weekdays 09:00 – 18:00)"
    },
    "text-contact-email-title": {
      "ko": "Email Address",
      "en": "Email Address"
    },
    "text-contact-email-address": {
      "ko": "sjyu@h-cloud.co.kr",
      "en": "sjyu@h-cloud.co.kr"
    }
  }

  // 2️⃣ 업데이트 함수
  function updateContent(lang) {
    document.querySelectorAll('[data-text-lang-key]').forEach(el => {
      const key = el.dataset.textLangKey;
      if (translations[key] && translations[key][lang]) {
        el.textContent = translations[key][lang];
      }
    });
  }

  function handleLanguage() {
    const langKo = document.getElementById('lang-ko');
    const langEn = document.getElementById('lang-en');

    // 토글 이벤트
    langKo.addEventListener('change', () => {
      document.documentElement.style.setProperty(
        '--default-font',
        "'Noto Sans KR', 'Roboto', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
      );
      document.documentElement.style.setProperty(
        '--heading-font',
        "'Noto Sans KR', 'Nunito', sans-serif"
      );
      updateContent('ko')
    });

    langEn.addEventListener('change', () => {
      document.documentElement.style.setProperty(
        '--default-font',
        "'Roboto', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', 'Noto Sans KR'"
      );
      document.documentElement.style.setProperty(
        '--heading-font',
        "'Nunito', sans-serif, 'Noto Sans KR'"
      );
      updateContent('en')
    });
  }
  document.addEventListener('DOMContentLoaded', handleLanguage);

  updateContent('ko');
})();
