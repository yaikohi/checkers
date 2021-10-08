<script lang="ts">
    import Square from "./Square.svelte";

    let clrList: string[] = ["beige", "darkgrey"];
    let sz: number = 50;
</script>

<main>
    <div class="container">
        <div class="board">
            <div class="row">
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
            </div>
            <div class="row">
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
            </div>
            <div class="row">
                <Square sqrClr={clrList[0]} sqrSize={sz} />
                <Square sqrClr={clrList[1]} sqrSize={sz} />
                <Square sqrClr={clrList[0]} sqrSize={sz} />
                <Square sqrClr={clrList[1]} sqrSize={sz} />
                <Square sqrClr={clrList[0]} sqrSize={sz} />
                <Square sqrClr={clrList[1]} sqrSize={sz} />
                <Square sqrClr={clrList[0]} sqrSize={sz} />
                <Square sqrClr={clrList[1]} sqrSize={sz} />
                <Square sqrClr={clrList[0]} sqrSize={sz} />
                <Square sqrClr={clrList[1]} sqrSize={sz} />
            </div>
            <div class="row">
                <Square sqrClr={clrList[1]} sqrSize={sz} />
                <Square sqrClr={clrList[0]} sqrSize={sz} />
                <Square sqrClr={clrList[1]} sqrSize={sz} />
                <Square sqrClr={clrList[0]} sqrSize={sz} />
                <Square sqrClr={clrList[1]} sqrSize={sz} />
                <Square sqrClr={clrList[0]} sqrSize={sz} />
                <Square sqrClr={clrList[1]} sqrSize={sz} />
                <Square sqrClr={clrList[0]} sqrSize={sz} />
                <Square sqrClr={clrList[1]} sqrSize={sz} />
                <Square sqrClr={clrList[0]} sqrSize={sz} />
            </div>
            <div class="row">
                <Square sqrClr={clrList[0]} sqrSize={sz} />
                <Square sqrClr={clrList[1]} sqrSize={sz} />
                <Square sqrClr={clrList[0]} sqrSize={sz} />
                <Square sqrClr={clrList[1]} sqrSize={sz} />
                <Square sqrClr={clrList[0]} sqrSize={sz} />
                <Square sqrClr={clrList[1]} sqrSize={sz} />
                <Square sqrClr={clrList[0]} sqrSize={sz} />
                <Square sqrClr={clrList[1]} sqrSize={sz} />
                <Square sqrClr={clrList[0]} sqrSize={sz} />
                <Square sqrClr={clrList[1]} sqrSize={sz} />
            </div>
            <div class="row">
                <Square sqrClr={clrList[1]} sqrSize={sz} />
                <Square sqrClr={clrList[0]} sqrSize={sz} />
                <Square sqrClr={clrList[1]} sqrSize={sz} />
                <Square sqrClr={clrList[0]} sqrSize={sz} />
                <Square sqrClr={clrList[1]} sqrSize={sz} />
                <Square sqrClr={clrList[0]} sqrSize={sz} />
                <Square sqrClr={clrList[1]} sqrSize={sz} />
                <Square sqrClr={clrList[0]} sqrSize={sz} />
                <Square sqrClr={clrList[1]} sqrSize={sz} />
                <Square sqrClr={clrList[0]} sqrSize={sz} />
            </div>
            <div class="row">
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
            </div>
            <div class="row">
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[1]} sqrSize={sz} hasPwn={true} />
                <Square sqrClr={clrList[0]} sqrSize={sz} hasPwn={true} />
            </div>
        </div>
    </div>
</main>

<style>
    .container {
        display: flex;
        justify-content: center;
    }
    .board {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        max-height: 400px;
    }
    .row {
        display: flex;
        flex-direction: row;
    }
</style>
