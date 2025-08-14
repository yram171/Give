import React, { useEffect, useState } from 'react';
import PollBox from './components/PollBox.jsx'; 
import logo from './assets/logo.svg';
import GroupTab from './components/GroupTab';
import CreateAccount from './pages/CreateAccount';
import './styles/App.css';

async function getPoll () {
      try {
        const res = await fetch('http://localhost:5001/polls');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const poll = await res.json();  //
        return poll?.options
      } catch (err) {
        console.error('Failed to load poll:', err);
        return err.message; // Return error message for debugging
      }
//       finally {
// //         setLoading(false);
//       }
    };

function App() {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPoll().then((data) => {
    if (Array.isArray(data)) {
      setOptions(data);
      setLoading(false);
    } else {
      console.error('Unexpected data format:', data);
      return [];
    }
  });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      <CreateAccount />
    </div>
    // <div className="App flex">
    //   {/* left column */}
    //   <GroupTab />

    //   {/* middle column */}
    //   <div className="flex-1 p-4">

    //     <main>
    //       <PollBox initialOptions={options} />
    //     </main>
    //   </div>
    // </div>
  );

}

export default App;
