<script lang="ts">
    import Pawn from "./Pawn.svelte";
    import type {
        Square as SquareT,
        Pawn as PawnT,
    } from "./interfaces/checkers";

    export let sqrClr: string;
    export let sqrSize: number;
    export let hasPwn: boolean = false;

    // let createSqr = (color: string, size: string, haspwn: boolean): SquareT => {
    //     let sqr: SquareT = {
    //         color: color,
    //         area: { width: size, height: size },
    //         hasPawn: haspwn,
    //     };
    //     return sqr;
    // };
</script>

<main>
    {#if hasPwn}
        <div
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
            class="sqr pwn--false"
            style="
            background-color: {sqrClr};
            height: {sqrSize}px;
            width: {sqrSize}px;
            "
        />
    {/if}
</main>

<!-- markup (zero or more items) goes here -->
<style>
    .sqr {
        border: 0.5px solid rgba(130, 199, 255, 0.3);
    }
    .sqr--container {
        display: flex;
        justify-content: center;
    }
</style>
