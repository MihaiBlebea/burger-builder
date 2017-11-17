import React from 'react';
import pacman from '../../assets/pacman.svg';
import './Loader.css';

function Loader(props)
{
    let classes = [];

    switch(props.position)
    {
        case('center'):
            classes.push('LoaderCenter');
            break;
        case('left'):
            classes.push('LoaderLeft');
            break;
        case('right'):
            classes.push('LoaderRight');
            break;
        default:
            classes.push('LoaderCenter');
    }

    return (
        <div style={{display: (props.show) ? 'block' : 'none'}}>
            <img className={classes} src={pacman} alt='loader'/>
            <div className='LoaderBackground'></div>
        </div>
    );
}

export default Loader;
