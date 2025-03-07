<script lang="ts">
    export let name: string = "";
    export let description: string = "";
    export let preview: string = "";
    export let link: string = "";
</script>
<a class="min-h-[23em] lg:min-h-[20em]" href="{link}" target="_blank" rel="noopener noreferrer">
    <div class="h-full border-2 border-white rounded-2xl flex flex-col cursor-pointer
            transition-colors duration-300
            bg-primary2 hover:bg-primary">
        <div class="p-5 flex-shrink-0">
            <h4 class="text-2xl font-bold">{ name }</h4>
            <p class="text-[16px] font-bold text-gray-200">{ @html description }</p>
        </div>
        <div class="h-full flex items-end">
            <img class="w-full h-48 object-cover rounded-b-2xl" src="{preview}" alt="{name}">
        </div>
    </div>
</a>