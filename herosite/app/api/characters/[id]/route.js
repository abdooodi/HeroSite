import { prisma } from "@/prisma/db"
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = await params;
    

    if (!id || isNaN(Number(id))) {
        return NextResponse.json({"error": "Invalid character ID"}, {status: 404});
    }

    const charId = Number(id);
    const character = await prisma.character.findUnique({
        where: {
            id: charId
        }
    });

    if (!character) {
        return NextResponse.json({"error": "Character not found"}, { status: 404});
    }

    return NextResponse.json(character);
}