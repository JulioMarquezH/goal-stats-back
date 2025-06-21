import { PrismaService } from '../../../prisma/prisma.service';
export declare class TeamService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllTeams(): Promise<{
        id: number;
        name: string;
        created_at: Date;
        stadium: string | null;
        country: string | null;
        logo_url: string | null;
    }[]>;
    getTeamById(id: number): Promise<{
        id: number;
        name: string;
        created_at: Date;
        stadium: string | null;
        country: string | null;
        logo_url: string | null;
    } | null>;
    createTeam(data: any): Promise<{
        id: number;
        name: string;
        created_at: Date;
        stadium: string | null;
        country: string | null;
        logo_url: string | null;
    }>;
    updateTeam(id: number, data: any): Promise<{
        id: number;
        name: string;
        created_at: Date;
        stadium: string | null;
        country: string | null;
        logo_url: string | null;
    }>;
    deleteTeam(id: number): Promise<{
        id: number;
        name: string;
        created_at: Date;
        stadium: string | null;
        country: string | null;
        logo_url: string | null;
    }>;
}
