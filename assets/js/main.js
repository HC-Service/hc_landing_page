(function () {
  "use strict";

  const translations = {
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
      "ko": `033-1522-8930 (평일 09:00 – 18:00)`,
      "en": "+82 33-1522-8930 (Weekdays 09:00 – 18:00 KST)"
    },
    "text-contact-email-title": {
      "ko": "Email Address",
      "en": "Email Address"
    },
    "text-contact-email-address": {
      "ko": "sjyu@h-cloud.co.kr",
      "en": "sjyu@h-cloud.co.kr"
    },
    "carousel-prev": {
      "ko": "이전",
      "en": "Previous"
    },
    "carousel-next": {
      "ko": "다음",
      "en": "Next"
    },
    "service-a-title": {
      "ko": "시니어 헬스케어 사이니지(건강·인지)",
      "en": "Senior Healthcare Signage (Health & Cognition)"
    },
    "service-a-description": {
      "ko": "시니어 헬스케어 사이니지는 고령자의 건강한 노후 생활을 지원하기 위한 과학적인 맞춤형 솔루션입니다. AI 기술과 사이니지 기기를 활용하여 인지 기능과 신체 능력을 체계적으로 진단하고 개선할 수 있는 프로그램을 제공합니다.",
      "en": "Senior healthcare signage is a scientific, personalized solution to support healthy aging. Using AI technology and signage devices, it systematically diagnoses and improves cognitive and physical functions."
    },
    "service-a-check1-title": {
      "ko": "인지 능력 진단",
      "en": "Cognitive Ability Assessment"
    },
    "service-a-check1-text": {
      "ko": "설문 기반 검사: MMSE-DS, CIST 등 과학적 문진 도구를 활용하여 인지 상태를 평가합니다. 행동 기반 분석: COP, SVA, HTS와 같은 행동 패턴 분석 기술을 통해 보다 객관적이고 정밀한 진단이 가능합니다.",
      "en": "Survey-based tests: Use scientific tools such as MMSE-DS and CIST to evaluate cognitive status. Behavior-based analysis: Technologies like COP, SVA, and HTS enable more objective and precise diagnosis."
    },
    "service-a-check2-title": {
      "ko": "인지 훈련 콘텐츠",
      "en": "Cognitive Training Content"
    },
    "service-a-check2-text": {
      "ko": "공예, 미술, 지필, 회상, 운동 등 다양한 인지 훈련 동영상 콘텐츠가 탑재되어 있어, 고령자가 쉽게 따라하며 두뇌를 자극할 수 있습니다.",
      "en": "Includes various training video content such as crafts, art, writing, reminiscence, and exercise, allowing seniors to easily follow and stimulate their brains."
    },
    "service-a-check3-title": {
      "ko": "운동능력 측정 및 맞춤 코칭",
      "en": "Physical Ability Measurement & Coaching"
    },
    "service-a-check3-text": {
      "ko": "상지, 하지, 전신의 운동능력을 구분 측정하여 점수화된 평가 결과를 제공합니다. 결과를 바탕으로 1주 단위 맞춤형 운동 프로그램이 추천되며, 영상 가이드를 통해 따라 하기 쉽도록 구성되어 있습니다. 실시간 심박수 측정 기능을 통해 운동 중 안전성과 적정 강도를 관리할 수 있습니다.",
      "en": "Measures upper body, lower body, and overall physical abilities, providing scored evaluations. Based on results, tailored weekly exercise programs are recommended, supported by video guides. Real-time heart rate monitoring ensures safe and proper intensity during exercise."
    },
    "service-a-check4-title": {
      "ko": "기초 신체 기능 평가",
      "en": "Basic Physical Function Assessment"
    },
    "service-a-check4-text": {
      "ko": "근력, 유연성, 평형성, 지구력 등 고령자의 기초 체력을 평가하고 점수화된 결과와 함께 개선 가이드를 제공합니다. 다양한 동작이 포함되어 있으며, 대상자가 원하는 측정 항목을 선택할 수 있도록 설계되어 개인 맞춤형 평가가 가능합니다.",
      "en": "Evaluates seniors’ basic physical fitness such as strength, flexibility, balance, and endurance, providing scored results with improvement guidelines. Includes diverse movements and allows individuals to select desired assessments for a personalized evaluation."
    },
    "service-a-extra": {
      "ko": "헬스클라우드의 시니어 헬스케어 사이니지는 고령자의 삶의 질 향상과 건강 수명을 위한 예방 중심의 스마트 헬스케어 솔루션입니다.",
      "en": "HealthCloud’s senior healthcare signage is a preventive smart healthcare solution to enhance quality of life and extend healthy life expectancy."
    },
    "service-b-title": {
      "ko": "장기요양기관 등하원 관리",
      "en": "Long-Term Care Facility Pick-Up & Drop-Off Management"
    },
    "service-b-description": {
      "ko": "신뢰할 수 있는 등하원 정보를 관리하기 위한 서비스를 제공합니다. 출석 확인부터 공단 연계 증빙 자료 생성까지 시설 운영의 효율성과 대상 보호자의 신뢰를 높여주는 지능형 솔루션입니다.",
      "en": "Provides a service to reliably manage pick-up and drop-off information. From attendance verification to generating linked documentation for the national health system, it ensures operational efficiency and guardians’ trust."
    },
    "service-b-check-1-title": {
      "ko": "피보호자 자동 식별 및 출결 관리",
      "en": "Automatic Identification & Attendance Management"
    },
    "service-b-check-1-text": {
      "ko": "AI 안면 인식을 통한 정확한 출석 확인 및 등·하원 시간, 위치, 이미지를 자동 저장 및 기록합니다. 보호자 전용 알림 기능을 제공합니다.(모바일 앱 기반)",
      "en": "Automatically records attendance and pick-up/drop-off details using AI facial recognition. Provides guardian-specific notifications via mobile app."
    },
    "service-b-check-2-title": {
      "ko": "요양보호자 케어 정보 기록",
      "en": "Caregiver Activity Logging"
    },
    "service-b-check-2-text": {
      "ko": "케어 활동 내용이 시간대별로 자동 저장되어 출결 정보와 연계된 업무 이력을 자동화합니다.",
      "en": "Automatically logs caregiver activities by time, linking them with attendance information for seamless record keeping."
    },
    "service-b-check-3-title": {
      "ko": "행정업무 자동화 및 운영 효율 향상",
      "en": "Administrative Automation & Operational Efficiency"
    },
    "service-b-check-3-text": {
      "ko": "등·하원 정보, 출석 기록, 케어 이력 기반으로 공단 청구용 수가 연산 자료를 자동 생성하여 업무 효율성을 향상합니다.",
      "en": "Automatically generates billing data for the national health system based on attendance and care logs, enhancing operational efficiency."
    },
    "service-b-extra": {
      "ko": "헬스클라우드의 등하원 관리 서비스는 장기요양기관에서 피보호자의 안전을 강화하고, 운영 효율을 높이는 차세대 스마트 돌봄 서비스입니다.",
      "en": "HealthCloud's pick-up & drop-off service strengthens safety for residents and improves operational efficiency in long-term care facilities as a next-generation smart care solution."
    },
    "service-c-title": {
      "ko": "벨루스",
      "en": "Bellus"
    },
    "service-c-description": {
      "ko": "벨루스 전용 디바이스를 활용하여 피부와 두피 상태를 정밀하게 진단하고, 그 결과에 기반한 맞춤형 관리법과 화장품 추천 서비스를 제공합니다.",
      "en": "Using Bellus' dedicated device, it accurately diagnoses skin and scalp conditions and provides personalized care methods and product recommendations."
    },
    "service-c-check-1-title": {
      "ko": "피부 진단 (7가지 항목)",
      "en": "Skin Diagnosis (7 Items)"
    },
    "service-c-check-1-text": {
      "ko": "수분/탄력, 유분, 모공, 색소침착, 피지, 주름, 민감도를 진단합니다.",
      "en": "Diagnoses moisture/elasticity, sebum, pores, pigmentation, oiliness, wrinkles, and sensitivity."
    },
    "service-c-check-2-title": {
      "ko": "피부톤 진단 (4가지 유형)",
      "en": "Skin Tone Diagnosis (4 Types)"
    },
    "service-c-check-2-text": {
      "ko": "Bright Cool, Bright Warm, Dark Cool, Dark Warm로 구분하여 진단합니다.",
      "en": "Diagnosed as Bright Cool, Bright Warm, Dark Cool, Dark Warm."
    },
    "service-c-check-3-title": {
      "ko": "두피 및 모발 진단",
      "en": "Scalp & Hair Diagnosis"
    },
    "service-c-check-3-text": {
      "ko": "두피 유형, 모발 굵기 및 밀도, 민감도, 블랙헤드를 진단합니다.",
      "en": "Diagnoses scalp type, hair thickness/density, sensitivity, and blackheads."
    },
    "service-c-check-4-title": {
      "ko": "맞춤형 케어와 화장품 추천",
      "en": "Customized Care & Product Recommendation"
    },
    "service-c-check-4-text": {
      "ko": "진단 내역을 시각화하여 피부·두피 상태 변화를 관리할 수 있습니다. 진단 결과에 따라 우선적인 케어 방법과 화장품을 제안합니다.",
      "en": "Visualizes diagnosis results to monitor skin and scalp changes. Suggests prioritized care and products based on results."
    },
    "service-c-extra": {
      "ko": "헬스클라우드의 '벨루스'는 전용 디바이스와 진단 알고리즘으로 비전문가도 두피와 모발 상태를 손쉽게 확인할 수 있습니다. 결과를 바탕으로 최적의 관리 솔루션과 화장품을 제안하여, 현장에서 바로 상담과 체험이 가능합니다.",
      "en": "HealthCloud's 'Bellus' allows non-professionals to easily check scalp and hair conditions with dedicated devices and algorithms, providing optimal solutions and product suggestions on-site."
    },
    "service-c-cta-text": {
      "ko": "기기 사양은 별도 홈페이지를 확인해주세요.",
      "en": "Please check the website for device specifications."
    },
    "service-c-cta-link": {
      "ko": "이동",
      "en": "Visit"
    },
    "service-d-title": {
      "ko": "아나젠",
      "en": "Anagen"
    },
    "service-d-description": {
      "ko": "고해상도 이미지 분석과 AI 알고리즘을 결합하여, 두피와 모발 상태를 정밀하게 진단하는 최첨단 솔루션입니다. 탈모, 염증, 비듬 등의 이상 징후를 조기에 감지하며, 개인별 두피 유형과 탈모 진행에 따른 맞춤형 관리 방향을 제시합니다.",
      "en": "A cutting-edge solution combining high-resolution image analysis and AI algorithms to precisely diagnose scalp and hair conditions. Detects early signs of hair loss, inflammation, dandruff, and provides personalized care based on scalp type and hair loss stage."
    },
    "service-d-check-1-title": {
      "ko": "두피 유형 진단",
      "en": "Scalp Type Diagnosis"
    },
    "service-d-check-1-text": {
      "ko": "건성, 지성, 복합성 등 두피의 기본 특성을 구분하여 관리 방향을 제안합니다.",
      "en": "Identifies basic scalp characteristics such as dry, oily, or combination and suggests management directions."
    },
    "service-d-check-2-title": {
      "ko": "탈모 유형 및 단계 분석",
      "en": "Hair Loss Type & Stage Analysis"
    },
    "service-d-check-2-text": {
      "ko": "탈모 진행 정도를 7단계로 구분하여 체계적인 진단이 가능합니다.",
      "en": "Classifies hair loss progression into 7 stages for systematic diagnosis."
    },
    "service-d-check-3-title": {
      "ko": "모발 두께 측정",
      "en": "Hair Thickness Measurement"
    },
    "service-d-check-3-text": {
      "ko": "60배율 고해상도 촬영을 통해 모발의 굵기를 정밀하게 측정하고 평균값을 산출합니다.",
      "en": "Measures hair thickness precisely with 60x high-resolution imaging and calculates the average."
    },
    "service-d-check-4-title": {
      "ko": "모발 밀도 분석",
      "en": "Hair Density Analysis"
    },
    "service-d-check-4-text": {
      "ko": "20배율 이미지로 10mm × 10mm 범위 내 모낭당 모발 수를 분석하여 탈모 여부를 진단합니다.",
      "en": "Analyzes number of hairs per follicle in a 10mm × 10mm area using 20x images to assess hair loss."
    },
    "service-d-extra": {
      "ko": "헬스클라우드의 AI 진단 시스템은 비전문가도 쉽게 사용할 수 있는 자동화 기능을 갖추고 있으며, 병의원은 물론 개인 고객도 활용 가능한 스마트 두피·모발 관리 서비스를 제공합니다.",
      "en": "HealthCloud's AI diagnostic system offers automated features for easy use by non-professionals, providing smart scalp and hair management for clinics and individual customers."
    },
    "service-d-cta-text": {
      "ko": "기기 사양은 별도 홈페이지를 확인해주세요.",
      "en": "Please check the website for device specifications."
    },
    "service-d-cta-link": {
      "ko": "준비 중",
      "en": "Coming Soon"
    },
    "service-list-title": {
      "ko": "서비스 목록",
      "en": "Service List"
    },
    "service-a-menu": {
      "ko": "시니어 헬스케어 사이니지",
      "en": "Senior Healthcare Signage"
    },
    "service-b-menu": {
      "ko": "장기요양기관 등하원 관리",
      "en": "Long-term Care Attendance Management"
    },
    "service-c-menu": {
      "ko": "(벨루스) 핸디형 피부·두피 진단",
      "en": "(Bellus) Handy Skin & Scalp Diagnosis"
    },
    "service-d-menu": {
      "ko": "(아나젠) 두피·모발 진단",
      "en": "(Anagen) Scalp & Hair Diagnosis"
    },
    "help-title": {
      "ko": "문의하기",
      "en": "Have a Question?"
    },
    "help-phone": {
      "ko": "033-1522-8930",
      "en": "+82 33-1522-8930"
    },
    "help-email": {
      "ko": "sjyu@h-cloud.co.kr",
      "en": "sjyu@h-cloud.co.kr"
    },
    "page-title-A": {
      "ko": "시니어 헬스케어 사이니지",
      "en": "Senior Healthcare Signage"
    },
    "page-title-B": {
      "ko": "장기요양기관 등하원 관리",
      "en": "Long-term Care Facility Attendance Management"
    },
    "page-title-C": {
      "ko": "(벨루스) 핸디형 피부·두피 진단",
      "en": "(Bellus) Handy Skin & Scalp Diagnosis"
    },
    "page-title-D": {
      "ko": "(아나젠) 두피·모발 진단",
      "en": "(Anagen) Scalp & Hair Diagnosis"
    },
    "service-a-ip-title-1": { "ko": "시니어케어 솔루션 지적재산권", "en": "Senior Care Solution IP" },
    "service-a-ip-value-1": { "ko": "7건 특허 & 3건 저작권", "en": "7 Patents & 3 Copyrights" },
    "service-a-ip-desc-1": { "ko": "시니어케어 솔루션 IP 확보", "en": "Secured IP for Senior Care Solution" },

    "service-a-ip-title-2": { "ko": "AI 솔루션 지적재산권", "en": "AI Solution IP" },
    "service-a-ip-value-2": { "ko": "2건 특허 & 4건 저작권", "en": "2 Patents & 4 Copyrights" },
    "service-a-ip-desc-2": { "ko": "AI 솔루션 IP 확보", "en": "Secured IP for AI Solution" },

    "service-a-task-title": { "ko": "2025년 과제수주", "en": "2025 Project Awards" },
    "service-a-task-value": { "ko": "총 8건 과제 수주", "en": "Total 8 Projects Awarded" },
    "service-a-task-desc": { "ko": "R&D 2건, 비R&D 5건, 데이터바우처 1건", "en": "R&D 2, Non-R&D 5, Data Voucher 1" },

    "service-a-collab-title": { "ko": "지역 및 대학 협력", "en": "Regional & University Collaboration" },
    "service-a-collab-value": { "ko": "5개 얼라이언스 구축", "en": "5 Alliances Established" },
    "service-a-collab-desc": {
      "ko": "K-바이오헬스, 상지대학교 얼라이언스, 레전드 50+, 고대구로병원 개방형실험실, 강원 AI 헬스케어 글로벌혁신특구",
      "en": "K-BioHealth, Sangji University Alliance, Legend 50+, Korea University Guro Hospital Open Lab, Gangwon AI Healthcare Global Innovation Zone"
    }
  }

  const contents = {
    "#A": { templateId: "template-A", title: "시니어 헬스케어 사이니지" },
    "#B": { templateId: "template-B", title: "장기요양기관 등하원 관리" },
    "#C": { templateId: "template-C", title: "(벨루스) 핸디형 피부·두피 진단" },
    "#D": { templateId: "template-D", title: "(아나젠) 두피·모발 진단" }
  };

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

  function scrollToDynamicContent() {
    if (window.innerWidth >= 992) return; // lg 이상에서는 스크롤하지 않음

    const container = document.getElementById("dynamic-content");
    if (!container) return;

    const yOffset = -40; // 상단에서 여유
    const y = container.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }

  /**
   * Service Details hash 기반 콘텐츠 전환
   */
  function renderContent() {
    const hash = window.location.hash || "#A";
    const data = contents[hash];
    const container = document.getElementById("dynamic-content");
    container.textContent = "";

    if (data?.templateId) {
      const template = document.getElementById(data.templateId);
      if (template) {
        container.appendChild(template.content.cloneNode(true));

        // template 태그는 렌더링안된 상태로 있어서 렌더링 후에 update
        updateContent();
      }
    }

    scrollToDynamicContent();
  }

  function updateActiveLink() {
    const hash = window.location.hash || "#A";
    document.querySelectorAll(".services-list a").forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === hash);
    });
  }

  function updatePageTitle() {
    const hash = window.location.hash || "#A";
    const key = `page-title-${hash.substring(1)}`; // "#A" -> "page-title-A"
    const titleElement = document.getElementById("page-title");
    const savedLang = sessionStorage.getItem("lang") || "ko";
    if (translations[key] && translations[key][savedLang]) {
      titleElement.textContent = translations[key][savedLang];
    }
  }

  function handleHashChange() {
    if (!window.location.pathname.endsWith("service-details.html")) return;

    renderContent();
    updateActiveLink();
    updatePageTitle();
  }

  window.addEventListener("DOMContentLoaded", handleHashChange);
  window.addEventListener("hashchange", handleHashChange);


  // 2️⃣ 업데이트 함수
  function updateContent() {
    document.querySelectorAll('[data-text-lang-key]').forEach(el => {
      if (el.id === "page-title") {
        updatePageTitle();
      } else {
        const key = el.dataset.textLangKey;
        const savedLang = sessionStorage.getItem("lang") || "ko";
        if (translations[key] && translations[key][savedLang]) {
          el.textContent = translations[key][savedLang];
        }
      }
    });
  }

  function handleLanguage() {
    const langKo = document.getElementById('lang-ko');
    const langEn = document.getElementById('lang-en');

    // 저장된 언어 불러오기 (없으면 ko 기본값)
    const savedLang = sessionStorage.getItem("lang") || "ko";
    applyLanguage(savedLang);

    // 체크박스 상태 반영
    if (savedLang === "ko") {
      langKo.checked = true;
    } else {
      langEn.checked = true;
    }

    // 한국어 선택
    langKo.addEventListener('change', () => {
      sessionStorage.setItem("lang", "ko"); // 저장
      applyLanguage("ko");
    });

    // 영어 선택
    langEn.addEventListener('change', () => {
      sessionStorage.setItem("lang", "en"); // 저장
      applyLanguage("en");
    });
  }

  function applyLanguage(lang) {
    if (lang === "ko") {
      document.documentElement.style.setProperty(
        '--default-font',
        "'Noto Sans KR', 'Roboto', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
      );
      document.documentElement.style.setProperty(
        '--heading-font',
        "'Noto Sans KR', 'Nunito', sans-serif"
      );
    } else {
      document.documentElement.style.setProperty(
        '--default-font',
        "'Roboto', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', 'Noto Sans KR'"
      );
      document.documentElement.style.setProperty(
        '--heading-font',
        "'Nunito', sans-serif, 'Noto Sans KR'"
      );
    }
    updateContent();
  }

  document.addEventListener('DOMContentLoaded', handleLanguage);

})();
