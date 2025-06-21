import { MatchService } from './matche.service';
export declare class MatchController {
    private readonly matchService;
    constructor(matchService: MatchService);
    getMatches(): Promise<{
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
    getMatchById(id: string): Promise<{
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
    updateMatch(id: string, data: any): Promise<{
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
    deleteMatch(id: string): Promise<{
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
