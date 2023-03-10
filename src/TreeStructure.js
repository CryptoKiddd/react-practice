import React, { useState } from 'react'
import './App.css'
const files = [
    {
      name: 'React',
      children: [
        {
          name: 'State Managment',
          children: [
            {
              name: 'Redux',
              children: [
                { name: 'Store' },
                { name: 'Action' },
                { name: 'Dispatch' },
              ],
            },
            {
              name: 'MobX',
              children: [
                { name: 'Observer' },
                { name: 'Observable' },
              ],
            },
          ]
        },
  
      ],
    },
    { name: 'HTTP',
    children: [
        { name: 'GET' },
        { name: 'POST' },
        { name: 'PUT' },
        { name: 'DELET' },
      ],
    
 },
    { name: 'Client' },
  ];
const TreeStructure = () => {
    return (
        <div>
            <h1>Tree Structure</h1>
            {files.map((entry, idx) => <Entry key={idx} entry={entry} depth={1} />)}

        </div>
    )
}
function Entry({ entry, depth }) {

    const [isExpanded, setIsExpanded] = useState(false)
    return (
  
      <div className="Entry"  >
        <button className='tree-btn' onClick={() => setIsExpanded(prev => !prev)} style={{ width: '100px' }} >
  
          {entry.children ? `=> ${entry.name}` : entry.name}
        </button>
  
        {isExpanded &&
          <div  style={{ paddingLeft: `${depth * 20}px` }}>
  
            {entry.children?.map(entry => <Entry entry={entry} depth={depth + 1} />)}
          </div>}
  
  
      </div>
  
  
    );
  }

export default TreeStructure