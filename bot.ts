import { Markup, Telegraf } from "telegraf";

const TOKEN = "5480375588:AAGICmac41OevsNLWG4EEzEHYvtXEYdP_hQ";

const bot = new Telegraf(TOKEN);

bot.start((ctx) =>
  ctx.replyWithHTML(
    `
Привет, моя любимая Артёмчик 🖤
Просто напиши боту <b>Ёжик 🦔</b> или введи команду /hedgehog, и ты получишь своего Ёжика)
  `,
    Markup.keyboard(["Ёжик 🦔"]).resize()
  )
);

const sendHedgehog = (chatId: number) =>
  bot.telegram.sendPhoto(
    chatId,
    `https://raw.githubusercontent.com/NarutoMinecrafter/hedgehog_artyom/master/%D0%81%D0%B6%D0%B8%D0%BA%D0%B8/%20(${Math.floor(
      Math.random() * 280
    )}).jpg`
  );

bot.command("hedgehog", (ctx) => sendHedgehog(ctx.chat.id));

bot.hears("Ёжик 🦔", (ctx) => sendHedgehog(ctx.chat.id));

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
