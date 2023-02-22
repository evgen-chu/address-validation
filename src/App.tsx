import React from 'react';
import AddressCandidateItemList from './components/AddressCandidateItemList/AddressCandidateItemList';


const mockAddresses = [
  {
    id: 125739,
    streetNumber: 115,
    streetName: 'Fifth',
    streetType: 'Street',
    city: 'Santa Fe',
    state: 'New Mexico',
    zip: '87505',
  },
  {
    id: 125738,
    streetNumber: 116,
    streetName: 'Fifth',
    streetType: 'Street',
    city: 'Santa Fe',
    state: 'New Mexico',
    zip: '87505',
  },
  {
    id: 125737,
    streetNumber: 117,
    streetName: 'Fifth',
    streetType: 'Street',
    city: 'Santa Fe',
    state: 'New Mexico',
    zip: '87505',
  }
];


function App() {
  return (
    <div>
     <AddressCandidateItemList addresses={mockAddresses} />
    </div>
  );
}

export default App;
