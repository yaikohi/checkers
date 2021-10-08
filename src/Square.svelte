<script lang="ts">
    import Pawn from "./Pawn.svelte";
    export let sqrClr: string;
    export let sqrSize: number;
    export let hasPwn: boolean = false;

    function modPawn() {
        hasPwn = !hasPwn;
    }

</script>

<main>
    {#if hasPwn}
        <div
            on:click|preventDefault={modPawn}
            class="sqr pwn sqr--container"
            style="
            background-color: {sqrClr};
            height: {sqrSize}px;
            width: {sqrSize}px;
            "
        >
            <Pawn clr={sqrClr} size={sqrSize} />
        </div>
    {:else}
        <div
            on:click|preventDefault={modPawn}
            class="sqr pwn--false"
            style="
            background-color: {sqrClr};
            height: {sqrSize}px;
            width: {sqrSize}px;
            "
        />
    {/if}
</main>

<style>
    .sqr {
        border: 0.5px solid rgba(130, 199, 255, 0.3);
    }
    .sqr--container {
        display: flex;
        justify-content: center;
    }
</style>
