import { FC } from 'react';
import { FaceitPlayerCard } from '@/components/FaceitPlayerCard';
import { ErrorMessage } from '@/components/ErrorMessage';
import { FaceitPlayer } from '@/data/types';

const FACEIT_API_KEY = process.env.NEXT_PUBLIC_FACEIT_API_KEY;
const FACEIT_API_URL = process.env.NEXT_FACEIT_API_URL;
const CACHE_REVALIDATION_TIME = 600; // 10 minutes

const playerIds = [
  '6b35340a-aedd-4fe0-be66-f50390e4bdbc',
  'c81c775e-6795-4caa-b078-f13425c27247',
  '81fb8e76-1ef3-4050-9a57-04b878870b9e',
  '7d7073cd-5b10-4c54-8ffc-bfd8c18b47bd',
  'eb7edbcb-3df5-448c-8ab1-22996b2a79c9',
];

async function getFaceitPlayer(id: string): Promise<FaceitPlayer> {
  if (!FACEIT_API_KEY) {
    throw new Error('FACEIT_API_KEY is not configured');
  }

  try {
    const res = await fetch(`${FACEIT_API_URL}/players/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${FACEIT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: CACHE_REVALIDATION_TIME },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data: FaceitPlayer = await res.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch player ${id}:`, error);
    throw error;
  }
}

// async function getFaceitPlayerT() {
//   const res = await fetch(
//     `https://open.faceit.com/data/v4/players?nickname=YoungDaun-`,
//     {
//       method: 'GET',
//       headers: {
//         Authorization: 'Bearer ac684c52-33a2-4924-8039-6b38e727ab2f',
//         'Content-Type': 'application/json',
//       },
//     }
//   );

//   const data = await res.json();
//   console.log(data);
//   return data;
// }

const Home: FC = async () => {
  let players: PromiseSettledResult<FaceitPlayer>[] = [];

  try {
    players = await Promise.allSettled(
      playerIds.map(id => getFaceitPlayer(id))
    );
  } catch (error) {
    console.error('Failed to fetch players:', error);
    return <ErrorMessage message="Failed to load player data" />;
  }

  const successfulPlayers = players
    .filter((result): result is PromiseFulfilledResult<FaceitPlayer> => 
      result.status === 'fulfilled'
    )
    .sort((a, b) => b.value.games.cs2.faceit_elo - a.value.games.cs2.faceit_elo);

  const failedPlayersCount = players.length - successfulPlayers.length;

  if (successfulPlayers.length === 0) {
    return <ErrorMessage message="No player data available" />;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Моя команда (помогите)
          </h1>
          
          {failedPlayersCount > 0 && (
            <p className="text-yellow-400 text-sm">
              {`Warning: Failed to load ${failedPlayersCount} player(s)`}
            </p>
          )}
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {successfulPlayers.map((result, index) => (
            <FaceitPlayerCard
              key={result.value.player_id}
              player={result.value}
              rank={index + 1}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
