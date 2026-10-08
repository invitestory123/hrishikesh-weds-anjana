/**
 * wedding-data.js — Customer-facing editable data layer for kerala-sands
 * Wedding Invitation: Anjana & Hrishikesh
 */

window.WEDDING_DATA = {
  couple: {
    order: "bride-first",
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
    dateISO: "2026-12-25T10:00:00+05:30",
    endISO: "2026-12-25T15:00:00+05:30",
    dateLabel: "Friday, 25 December 2026",
    dateShort: "25 · 12 · 2026",
    timeLabel: "Muhurtham time will be updated soon",
    muhurthamLabel: "Wedding Ceremony",
    invitationLine: "Together with our families, we joyfully invite you to celebrate our wedding and share in the blessing of our new beginning.",
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
      src: "./editable/assets/couple-1.jpg",
      title: "Hrishikesh & Anjana",
      subtitle: "Walking into Forever",
    },
    {
      src: "./editable/assets/couple-2.jpg",
      title: "Joy & Laughter",
      subtitle: "Together Always",
    },
    {
      src: "./editable/assets/couple-3.jpg",
      title: "Dance of Love",
      subtitle: "Every Step With You",
    },
    {
      src: "./editable/assets/couple-4.jpg",
      title: "Hand in Hand",
      subtitle: "A Promise for a Lifetime",
    },
  ],
};
