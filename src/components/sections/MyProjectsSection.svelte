<script>
    import ProjectComponent from "../ProjectComponent.svelte";
    import { base } from '$app/paths';

    const PROJECTS = [
        {
            name: "AniShip",
            description: "Convenient and functional unofficial client for easy anime viewing on PCs and laptops with Shikimori integration",
            preview: `${base}/projects/aniship.png`,
            link: "https://github.com/progzone122/AniShip"
        },
        {
            name: "Warp-gui",
            description: "A GUI application based on warp-cli for linux written in Rust & tauri",
            preview: `${base}/projects/warp-gui.png`,
            link: "https://github.com/progzone122/warp-cloudflare-gui-rust"
        },
        {
            name: "FUCKYOUMOTO",
            description: "A project to document Motorola devices. Schematics, firmware, etc.<br />Unofficially found a way to unlock bootloader of penangf and fogorow devices",
            preview: `${base}/projects/fuckyoumoto.png`,
            link: "https://fuckyoumoto.xyz"
        },
        {
            name: "FUCKYOUMOTO Utils",
            description: "Collection of scripts, DA/Scatter files, to repair penangf/fogorow devices and their modifications",
            preview: `${base}/projects/fuckyoumoto-utils.png`,
            link: "https://github.com/fuckyoumoto/fuckyoumoto-utils"
        },
        {
            name: "DebloatedMotoWeed",
            description: "Shell scripts to make custom A14 firmware without bloatware from original super.img image for penangf devices",
            preview: `${base}/projects/debloatedmotoweed.png`,
            link: "https://github.com/moto-penangf/debloatedmotoweed"
        },
        {
            name: "Aur-wrapper",
            description: "A simple TypeScript wrapper for RPC API and RSS for AUR (Arch User Repository)",
            preview: `${base}/projects/aur-wrapper.png`,
            link: "https://github.com/progzone122/aur-wrapper"
        },
        {
            name: "Micropad",
            description: "A micropad for PC with 3 buttons and potentiometer and software to control it",
            preview: `${base}/projects/micropad.png`,
            link: "https://github.com/progzone122/micropad"
        },
        {
            name: "Amazon Kindle TicTacToe",
            description: "TicTacToe game written in C++ and GTK 2.0 for Amazon Kindle PW4+ e-book using jailbreak",
            preview: `${base}/projects/tictactoe-kindle.png`,
            link: "https://github.com/progzone122/tictactoe-kindle"
        },
        {
            name: "MixerDialog",
            description: "A simple C++ & gtk3 application to control system volume with visualization",
            preview: `${base}/projects/mixerdialog.png`,
            link: "https://github.com/govnorice/mixerdialog"
        },
        {
            name: "Xiaomi Mi A2 Lite Postmarket OS guide",
            description: "Guide to install Postmarket OS on Xiaomi Mi A2 lite phone with description of all nuances",
            preview: `${base}/projects/xiaomi-mi-a2-lite-pos-guide.png`,
            link: "https://gist.github.com/progzone122/d414579aee2d62ad045ffdf034e0e18d"
        },
        {
            name: "Level1 crackmes solutions",
            description: "Reverse engineering crackme “level1”. Detailed explanation of the logic, several solutions, writing a keygen for the program",
            preview: `${base}/projects/level1-crackmes.png`,
            link: "https://github.com/progzone122/level1-crackmes-solutions"
        }
    ]
</script>
<div class="w-full text-white"
     id="projects">
    <h2 class="text-4xl font-extrabold text-center">My projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {#each PROJECTS as project}
            <ProjectComponent name="{project.name}"
                              description="{project.description}"
                              preview="{project.preview}"
                              link="{project.link}"
            />
        {/each}
    </div>
</div>
