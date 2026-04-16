import { prisma } from "@/prisma/db"
import { NextResponse } from "next/server";

export async function GET(request: any) {
    const page: number = Number(request.nextUrl.searchParams.get('page')) || 1;
    const limit: number = Number(request.nextUrl.searchParams.get('limit')) || 10;

    if (isNaN(page)) {
        return NextResponse.json({"error": "Page must be a number"}, { status: 400});
    }

    if (isNaN(limit)) {
        return NextResponse.json({"error": "Limit must be a number"}, { status: 400});
    }

    const characters = await prisma.character.findMany({
        take: limit,
        orderBy: {
            id: "asc"
        },
        skip: limit * (page - 1)
    });

    if (characters.length === 0) {
        return NextResponse.json({"error": "No characters found"}, { status: 404});
    }

    return NextResponse.json(characters);
}