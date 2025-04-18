import Image from "next/image";
import Link from "next/link";
import { capitalize, getTypeColor, formatPokemonId } from "@/lib/utils";
import { Pokemon, PokemonTypeSlot } from "@/app/types/pokemonTypes";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const formattedId = formatPokemonId(pokemon.id);
  const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedId}.png`;

  return (
    <Link href={`/pokemons/${pokemon.name}`}>
      <div className="flex flex-col justify-center items-center gap-2 p-3 md:p-4">
        <div className={`flex justify-center items-center mx-auto text-white rounded-lg p-2 md:p-4 border-2 transition-all duration-300 ease-in-out bg-gradient-to-br from-gray-950 via-amber-950 to-yellow-500 ${pokemon.is_legendary ? 'border-yellow-400 shadow-lg shadow-yellow-400/50 hover:border-yellow-300' : 'border-white hover:border-yellow-500 hover:shadow-yellow-lg'}`}>
          <Image 
            src={imageUrl} 
            alt={pokemon.name} 
            width={160} 
            height={160} 
            className="w-32 h-32 md:w-40 md:h-40"
            priority={pokemon.id <= 20}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-x-2 items-baseline">
          <h2 className="text-lg md:text-xl text-yellow-500 font-semibold">#{formattedId}</h2>
          <h2 className="text-xl md:text-2xl font-bold">{capitalize(pokemon.name)}</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-1 md:gap-2">
          {pokemon.types &&
            pokemon.types.map((typeSlot: PokemonTypeSlot, index: number) => (
              <p
                key={index}
                className={`${getTypeColor(typeSlot.type.name)} py-0.5 px-2 md:py-1 md:px-2.5 rounded-lg text-white text-xs md:text-sm`}
              >
                {capitalize(typeSlot.type.name)}
              </p>
            ))}
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
