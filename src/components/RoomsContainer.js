import Loading from './Loading';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../context';

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomContainer);

// import React, { Fragment } from 'react';
// import { RoomConsumer } from '../context';
// import Loading from './Loading';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <Fragment>
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </Fragment>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
