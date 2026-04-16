import React from "react";
import { BASE_URL } from "@/utils/constants";

type CharacterPageProps = {
  params: {
    id: number;
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
            <p>Hero not found</p>
        );
    }
    const data = await resp.json();


    return (
        <p>{data.name}</p>
    );
}