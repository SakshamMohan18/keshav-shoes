import heroimg from "../assets/hero.png";
import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";
import heavy1 from "../assets/heavy1.png";
import heavy2 from "../assets/heavy2.png";
import heavy3 from "../assets/heavy3.png";
import heavy4 from "../assets/heavy4.png";
import heavy5 from "../assets/heavy5.png";
import heavy6 from "../assets/heavy6.jpg";
import heavy7 from "../assets/heavy7.png";
import im1 from "../assets/im1.png";
import im2 from "../assets/im2.png";
import im3 from "../assets/im3.jpg";
import im4 from "../assets/im4.jpg";
import im5 from "../assets/im5.png";
import im6 from "../assets/im6.png";
import im7 from "../assets/im7.png";
import im8 from "../assets/im8.png";
import im9 from "../assets/im9.png";
import im10 from "../assets/im10.png";
import im11 from "../assets/im11.png";
import im12 from "../assets/im12.png";
import im13 from "../assets/im13.png";
import im14 from "../assets/im14.jpg";
import im15 from "../assets/im15.jpg";
import im16 from "../assets/im16.jpg";
import im17 from "../assets/im17.jpg";
import im18 from "../assets/im18.jpg";
import im19 from "../assets/im19.jpg";
import sn2 from "../assets/sn2.png";
import sn3 from "../assets/sn3.png";
import sn4 from "../assets/sn4.png";
import sn5 from "../assets/sn5.png";
import sn6 from "../assets/sn6.png";
import sn7 from "../assets/sn7.png";
import sn8 from "../assets/sn8.png";
import sn9 from "../assets/sn9.png";
import sn11 from "../assets/sn11.jpg";
import sn12 from "../assets/sn12.png";
import sn13 from "../assets/sn13.png";
import sn15 from "../assets/sn15.png";
import sn17 from "../assets/sn17.png";
import sn18 from "../assets/sn18.png";
import sn19 from "../assets/sn19.png";
import sn20 from "../assets/sn20.png";
import sn21 from "../assets/sn21.png";
import sn22 from "../assets/sn22.png";
import sn23 from "../assets/sn23.png";
import sn24 from "../assets/sn24.png";

import sp1 from "../assets/sp1.jpg";
import sp2 from "../assets/sp2.jpg";
import sp4 from "../assets/sp4.png";
import sp5 from "../assets/sp5.png";
import sp6 from "../assets/sp6.png";
import sp7 from "../assets/sp7.png";
import sp8 from "../assets/sp8.png";
import sp9 from "../assets/sp9.jpg";
import sp10 from "../assets/sp10.png";
import sp11 from "../assets/sp11.png";
import sp12 from "../assets/sp12.jpg";
import sp13 from "../assets/sp13.jpg";
import sp14 from "../assets/sp14.jpg";
import sp15 from "../assets/sp15.jpg";
import sp16 from "../assets/sp16.jpg";
import sp17 from "../assets/sp17.jpg";








import instagram from "../assets/instagram.svg";

const heroapi = {
  title: "Elevate Your Game with",
  subtitle: "Every Step",
  img: heroimg,
  btntext: "Explore Product",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: instagram, url: 'https://www.instagram.com/keshav_shoes_?igsh=MTNhZ2Vocjl0NHJiNA==' },
  ],
};

const popularsales = {
  title: "Popular Sales",
  items: [
    {
      id: "0p0x1",
      title: "sneaker 18",
      text: "Imported",
      rating: "4.9",
      btn: "Buy Now",
      img: psale2,
      price: "749", // Replaced $ with ₹
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500"
    },
    {
      id: "0p0x2",
      title: "Runner 1 (blk & gry)",
      text: "MEN Running Shoes",
      rating: "4.5",
      btn: "Buy Now",
      img: psale1,
      price: "899",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Runner 1 (blu & org)",
      text: "MEN Running Shoes",
      rating: "4.5",
      btn: "Buy Now",
      img: psale3,
      price: "899",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "NIKE AIR WITH LIMITLESS CHOICES",
  text: "Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.",
  btn: "Explore More",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  img: hightlightimg,
};

const sneaker = {
  heading: "FEATURED",
  title: "SNEAKERS AIR LANCING SHOES",
  text: "The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
  btn: "Explore More",
  url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
  img: sneakershoe,
};

// Correctly named export
const topratesales = {
  title: "Top Rated Sales",
  items: [
    {
      id: "0M0x1",
      title: "Heavy 1",
      text: "Imported",
      rating: "5+",
      btn: "Buy Now",
      img: product7,
      price: "1099",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Sneaker 15",
      text: "Imported",
      rating: "5+",
      btn: "Buy Now",
      img: product2,
      price: "799",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "AIR Addapt BB Rose",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product3,
      price: "1259",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Sneaker 1",
      text: "imported",
      rating: "5+",
      btn: "Buy Now",
      img: product4,
      price: "899",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Breathable 1",
      text: "Imported",
      rating: "5+",
      btn: "Buy Now",
      img: product5,
      price: "999",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Sneaker 11",
      text: "Indian",
      rating: "4+",
      btn: "Buy Now",
      img: product6,
      price: "599",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Sneaker 4",
      text: "Indian",
      rating: "4+",
      btn: "Buy Now",
      img: product1,
      price: "599",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Jordan Air Max",
      text: "Imported",
      rating: "5+",
      btn: "Buy Now",
      img: product9,
      price: "1299",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "AIR Runner",
      text: "Indian",
      rating: "4.8",
      btn: "Buy Now",
      img: product10,
      price: "999",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "Sneaker 16",
      text: "Imported",
      rating: "5+ ",
      btn: "Buy Now",
      img: product12,
      price: "899",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "Sneaker 14",
      text: "Imported",
      rating: "5+",
      btn: "Buy Now",
      img: product11,
      price: "649",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Bizazo",
      text: "Imported",
      rating: "5+",
      btn: "Buy Now",
      img: product8,
      price: "1099",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};

const story = {
  title: "Top Stories",
  popularBrandsTitle: "Our Brands",
  news: [
    {
      title: "Jayson Tatum Debuts",
      text: "Jordan Brands signature model for the past few years, Jayson Tatum will be dawning the Air Jordan 37 this season before attaining potentially his first signature sneaker with Jumpman, which he rumored to be in the works recently via his Twitter.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Bro’s Nike Zoom Freak 4",
      text: "Arriving right time for the Fall, this upcoming take on the Zoom Freak 4 seemingly draws inspiration from Thanksgiving. Orange and brown, two staples of the holiday, are used throughout the upper, dressing the parts not bathed in shades of grey.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1",
      time: "41 Mins",
      like: "5/5",
      url: "https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003/",
      by: "Michael Le",
      btn: "Read More"
    },
    {
      title: "Nike Air Max Plus",
      text: "The Nike Air Max Plus has enjoyed the reveal of several colorways these last few of months. And as we officially embark on the Fall season, an additional set have been added to the calendar, including this newly-revealed grey and orange colorway.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Max-Plus-FB3358-001-2.jpg?w=540&h=380&crop=1",
      time: "2 Hours",
      url: "https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/",
      like: "5/5",
      by: "Michael Le",
      btn: "Read More"
    },
    {
      title: "Air Jordan Retro High OG",
      text: "Air Jordan Retro High OG popular series of AJ1s with the popular color-blocking with the original Yellow Toe flavor. The colorway was revealed back PE by musician Zach Myers, nearly four years later, Jordan fanatics will finally get their shot a GR release.",
      img: "https://sneakernews.com/wp-content/uploads/2022/03/yellow-toe-jordan-1-release-date-2.jpg",
      time: "7 Months",
      url: "https://sneakernews.com/2022/03/09/air-jordan-1-retro-high-og-yellow-toe-555088-711/",
      like: "5/5",
      by: "Sneaker News",
      btn: "Read More"
    },
    {
      title: "Nike Air Zoom GT Cut 2",
      text: "The Bred coloryway of Zoom GT Cut 2 will be first to release this Friday, For Nike Members Nation World Wide while Sabrina Ionescus colorway is set for an October 13th release date. In the meantime, enjoy official images of both colorways below.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1",
      time: "1 Months",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Nike Air Force Orange Color",
      text: "From lace toggles to city-inspired makeovers, the Nike Air Force 1 has delivered a number of unique modifications. Here though, the brand is taking things down quite a few notches, opting for a simple colorway helmed primarily by black and Laser Orange.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/09/nike-air-force-1-black-laser-orange-fb7162-081/",
      time: "6 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
    {
      title: "Hello Kitty and Adidas",
      text: "The world of Sanrio is vast and replete with many an iconic character. Few among the family, though, rival the immense influence of Hello Kitty, who’s played mascot for everything from Pringles merchandise to sneaker collaborations.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-2.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-originals-gw7166-gw7167-gw7168/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
    {
      title: "Air Force 1 Low Expands",
      text: "The nighttime aesthetic seen here is applied to the tumbled black leather panels of the upper and perforated mesh construction of the tongue while Royal trim and forefoot Swooshes provide additional intrigue to the darkened palette.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/08/nike-air-force-1-low-worldwide-black-royal-fb1840-001/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
  ],
};

const shopData = {
  sports: [
    { id: "sports-6", title: "Heavy 1", category: "Sports", price: 1099, img: heavy1 },
    { id: "sports-7", title: "Breathable 1", category: "Sports", price: 999, img: heavy2 },
    { id: "sports-8", title: "Bizazo", category: "Sports", price: 1099, img: heavy3 },
    { id: "sports-9", title: "Heavy 2", category: "Sports", price: 1099, img: heavy4 },
    { id: "sports-10", title: "Poizon", category: "Sports", price: 999, img: heavy5 },
    { id: "sports-43", title: "Tube 8", category: "Sports", price: 899, img: sp14 },
    { id: "sports-38", title: "Runner 3 (wht)", category: "Sports", price: 899, img: sp9 },
    { id: "sports-39", title: "Runner 3(blk)", category: "Sports", price: 899, img: sp10 },
    { id: "sports-11", title: "Layasa", category: "Sports", price: 599, img: heavy6 },
    { id: "sports-12", title: "Imported 1", category: "Sports", price: 949, img: heavy7 },
    { id: "sports-1", title: "Sports 1 (w&b)", category: "Sports", price: 599, img: b1 },
    { id: "sports-2", title: "Sports 1 (blk)", category: "Sports", price: 599, img: b2 },
    { id: "sports-3", title: "Sports 1 (blk & gry)", category: "Sports", price: 599, img: b3 },
    { id: "sports-14", title: "Imported 2", category: "Sports", price: 999, img: im2 },
    { id: "sports-15", title: "Imported 3", category: "Sports", price: 999, img: im3 },
    { id: "sports-16", title: "Tube 2 (blk)", category: "Sports", price: 949, img: im4 },
    { id: "sports-17", title: "Imported 4", category: "Sports", price: 949, img: im5 },
    { id: "sports-18", title: "Imported 5", category: "Sports", price: 999, img: im6 },
    { id: "sports-32", title: "Imported 14", category: "Sports", price: 1099, img: im14 },
    { id: "sports-33", title: "Imported 15", category: "Sports", price: 999, img: im15},
    { id: "sports-34", title: "Imported 16", category: "Sports", price: 1099, img: im16},
    { id: "sports-35", title: "Imported 17", category: "Sports", price: 999, img: im17},
    { id: "sports-36", title: "Imported 18", category: "Sports", price: 1099, img: im18},
    { id: "sports-37", title: "Imported 19", category: "Sports", price: 1099, img: im19},
    { id: "sports-27", title: "Runner 1 (wht)", category: "Sports", price: 849, img: sp4 },
    { id: "sports-28", title: "Runner 1 (blk)", category: "Sports", price: 849, img: sp5 },
    { id: "sports-29", title: "Tube 1 (blk)", category: "Sports", price: 1049, img: sp6 },
    { id: "sports-19", title: "Easy (gry)", category: "Sports", price: 899, img: im7 },
    { id: "sports-20", title: "Imported 6", category: "Sports", price: 1049, img: im8 },
    { id: "sports-21", title: "Heavy 3", category: "Sports", price: 1049, img: im9 },
    { id: "sports-22", title: "Heavy 4", category: "Sports", price: 1049, img: im10 },
    { id: "sports-23", title: "Curl 2", category: "Sports", price: 1049, img: im11 },
    { id: "sports-24", title: "Curl 1", category: "Sports", price: 1049, img: im12 },
    { id: "sports-25", title: "Imported 7", category: "Sports", price: 949, img: im13 },
    { id: "sports-30", title: "Tube 4 (w&b)", category: "Sports", price: 1099, img: sp7 },
    { id: "sports-31", title: "Tube 5 (wht)", category: "Sports", price: 1049, img: sp8 },
    { id: "sports-13", title: "Imported 8", category: "Sports", price: 949, img: im1 },
    { id: "sports-4", title: "Runner 2 (blk&gry)", category: "Sports", price: 899, img: sp1 },
    { id: "sports-5", title: "Runner 2 (blu&org)", category: "Sports", price: 899, img: sp2 },
    { id: "sports-40", title: "Tube 6", category: "Sports", price: 999, img: sp11 },
    { id: "sports-41", title: "Runner 4", category: "Sports", price: 899, img: sp12 },
    { id: "sports-42", title: "Tube 7", category: "Sports", price: 899, img: sp13 },
    { id: "sports-44", title: "Runnr 5", category: "Sports", price: 999, img: sp15 },
    { id: "sports-45", title: "Nike (gld)", category: "Sports", price: 899, img: sp16 },
    { id: "sports-46", title: "Tube advance", category: "Sports", price: 1049, img: sp17 },
  ],
  sneakers: [
    { id: "sneakers-18", title: "Sneaker 18", category: "Sneakers", price: 749, img: sn18 },
    { id: "sneakers-11", title: "Sneaker 11", category: "Sneakers", price: 599, img: product6 },
    { id: "sneakers-1", title: "Sneaker 1", category: "Sneakers", price: 949, img: product4 },
    { id: "sneakers-8", title: "Sneaker 8", category: "Sneakers", price: 899, img: sn8 },
    { id: "sneakers-10", title: "Sneaker 10", category: "Sneakers", price: 899, img: sn15 },
    { id: "sneakers-7", title: "Sneaker 7", category: "Sneakers", price: 999, img: sn7 },
    { id: "sneakers-14", title: "Sneaker 14", category: "Sneakers", price: 649, img: product11 },
    { id: "sneakers-2", title: "Sneaker 2", category: "Sneakers", price: 949, img: sn2 },
    { id: "sneakers-16", title: "Sneaker 16", category: "Sneakers", price: 949, img: product12 },
    { id: "sneakers-17", title: "Sneaker 17", category: "Sneakers", price: 949, img: sn17 },
    { id: "sneakers-3", title: "Sneaker 3", category: "Sneakers", price: 949, img: sn3 },
    { id: "sneakers-4", title: "Sneaker 4", category: "Sneakers", price: 949, img: sn4 },
    { id: "b-4", title: "Sneaker 4", category: "Sneakers", price: 599, img: b4 },
    { id: "b-5", title: "Sneaker 4", category: "Sneakers", price: 599, img: product1 },
    { id: "sneakers-5", title: "Sneaker 5", category: "Sneakers", price: 949, img: sn5 },
    { id: "sneakers-6", title: "Sneaker 6", category: "Sneakers", price: 679, img: sn6 },
    { id: "sneakers-9", title: "Sneaker 9", category: "Sneakers", price: 949, img: sn9 },
    { id: "sneakers-12", title: "Sneaker 12", category: "Sneakers", price: 869, img: sn12 },
    { id: "sneakers-13", title: "Sneaker 13", category: "Sneakers", price: 899, img: sn13 },
    { id: "sneakers-15", title: "Sneaker 15", category: "Sneakers", price: 899, img: product2 },
    { id: "sneakers-19", title: "Sneaker 19", category: "Sneakers", price: 649, img: sn19 },
    { id: "sneakers-20", title: "Sneaker 20", category: "Sneakers", price: 649, img: sn20 },
    { id: "sneakers-21", title: "Sneaker 21", category: "Sneakers", price: 949, img: sn21 },
    { id: "sneakers-22", title: "Sneaker 22", category: "Sneakers", price: 799, img: sn22 },
    { id: "sneakers-23", title: "Sneaker 23", category: "Sneakers", price: 799, img: sn23 },
    { id: "sneakers-24", title: "Sneaker 24", category: "Sneakers", price: 799, img: sn24 },
  ],
};

const footerAPI = {
  titles: [{ title: "About Nike" }, { title: "Get Help" }, { title: "Company" }],
};

export { heroapi, footerAPI, story, sneaker, highlight, topratesales, popularsales, shopData };