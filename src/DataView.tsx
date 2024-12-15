import React from 'react';

const blacklist = ['id', 'is_correct'];

const DataView: React.FC<{ data: { [k: string]: any } }> = ({ data }) => {
  return (
    <div className='bg-blue-900 absolute top-0 inset-x-0 h-1/2 overflow-y-scroll'>
      {Object.entries(data)
        .filter(([key]) => !blacklist.includes(key))
        .map(([key, value]) => (
          <div key={key} className='text-white p-4'>
            <h1 className='text-2xl'>{key}</h1>
            <p>
              {typeof value === 'string' ? (
                value
              ) : Array.isArray(value) ? (
                <ul className='list-disc list-inside'>
                  {value.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              ) : (
                JSON.stringify(value)
              )}
            </p>
          </div>
        ))}
    </div>
  );
};

export default DataView;
