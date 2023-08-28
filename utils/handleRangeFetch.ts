import { getPokemon } from "./pokemon";

const handleRangeFetch = async (setLoading: (arg0: boolean) => void, setPokemonData: (arg0: unknown[]) => void, rangeStart: number, rangeEnd: number) => {
  setLoading(true);
  let _pokemonData = await Promise.all(
    Array.from({ length: rangeEnd - rangeStart + 1 }, (_, i) => rangeStart + i)
      .map((id) => `https://pokeapi.co/api/v2/pokemon/${id}`)
      .map((url) => getPokemon(url))
  );
  setPokemonData(_pokemonData);
  setLoading(false);
};

export default handleRangeFetch;