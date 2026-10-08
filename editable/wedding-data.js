/**
 * wedding-data.js — Customer-facing editable data layer for kerala-sands
 * Wedding Invitation: Hrishikesh & Anjana
 */

window.WEDDING_DATA = {
  couple: {
    order: "groom-first",
    groom: {
      name: "Hrishikesh",
      fullName: "Hrishikesh Madhavan",
      line: "Son of Mr. C V Madhavan & Mrs. Sheeba Madhavan",
      note: "An IT professional by career, a passionate cricketer and footballer at heart, and a firm believer that every good story begins with good food.",
      photo: "./editable/assets/groom.png",
      photos: [
        "./editable/assets/groom.png",
      ],
    },
    bride: {
      name: "Anjana",
      fullName: "Anjana T",
      line: "Daughter of Mr. Balachandran T & Mrs. Sajitha V",
      note: "An IT professional by career, but a people person at heart—finding more joy in conversations than code.",
      photo: "./editable/assets/bride.png",
      photos: [
        "./editable/assets/bride.png",
      ],
    },
  },

  wedding: {
    dateISO: "2026-12-25T11:30:00+05:30",
    endISO: "2026-12-25T15:00:00+05:30",
    dateLabel: "Friday, 25 December 2026",
    dateShort: "25 · 12 · 2026",
    timeLabel: "11:30 AM onwards",
    muhurthamLabel: "Muhurtham · 11:30 AM",
    footerDateLocation: "25 · 12 · 2026 · Payyanur, Kerala",
  },

  venue: {
    name: "Ayodhya Auditorium",
    address: "Subrahmanya Swami Temple Rd, Payyanur, Kerala 670307",
    locationShort: "Payyanur, Kerala",
    mapsUrl: "https://maps.app.goo.gl/xgTCw5Teb2zMwd6D7?g_st=ipc",
    mapUrl: "https://maps.app.goo.gl/xgTCw5Teb2zMwd6D7?g_st=ipc",
  },

  music: {
    src: "./editable/assets/the_rose.mp3",
    title: "The Rose (Instrumental)",
  },

  images: {
    coupleHero: "./editable/assets/couple-hero.png",
    mapPreview: "./editable/assets/map-preview.jpg",
  },

  gallery: [
    {
      src: "./editable/assets/couple-2.jpg",
      caption: "Love in every whispered smile",
      title: "Hrishikesh & Anjana",
      subtitle: "Love in every whispered smile",
    },
    {
      src: "./editable/assets/couple-3.jpg",
      caption: "Dance of love & timeless promises",
      title: "Dance of Love",
      subtitle: "Dance of love & timeless promises",
    },
    {
      src: "./editable/assets/couple-4.jpg",
      caption: "Hand in hand, into forever",
      title: "Hand in Hand",
      subtitle: "A promise for a lifetime",
    },
    {
      src: "./editable/assets/couple-1.jpg",
      caption: "Together, wherever the journey leads",
      title: "Walking into Forever",
      subtitle: "Together, wherever the journey leads",
    },
  ],
};
