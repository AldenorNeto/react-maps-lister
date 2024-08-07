export const typeToEmoji: { [key: string]: string } = {
  restaurant: "🍽️",
  bar: "🍹",
  cafe: "☕",
  supermarket: "🛒",
  park: "🌳",
  hotel: "🏨",
  museum: "🏛️",
  hospital: "🏥",
  school: "🏫",
  gym: "💪",
  bakery: "🥐",
  pharmacy: "💊",
  atm: "🏧",
  gas_station: "⛽",
  zoo: "🦓",
  stadium: "🏟️",
  movie_theater: "🎬",
  shopping_mall: "🛍️",
  library: "📚",
  church: "⛪",
  synagogue: "🕍",
  mosque: "🕌",
  art_gallery: "🖼️",
  courthouse: "🏛️",
  spa: "🧖‍♂️",
  dentist: "🦷",
  veterinarian: "🐾",
  car_repair: "🔧",
  hair_care: "💇",
  bowling_alley: "🎳",
  amusement_park: "🎢",
  water_park: "💦",
  casino: "🎲",
  bus_station: "🚌",
  train_station: "🚉",
  airport: "✈️",
  post_office: "📮",
  police: "🚔",
  fire_station: "🚒",
  beach: "🏖️",
  ferry_terminal: "⛴️",
  lighthouse: "🚢",
  viewpoint: "👀",
  camping: "🏕️",
  winery: "🍷",
  brewery: "🍺",
  distillery: "🥃",
  nightclub: "🎶",
  karaoke: "🎤",
  concert_hall: "🎵",
  opera_house: "🎭",
  convention_center: "🏛️",
  gallery: "🖼️",
  observatory: "🔭",
  planetarium: "🌌",
  rooftop_bar: "🌃",
  adult_entertainment: "🍑",
  adult_store: "🌶️",
  aquarium: "🐠",
  bank: "🏦",
  beauty_salon: "💇‍♀️",
  bicycle_store: "🚲",
  book_store: "📚",
  campground: "🏕️",
  car_dealer: "🚗",
  car_rental: "🚙",
  car_wash: "🚿",
  cemetery: "🏴‍☠️",
  city_hall: "🏛️",
  clothing_store: "👗",
  convenience_store: "🛒",
  department_store: "🛍️",
  doctor: "👨‍⚕️",
  drugstore: "💊",
  electrician: "🔌",
  electronics_store: "📱",
  embassy: "🏛️",
  florist: "🌸",
  funeral_home: "⚰️",
  furniture_store: "🪑",
  hardware_store: "🔩",
  hindu_temple: "🕉️",
  home_goods_store: "🏠",
  insurance_agency: "📝",
  jewelry_store: "💍",
  laundry: "🧺",
  lawyer: "⚖️",
  light_rail_station: "🚈",
  liquor_store: "🍾",
  local_government_office: "🏢",
  locksmith: "🔑",
  lodging: "🏨",
  meal_delivery: "🚚",
  meal_takeaway: "🍱",
  movie_rental: "📽️",
  moving_company: "📦",
  night_club: "🎶",
  painter: "🎨",
  parking: "🅿️",
  pet_store: "🐾",
  physiotherapist: "💆",
  plumber: "🚰",
  primary_school: "🏫",
  real_estate_agency: "🏠",
  roofing_contractor: "🔨",
  rv_park: "🏕️",
  secondary_school: "🏫",
  shoe_store: "👠",
  storage: "📦",
  store: "🏪",
  subway_station: "🚇",
  taxi_stand: "🚖",
  tourist_attraction: "🗺️",
  transit_station: "🚉",
  travel_agency: "🌍",
  university: "🏛️",
  veterinary_care: "🐾",
  point_of_interest: "📍",
  establishment: "🏢",
  food: "🍴",
  health: "🏥",
  sublocality_level_1: "🏙️",
  sublocality: "🏘️",
  political: "🏛️",
};

export const getEmojiForPlace = (types: string[]): string => {
  for (const type of types) {
    if (typeToEmoji[type]) {
      return typeToEmoji[type];
    }
  }
  return "🏠";
};