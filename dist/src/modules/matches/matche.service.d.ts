import { PrismaService } from '../../../prisma/prisma.service';
export declare class MatchService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllMatches(): Promise<{
        id: number;
        created_at: Date;
        match_date: Date;
        season_id: number | null;
        matchday: number | null;
        home_team_id: number;
        away_team_id: number;
        home_score: number;
        away_score: number;
        stadium: string | null;
        match_type: import(".prisma/client").$Enums.match_type;
    }[]>;
    getMatchById(id: number): Promise<{
        id: number;
        created_at: Date;
        match_date: Date;
        season_id: number | null;
        matchday: number | null;
        home_team_id: number;
        away_team_id: number;
        home_score: number;
        away_score: number;
        stadium: string | null;
        match_type: import(".prisma/client").$Enums.match_type;
    } | null>;
    createMatch(data: any): Promise<{
        id: number;
        created_at: Date;
        match_date: Date;
        season_id: number | null;
        matchday: number | null;
        home_team_id: number;
        away_team_id: number;
        home_score: number;
        away_score: number;
        stadium: string | null;
        match_type: import(".prisma/client").$Enums.match_type;
    }>;
    updateMatch(id: number, data: any): Promise<{
        id: number;
        created_at: Date;
        match_date: Date;
        season_id: number | null;
        matchday: number | null;
        home_team_id: number;
        away_team_id: number;
        home_score: number;
        away_score: number;
        stadium: string | null;
        match_type: import(".prisma/client").$Enums.match_type;
    }>;
    deleteMatch(id: number): Promise<{
        id: number;
        created_at: Date;
        match_date: Date;
        season_id: number | null;
        matchday: number | null;
        home_team_id: number;
        away_team_id: number;
        home_score: number;
        away_score: number;
        stadium: string | null;
        match_type: import(".prisma/client").$Enums.match_type;
    }>;
}
