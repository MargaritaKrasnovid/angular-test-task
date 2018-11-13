class Release {
    id: number;
    pline: string;
    display_title: string;
    upc: number;
    main_artists: { id: number; name: string }[];
    featured_artists: { id: number; name: string }[];
    assets: number[];
    updated_at: string;
    created_at: string;
    cover_arts: string;
    genres: { id: number; name: string }[];
}
