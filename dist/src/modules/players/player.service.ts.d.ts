import { PrismaService } from '../../../prisma/prisma.service';
export declare class PlayerService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllPlayers(): Promise<{
        id: number;
        name: string;
        birthDate: Date | null;
        nationality: string | null;
        position: string | null;
        heightCm: number | null;
        weightKg: number | null;
        currentTeamId: number | null;
        shirtNumber: number | null;
        photoUrl: string | null;
        debutDate: Date | null;
        createdAt: Date;
    }[]>;
}
