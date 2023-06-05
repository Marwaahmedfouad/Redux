import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return <>
        <div className='py-4 bg-primary text-center'>
            <div>
                <Link to="/home" className={`text-decoration-none mx-4 fs-4 text-white`}>Home</Link>
                <Link to="/addmovie" className={`text-decoration-none mx-4 fs-4 text-white`}>Add</Link>
            </div>
        </div>
    </>
}
