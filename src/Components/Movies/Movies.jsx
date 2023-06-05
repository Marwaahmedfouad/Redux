import { Link } from 'react-router-dom';
import style from './movies.module.css';
import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../MainRedux/Actions/reducersActions';

export default function Movies({ sendOneMovie }) {
    const dispatch = useDispatch()

    const childDelete = () => {
        deleteMovie(sendOneMovie.id, dispatch);
    }

    return <>
        <div>
            <div className={`${style.mainCard} card bg-dark text-white`}>
                <div className={`${style.imgCon}`}>
                    <img src={sendOneMovie.poster_path ? `https://image.tmdb.org/t/p/w500/${sendOneMovie.poster_path}` : ``} className={`${style.imgScale} card-img-top rounded-1`} alt="MovieName" />
                </div>
                <div className=" d-flex flex-column justify-content-around align-items-center  ">
                    <h6>{sendOneMovie.title?.split(' ').slice(0, 6).join(' ')}</h6>
                    <p className="card-text">{sendOneMovie.overview?.split(' ').slice(0, 4).join(' ')}
                    </p>
                    <div>
                        <Link to={`/updatemovie/${sendOneMovie.id}`}>
                            <button className="btn btn-success w-100 ">Update Movie</button>
                        </Link>
                        <button onClick={childDelete} className="btn btn-danger w-100">Delete Movie</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

