export interface Resource {
    id: number;
    display_title: string;
    pline: string;
    main_artists: { id: number; name: string }[];
    featured_artists: { id: number; name: string }[];
    genres: { id: number; name: string }[];
    updated_at: string;
    typeName: string;
}
