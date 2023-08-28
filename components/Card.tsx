import React from "react";
import Image from "next/image";
import { pokemonType, pTyep } from "../types/types";

const Card: React.FC<{ pokemon: pokemonType }> = ({ pokemon }) => {
    if (!pokemon || !pokemon.sprites) {
        return <div>Loading...</div>;
    }
    return (
        <div className="flex justify-between items-center w-4/5 m-auto max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-2 px-4">
            <div className="flex justify-center items-center w-1/2">
                <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={150}
                    height={150}
                />
            </div>
            <div className="flex flex-col justify-center items-start w-1/2 h-full py-3 px-5">
                <h3 className="font-bold text-lg">{pokemon.name}</h3>
            </div>
            <div className="flex flex-col justify-around items-start w-1/2 h-full py-3 px-5">
                {pokemon.types.map((pType: pTyep) => (
                    <div key={pType.type.name}>
                        {pType.type.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;