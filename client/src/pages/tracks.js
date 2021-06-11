import {useQuery} from '@apollo/client';
import React from 'react';
import {Layout, QueryResult} from '../components';
import TrackCard from '../containers/track-card';
import {TRACKS} from '../gql/tracks';

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
    const {loading, error, data} = useQuery(TRACKS);

    return (
        <Layout grid>
            <QueryResult data={data} loading={loading} error={error}>
                {data?.tracksForHome?.map(track => (
                    <TrackCard key={track.id} track={track} />
                ))}
            </QueryResult>
        </Layout>
    );
};

export default Tracks;
