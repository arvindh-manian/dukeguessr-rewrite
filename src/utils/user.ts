import query from "./db";
import { Account, Record, CountObject, LeaderboardEntry } from "../types";

// todo: add pagination
export async function getLeaderboard(
  page: number,
  limit: number,
): Promise<LeaderboardEntry[] | null> {
  const resp = await query(
    `SELECT 
    account.username, records.high_score, records.avg_score, records.games_played 
    FROM account
    LEFT JOIN records ON records.username = account.username
    ORDER BY records.high_score DESC NULLS LAST
    OFFSET $1 ROWS
    FETCH NEXT $2 ROWS ONLY`,
    [(page - 1) * limit, limit],
  );
  return resp.rows as unknown as LeaderboardEntry[];
}

export async function getLeaderboardSize(): Promise<number> {
  const resp = await query("SELECT COUNT(*) FROM account");
  const { count } = resp.rows[0] as unknown as CountObject;
  return count;
}

export async function getProfile(
  username: string,
): Promise<(Account & Record) | null | undefined> {
  const text = await query(
    "SELECT * FROM account LEFT JOIN records ON records.username = account.username WHERE account.username=$1",
    [username],
  );
  return text.rows[0] as unknown as Account & Record;
}

// TODO: add middleware before addUser that parses validity
export async function addUser(
  username: string,
  email: string,
  password: string,
): Promise<boolean> {
  const text = await query(
    "INSERT INTO account (username, email, password) VALUES ($1, $2, $3)",
    [username, email, password],
  );
  if (text !== null && text.rowCount !== null) {
    return text.rowCount > 0;
  }
  return false;
}
