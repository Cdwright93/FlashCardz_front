import React from 'react';
import StackItem from './StackItem';


const StackList = ({stacks , handleStackSelect}) => {
    const renderedStacks =  stacks.map((stack) => {
        return (
            
        <StackItem key={stack.id} stack={stack} handleStackSelect={handleStackSelect}/>
    )});

    return <div className='ui_relaxed_divided_list'>{renderedStacks}</div>;
};
export default StackList;