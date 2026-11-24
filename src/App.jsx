import { useState } from "react";
import heroImage from "./assets/food.png";
import knifeImage from "./assets/knife.png";
import menuImage from "./assets/menu.png";
import chefImage from "./assets/chef.png";
import videoImage from "./assets/Video.png";
import steakImage from "./assets/steak.png";
import sushiImage from "./assets/sushi.png";
import eggImage from "./assets/egg.png";
import colaImage from "./assets/cola.png";
import soupImage from "./assets/soup.png";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-[#0C0C0C] text-white min-h-screen font-sans selection:bg-[#DCCA87] selection:text-black overflow-x-hidden">
      <nav className="flex items-center justify-between px-4 sm:px-8 py-6 max-w-7xl mx-auto border-b border-white/10 relative">
        <div className="text-xl sm:text-2xl font-serif tracking-widest font-bold uppercase">
          Gerícht
        </div>
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm tracking-wider text-gray-400">
          <li>
            <a href="#home" className="hover:text-[#DCCA87] transition">
              Home
            </a>
          </li>
          <li>
            <a href="#pages" className="hover:text-[#DCCA87] transition">
              Pages
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#DCCA87] transition">
              Contact
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-[#DCCA87] transition">
              Blog
            </a>
          </li>
          <li>
            <a href="#landing" className="hover:text-[#DCCA87] transition">
              Landing
            </a>
          </li>
        </ul>
        <div className="hidden lg:flex items-center space-x-6 text-sm">
          <a
            href="#login"
            className="hover:text-[#DCCA87] transition border-b border-transparent hover:border-[#DCCA87]"
          >
            Log In / Registration
          </a>
          <span className="text-white/20">|</span>
          <a
            href="#book"
            className="hover:text-[#DCCA87] transition border-b border-transparent hover:border-[#DCCA87]"
          >
            Book Table
          </a>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded bg-[#121212] p-3 md:hidden text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-[#121212] border-b border-white/10 px-6 py-6">
          <div className="flex flex-col gap-5">
            <a href="#home" className="text-gray-400 hover:text-[#DCCA87]">
              Home
            </a>
            <a href="#pages" className="text-gray-400 hover:text-[#DCCA87]">
              Pages
            </a>
            <a href="#contact" className="text-gray-400 hover:text-[#DCCA87]">
              Contact
            </a>
            <a href="#blog" className="text-gray-400 hover:text-[#DCCA87]">
              Blog
            </a>
            <a href="#landing" className="text-gray-400 hover:text-[#DCCA87]">
              Landing
            </a>
          </div>
          <div className="pt-4 mt-5 border-t border-white/10 flex flex-col space-y-3">
            <a
              href="#login"
              className="text-sm text-gray-300 hover:text-[#DCCA87]"
            >
              Log In / Registration
            </a>
            <a
              href="#book"
              className="text-sm font-medium text-gray-300 hover:text-[#DCCA87]"
            >
              Book Table
            </a>
          </div>
        </div>
      )}
      <header className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase block font-medium">
              Chase the new Flavour
            </span>
            <div className="flex justify-center lg:justify-start pt-1">
              <svg
                width="55"
                height="16"
                viewBox="0 0 55 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#DCCA87]"
              >
                <rect
                  x="2"
                  y="4"
                  width="26"
                  height="8"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <line
                  x1="28"
                  y1="8"
                  x2="38"
                  y2="8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <ellipse
                  cx="45"
                  cy="8"
                  rx="7"
                  ry="5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif leading-tight font-normal text-[#DCCA87]">
            The key to <br />
            <span>Fine dining</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </p>
          <div className="pt-4">
            <button className="bg-[#DCCA87] text-black font-medium px-6 py-3 rounded-none hover:bg-[#b5a566] transition tracking-wider text-sm shadow-lg">
              Explore Menu
            </button>
          </div>
        </div>
        <div className="relative flex justify-center pb-8 lg:pb-12">
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5]">
            <div className="absolute -top-3 -right-3 w-3/4 h-3/4 border-[16px] border-[#DCCA87] bg-transparent pointer-events-none z-0"></div>
            <div className="absolute -bottom-3 -left-3 w-3/4 h-3/4 border-[16px] border-[#DCCA87] bg-transparent pointer-events-none z-0"></div>
            <img
              src={heroImage}
              alt=""
              className="w-full h-full object-cover relative z-10 shadow-2xl"
            />
          </div>
          <div className="absolute bottom-0 left-4 sm:left-8 flex items-center space-x-3 text-xs tracking-widest text-gray-400 z-20">
            <span className="text-white font-medium">01</span>
            <span className="w-4 h-[1px] bg-gray-500"></span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
          </div>
        </div>
        <div className="absolute right-6 bottom-4 hidden xl:flex flex-col items-center space-y-2 text-[10px] tracking-[0.25em] text-gray-400">
          <div className="w-[1px] h-12 bg-[#DCCA87]/40 mb-1"></div>
          <span className="text-[#DCCA87]">SCROLL</span>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-16 lg:py-24 relative bg-[#0C0C0C]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 text-center md:text-left">
          <div className="space-y-4 flex flex-col items-end text-right pr-4 lg:pr-8">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#DCCA87]">
              About Us
            </h2>
            <div className="flex justify-start mb-2">
              <svg
                width="55"
                height="16"
                viewBox="0 0 55 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#DCCA87]"
                style={{ transform: "scaleX(-1)" }}
              >
                <rect
                  x="2"
                  y="4"
                  width="26"
                  height="8"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <line
                  x1="28"
                  y1="8"
                  x2="38"
                  y2="8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <ellipse
                  cx="45"
                  cy="8"
                  rx="7"
                  ry="5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
            <div className="pt-4">
              <button className="border border-[#DCCA87] text-black bg-[#DCCA87] hover:bg-[#b5a566] transition px-6 py-2.5 text-sm tracking-wider">
                Know More
              </button>
            </div>
          </div>
          <div className="space-y-4 flex flex-col items-start text-left pl-4 lg:pl-8">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#DCCA87]">
              Our History
            </h2>
            <div className="flex justify-start mb-2">
              <svg
                width="55"
                height="16"
                viewBox="0 0 55 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#DCCA87]"
              >
                <rect
                  x="2"
                  y="4"
                  width="26"
                  height="8"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <line
                  x1="28"
                  y1="8"
                  x2="38"
                  y2="8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <ellipse
                  cx="45"
                  cy="8"
                  rx="7"
                  ry="5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
              Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
              odio nec aliquet.
            </p>
            <div className="pt-4">
              <button className="border border-[#DCCA87] bg-[#DCCA87] text-black hover:bg-[#b5a566] transition px-6 py-2.5 text-sm tracking-wider">
                Know More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-40 md:opacity-100">
          <span className="text-[200px] sm:text-[350px] font-serif text-white/[0.03] select-none absolute">
            G
          </span>
          <div className="z-20 h-80 sm:h-[450px] flex items-center justify-center">
            <img
              src={knifeImage}
              alt=""
              className="h-80 sm:h-[400px] object-contain filter drop-shadow-[0_0_10px_rgba(220,202,135,0.3)] opacity-80"
            />
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-28 relative">
        <div className="text-center space-y-2 mb-16">
          <span className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase block font-medium">
            Menu that fits you palatte
          </span>
          <div className="flex justify-center mb-2">
            <svg
              width="55"
              height="16"
              viewBox="0 0 55 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#DCCA87]"
            >
              <rect
                x="2"
                y="4"
                width="26"
                height="8"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <line
                x1="28"
                y1="8"
                x2="38"
                y2="8"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <ellipse
                cx="45"
                cy="8"
                rx="7"
                ry="5"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#DCCA87]">
            Today’s Special
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl sm:text-3xl font-serif text-white text-center lg:text-left mb-6">
              Wine & Beer
            </h3>
            <div className="space-y-6">
              {[
                {
                  name: "Chapel Hill Shiraz",
                  price: "$56",
                  tags: "AU | Bottle",
                },
                { name: "Catena Malbee", price: "$59", tags: "AU | Bottle" },
                { name: "La Vieillw Rose", price: "$44", tags: "FR | 750 ml" },
                { name: "Rhino Pale Ale", price: "$31", tags: "CA | 750 ml" },
                { name: "Irish Guinness", price: "$26", tags: "IE | 750 ml" },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-baseline text-base sm:text-lg">
                    <span className="text-[#DCCA87] font-serif font-medium">
                      {item.name}
                    </span>
                    <span className="flex-1 mx-4 border-b border-white/20 border-dotted"></span>
                    <span className="text-white font-serif font-medium">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">{item.tags}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="w-full max-w-[280px] sm:max-w-[400px] aspect-[3/4] relative">
              <img
                src={menuImage}
                alt=""
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
            <button className="bg-[#DCCA87] text-black font-medium px-6 py-2.5 rounded-none hover:bg-[#b5a566] transition tracking-wider text-sm shadow-lg">
              View More
            </button>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl sm:text-3xl font-serif text-white text-center lg:text-left mb-6">
              Cocktails
            </h3>
            <div className="space-y-6">
              {[
                {
                  name: "Aperol Sprtiz",
                  price: "$20",
                  tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
                },
                {
                  name: "Dark 'N' Stormy",
                  price: "$16",
                  tags: "Dark rum | Ginger beer | Slice of lime",
                },
                {
                  name: "Daiquiri",
                  price: "$10",
                  tags: "Rum | Citrus juice | Sugar",
                },
                {
                  name: "Old Fashioned",
                  price: "$31",
                  tags: "Bourbon | Brown sugar | Angostura Bitters",
                },
                {
                  name: "Negroni",
                  price: "$26",
                  tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
                },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-baseline text-base sm:text-lg">
                    <span className="text-[#DCCA87] font-serif font-medium">
                      {item.name}
                    </span>
                    <span className="flex-1 mx-4 border-b border-white/20 border-dotted"></span>
                    <span className="text-white font-serif font-medium">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">{item.tags}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5]">
              <div className="absolute -top-3 -right-3 w-3/4 h-3/4 border-[16px] border-[#DCCA87] bg-transparent pointer-events-none z-0"></div>
              <div className="absolute -bottom-3 -left-3 w-3/4 h-3/4 border-[16px] border-[#DCCA87] bg-transparent pointer-events-none z-0"></div>
              <img
                src={chefImage}
                alt=""
                className="w-full h-full object-cover relative z-10 shadow-2xl"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <span className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase block font-medium mb-1">
                Chef’s Word
              </span>
              <div className="flex justify-start mb-3">
                <svg
                  width="45"
                  height="14"
                  viewBox="0 0 55 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#DCCA87]"
                >
                  <rect
                    x="2"
                    y="4"
                    width="26"
                    height="8"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="28"
                    y1="8"
                    x2="38"
                    y2="8"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <ellipse
                    cx="45"
                    cy="8"
                    rx="7"
                    ry="5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif text-white">
                What we believe in
              </h2>
            </div>
            <div className="relative space-y-4 pt-2">
              <span className="absolute -top-4 -left-4 text-7xl font-serif text-white select-none">
                “
              </span>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed italic z-10 relative">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
                sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris
                eget sit. Nulla scelerisque scelerisque congue ac consequat,
                aliquam molestie lectus eu. Congue iaculis integer curabitur
                semper sit nunc.
              </p>
            </div>
            <div className="space-y-2 pt-4">
              <h4 className="text-2xl font-serif text-[#DCCA87]">Kevin Luo</h4>
              <p className="text-gray-400 text-sm">Chef & Founder</p>
              <div className="pt-4">
                <span className="font-serif italic text-2xl text-gray-400 tracking-wider">
                  Kevin Luo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative min-h-[500px] lg:min-h-[650px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url(${videoImage})`,
        }}
      ></section>
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-32 relative">
        <div className="hidden lg:block absolute left-4 top-8 z-20 pointer-events-none">
          <div className="relative w-36 h-36 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#DCCA87]">
              <path
                id="circlePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                fill="none"
              />
              <text
                fontSize="7.2"
                fill="currentColor"
                fontWeight="bold"
                letterSpacing="1.8"
              >
                <textPath href="#circlePath" startOffset="0%">
                  BITE DELIGHT IN EVERY
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="rotate(45 21 21)">
                  <ellipse
                    cx="21"
                    cy="9"
                    rx="4"
                    ry="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <line
                    x1="21"
                    y1="14"
                    x2="21"
                    y2="33"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </g>
                <g transform="rotate(-45 21 21)">
                  <ellipse
                    cx="21"
                    cy="9"
                    rx="4"
                    ry="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <line
                    x1="21"
                    y1="14"
                    x2="21"
                    y2="33"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase block font-medium mb-1">
                Awards & recognition
              </span>
              <div className="flex justify-start mb-3">
                <svg
                  width="45"
                  height="14"
                  viewBox="0 0 55 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#DCCA87]"
                >
                  <rect
                    x="2"
                    y="4"
                    width="26"
                    height="8"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="28"
                    y1="8"
                    x2="38"
                    y2="8"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <ellipse
                    cx="45"
                    cy="8"
                    rx="7"
                    ry="5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif text-[#DCCA87]">
                Our Laurels
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {[
                {
                  title: "Bib Gourmand",
                  desc: "Lorem ipsum dolor sit amet, consectetur.",
                  num: "2",
                },
                {
                  title: "Rising Star",
                  desc: "Lorem ipsum dolor sit amet, consectetur.",
                  num: "1",
                },
                {
                  title: "AA Hospitality",
                  desc: "Lorem ipsum dolor sit amet, consectetur.",
                  num: "5",
                },
                {
                  title: "Outstanding Chef",
                  desc: "Lorem ipsum dolor sit amet, consectetur.",
                  num: "3",
                },
              ].map((award, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full border border-[#DCCA87] flex items-center justify-center shrink-0 text-[#DCCA87] font-serif text-2xl font-bold">
                    {award.num}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[#DCCA87] font-serif text-lg font-medium">
                      {award.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {award.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5]">
              <span className="absolute -bottom-10 -left-16 text-[220px] font-serif text-white/80 pointer-events-none select-none z-20">
                G
              </span>
              <img
                src={steakImage}
                alt=""
                className="w-full h-full object-cover relative z-10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28 relative overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase block font-medium mb-1">
                Instagram
              </span>
              <div className="flex justify-start mb-3">
                <svg
                  width="45"
                  height="16"
                  viewBox="0 0 55 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#DCCA87]"
                >
                  <rect
                    x="2"
                    y="4"
                    width="26"
                    height="8"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="28"
                    y1="8"
                    x2="38"
                    y2="8"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <ellipse
                    cx="45"
                    cy="8"
                    rx="7"
                    ry="5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif text-[#DCCA87]">
                Photo Gallery
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              mattis ipsum turpis elit elit scelerisque egestas mu.
            </p>
            <div>
              <button className="bg-[#DCCA87] text-black font-medium px-6 py-3 rounded-none hover:bg-[#b5a566] transition tracking-wider text-sm shadow-lg">
                View More
              </button>
            </div>
          </div>
          <div className="lg:col-span-8 grid grif-cols-2 sm:grid-cols-4 gap-x-5 gap-y-6 px-2">
            {[sushiImage, colaImage, eggImage, soupImage].map((imgSrc, idx) => (
              <div
                key={idx}
                className="relative w-full aspect-[3/4] group cursor-pointer overflow-hidden shadow-xl"
              >
                <img
                  src={imgSrc}
                  alt="Gallery item"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
