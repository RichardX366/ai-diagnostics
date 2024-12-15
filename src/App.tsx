import React, { useMemo, useState } from 'react';
import DataView from './DataView';
import summarized from './data/summarized.json';
import raw from './data/raw.json';

function App() {
  const data = useMemo(
    () =>
      summarized
        .map((d, i) => ({
          ...d,
          raw_answer: raw[i].answer,
        }))
        .filter((d, i) => !d.is_correct && raw[i].is_correct),
    [],
  );

  const [element, setElement] = useState(data[0]);

  return (
    <div className='bg-blue-950 min-h-screen'>
      <DataView data={element} />
      <div className='grid grid-cols-5 gap-2 p-2 h-1/2 overflow-y-scroll absolute bottom-0 inset-x-0'>
        {data.map((d) => (
          <button
            className='btn'
            disabled={element.id === d.id}
            onClick={() => setElement(d)}
          >
            {d.id}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
