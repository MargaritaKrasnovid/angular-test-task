import { Release } from '../core/entities/release';

export const RELEASES: Release[] = [
    {
        id: 1,
        pline: 'pline',
        display_title: 'Young Girls',
        upc: 213,
        main_artists: [ {id: 123,  name: 'Bruno Mars'}],
        featured_artists: [
            {id: 124,  name: 'Cardi B'},
            {id: 125,  name: 'Fabulous Mr. Artist Man'},
            {id: 126,  name: 'Dr.Love'},
            {id: 126,  name: 'Artist Eleventy'}
        ],
        assets: [1],
        updated_at: '08/09/18',
        created_at: '08/09/18',
        cover_arts: 'Cardi B',
        genres: [
            { id: 147, name: 'One'},
            { id: 147, name: 'Mr. Artist'},
        ]
    },
    {
        id: 2,
        pline: 'pline',
        display_title: 'Young Girls',
        upc: 213,
        main_artists: [ {id: 123,  name: 'Bruno Mars'}],
        featured_artists: [
            {id: 124,  name: 'Cardi B'},
            {id: 125,  name: 'Fabulous Mr. Artist Man'},
            {id: 126,  name: 'Dr.Love'},
            {id: 126,  name: 'Artist Eleventy'}
        ],
        assets: [1],
        updated_at: '08/09/18',
        created_at: '08/09/18',
        cover_arts: 'Cardi B',
        genres: [
            { id: 147, name: 'One'},
            { id: 147, name: 'Mr. Artist'},
        ]
    }
];
