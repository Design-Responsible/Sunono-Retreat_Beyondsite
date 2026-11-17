// ─────────────────────────────────────────────────────────────────────────────
// ALL page copy lives here, one block per section, so each section can be
// replaced on its own. Everything below is the ORIGINAL TEMPLATE PLACEHOLDER
// copy (Understorey). Ratings, reviews, prices and distances are demo values:
// replace or remove every one of them before launch. Never publish as-is.
// Photos are crops of the Sunono estate photo until real ones arrive.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'sunono', // footer giant name; header uses the logo image
  cta: 'Experience with us', // header button
  email: 'stay@understorey.example',
  phone: '+61 400 000 000',
  address: ['Fossoway Lodge', 'Fossoway, Carnbo, Kinross'],
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Fossoway+Lodge+Fossoway+Kinross',
  priceFrom: 'from $420 / night',
};

export const nav = [
  { label: 'the house', href: '#house' },
  { label: 'gallery', href: '#gallery' },
  { label: 'amenities', href: '#amenities' },
  { label: 'location', href: '#location' },
  { label: 'reviews', href: '#guests' },
];
export const navMore = [
  { label: 'the plan', href: '#plan' },
  { label: 'nearby', href: '#nearby' },
  { label: 'good to know', href: '#know' },
  { label: 'pricing & contact', href: '#book' },
  { label: 'more photos', href: '/gallery' },
  { label: 'message Tom', href: '#ask-tom' },
];

export const hero = {
  line1: 'A home can speak',
  line2: 'different languages',
  sub: 'Some very quiet, some bold with loud character. Whatever the space you’re looking for, Sunono Retreat has a bit of everything.',
  place: ['Scottish countryside', '· 200 years old'],
  facts: ['15 hectares', '· a private garden and lake'],
  photos: [
    { src: '/images/estate.jpg', alt: 'The house, its lawn and the lake from above' },
    { src: '/images/house.jpg', alt: 'The house' },
    { src: '/images/house-front.jpg', alt: 'The front of the Victorian house through the larch branches' },
    { src: '/images/garden.jpg', alt: 'The garden' },
  ],
};

export const house = {
  // Words; a {photo:n} token drops a small inline photo chip into the sentence.
  sentence:
    'Explore our luxurious retreats in a secluded 200-year-old {photo:0} Victorian house, set on a 15-hectare estate {photo:1} with a private garden {photo:2} and lake {photo:3}.',
  chips: ['/images/house.jpg', '/images/estate.jpg', '/images/garden.jpg', '/images/lake.jpg'],
  glanceLabel: 'At a glance',
  glance: ['Two couples', 'A small family', 'Long weekends', 'Working remotely', 'Slow mornings'],
  intro:
    'Beyond every window is the estate: old trees, a walled garden and the lake below the lawn. Arrive, find your desk and let the house keep the hours for you.',
  facts: [
    ['Guests', 'up to 4'],
    ['Bedrooms', '2 suites'],
    ['Beds', '2 queen'],
    ['Bathrooms', '2 ensuites + outdoor bath'],
    ['Size', '140 m², one level'],
    ['Check-in / out', '15:00 / 10:00, keypad'],
    ['Parking', '2 cars, EV charger'],
    ['Wi-fi', 'fast, throughout'],
  ],
};

export const plan = {
  title: ['how the house', 'is laid out'],
  intro:
    '140 m², one level. A suite at each end, one long room between, and a deck the full length. A carport at the top of the drive, and a sauna down the path.',
  drawings: [
    { caption: 'the house · 140 m²', wide: true },
    { caption: 'carport · 2 cars, EV charger' },
    { caption: 'sauna · cold plunge, outdoor shower' },
  ],
  rooms: [
    { n: 1, name: 'Suites', tags: ['×2', '18 m²', 'queen bed'], text: 'A wall of glass onto the ferns, linen bedding and a wardrobe. One at each end of the house, so each couple has its own quiet corner.' },
    { n: 2, name: 'Ensuites', tags: ['×2', 'rain shower'], text: 'Rain shower, stone basin and heated floor, with robes and local soaps. Each opens straight off its suite.' },
    { n: 3, name: 'Living', tags: ['42 m²', 'fireplace', 'records'], text: 'A deep sofa facing the fire and glass on two sides. The record player and a shelf of vinyl are yours to use.' },
    { n: 4, name: 'Dining', tags: ['seats 6'], text: 'A long blackwood table beside the glass, candlelit after dark. Seats six comfortably, with room for a bottle of Huon cider.' },
    { n: 5, name: 'Kitchen', tags: ['induction', 'espresso'], text: 'Blackwood island, induction, oven and an espresso machine with local coffee. Everything you need to cook a proper dinner.' },
    { n: 6, name: 'Deck & bath', tags: ['full length', 'outdoor bath'], text: 'Runs the length of the house over the gully. The stone bath sits at the quiet end, ready in about fifteen minutes.' },
    { n: 7, name: 'Carport', tags: ['2 cars', 'EV charger'], text: 'Two covered bays at the top of the drive, a charger on the back wall, and the woodstore beside it for the fire and the sauna.' },
    { n: 8, name: 'Sauna', tags: ['wood-fired', 'cold plunge'], text: 'A short walk down the path. Cedar benches and a wood stove, then the cold plunge and an outdoor shower under the tree ferns.' },
  ],
};

export const gallery = {
  title: 'a look inside',
  intro: 'Photos of the house, its rooms and the forest around it.',
  lead: 'A house lifted into the canopy, with the forest in every window.',
  body: 'Photographed through a year at the house: winter mist lifting off the gully, long summer evenings on the deck, rain on the glass, and the small details you only notice after a few days.',
  photos: [
    { src: '/images/wing.jpg', caption: 'a window seat for rainy days', tag: 'living' },
    { src: '/images/trees.jpg', caption: 'the ensuite', tag: 'bathing' },
    { src: '/images/house.jpg', caption: 'a suite, morning light', tag: 'suites' },
    { src: '/images/lawn.jpg', caption: 'the kitchen island', tag: 'kitchen & dining' },
    { src: '/images/lake.jpg', caption: 'the outdoor bath, evening', tag: 'bathing' },
    { src: '/images/garden.jpg', caption: 'the suspended fireplace', tag: 'living' },
    { src: '/images/path.jpg', caption: 'dinner by candlelight', tag: 'kitchen & dining' },
  ],
};

export const amenities = {
  title: ['everything you need,', 'then the forest'],
  intro: 'Five groups, one tap each. Linen, firewood and breakfast basics are waiting when you arrive.',
  groups: [
    { name: 'Bathing', photo: '/images/lake.jpg', items: [['Outdoor stone bath', 'on the deck'], ['Two ensuites', 'rain showers'], ['Heated floors', 'both bathrooms'], ['Robes & slippers', 'for four'], ['Local soaps', 'from the valley'], ['Hair dryer', 'in each ensuite']] },
    { name: 'Kitchen', photo: '/images/lawn.jpg', items: [['Induction & oven', 'full size'], ['Espresso machine', 'local beans'], ['Dishwasher', ''], ['Breakfast basics', 'on arrival'], ['Blackwood island', 'seats four'], ['Wine glasses', 'and a corkscrew']] },
    { name: 'Comfort', photo: '/images/wing.jpg', items: [['Suspended fireplace', 'wood supplied'], ['Record player', 'and vinyl'], ['Linen bedding', 'queen beds'], ['Blackout blinds', 'both suites'], ['Underfloor heating', 'throughout'], ['Books & games', 'on the shelf']] },
    { name: 'Outdoors', photo: '/images/garden.jpg', items: [['Full-length deck', 'over the gully'], ['Wood-fired sauna', 'down the path'], ['Cold plunge', 'and outdoor shower'], ['Fire pit', 'with seating'], ['Creek walk', 'from the door']] },
    { name: 'Practical', photo: '/images/house.jpg', items: [['Fast wi-fi', 'throughout'], ['EV charger', 'in the carport'], ['Washer & dryer', ''], ['Keypad entry', 'self check-in'], ['Iron & board', ''], ['First-aid kit', 'in the laundry']] },
  ],
};

export const location = {
  title: 'what’s nearby',
  // Distances are straight-line from Fossoway Lodge (OS grid NO 0155 0194), rounded.
  // Gleneagles and St Andrews from the Fossoway estate listing. Check before launch.
  intro: 'Fossoway Lodge sits on the southern edge of the Ochil Hills, between Kinross and the Hillfoots villages. Here are a few of the best finds nearby, nearest first. Distances are approximate, as the crow flies.',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Fossoway+Lodge+Fossoway+Kinross',
  stops: [
    ['start', 'Sunono Retreat', 'Fossoway Lodge. Start here.'],
    ['1 mile', 'The Inn at Muckhart', 'An early 18th-century coaching inn at Pool of Muckhart, just to the west.'],
    ['1.5 miles', 'Rumbling Bridge Gorge', 'The River Devon drops into a mossy canyon of waterfalls and rapids. Free, always open.'],
    ['1.5 miles', 'Crook of Devon', 'A gentle 4-mile riverside loop that takes in the gorge from both banks.'],
    ['3.7 miles', 'Castle Campbell & Dollar Glen', '“Castle Gloom”, above a wooded gorge between the Burns of Care and Sorrow.'],
    ['4.7 miles', 'Glendevon reservoirs', 'Quiet walks into the Ochils, with the old drovers’ inn at Tormaukin on the way.'],
    ['6.6 miles', 'Lochleven Castle', 'By boat from Kinross Pier to the island where Mary, Queen of Scots, was held. April to September.'],
    ['6.6 miles', 'Loch Leven Heritage Trail', 'A level, traffic-free 13-mile path around the loch, with cafés along the way.'],
    ['9 miles', 'Gleneagles', 'North over the Ochils for golf and the famous hotel.'],
    ['35 miles', 'St Andrews', 'East to the old town, the sands and the home of golf.'],
  ],
  band: {
    photo: '/images/estate.jpg',
    places: [['Rumbling Bridge', '1.5 mi'], ['Castle Campbell', '3.7 mi'], ['Loch Leven', '6.6 mi'], ['Gleneagles', '9 mi']],
    line1: 'a mile and a half to the gorge,',
    line2: 'nine to Gleneagles.',
  },
};

export const guestbook = {
  title: 'from the guestbook',
  score: '4.98',
  link: 'Read all 96 reviews on Airbnb',
  ratings: [['Cleanliness', '5.0'], ['Accuracy', '4.9'], ['Check-in', '5.0'], ['Communication', '5.0'], ['Location', '4.9'], ['Value', '4.8']],
  reviews: [
    ['Like sleeping inside the forest. We didn’t want to leave. The bed faces the trees, and we woke to birdsong every morning.', 'Lily', 'Mar 2026'],
    ['The outdoor bath in the rain is something we will talk about for years. The house is warm, quiet and spotless.', 'Marcus', 'Jan 2026'],
    ['Thoughtful in every detail. Tom’s list of walks shaped our whole trip, and the fresh bread on the first morning was a lovely touch.', 'Priya & Sam', 'Nov 2025'],
    ['Quiet, warm and beautifully made. We lit the fire every evening and read for hours. The perfect place to slow down.', 'Hannah', 'Aug 2025'],
    ['Two couples, two suites at opposite ends — exactly what we needed. Long dinners at the big table were the best part.', 'Jo & friends', 'Jun 2025'],
    ['Woke to pademelons on the deck and mist in the gully. Magic. The drive in is easy, yet the house feels miles from anywhere.', 'Daniel', 'May 2025'],
  ],
  host: {
    title: 'a note from the host',
    quote: '“I grew up in the Huon Valley, and this is my favourite corner of it. The walks are better than any guidebook says, and the bath is best when it rains. I live nearby if you need anything.”',
    name: 'Tom Green',
    photo: '/images/trees.jpg',
    pills: ['Superhost', 'Hosting since 2021', 'Replies within an hour'],
    cta: 'Message Tom',
  },
};

export const know = {
  title: 'before you arrive',
  cards: [
    ['Arriving', ['From 15:00,', 'out by 10:00'], 'Self check-in with a keypad, so arrive when it suits you.'],
    ['House rules', ['No smoking,', 'parties or pets'], 'The pets rule protects the pademelons and wombats that live here.'],
    ['Cancellation', ['Free until', '14 days before'], 'Cancel up to two weeks before arrival for a full refund.'],
  ],
  askLine: 'Something we haven’t covered?',
  faq: [
    ['Is the road suitable for any car?', 'Yes. The last two kilometres are well-kept gravel; take it slowly after heavy rain.'],
    ['Can we arrive early or leave late?', 'Often, if no one is arriving that day. Ask Tom a few days before.'],
    ['Will we see wildlife?', 'Most evenings: pademelons on the lawn, wombats on the drive, and birds all day.'],
    ['Is there mobile reception?', 'Patchy in the gully, good at the top of the drive. The wi-fi is fast throughout.'],
    ['Where is the nearest supermarket?', 'Huonville, fifteen minutes away.'],
    ['Is the outdoor bath private?', 'Completely. It faces the forest, with no neighbours in sight.'],
    ['Is the house warm in winter?', 'Very. Underfloor heating throughout, and the fire.'],
    ['Can we bring children?', 'Yes. The deck has rails, but the bath and the creek need watching.'],
  ],
};

export const book = {
  title: 'stay a while',
  intro: 'Pick your dates and guests for an estimate. Questions first? Ask Tom.',
  host: ['Tom · Superhost', 'Replies within an hour'],
  pills: ['from $420 / night', '2 nights minimum', 'up to 4 guests', 'Free cancellation to 14 days'],
  price: 420,
  fees: [['Cleaning', 95], ['Linen and towels', 30], ['Firewood', 45]],
  day: [
    { time: '07:00', caption: 'mist through the gums', src: '/images/sky.jpg' },
    { time: '11:00', caption: 'rain on the window seat', src: '/images/wing.jpg' },
    { time: '17:00', caption: 'the bath, before dinner', src: '/images/lake.jpg' },
    { time: '21:00', caption: 'the fire, late', src: '/images/house.jpg' },
  ],
};

export const closer = {
  line: ['we’ll leave the lights', 'for you'], // rendered as: line[0] / on [photo] line[1]
  chip: '/images/sky.jpg',
  steps: [
    { src: '/images/trees.jpg', text: 'above you, the canopy' },
    { src: '/images/house.jpg', text: 'then the house, lit' },
    { src: '/images/garden.jpg', text: 'and below it, the understorey' },
  ],
};

export const footer = {
  house: [['the house', '#house'], ['the plan', '#plan'], ['gallery', '#gallery'], ['amenities', '#amenities'], ['location', '#location'], ['good to know', '#know']],
  socials: [['Airbnb', 'https://www.airbnb.com/'], ['Instagram', 'https://www.instagram.com/']],
  gettingHere: ['40 min from Hobart', '55 min from Hobart Airport', 'Last 2 km on gravel'],
  photo: '/images/path.jpg',
};
