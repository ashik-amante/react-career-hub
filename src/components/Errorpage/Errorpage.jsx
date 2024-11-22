import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
            <h1>OOps!!!</h1>
            <Link to='/'>Go back to home</Link>
        </div>
    );
};

export default Errorpage;