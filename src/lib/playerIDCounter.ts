// playerIdCounter.ts
let nextPlayerId = 1;

export function getNextPlayerId(): string 
{
    const playerId:string = nextPlayerId.toString();
    nextPlayerId += 1;
    return playerId;
}

export function resetPlayerIdCounter(): void 
{
  nextPlayerId = 1;
}
