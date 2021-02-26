export interface RecResponse {
    seeds: object
    tracks: Track[]
}

interface Track {
    album: object
    artists: object
    available_markets: object
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: object
    external_urls: object
    href: string
    id: string
    is_local: boolean
    name: string
    popularity: number
    preview_url: object
    track_number: number
    type: string
    uri: string
}

