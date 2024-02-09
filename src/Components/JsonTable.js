import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './JsonTable.css'

function JsonTable() {
  const [data, setData] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
const [count,setCount] = useState(0);
  useEffect(() => {
    axios.get('https://cdn.crediwatch.com/assets/json/test.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });
  }, [count]);

  const toggleRow = id => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      <h1>JSON Table</h1>
      <table className='table border'>
        <thead>
          <tr>
            <th className='Cursor'>ID</th>
            <th>Slug</th>
            <th>url</th>
            <th>Status</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <React.Fragment key={item.id}>
              <tr onClick={() => toggleRow(item.id)}>
                <td onClick ={()=>setCount(count+1)} className='Cursor border'>{item.id}</td>
             
              <td className='border'>{item.slug}</td>
                <td className='border'>{item.url}</td>
                <td className='border'>{item.status}</td>
                <td className='border'>{item.category}</td>
              {expandedId === item.id && (
                <tr>
                  <td colSpan="5">Details: {JSON.stringify(item)}</td>
                </tr>
              )}
               </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JsonTable;
