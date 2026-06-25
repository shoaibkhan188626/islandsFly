/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(null);

const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      properties: "Properties",
      resort: "Resort",
      cityHotels: "City Hotels",
      guesthouseHotels: "Guesthouse/Hotels",
      about: "About Us",
      contact: "Contact",
      faq: "FAQ",
      terms: "Terms",
      privacy: "Privacy",
    },
    top: {
      maldives: "Maldives",
    },
    home: {
      hero: {
        title: "A refined way to discover the archipelago.",
        subtitle:
          "Curated stays across Maldives: private islands, handpicked guesthouses, and purpose-built liveaboards — arranged with local expertise and attentive service.",
      },
      buttons: {
        plan: "Plan trip",
        explore: "Explore services",
      },
      offer: {
        title: "A travel experience shaped around you.",
      },
      featured: {
        title: "Handpicked escapes",
        cta: "Start booking →",
      },
      traveler: {
        title: "Trusted service, memorable journeys.",
      },
    },
    booking: {
      details: {
        title: "Booking details",
        subtitle:
          "Choose the resort, travel style, and dates that fit your itinerary. We will take care of transfers, resort confirmation, and itinerary refinement.",
      },
      form: {
        resort_selection: "Resort selection",
        travel_style: "Travel style",
        guests: "Guests",
        selected_window: "Selected window",
        arrival: "Arrival",
        departure: "Departure",
        confirm_button: "Confirm booking request",
      },
      summary: {
        title: "Booking summary",
        resort: "Resort",
        travel_style: "Travel style",
        guests: "Guests",
        nights: "Nights",
      },
      submitted:
        "Your booking request has been received. Our travel team will contact you within 12 hours to finalize the itinerary.",
    },
    about: {
      title: "ABOUT US",
      why: "Why Choose Us?",
      mission: "OUR MISSION",
      vision: "OUR VISION",
      dedication: "OUR DEDICATION",
      team: "Our Travel Advisors",
      ceo: {
        title: "CEO / Managing Director",
        name: "Mohamed Rifaah",
        tagline:
          "Founder with a Passion for Hospitality, Creativity, and Authentic Maldivian Experiences",
      },
    },
    categories: {
      title: "Categories",
    },
    notfound: {
      title: "Page not found",
      message:
        "The page you are looking for doesn’t exist. Return to the homepage and continue planning your Maldives escape.",
      button: "Return home",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      properties: "Immobilien",
      resort: "Resort",
      cityHotels: "Stadthotels",
      guesthouseHotels: "Gasthäuser/Hotels",
      about: "Über uns",
      contact: "Kontakt",
      faq: "FAQ",
      terms: "Bedingungen",
      privacy: "Datenschutz",
    },
    top: {
      maldives: "Malediven",
    },
    home: {
      hero: {
        title: "Ein verfeinerter Weg, den Archipel zu entdecken.",
        subtitle:
          "Kuratiertes Angebot auf den Malediven: private Inseln, ausgewählte Gästehäuser und speziell gestaltete Liveaboards — organisiert mit lokaler Expertise und aufmerksamen Service.",
      },
      buttons: {
        plan: "Reise planen",
        explore: "Services erkunden",
      },
      offer: { title: "Ein Reiseerlebnis, das auf Sie zugeschnitten ist." },
      featured: { title: "Handverlesene Orte", cta: "Buchung starten →" },
      traveler: { title: "Vertrauenswürdiger Service, unvergessliche Reisen." },
    },
    booking: {
      details: {
        title: "Buchungsdetails",
        subtitle:
          "Wählen Sie Resort, Reisetyp und Daten, die zu Ihrer Reiseroute passen. Wir kümmern uns um Transfers, Bestätigung und Verfeinerung der Reiseroute.",
      },
      form: {
        resort_selection: "Resortauswahl",
        travel_style: "Reisestil",
        guests: "Gäste",
        selected_window: "Ausgewählter Zeitraum",
        arrival: "Ankunft",
        departure: "Abreise",
        confirm_button: "Buchungsanforderung bestätigen",
      },
      summary: {
        title: "Buchungsübersicht",
        resort: "Resort",
        travel_style: "Reisestil",
        guests: "Gäste",
        nights: "Nächte",
      },
      submitted:
        "Ihre Buchungsanfrage wurde erhalten. Unser Reiseteam wird Sie innerhalb von 12 Stunden kontaktieren, um die Reiseroute zu finalisieren.",
    },
    about: {
      title: "ÜBER UNS",
      why: "Warum uns wählen?",
      mission: "UNSERE MISSION",
      vision: "UNSERE VISION",
      dedication: "UNSERE VERPFLICHTUNG",
      team: "Unsere Reiseberater",
      ceo: {
        title: "CEO / Geschäftsführer",
        name: "Mohamed Rifaah",
        tagline:
          "Gründer mit Leidenschaft für Gastfreundschaft, Kreativität und authentische maledivische Erlebnisse",
      },
    },
    categories: { title: "Kategorien" },
    notfound: {
      title: "Seite nicht gefunden",
      message:
        "Die gesuchte Seite existiert nicht. Kehren Sie zur Startseite zurück und planen Sie weiter Ihre Maledivenreise.",
      button: "Zurück zur Startseite",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      properties: "Собственности",
      resort: "Курорт",
      cityHotels: "Городские отели",
      guesthouseHotels: "Гестхаусы/Отели",
      about: "О нас",
      contact: "Контакт",
      faq: "FAQ",
      terms: "Условия",
      privacy: "Конфиденциальность",
    },
    top: {
      maldives: "Мальдивы",
    },
    home: {
      hero: {
        title: "Утончённый способ открыть архипелаг.",
        subtitle:
          "Отобранные варианты размещения на Мальдивах: частные острова, гостевые дома и специальные лайвоборды — с локальной экспертизой и внимательным сервисом.",
      },
      buttons: { plan: "Планировать поездку", explore: "Изучить услуги" },
      offer: { title: "Путешествие, созданное вокруг вас." },
      featured: { title: "Подобранные места", cta: "Начать бронирование →" },
      traveler: { title: "Доверенный сервис, незабываемые путешествия." },
    },
    booking: {
      details: {
        title: "Детали бронирования",
        subtitle:
          "Выберите курорт, стиль путешествия и даты, которые соответствуют вашему маршруту. Мы позаботимся о трансферах, подтверждении курорта и доработке маршрута.",
      },
      form: {
        resort_selection: "Выбор курорта",
        travel_style: "Стиль путешествия",
        guests: "Гости",
        selected_window: "Выбранный период",
        arrival: "Прибытие",
        departure: "Выезд",
        confirm_button: "Подтвердить запрос на бронирование",
      },
      summary: {
        title: "Сводка бронирования",
        resort: "Курорт",
        travel_style: "Стиль",
        guests: "Гости",
        nights: "Ночи",
      },
      submitted:
        "Ваш запрос на бронирование получен. Наша команда свяжется с вами в течение 12 часов для финализации маршрута.",
    },
    about: {
      title: "О НАС",
      why: "Почему выбирают нас?",
      mission: "НАША МИССИЯ",
      vision: "НАШЕ ВИДЕНИЕ",
      dedication: "НАША ПРЕДАННОСТЬ",
      team: "Наши туристические консультанты",
      ceo: {
        title: "Генеральный директор",
        name: "Mohamed Rifaah",
        tagline:
          "Основатель, увлечённый гостеприимством, креативностью и аутентичными мальдивскими впечатлениями",
      },
    },
    categories: { title: "Категории" },
    notfound: {
      title: "Страница не найдена",
      message:
        "Страница не существует. Вернитесь на главную и продолжите планирование путешествия на Мальдивы.",
      button: "Вернуться домой",
    },
  },
  zh: {
    nav: {
      home: "首页",
      properties: "物业",
      resort: "度假村",
      cityHotels: "城市酒店",
      guesthouseHotels: "民宿/酒店",
      about: "关于我们",
      contact: "联系",
      faq: "常见问题",
      terms: "条款",
      privacy: "隐私",
    },
    top: {
      maldives: "马尔代夫",
    },
    home: {
      hero: {
        title: "发现群岛的精致方式。",
        subtitle:
          "精选马尔代夫住宿：私人岛屿、精选民宿和专属游船——由本地专家安排，提供周到服务。",
      },
      buttons: { plan: "计划行程", explore: "探索服务" },
      offer: { title: "围绕您打造的旅行体验。" },
      featured: { title: "精选目的地", cta: "开始预订 →" },
      traveler: { title: "值得信赖的服务，难忘的旅程。" },
    },
    booking: {
      details: {
        title: "预订详情",
        subtitle:
          "选择适合您行程的度假村、旅行风格和日期。我们将负责接送、度假村确认和行程完善。",
      },
      form: {
        resort_selection: "度假村选择",
        travel_style: "旅行风格",
        guests: "旅客",
        selected_window: "已选时间",
        arrival: "到达",
        departure: "离开",
        confirm_button: "确认预订请求",
      },
      summary: {
        title: "预订摘要",
        resort: "度假村",
        travel_style: "旅行风格",
        guests: "旅客",
        nights: "晚数",
      },
      submitted:
        "您的预订请求已收到。我们的旅行团队将在12小时内与您联系以完成行程。",
    },
    about: {
      title: "关于我们",
      why: "为什么选择我们？",
      mission: "我们的使命",
      vision: "我们的愿景",
      dedication: "我们的奉献",
      team: "我们的旅行顾问",
      ceo: {
        title: "首席执行官/常务董事",
        name: "Mohamed Rifaah",
        tagline: "热爱酒店业、富有创造力及真实马尔代夫体验的创始人",
      },
    },
    categories: { title: "类别" },
    notfound: {
      title: "页面未找到",
      message: "您要查找的页面不存在。返回主页并继续规划您的马尔代夫之旅。",
      button: "返回首页",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      properties: "物件",
      resort: "リゾート",
      cityHotels: "シティホテル",
      guesthouseHotels: "ゲストハウス/ホテル",
      about: "私たちについて",
      contact: "連絡先",
      faq: "FAQ",
      terms: "利用規約",
      privacy: "プライバシー",
    },
    top: {
      maldives: "モルディブ",
    },
    home: {
      hero: {
        title: "群島を発見する洗練された方法。",
        subtitle:
          "マルディブの厳選宿泊：プライベートアイランド、厳選ゲストハウス、特別なライブアボード — 地元の専門知識と丁寧なサービスで手配します。",
      },
      buttons: { plan: "旅行を計画", explore: "サービスを探索" },
      offer: { title: "あなたに合わせた旅行体験。" },
      featured: { title: "厳選の旅先", cta: "予約を始める →" },
      traveler: { title: "信頼されるサービス、忘れられない旅。" },
    },
    booking: {
      details: {
        title: "予約の詳細",
        subtitle:
          "旅程に合ったリゾート、旅行スタイル、日程を選択してください。送迎、リゾートの確認、旅程の調整を行います。",
      },
      form: {
        resort_selection: "リゾート選択",
        travel_style: "旅行スタイル",
        guests: "ゲスト",
        selected_window: "選択した期間",
        arrival: "到着",
        departure: "出発",
        confirm_button: "予約リクエストを確認",
      },
      summary: {
        title: "予約概要",
        resort: "リゾート",
        travel_style: "旅行スタイル",
        guests: "ゲスト",
        nights: "泊数",
      },
      submitted:
        "ご予約リクエストを受け付けました。当社のトラベルチームが12時間以内に連絡し、旅程を確定します。",
    },
    about: {
      title: "私たちについて",
      why: "なぜ私たちを選ぶのか",
      mission: "私たちの使命",
      vision: "私たちのビジョン",
      dedication: "私たちの献身",
      team: "私たちの旅行アドバイザー",
      ceo: {
        title: "CEO / 代表取締役",
        name: "Mohamed Rifaah",
        tagline:
          "ホスピタリティ、クリエイティビティ、本物のモルディブ体験への情熱を持つ創業者",
      },
    },
    categories: { title: "カテゴリ" },
    notfound: {
      title: "ページが見つかりません",
      message:
        "お探しのページは存在しません。ホームページに戻り、モルディブの旅を計画してください。",
      button: "ホームに戻る",
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const t = (path) => {
    if (!path) return "";
    const parts = path.split(".");
    let node = TRANSLATIONS[lang] || TRANSLATIONS.en;
    for (const p of parts) {
      if (node && Object.prototype.hasOwnProperty.call(node, p)) node = node[p];
      else return "";
    }
    return node;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export default LanguageContext;
