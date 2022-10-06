// class component
// function compnent

import React from 'react';
class MyComponent extends React.Component {
    
    
    //cu phap JSX chi su dung duoc 1 khoi 
    render() {
        return (
            <div> my first component
                {Math.random()}
            </div>
        );
    }
}

export default MyComponent;