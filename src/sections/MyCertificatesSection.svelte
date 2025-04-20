<script>
    import { certificatesState } from "$lib/store/certificates.svelte.ts";
    import CertificateComponent from "../components/CertificateComponent.svelte";
    import CarouselComponent from '../components/CarouselComponent.svelte';
</script>
<div class="w-full text-white"
     id="certificates">

    <h2 class="text-4xl font-extrabold text-center">Participation in hackathons and certificates</h2>

    <div class="w-full h-[16em] md:h-[20em] lg:h-[24em] mt-8">
        <CarouselComponent
          items="{certificatesState}"
          icomponent="{CertificateComponent}"
        />
    </div>
</div>