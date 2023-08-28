export type pokemonType = {
    name: string;
    sprites: {
        front_default: string;
    };
    types: {
        map: any;
        type: {
            name: string;
        };
    };
};

export type pTyep = {
    type: {
        name: string;
    };
    name: string;
};

export type SearchBarProps = {
    rangeStart: number | string,
    rangeEnd: number | string,
    setRangeStart: React.Dispatch<React.SetStateAction<number | string>>,
    setRangeEnd: React.Dispatch<React.SetStateAction<number | string>>,
    handleRangeSearch: () => void,
    handleClick: () => void,
};