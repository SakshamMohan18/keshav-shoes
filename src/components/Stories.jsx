import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import Title from "./utils/Title";
import { truncate } from "lodash";
import { story } from "../data/data";

const Stories = ({ story: { title, news } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: 'loop',
    rewind: true,
    keyboard: 'global',
    gap: '1rem',
    pagination: false,
    padding: '2rem',
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };

  const tags = [
    "#RTP", "#CIPRAMO", "#AIR", "#CONVERS", "#CALCETTO", "#SPORTS", "#IMPORTED",
    "#HITWAY", "#SENSAR", "#NIKE PRO", "#MAGNET", "#CHALSY", "#OSCAR"
  ];

  return (
    <>
      {/* Marquee Section */}
      <div className="relative overflow-hidden bg-white" style={{ padding: '30px' }}>
        {/* Left and Right Blur */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

        {/* Left to Right */}
        <h2 
          className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg mb-11 ml-12 md:ml-8 sm:ml-4"
        >
          {story.popularBrandsTitle} 
        </h2>

        <div className="flex animate-marquee">
          {tags.concat(tags).map((tag, index) => (
            <div key={`left-${index}`} className="bg-red-700 text-white px-4 py-2 rounded-lg mx-2">
              {tag}
            </div>
          ))}
        </div>

        {/* Right to Left */}
        <div className="flex animate-marquee-reverse mt-6">
          {tags.concat(tags).map((tag, index) => (
            <div key={`right-${index}`} className="bg-gray-700 text-white px-4 py-2 rounded-lg mx-2">
              {tag}
            </div>
          ))}
        </div>

        {/* Additional Marquees */}
        <div className="flex animate-marquee mt-6">
          {tags.concat(tags).map((tag, index) => (
            <div key={`right-${index}`} className="bg-blue-700 text-white px-4 py-2 rounded-lg mx-2">
              {tag}
            </div>
          ))}
        </div>

        <div className="flex animate-marquee-reverse mt-6">
          {tags.concat(tags).map((tag, index) => (
            <div key={`right-${index}`} className="bg-yellow-500 text-white px-4 py-2 rounded-lg mx-2">
              {tag}
            </div>
          ))}
        </div>

        <div className="flex animate-marquee mt-6">
          {tags.concat(tags).map((tag, index) => (
            <div key={`right-${index}`} className="bg-green-700 text-white px-4 py-2 rounded-lg mx-2">
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* Story Slider */}
      <div className="nike-container mb-11">
        <Title title={title} />
        <div className="mt-7">
          <Splide options={splideOptions}>
            {news.map((val, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow-md ring-1 ring-slate-200">
                  <div className="flex items-center justify-center">
                    <img
                      src={val.img}
                      alt={`story-${i}`}
                      className="w-full h-auto object-cover rounded-t-lg shadow-md"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full px-4">
                    <div className="flex items-center gap-0.5">
                      <HeartIcon className="w-5 h-5 text-red-500" />
                      <span className="text-xs font-bold">{val.like}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <ClockIcon className="w-4 h-4 text-black" />
                      <span className="text-xs font-bold">{val.time}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <HashtagIcon className="w-5 h-5 text-blue-600" />
                      <span className="text-xs font-bold text-blue-600">{val.by}</span>
                    </div>
                  </div>
                  <div className="grid items-start px-4">
                    <h1 className="text-base font-semibold lg:text-sm">{val.title}</h1>
                    <p className="text-sm text-justify lg:text-xs">
                      {truncate(val.text, { length: 175 })}
                    </p>
                  </div>
                  <div className="flex items-center justify-center px-4 w-full">
                    <a
                      href={val.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-b from-slate-900 to-black text-center text-white py-1.5 rounded-md shadow-md"
                    >
                      {val.btn}
                    </a>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Stories;
