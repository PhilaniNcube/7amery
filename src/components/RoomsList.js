import React from 'react';
import Room from './Room';

const RoomsList = ({ rooms }) => {
  if (rooms.lenth === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately there are no rooms matching your search terms</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
