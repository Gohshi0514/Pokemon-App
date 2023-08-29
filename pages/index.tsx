import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import handleRangeFetch from "../utils/handleRangeFetch";
import { pokemonType } from "../types/types";
import Sarch from "../components/Sarch";
import PokemonGrid from "../components/PokemonGrid";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemonData, setPokemonData] = useState<unknown[]>([]);

  const [rangeStart, setRangeStart] = useState<number | string>(1);
  const [rangeEnd, setRangeEnd] = useState<number | string>(20);

  const handleRangeSearch = async () => {
    setLoading(true);
    await handleRangeFetch(setLoading, setPokemonData, Number(rangeStart), Number(rangeEnd));
  };

  const handleClick = () => {
    alert("範囲が指定されました");
  };

  useEffect(() => {
    handleRangeSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <Sarch
        rangeStart={rangeStart}
        rangeEnd={rangeEnd}
        setRangeStart={setRangeStart}
        setRangeEnd={setRangeEnd}
        handleRangeSearch={handleRangeSearch}
        handleClick={handleClick}
      />
      {pokemonData.length > 0 ? <PokemonGrid pokemonData={pokemonData as pokemonType[]} /> : <p>Loading...</p>}
    </>
  );
}
