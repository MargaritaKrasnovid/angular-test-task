import { Asset } from '../core/entities/asset';

export const ASSETS: Asset[] = [
    {
        id: 1,
        display_title: 'Young Girls1',
        pline: '2019 Warner Music Group',
        isrc: 1,
        main_artists: [ {id: 123,  name: 'Bruno Mars'}],
        featured_artists: [
            {id: 124,  name: 'Cardi B'},
            {id: 125,  name: 'Fabulous Mr. Artist Man'},
            {id: 126,  name: 'Dr.Love'},
            {id: 126,  name: 'Artist Eleventy'}
        ],
        genres: [
            { id: 147, name: 'Explicit'},
            { id: 148, name: 'Urban'},
            { id: 149, name: 'R&B'},
        ],
        updated_at: '08/03/18',
        typeName: 'Asset'
    },
    {
        id: 2,
        display_title: 'Young Girls2',
        pline: '2019 Warner Music Group',
        isrc: 1,
        main_artists: [ {id: 123,  name: 'Bruno Mars'}],
        featured_artists: [
            {id: 124,  name: 'Cardi B'},
            {id: 125,  name: 'Fabulous Mr. Artist Man'},
            {id: 126,  name: 'Dr.Love'},
            {id: 126,  name: 'Artist Eleventy'}
        ],
        genres: [
            { id: 147, name: 'Explicit'},
            { id: 148, name: 'Urban'},
            { id: 149, name: 'R&B'},
        ],
        updated_at: '08/03/18',
        typeName: 'Asset'
    }
];
