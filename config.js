const config = {
  style: 'mapbox://styles/syailendraa/cktv433w61wpt17ok3n5tblje?fresh=true',
  accessToken:
    "pk.eyJ1Ijoic3lhaWxlbmRyYWEiLCJhIjoiY2t0dHA1aHF6MXMwajMxcnpycWh6a2JyZyJ9.GCOcWFXYc7m7SpZWC3U6lw",
  CSV: "./maps_data.csv",
  center: [103.851959, 1.290270],
  zoom: 12,
  title: "Zest",
  description:
    "Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.",
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
