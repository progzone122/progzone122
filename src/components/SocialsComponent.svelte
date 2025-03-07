<script>
import GitHubLogo from "$lib/icons/socials/github.svg?component";
import TgLogo from "$lib/icons/socials/tg.svg?component";
import DiscordLogo from "$lib/icons/socials/discord.svg?component";
import Pda4Logo from "$lib/icons/socials/4pda.svg?component";
import VerticalLineComponent from "./VerticalLineComponent.svelte";

const LINKS = [
    {
        icon: GitHubLogo,
        href: "https://github.com/progzone122",
    },
    {
        icon: TgLogo,
        href: "https://t.me/DiabloSat",
    },
    {
        icon: DiscordLogo,
        href: "https://discordapp.com/users/614218421416230942",
    },
    {
        icon: Pda4Logo,
        href: "https://4pda.to/forum/index.php?showuser=8915160",
    }
];
</script>
<div class="h-full w-[8px] fixed left-6 z-99 flex flex-col items-center justify-center">
    <VerticalLineComponent height={60} />
    <div class="my-5 ml-3 flex flex-col gap-4">
        {#each LINKS as link}
            <a href="{link.href}">
                <svelte:component this="{link.icon}" class="w-8 fill-white hover:fill-accent transition-colors duration-200" />
            </a>
        {/each}
    </div>
    <VerticalLineComponent height={10} />
</div>