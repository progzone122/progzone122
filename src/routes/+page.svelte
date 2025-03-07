<script>
    import FirstSection from "../components/sections/FirstSection.svelte";
    import AboutSection from "../components/sections/AboutSection.svelte";
    import SkillsSection from "../components/sections/SkillsSection.svelte";
    import OtherSkillsSection from "../components/sections/OtherSkillsSection.svelte";
    import MyProjectsSection from "../components/sections/MyProjectsSection.svelte";
</script>
<div class="flex flex-col gap-12">
    <!-- The first section should be +- the entire screen in height -->
    <div class="h-[66vh] flex items-center pb-12 md:pb-32">
        <FirstSection />
    </div>

    <div class="flex flex-col gap-12
            md:px-12 lg:px-12 2xl:px-[10%]">
        <AboutSection />
        <SkillsSection />
        <OtherSkillsSection />
        <MyProjectsSection />
    </div>
</div>