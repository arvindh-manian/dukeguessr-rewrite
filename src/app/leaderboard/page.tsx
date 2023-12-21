import { LeaderboardEntry } from "@/types";
import { getLeaderboard } from "@/utils/user";

export default async function Leaderboard() {
  const entries = await getLeaderboard();
  return <RenderedLeaderboard entries={entries as LeaderboardEntry[]} />;
}

const RenderedLeaderboard = ({ entries }: { entries: LeaderboardEntry[] }) => {
  return (
    <table className="bg-white rounded-lg w-full">
      <thead>
        <tr className="text-left h-12">
          <th scope="col" className="pl-4">
            Username
          </th>
          <th scope="col">High Score</th>
          <th scope="col">Average Score</th>
          <th scope="col">Games Played</th>
        </tr>
      </thead>
      <tbody className="">
        {entries.map((entry) => {
          return (
            <tr
              key={entry.username}
              className="even:bg-white odd:bg-gray-100 h-10"
            >
              <th
                scope="row"
                className="text-accent2 font-normal text-left pl-4"
              >
                {entry.username}
              </th>
              <td>{entry.high_score}</td>
              <td>{entry.avg_score}</td>
              <td>{entry.games_played}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
