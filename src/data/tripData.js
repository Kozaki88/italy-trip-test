export const tripPhases = [
  {
    id: 1,
    title: "Phase 1: Rome's Center, Ruins & Volcanic Outskirts",
    dates: "June 14 – June 16",
    logistics: "Our Airbnb is perfectly located outside the ZTL traffic zone between the airport and downtown. We will leave the car safely parked when going into the absolute city center, but use it to easily explore the spectacular ruins and volcanic sights just outside town.",
    center: [41.8902, 12.4922], // Rome approximate
    days: [
      {
        date: "Sunday, June 14",
        title: "Volcanic Crater Lakes & Castel Gandolfo",
        desc: "Pick up the car and check into the Airbnb. In the afternoon, bypass city traffic to drive out to Lake Albano, a beautiful body of water resting inside an extinct prehistoric volcanic crater.",
        image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAErc2RfRlWP_8yWC3Hvn8rMZ6PqzbRQb404M0nAHKwpVr0o0f72vv6o6feBECGkgfhpqsm5EZHODTNYah4x2TeVkmgIyfd3vwN9iiCBRXaLSg6B8FQVxUbTsU8DM6xYQ2XEHuW2=w408-h269-k-no",
        details: [
          { label: "The Day", text: "Pick up the car and check into the Airbnb. In the afternoon, bypass city traffic to drive out to Lake Albano, a beautiful body of water resting inside an extinct prehistoric volcanic crater." },
          { label: "The Evening", text: "Stroll through the historic cliffside village of Castel Gandolfo (the Pope’s traditional summer retreat) and enjoy a sunset dinner overlooking the volcanic water." }
        ]
      },
      {
        date: "Monday, June 15",
        title: "Ancient Roads & The Historic Heart",
        desc: "Morning (By Car): Drive down to the Via Appia Antica. Park near the catacombs and walk on original 2,000-year-old Roman cobblestones.",
        image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEfeqcrtrxiLrYYUbDOQ28E0XZHj-TdI1CvzySOfj4zxSLy696PRG8-4lb-EHkY1EnjasoIIEakLBdHH8M1K3zdCyO90RoxKOWQoZn7VHSn3rHqp4GC9tGZEmPALgiPpGObB-SY=w408-h544-k-no",
        details: [
          { label: "Morning (By Car)", text: "Drive down to the Via Appia Antica (The Ancient Appian Way). Park near the catacombs and walk on original 2,000-year-old Roman cobblestones lined with imperial tombs and towering stone pines." },
          { label: "Afternoon (Transit/Taxi)", text: "Leave the car at the Airbnb and head into central Rome to tour the iconic Colosseum, throw a coin in the Trevi Fountain, and explore the ancient Pantheon." }
        ]
      },
      {
        date: "Tuesday, June 16",
        title: "Rome's Ancient Harbor City",
        desc: "Morning (By Car): Check out of the Airbnb and make a short 15-minute drive down the river to the Ostia Antica archaeological park.",
        image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHSv-ki0Tt44F1yha1RcD1UhpzmqRQbXyybKhPNQhJiXvbWhzKlhm1jsldpaOISu6G4UwPIuc_KOFx3bkKTseQl36E6rQMD0GHQzHRND26tJPvt1dzfV-9pxOoBFD1a6_UEUZWbYg=w408-h306-k-no",
        details: [
          { label: "Morning (By Car)", text: "Check out of the Airbnb and make a short 15-minute drive down the river to the Ostia Antica archaeological park. Features beautifully preserved Roman apartments, ancient bars, and a magnificent theater without the big downtown crowds." },
          { label: "Afternoon", text: "Jump onto the main highway and begin the 2.5-hour drive south toward the volcanic coast of Campania." }
        ]
      }
    ],
    boundingBox: [
      [41.5, 12.0],
      [42.2, 13.0]
    ]
  },
  {
    id: 2,
    title: "Phase 2: Campania & The Volcanic Coast",
    dates: "June 16 – June 19",
    logistics: "3 nights based south of Naples (near Sorrento or Castellammare di Stabia) for simple parking and fast highway access.",
    center: [40.7461, 14.4989], // Pompeii approximate
    days: [
      {
        date: "Day Trip",
        title: "Archaeological Park of Pompeii",
        desc: "Spend a dedicated full day exploring an entire Roman city caught in time by the AD 79 eruption, walking preserved stone streets, thermal baths, and villas.",
        image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHjDiJzIzSGmomQIMbANSHG51kg4YB28ds3A4o9qcN5o3_-byTYdkm0aoh6SsEXG8vafDPj3qMieN26Kf0msWHkFi8ZHT2yghyBc_CctVHA6LZ9rKTogx3skAmQK3n2EE3A9K0=w408-h306-k-no",
        details: []
      },
      {
        date: "Day Trip",
        title: "Archaeological Park of Herculaneum",
        desc: "Visit Pompeii’s wealthier sister city. Sealed instantly by a different volcanic flow, its organic materials—including carbonized wooden beds, roofs, and doors—survived perfectly intact.",
        image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEvGRWOzYTaVS3ccROD0yl5dqhxPqZ3PINh92_rPG75Y30kZ6ryjVqU8u2jE8u-enzPDZsGiGRb6eS1_a4J7y1M33T5Kh-oy9hwY9wkcoX3TITzLXNKJTZlyX8hikab2DVjcYEG=w408-h306-k-no",
        details: []
      },
      {
        date: "Day Trip",
        title: "Mount Vesuvius",
        desc: "Drive up the winding panoramic switchbacks and hike the short trail right up to the rim of the active volcanic crater for sweeping views across the entire Bay of Naples.",
        image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH0nxSP8xryFW6oq05XBnTtJiVUIIRMmyxVUoAZC5izeBZel5-cnsEPSne7SeXgH1PJoWi4Y8jjoEVLuKhCIrki16SwMjiJ-P8lPsfo8JTHuHWNEzmlZEgzALHWLqG-Lxh_SmY=w408-h306-k-no",
        details: []
      }
    ],
    boundingBox: [
      [40.5, 14.0],
      [41.0, 14.8]
    ]
  },
  {
    id: 3,
    title: "Phase 3: Cilento — Greek Temples & Mediterranean Swims",
    dates: "June 20 – June 21",
    logistics: "2 nights based in the quiet, historic coastal plains of the Cilento region (~1.5 hours south of Pompeii).",
    center: [40.4222, 15.005], // Paestum
    days: [
      {
        date: "Exploration",
        title: "Archaeological Park of Paestum",
        desc: "Walk right up to three of the absolute best-preserved ancient Greek Doric temples standing anywhere in the world today. Then drive less than 10 minutes to the expansive coastline for a swim.",
        image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAENWOnmM3_tqq5JiA51e9q3ekI7-mVc6XiiPHyTgcQzsugw_WTAgTP00XX_R6GxaYPLArXa8UZHqO44sf3_szPoEVyyMCqyN_BORWaGUs44whbQqMCfU5GY1f0OL7vFE6GD7RYD7A=w408-h472-k-no",
        details: [
          { label: "The Temples", text: "Walk right up to three of the absolute best-preserved ancient Greek Doric temples standing anywhere in the world today, located in wide, uncrowded grassy fields." },
          { label: "The Mediterranean Swim", text: "Drive less than 10 minutes from the Greek ruins to the expansive, sandy Capaccio-Paestum coastline to enjoy a fantastic swim in the warm, calm Tyrrhenian Sea." }
        ]
      }
    ],
    boundingBox: [
      [40.0, 14.8],
      [40.6, 15.3]
    ]
  },
  {
    id: 4,
    title: "Phase 4: Basilicata — The Prehistoric Cave City",
    dates: "June 22 – June 23",
    logistics: "2 nights based in the mountain interior (~2.5 hours driving east across the scenic E847 highway).",
    center: [40.6666, 16.6069], // Matera
    days: [
      {
        date: "Exploration",
        title: "Sassi di Matera",
        desc: "Discover a breathtaking, hand-carved stone city chiseled directly into a massive limestone canyon. Spend two days exploring ancient subterranean cave houses and rock-hewn churches.",
        image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE_2DdIhS0Lo1ze7kvzYlAVtI9Gqdh9L_3rv6UYw7E5HEqrCGarn8YmQiPY8pJ7CiPy1AigfM2s2kzGxKgeAV6RsVBPgDIdW2BGe9Cx_l4Y475DR5r9eRSykkopP98_IQtgIKme=w426-h240-k-no",
        details: [
          { label: "The City", text: "Discover a breathtaking, hand-carved stone city chiseled directly into a massive limestone canyon." },
          { label: "The Atmosphere", text: "Spend two days exploring ancient subterranean cave houses and rock-hewn churches, and watch the labyrinth of stone alleys glow softly like a massive nativity scene when the lights turn on at dusk." }
        ]
      }
    ],
    boundingBox: [
      [40.5, 16.3],
      [40.8, 16.8]
    ]
  },
  {
    id: 5,
    title: "Phase 5: Puglia — The White Towns & The Adriatic",
    dates: "June 24 – June 27",
    logistics: "4 nights based in the heel of Italy, surrounded by ancient olive groves (~1.5 hours east of Matera).",
    center: [40.7289, 17.5786], // Ostuni
    days: [
      {
        date: "Day Trip",
        title: "Ostuni",
        desc: "Get lost on foot in the winding, whitewashed hillside staircases and alleyways of the famous 'White City,' looking out over the plains to the sea.",
        image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAG5AkilbYN3eB4Kch1dUz6ubzJvd8mr6K0XvQp4ZvSgKtjnyV53V3hgs6y3sjta02IVa1cvFT6TUxxxUpI61WbMClznaoBNssvW3G-haIcmuoKzuJ19wxDJes0xc723zJGWSII=w408-h968-k-no",
        details: []
      },
      {
        date: "Day Trip",
        title: "Polignano a Mare & Lama Monachile",
        desc: "Explore a dramatic medieval town built directly onto the edge of towering coastal cliffs that plunge straight into the ocean.",
        image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH6CO6t4sK49X7RYDEkAIW_pjx3IpS7K_QknEZYMfxPMZ26SBNsdawUF-B2JNygoYpoFolhkRfF-XpFlG_kPqDiDSch_4FsDSmbY0VZiA1WvAmLth_aOEOIJMDwzJsV_SInlyvV3hhw6KnC=w408-h306-k-no",
        details: [
          { label: "The Town", text: "Explore a dramatic medieval town built directly onto the edge of towering coastal cliffs that plunge straight into the ocean." },
          { label: "The Adriatic Swim", text: "Walk right down from the old town center into Lama Monachile, an iconic pebble cove framed by sheer cliffs where you can swim in crystal-clear, deep-blue Adriatic water." }
        ]
      }
    ],
    boundingBox: [
      [40.5, 17.0],
      [41.2, 17.8]
    ]
  },
  {
    id: 6,
    title: "Phase 6: Cross-Country Return & Midpoint Break",
    dates: "June 28 – June 29",
    logistics: "To break up the 5-hour cross-country drive from Puglia back to the airport, we will stop for a final overnight on June 28th.",
    center: [42.0461, 13.9242], // Sulmona approx
    days: [
      {
        date: "Option A",
        title: "Sulmona (The Mountain Oasis)",
        desc: "Stop exactly halfway in this medieval mountain town nestled deep in the Apennines. Famous for its ancient Roman aqueduct and artisan sugar-coated sweets (confetti), it offers a cool, authentic mountain evening away from the summer heat.",
        image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHaqoRKN8jE2czfa_4o2bdrUz5rEhBHFuAGvQ3sn0WCZrQA9LknAhhrjgZSYs_QJjmjU4qqArtebCBaY82zK7xiTZOA2dHUUIDecAB2Qs5CfXKkIH-X3eIebV0rwtUziteTFy8=w408-h402-k-no",
        details: []
      },
      {
        date: "Option B",
        title: "Tivoli (The Imperial Finale)",
        desc: "Drive almost all the way back to Rome to sleep right next to the capital. Spend the afternoon exploring the cascading Renaissance water fountains of Villa d'Este and the sprawling imperial ruins of Hadrian's Villa.",
        image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH6WhORPtjyl-H8HYjKgdZkJGW7RqBlTMyhXQi7bDaLbPNWvSQ5zmSbZcJ4wkGamhPyVWyO5Jl6Aorm2HDmf5VG1B19Ly9aiN26XDmpDNXnEnpo3B8x_aV-6SHnji8f_e7cv8QK9Q=w408-h272-k-no",
        details: []
      }
    ],
    boundingBox: [
      [41.8, 12.5],
      [42.2, 14.0]
    ]
  }
];

export const isWithinItaly = (lat, lng) => {
  // Rough bounding box for Italy
  return lat >= 36.0 && lat <= 47.5 && lng >= 6.5 && lng <= 18.5;
};

// Extracted from Google Maps link
export const allCoordinates = [
  [41.7999, 12.2462],
  [41.7458, 12.6644],
  [41.8361, 12.535],
  [41.7561, 12.2925],
  [40.749, 14.4862],
  [40.8061, 14.3475],
  [40.8224, 14.4289],
  [40.4222, 15.005],
  [40.6666, 16.6069],
  [40.7289, 17.5786],
  [40.995, 17.2197],
  [42.0461, 13.9242],
  [41.965, 12.7997],
  [41.7999, 12.2462]
];
