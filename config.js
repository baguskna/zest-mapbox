const config = {
  style: 'mapbox://styles/syailendraa/cktv433w61wpt17ok3n5tblje?fresh=true',
  accessToken:
    "pk.eyJ1Ijoic3lhaWxlbmRyYWEiLCJhIjoiY2t0dHA1aHF6MXMwajMxcnpycWh6a2JyZyJ9.GCOcWFXYc7m7SpZWC3U6lw",
  CSV: "./maps_data.csv",
  center: [103.851959, 1.290270],
  zoom: 12,
  title: "Zest",
  description:
    "Our app aims to improve mental health by offering fresh ideas of things to do in Singapore, all while reconnecting with ourselves, others and nature. \
    Lockdown or no lockdown, let’s spark our zest for life once again. \
    Discover hidden gems in Singapore. Try new well-being activities amongst scenic greenery. And connect with like-minded individuals while you’re at it. \
    We know just the place, and we’ll take you there.",
  sideBarInfo: ["Location_Name", "Address", "Type"],
  popupInfo: ["Location_Name"],
  filters: [
    {
      type: "checkbox",
      title: "What are you going to do today? ",
      columnHeader: "Type", // Case sensitive - must match spreadsheet entry
      listItems: [
        "Yoga",
        "Hiking",
        "Meditation",
        "Zumba",
        "Kickboxing",
        "Bird watching",
      ], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
  ],
};
