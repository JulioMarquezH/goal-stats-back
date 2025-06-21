import { EventService } from './event.service';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    getEvents(): Promise<{
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
    getEventById(id: string): Promise<{
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
    updateEvent(id: string, data: any): Promise<{
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
    deleteEvent(id: string): Promise<{
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
