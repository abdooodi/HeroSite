import React from "react";
import { Character } from "@prisma/client"
import { BASE_URL } from "@/utils/constants";
import CharacterTrait from "@/components/characters/charactertrait";

type CharacterDisplayProps = {
    character: Character
};

export default async function CharacterDisplay(props: CharacterDisplayProps) {
    const { character } = props;


    return (
    <div className="flex flex-col items-center shadow-lg rounded-2xl p-6 max-w-sm mx-auto">

        <h1 className="text-8xl font-bold text-foreground mb-2">
            {character.name}
        </h1>
        
        <div className="border-foreground border-10 p-2 rounded-full mb-7">
        <img
            className="w-full h-full object-cover -m-2"
            src={character.icon}
            alt={character.name}
        />
        </div>



        <div className="mb-2">
            <CharacterTrait trait="Real Name" value={character.realname}/>
            <CharacterTrait trait="Alignment" value={character.alignment}/>
            <CharacterTrait trait="Species" value={character.species}/>
        </div>
        <p>{character.description}</p>

    </div>
    );
}