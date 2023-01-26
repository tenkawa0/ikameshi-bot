import { Bot } from "./bot.ts";
import { startBot } from "./deps.ts";
import { fileLoader, importDirectory } from "./src/utils/loader.ts";
import log from "./src/utils/logger.ts";
import { updateApplicationCommands } from "./src/utils/updateCommands.ts";

log.info("Starting bot...");

// Forces deno to read all the files which will fill the commands/inhibitors cache etc.
importDirectory(await Deno.realPath("./src/commands"));
importDirectory(await Deno.realPath("./src/events"));

await fileLoader();

// UPDATES YOUR COMMANDS TO LATEST COMMANDS
await updateApplicationCommands();

// STARTS THE CONNECTION TO DISCORD
await startBot(Bot);
