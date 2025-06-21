import { SeasonService } from './season.service';
export declare class SeasonController {
    private readonly seasonService;
    constructor(seasonService: SeasonService);
    getSeasons(): Promise<{
        id: number;
        created_at: Date;
        start_year: number;
        end_year: number;
    }[]>;
    getSeasonById(id: string): Promise<{
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
    updateSeason(id: string, data: any): Promise<{
        id: number;
        created_at: Date;
        start_year: number;
        end_year: number;
    }>;
    deleteSeason(id: string): Promise<{
        id: number;
        created_at: Date;
        start_year: number;
        end_year: number;
    }>;
}
