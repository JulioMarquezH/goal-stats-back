import { PrismaService } from '../../../prisma/prisma.service';
export declare class EventService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllEvents(): Promise<{
        id: number;
        created_at: Date;
        match_id: number;
        player_id: number;
        team_id: number;
        event_type: import(".prisma/client").$Enums.event_type;
        event_minute: number;
        event_second: number;
        value: import("@prisma/client/runtime/library").JsonValue;
    }[]>;
    getEventById(id: number): Promise<{
        id: number;
        created_at: Date;
        match_id: number;
        player_id: number;
        team_id: number;
        event_type: import(".prisma/client").$Enums.event_type;
        event_minute: number;
        event_second: number;
        value: import("@prisma/client/runtime/library").JsonValue;
    } | null>;
    createEvent(data: any): Promise<{
        id: number;
        created_at: Date;
        match_id: number;
        player_id: number;
        team_id: number;
        event_type: import(".prisma/client").$Enums.event_type;
        event_minute: number;
        event_second: number;
        value: import("@prisma/client/runtime/library").JsonValue;
    }>;
    updateEvent(id: number, data: any): Promise<{
        id: number;
        created_at: Date;
        match_id: number;
        player_id: number;
        team_id: number;
        event_type: import(".prisma/client").$Enums.event_type;
        event_minute: number;
        event_second: number;
        value: import("@prisma/client/runtime/library").JsonValue;
    }>;
    deleteEvent(id: number): Promise<{
        id: number;
        created_at: Date;
        match_id: number;
        player_id: number;
        team_id: number;
        event_type: import(".prisma/client").$Enums.event_type;
        event_minute: number;
        event_second: number;
        value: import("@prisma/client/runtime/library").JsonValue;
    }>;
}
