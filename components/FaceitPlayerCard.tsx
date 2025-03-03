import { FaceitPlayer } from '@/data/types';
import Image from 'next/image';
import { FC } from 'react';

interface FaceitPlayerCardProps {
  player: FaceitPlayer;
  rank: number;
}

export const FaceitPlayerCard: FC<FaceitPlayerCardProps> = ({ player, rank }) => (
  <div className="flex items-center gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10">
    {/* Rank Circle */}
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white font-bold text-xl">
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
      <div className="absolute -bottom-1 -right-1 w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-bold text-white">
        {player.games.cs2.skill_level}
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
        <span className="font-mono font-bold text-white">
          {player.games.cs2.faceit_elo}
        </span>
      </div>
    </div>
  </div>
);
