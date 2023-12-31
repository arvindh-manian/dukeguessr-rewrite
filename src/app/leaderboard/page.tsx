import { LeaderboardEntry } from "@/types";
import { getLeaderboard, getLeaderboardSize } from "@/utils/user";
import { LinkButton } from "@/components/linkbutton";
import Link from "next/link";

export default async function Leaderboard({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const page = Number(searchParams.page ?? 1);
  const limit = Number(searchParams.limit ?? 15);
  const entries = await getLeaderboard(page, limit);
  const totalLeaderboardSize = await getLeaderboardSize();

  if (entries?.length === 0) {
    return <p>No entries found</p>;
  }

  const start = (page - 1) * limit + 1;
  const end = Math.min(start + limit - 1, totalLeaderboardSize);

  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="text-3xl font-bold">Leaderboard</h1>
      <p className="text-xl">
        Showing entries {start} to {end} of {totalLeaderboardSize}
      </p>
      <RenderedLeaderboard entries={entries as LeaderboardEntry[]} />
      <Pagination
        numEntries={totalLeaderboardSize}
        start={start}
        end={end}
        page={page}
        limit={limit}
      />
    </div>
  );
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

const Pagination = ({
  numEntries,
  start,
  end,
  page,
  limit,
}: {
  numEntries: number;
  start: number;
  end: number;
  page: number;
  limit: number;
}) => {
  return (
    <div className="text-xl flex justify-between gap-6">
      <LinkButton
        href={`/leaderboard?page=1&limit=${limit}`}
        text="First"
      ></LinkButton>
      <LinkButton
        href={`/leaderboard?page=${Math.max(page - 1, 1)}&limit=${limit}`}
        text="Previous"
      ></LinkButton>
      <LinkButton
        href={`/leaderboard?page=${Math.min(
          page + 1,
          Math.ceil(numEntries / limit),
        )}&limit=${limit}`}
        text="Next"
        className="ml-auto"
      ></LinkButton>
      <LinkButton
        href={`/leaderboard?page=${Math.ceil(
          numEntries / limit,
        )}&limit=${limit}`}
        text="Last"
      ></LinkButton>
    </div>
  );
};
