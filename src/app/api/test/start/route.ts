export const dynamic = "force-dynamic"; // required to prevent route from being statically cached

import { generateFirstYearFromScratch } from '@/lib/playerGenerator';
import { NextResponse } from 'next/server';

export async function POST() 
{
    for(let i = 0; i < 1000; i++)
    {
        await generateFirstYearFromScratch();
    }
    
    return NextResponse.json({ status: 'Generated 1000 new player' });
}


