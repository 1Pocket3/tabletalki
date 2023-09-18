import React from 'react';
import DataTable from './components/DataTable';

const App = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Referral Event',
        accessor: (row) => `${row.event + row.date}`
      },
      {
        Header: 'Advocate',
        accessor: 'advocate',
      },
      {
        Header: 'Friend',
        accessor: 'friend',
      },
      {
        Header: 'Referral status',
        accessor: 'status',
      },
    ],
    []
  );

  const data = [
    {
      id: 1,
      event: 'Purchase',
      date: '06/17/2020 at 7:13 PM',
      price: 120,
      email: 'email1@example.com',
      advocate: {
        email: 'advocate1@example.com',
        stringAdvocate: 'Advocate',
      },
      friends: {
        email: 'friend1@example.com',
        stringFriend: 'Friend',
      },
      refStatus: {
        status: "Pending",
        action: "Passed fraud checks"
      }
    },
    {
      id: 2,
      event: 'Purchase',
      date: '07/10/2020 at 4:05 AM PDT',
      price: 100,
      email: 'email2@example.com',
      advocate: {
        email: 'advocate2@example.com',
        stringAdvocate: 'Advocate',
      },
      friends: {
        email: 'friend3@example.com',
        stringFriend: 'Friend',
      },
      refStatus: {
        status: "Flagged",
        action: "Marked as fraud"
      }
    },
    {
      id: 3,
      event: 'Purchase',
      date: '06/09/2020 at 12:42 PM PDT',
      price: 28,
      email: 'email3@example.com',
      advocate: {
        email: 'advocate3@example.com',
        stringAdvocate: 'Advocate',
      },
      friends: {
        email: 'friend5@example.com',
        stringFriend: 'Friend',
      },
      refStatus: {
        status: "Approved",
        action: "Passed fraud checks"
      }
    },
    {
      id: 4,
      event: 'Purchase',
      date: '08/07/2020 at 4:20 AM PDT',
      price: 100,
      email: 'email4@example.com',
      advocate: {
        email: 'advocate4@example.com',
        stringAdvocate: 'Advocate',
      },
      friends: {
        email: 'friend7@example.com',
        stringFriend: 'Friend',
      },
      refStatus: {
        status: "Blocked",
        action: "Marked as fraud"
      }
    },
    {
      id: 5,
      event: 'Purchase',
      date: '06/09/2020 at 2:08 AM PDT',
      price: 100,
      email: 'email5@example.com',
      advocate: {
        email: 'advocate5@example.com',
        stringAdvocate: 'Advocate',
      },
      friends: {
        email: 'friend9@example.com',
        stringFriend: 'Friend',
      },
      refStatus: {
        status: "Voided",
        action: "Marked as fraud"
      }
    },
  ];

  return (
    <div>
      <h1>Referrals - 345</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default App;