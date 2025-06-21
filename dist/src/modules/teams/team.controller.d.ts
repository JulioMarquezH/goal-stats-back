import { TeamService } from './team.service';
export declare class TeamController {
    private readonly teamService;
    constructor(teamService: TeamService);
    getTeams(): Promise<{
        id: number;
        name: string;
        created_at: Date;
        stadium: string | null;
        country: string | null;
        logo_url: string | null;
    }[]>;
    getTeamById(id: string): Promise<{
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
    updateTeam(id: string, data: any): Promise<{
        id: number;
        name: string;
        created_at: Date;
        stadium: string | null;
        country: string | null;
        logo_url: string | null;
    }>;
    deleteTeam(id: string): Promise<{
        id: number;
        name: string;
        created_at: Date;
        stadium: string | null;
        country: string | null;
        logo_url: string | null;
    }>;
}
