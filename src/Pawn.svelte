<script lang="ts">
    export let size: number;
    export let clr: string;
</script>

<main>
    <div
        class="pawn"
        style="
            border: 1px solid black;
            border-radius: 50%;
            box-shadow: 3px 3px lightgray;
            background-color: x{clr}; 
            width: {size - 10}px; 
            height: {size - 10}px;
        "
    />
</main>
