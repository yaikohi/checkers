export interface Area {
    width: string;
    height: string;
}

export interface Square {
    color: string;
    area: Area;
    hasPawn: boolean;
}

export interface Row {
    squares: Square[];
    length: number;
}

export interface Board {
    rows: BoardRow[];
    width: number;
}

export interface Pawn {
    color: string;
    area: Area;
}