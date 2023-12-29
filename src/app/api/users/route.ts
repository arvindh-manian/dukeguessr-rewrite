import { NextResponse, NextRequest } from "next/server";
import { addUser } from "@/utils/user";
import { Account, ErrorMessage } from "@/types";

export async function POST(
  request: NextRequest,
): Promise<NextResponse<Account | null | ErrorMessage>> {
  const account = (await request.json()) as Account;
  try {
    const res = await addUser(
      account.username,
      account.email,
      account.password,
    );

    if (res) {
      return NextResponse.json(account);
    }
    return NextResponse.json(null);
  } catch (err) {
    if (err instanceof Error) {
      const error: ErrorMessage = { message: err.message };

      return NextResponse.json(error, { status: 500 });
    }

    return NextResponse.json(null);
  }
}
