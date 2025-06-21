import { PrismaService } from '../../../prisma/prisma.service';
export declare class SeasonService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllSeasons(): Promise<{
        id: number;
        created_at: Date;
        start_year: number;
        end_year: number;
    }[]>;
    getSeasonById(id: number): Promise<{
        id: number;
        created_at: Date;
        start_year: number;
        end_year: number;
    } | null>;
    createSeason(data: any): Promise<{
        id: number;
        created_at: Date;
        start_year: number;
        end_year: number;
    }>;
    updateSeason(id: number, data: any): Promise<{
        id: number;
        created_at: Date;
        start_year: number;
        end_year: number;
    }>;
    deleteSeason(id: number): Promise<{
        id: number;
        created_at: Date;
        start_year: number;
        end_year: number;
    }>;
}
