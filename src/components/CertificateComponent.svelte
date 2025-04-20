<script lang="ts">
    export let name: string;
    export let rank: string | null;
    export let image: string;
    export let link: string | undefined | null;
    export let date: Date;

    const dateFormat = (date: Date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
</script>
<a class="w-full h-full" href="{link}" target="_blank" rel="noopener noreferrer">
    <div class="w-full h-full relative border-2 border-white rounded-2xl flex flex-col cursor-pointer transition-colors duration-300 bg-primary2 hover:bg-accent">
        <div class="w-full h-full overflow-hidden rounded-2xl">
            <img class="w-full h-full object-contain" src="{image}" alt="{name}" />
        </div>
        <div class="absolute bottom-0 left-0 w-full p-5 z-10 bg-black opacity-70 rounded-b-2xl">
            <h4 class="text-2xl font-bold text-white">{ name }</h4>
            <p class="text-[16px] font-bold text-gray-200">{ rank ? rank + " · " : "" }{dateFormat(date)}</p>
        </div>
    </div>
</a>