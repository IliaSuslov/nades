import { FC } from 'react';
import { FaceitPlayerCard } from '@/components/FaceitPlayerCard';
import { ErrorMessage } from '@/components/ErrorMessage';
import { FaceitPlayer } from '@/data/types';
import { ArrowBigDown } from 'lucide-react';

const FACEIT_API_KEY = process.env.NEXT_PUBLIC_FACEIT_API_KEY;
const FACEIT_API_URL = process.env.NEXT_FACEIT_API_URL;
const CACHE_REVALIDATION_TIME = 600; // 10 minutes

const team = [
  {
    id: '6b35340a-aedd-4fe0-be66-f50390e4bdbc',
    badges: [],
  },
  {
    id: 'c81c775e-6795-4caa-b078-f13425c27247',
    badges: [
      {
        label: 'потато пкшер',
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: '81fb8e76-1ef3-4050-9a57-04b878870b9e',
    badges: [],
  },
  {
    id: '7d7073cd-5b10-4c54-8ffc-bfd8c18b47bd',
    badges: [],
  },
  {
    id: 'eb7edbcb-3df5-448c-8ab1-22996b2a79c9',
    badges: [],
  },
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
      team.map(({ id }) => getFaceitPlayer(id))
    );
  } catch (error) {
    console.error('Failed to fetch players:', error);
    return <ErrorMessage message="Failed to load player data" />;
  }

  const successfulPlayers = players
    .filter(
      (result): result is PromiseFulfilledResult<FaceitPlayer> =>
        result.status === 'fulfilled'
    )
    .sort(
      (a, b) => b.value.games.cs2.faceit_elo - a.value.games.cs2.faceit_elo
    );

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
            <div key={result.value.player_id}>
              {index > 3 && (
                <div className="flex flex-col items-center py-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full border border-red-500/20 backdrop-blur-sm">
                    <p className="text-red-400 font-bold tracking-wider uppercase text-sm">
                      Нелюдь
                    </p>
                    <ArrowBigDown className="text-red-400 w-5 h-5 animate-bounce" />
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent mt-4" />
                </div>
              )}
              <FaceitPlayerCard
                player={result.value}
                rank={index + 1}
                team={team}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
