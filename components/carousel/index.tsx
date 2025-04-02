'use client';

import { FaceitPlayer } from '@/data/types';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

interface CarouselProps {
  items: { status: string; value: FaceitPlayer }[];
}

export function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-auto overflow-hidden">
      <div className="relative h-[500px]">
        {items.map((player, index) => (
          <div
            key={player.value.player_id}
            className={`absolute w-full h-full transition-all duration-700 ease-in-out transform ${
              index === currentIndex
                ? 'opacity-100 translate-x-0'
                : index < currentIndex
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="overflow-hidden flex justify-center p-4">
              <div className="relative w-full max-w-2xl  rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02]">
                {player.value.cover_image && (
                  <div className="absolute inset-0">
                    <Image
                      src={player.value.cover_image}
                      alt={`${player.value.nickname}'s cover`}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
                  </div>
                )}

                <div className="relative h-full flex flex-col items-center justify-center p-8">
                  <div className="relative w-40 h-40 mb-6 transform transition-transform hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl blur-xl" />
                    <Image
                      src={player.value.avatar}
                      alt={`${player.value.nickname}'s avatar`}
                      fill
                      className="rounded-2xl border-4 border-red-500 object-cover shadow-lg"
                    />
                  </div>

                  <div className="text-center space-y-4">
                    
                    <div className="flex gap-2 items-center">
                      <h3 className="text-3xl font-bold text-white">
                        {player.value.nickname}
                      </h3>

                      <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium backdrop-blur-sm">
                        {player.value.country.toUpperCase()}
                      </span>
                    </div>

                    <div className="flex items-center justify-center gap-6">
                      <div className="flex flex-col items-center">
                        <span className="text-gray-400 text-sm">ELO</span>
                        <span className="font-bold text-2xl">
                          {player.value.games.cs2.faceit_elo}
                        </span>
                      </div>
                      <div className="w-px h-12 bg-white/20" />
                      <div className="flex flex-col items-center">
                        <span className="text-gray-400 text-sm">Level</span>
                        <div className="relative w-8 h-8 mt-1 bg-[#1F1F22] rounded-full ">
                          <svg
                            className="inset-0 w-8 h-8 rotate-[145deg]"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              fill="none"
                              strokeWidth="2.5"
                              stroke="currentColor"
                              className="text-red-600"
                              strokeDasharray={`${
                                (player.value.games.cs2.skill_level / 10) *
                                62.83
                              } 62.83`}
                              strokeLinecap="round"
                              strokeDashoffset="20"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-bold text-red-600">
                              {player.value.games.cs2.skill_level}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm hover:scale-110"
        aria-label="Previous slide"
      >
        <FaAngleLeft className="w-8 h-8 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm hover:scale-110"
        aria-label="Next slide"
      >
        <FaAngleRight className="w-8 h-8 text-white" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-red-500 scale-125'
                : 'bg-white/30 hover:bg-white/50 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
