import { PrismaService } from '../../../prisma/prisma.service';
export declare class PlayerService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllPlayers(): Promise<{
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
    getPlayerById(id: number): Promise<{
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
    updatePlayer(id: number, data: any): Promise<{
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
    deletePlayer(id: number): Promise<{
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
