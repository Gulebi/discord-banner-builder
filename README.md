# discord-banner-builder

## About

discord-banner-builder is a library for creating Discord banners

## Installation

discord-banner-builder can be installed using npm:

```shell
npm install discord-banner-builder
```

It can then be loaded as an ES Module:

```ts
import { BannerBuilder } from "discord-banner-builder";
```

Or as a CommonJS module:

```js
const { BannerBuilder } = require("discord-banner-builder");
```

## Example usage

Example of Discord bot using discord-banner-builder library:

```js
const { AttachmentBuilder, Client, Events, GatewayIntentBits } = require("discord.js");
const { BannerBuilder, BannerTemplateTypes } = require("discord-banner-builder");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
    console.log(`Logged in as ${c.user.tag}!`);
});

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const banner = await new BannerBuilder({ type: BannerTemplateTypes.rank })
        .setUsername(interaction.author.tag)
        .setMaxXP(500)
        .setCurrentXP(360)
        .setAvatar(`${message.author.avatarURL()}?size=512`)
        .toAttachment();

    if (interaction.commandName === "ping") {
        await interaction.reply({
            files: [new AttachmentBuilder(banner).setName("banner.png")],
        });
    }
});

client.login(TOKEN);
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
