import React from "react";
import { Character } from "@prisma/client"
import { BASE_URL } from "@/utils/constants";
import CharacterDisplay from "@/components/characters/characterdisplay";

type CharacterPageProps = {
  params: {
    id: string;
  };
};

export default async function CharacterPage(props: CharacterPageProps) {
    const { params } = props;
    const { id } = await params;

    const resp = await fetch(`${BASE_URL}/api/characters/${id}`, {
        method: 'GET'
    })

    if (!resp.ok) {
        return (
            <p>Character not found</p>
        );
    }
    const data: Character = await resp.json();


    return (
        <div className="w-full min-h-screen bg-background">
            <CharacterDisplay  character={data} />
        </div>
        
    );
}