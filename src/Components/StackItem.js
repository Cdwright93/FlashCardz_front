import React from 'react';


const StackItem = ({stack , handleStackSelect}) => {
    return (
        <div className = 'Stack-objects'>          
        <div onClick={ () => handleStackSelect(stack)} className=' stack-item item'>
        <div className='content'>
                <div className='header'>{stack.name}</div>
            </div>
        </div>
        </div>
    )
};
export default StackItem;