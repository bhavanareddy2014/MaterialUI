import React,{useEffect} from 'react'
import {Box,Typography} from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux';
import {getalbumData} from '../Store/Actions/albums';
function Albums() {
    const albums = useSelector(state =>state.albums.albumsData);
    const dispatch = useDispatch();
  useEffect(() =>{
      dispatch(getalbumData())
  },[])
  const albumList = albums.length ? (
    albums.map(album =>{
        return (
            <div className=" card" key ={album.id}>
            <div className="card-content">
            <h1>{album.title}</h1>
            <p>{album.body}</p>
            </div>
            </div>)
    })
    ) : (
        <div> No albums yet</div>)
    return (
        <Box py={20} textAlign="center">
        <Typography variant ="h6">
        Albums page
        </Typography>
        {albumList}
        </Box>
    )
}

export default Albums
