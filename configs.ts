import { dotEnvConfig } from "./deps.ts";

// Get the .env file that the user should have created, and get the token
await dotEnvConfig({ export: true });
const config = Deno.env.toObject();

const token = config["BOT_TOKEN"] || "";

export interface Config {
  token: string;
  botId: bigint;
}

export const configs = {
  /** Get token from ENV variable */
  token,
  /** Get the BotId from the token */
  botId: BigInt(atob(token.split(".")[0])),
  /** The server id where you develop your bot and want dev commands created. */
  devGuildId: BigInt(config["DEV_GUILD_ID"]!),
};
