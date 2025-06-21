import { PlayerService } from './player.service';
export declare class PlayerController {
    private readonly playerService;
    constructor(playerService: PlayerService);
    getPlayers(): Promise<{
        id: number;
        name: string;
        birth_date: Date | null;
        nationality: string | null;
        position: string | null;
        height_cm: number | null;
        weight_kg: number | null;
        current_team_id: number | null;
        shirt_number: number | null;
        photo_url: string | null;
        debut_date: Date | null;
        created_at: Date;
    }[]>;
    getPlayerById(id: string): Promise<{
        id: number;
        name: string;
        birth_date: Date | null;
        nationality: string | null;
        position: string | null;
        height_cm: number | null;
        weight_kg: number | null;
        current_team_id: number | null;
        shirt_number: number | null;
        photo_url: string | null;
        debut_date: Date | null;
        created_at: Date;
    } | null>;
    createPlayer(data: any): Promise<{
        id: number;
        name: string;
        birth_date: Date | null;
        nationality: string | null;
        position: string | null;
        height_cm: number | null;
        weight_kg: number | null;
        current_team_id: number | null;
        shirt_number: number | null;
        photo_url: string | null;
        debut_date: Date | null;
        created_at: Date;
    }>;
    updatePlayer(id: string, data: any): Promise<{
        id: number;
        name: string;
        birth_date: Date | null;
        nationality: string | null;
        position: string | null;
        height_cm: number | null;
        weight_kg: number | null;
        current_team_id: number | null;
        shirt_number: number | null;
        photo_url: string | null;
        debut_date: Date | null;
        created_at: Date;
    }>;
    deletePlayer(id: string): Promise<{
        id: number;
        name: string;
        birth_date: Date | null;
        nationality: string | null;
        position: string | null;
        height_cm: number | null;
        weight_kg: number | null;
        current_team_id: number | null;
        shirt_number: number | null;
        photo_url: string | null;
        debut_date: Date | null;
        created_at: Date;
    }>;
}
