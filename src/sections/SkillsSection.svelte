<script>
    import SkillsList from "../components/SkillsList.svelte";

    const code = `let skill_names: Vec<&str> = vec!["Html / CSS", "JS / TS", "Rust", "C++", "Python", "Shell"];<br />
        let skills = create_skills(&skill_names);<br />
        Website::render(skills)`;

    const SKILLS = [
        "HTML / CSS",
        "JS / TS",
        "Rust",
        "C++",
        "Python",
        "Shell"
    ];
</script>
<div class="prose prose-invert leading-tight
            prose-xl lg:prose-2xl
            prose-h2:my-0 prose-h3:my-0 prose-h4:my-0 prose-p:my-0
            min-w-24 2xl:min-w-[80%]"
     id="skills">

    <h2>Skills</h2>
    <div class="py-4 mb-2 w-full">
        <p class="font-light text-xl">
            {@html code}
        </p>
    </div>
    <SkillsList skills="{SKILLS}" />
</div>