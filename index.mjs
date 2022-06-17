#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

const boxenOptions = {
  padding: 1,
  width: 54,
  title: "braydoncoyer",
  titleAlignment: "center",
  borderStyle: "double",
  borderColor: "#15B8A6",
};

const intro = chalk.bold(
  "Hello 👋 I'm Braydon! I'm a senior front end developer, blogger and designer. You found my business card!\n\nYou can find me on various places of the internet.\n\n"
);

const links = [
  {
    name: chalk.hex("#fff").bgHex("#0f111a")("Website"),
    url: "   https://braydoncoyer.dev",
  },
  {
    name: chalk.hex("#fff").bgHex("#000")("DEV.to"),
    url: "    https://dev.to/braydoncoyer",
  },
  {
    name: chalk.hex("#fff").bgHex("#6e5494")("GitHub"),
    url: "    https://github.com/whitep4nth3r",
  },
  {
    name: chalk.hex("#fff").bgHex("#582be8")("Polywork"),
    url: "  https://polywork.com/braydoncoyer",
  },
  {
    name: chalk.hex("#fff").bgHex("#1DA1F2")("Twitter"),
    url: "   https://twitter.com/braydoncoyer",
  },
];

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

console.log(boxen(intro + linkList, boxenOptions));
