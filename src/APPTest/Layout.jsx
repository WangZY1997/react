import React from 'react'
import TreeLayout from '../Component/Common/ThreeLayout'
/**
 * 这是一个布局
 */
export default function App() {
    return (
        <div>
            <TreeLayout
                gap={20}
                left={<div style={{ border: '2px solid #008c8c' }}>这是左边栏</div>}
                right={<div style={{ border: '2px solid #008c8c' }}>这是右边栏</div>}
            >
                <div style={{ border: "2px solid #f40" }}>
                    <h1>主区域</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ab sint. Id at minima omnis esse obcaecati. Commodi culpa vitae vero nobis consequuntur sed doloremque enim non, consectetur odio quam.</p>
                </div>
            </TreeLayout>
        </div>
    )
}

