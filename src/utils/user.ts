import query from "./db";
import { LeaderboardEntry } from "../types";

export async function getLeaderboard(): Promise<LeaderboardEntry[] | null> {
  const resp = await query(`SELECT 
    account.username, records.high_score, records.avg_score, records.games_played 
    FROM account
    LEFT JOIN records ON records.username = account.username
    ORDER BY records.high_score DESC NULLS LAST`);
  return resp.rows as unknown as LeaderboardEntry[];
}
