import React from 'react';

const DataView: React.FC<{ data: { [k: string]: any } }> = ({ data }) => {
  return (
    <div className='bg-blue-900'>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className='text-white p-4'>
          <h1 className='text-2xl'>{key}</h1>
          <p>{typeof value === 'string' ? value : JSON.stringify(value)}</p>
        </div>
      ))}
    </div>
  );
};

export default DataView;
