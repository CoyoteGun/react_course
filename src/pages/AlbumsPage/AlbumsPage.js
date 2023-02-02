import {useEffect, useState} from "react";
import {albumsRequest} from "../../api/request/albumsRequest";
import {Albums} from "../../components/Albums/Albums";

import './AlbumsPage.css'

export const AlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        albumsRequest.getAll().then(({data}) => setAlbums([...data]))
    }, [])
    return (
        <div className={'albums_page'}>
            <h1>Albums</h1>
            <Albums albums={albums} />
        </div>
    );
};