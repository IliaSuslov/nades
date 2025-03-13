import { FaceitPlayer } from '@/data/types';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

interface FaceitPlayerCardProps {
  player: FaceitPlayer;
  rank: number;
  team: { id: string; badges: { label: string; icon?: ReactNode }[] }[];
}

export const FaceitPlayerCard: FC<FaceitPlayerCardProps> = ({
  player,
  rank,
  team,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10">
      {/* Rank Circle */}
      <div className="flex items-center justify-center text-white font-bold text-xl">
        {rank}
      </div>

      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <Image
          src={player.avatar}
          alt={`${player.nickname}'s avatar`}
          width={56}
          height={56}
          className="rounded-full border-2 border-white/10"
        />
        <div className="absolute -bottom-1.5 -right-1.5">
          <div className="relative w-8 h-8">
            {/* Dark background */}
            <div className="absolute inset-0 rounded-full bg-[#1F1F22] border border-[#2E2E35]" />

            {/* Progress Circle */}
            <svg
              className="absolute inset-0 w-8 h-8 rotate-[145deg]"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                strokeWidth="2.5"
                stroke="currentColor"
                className='text-red-600'
                strokeDasharray={`${
                  (player.games.cs2.skill_level / 10) * 62.83
                } 62.83`}
                strokeLinecap="round"
                strokeDashoffset="20"
              />
            </svg>

            {/* Level Number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold text-red-600">
                {player.games.cs2.skill_level}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Player Info */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-lg text-white">{player.nickname}</h3>
          <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">
            {player.country.toUpperCase()}
          </span>
        </div>
        <div className="flex items-center gap-2 text-white/70">
          <span className="text-sm">ELO:</span>
          <span className="font-bold text-white">
            {player.games.cs2.faceit_elo}
          </span>
        </div>
      </div>

      {/* Badges Section */}
      <div className="flex flex-col mt-4 md:mt-0">
        <div className="flex gap-2 flex-wrap">
          {team
            .find(({ id }: { id: string }) => id === player.player_id)
            ?.badges?.map(
              (
                badge: { icon?: React.ReactNode; label: string },
                index: number
              ) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
                  bg-gradient-to-r from-red-500/20 to-orange-500/20 
                  border border-red-500/30 
                  text-red-400 text-xs font-semibold
                  shadow-lg shadow-red-500/10
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:from-red-500/30 hover:to-orange-500/30
                  hover:border-red-500/40
                  hover:scale-105"
                >
                  {badge.icon && badge.icon}
                  {badge.label.toUpperCase()}
                </span>
              )
            )}
        </div>
      </div>
    </div>
  );
};
