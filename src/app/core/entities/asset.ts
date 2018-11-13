class Asset {
    id: number;
    display_title: string;
    pline: string;
    isrc: number;
    main_artists: { id: number; name: string }[];
    featured_artists: { id: number; name: string }[];
    genres: { id: number; name: string }[];
    updated_at: string;
}
