import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './Comp'
ReactDOM.render(
// {/* <Comp html={(<h1>这是父元素传递过来的html</h1>)} /> */}
        <Comp>
            {/* <h1>这是一个h1</h1> */}
        </Comp>
    , document.getElementById('root'));

