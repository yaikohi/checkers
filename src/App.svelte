<script lang="ts">
	import type { Square, Row, Board, Pawn } from "./interfaces/checkers";

	const whiteSquare: Square = {
		color: "beige",
		area: { width: "50px", height: "50px" },
		hasPawn: false,
	};
	const blackSquare: Square = {
		color: "black",
		area: { width: "50px", height: "50px" },
		hasPawn: false,
	};
	// TODO: Create Square-objects with pawns

	const pawnWhite: Pawn = {
		color: "beige",
		area: { width: "50px", height: "50px" },
	};

	const pawnBlack: Pawn = {
		color: "black",
		area: { width: "50px", height: "50px" },
	};

	// TODO: Implement a function that adds a square based on the Row.length property
	// TODO: Implement a function that allows you to select a row variation (start with black / start with white)
	let row_var1: Row = {
		squares: [
			whiteSquare,
			blackSquare,
			whiteSquare,
			blackSquare,
			whiteSquare,
			blackSquare,
			whiteSquare,
			blackSquare,
		],
		length: 8,
	};

	let row_var2: Row = {
		squares: [
			blackSquare,
			whiteSquare,
			blackSquare,
			whiteSquare,
			blackSquare,
			whiteSquare,
			blackSquare,
			whiteSquare,
		],
		length: 8,
	};
	// TODO: Implement a function that adds Board.width amount of rows to Board.rows
	let CheckersBoard: Board = {
		rows: [
			row_var1,
			row_var2,
			row_var1,
			row_var2,
			row_var1,
			row_var2,
			row_var1,
			row_var2,
		],
		width: 8,
	};

	// TODO: Add interactivity for playing checkers
</script>

<main>
	<div class="container">
		<div class="checkersboard">
			{#each CheckersBoard.rows as row}
				<div class="row">
					{#each row.squares as square}
						{#if square.hasPawn}
							<div
								class="square"
								style="
									width: {square.area.width}; 
									height: {square.area.height}; 
									background-color: {square.color};"
							/>
						{:else}
							<div
								class="square"
								style="
									width: {square.area.width}; 
									height: {square.area.height}; 
									background-color: {square.color};"
							/>
						{/if}
					{/each}
				</div>
			{/each}
		</div>
	</div>
</main>

<style>
	.container {
		padding: 50px;
		display: flex;
		justify-content: center;
	}
	.checkersboard {
		display: flex;
		position: fixed;
		border: 1px solid black;
		/* flex-direction: row; */
		/* eight squares times their width or length: 8 * 50px = 400px */
		max-width: 400px;
		max-height: 400px;
	}
</style>
