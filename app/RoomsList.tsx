import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

type Room = {
  id: string;
  name: string;
};

type GetRoomsQuery = {
  rooms: Array<Room>;
};

const GET_ROOMS = gql`
  query GetRooms {
    rooms {
      id
      name
    }
  }
`;

class RoomsQuery extends Query<GetRoomsQuery, {}> {}

const RoomsList: React.StatelessComponent<{}> = () => {
  return (
    <RoomsQuery query={GET_ROOMS}>
      {({ loading, data, error }) => {
        if (loading) return <div>Loading</div>;
        return (
          <div>
            <div>{"Rooms"}</div>
            <ul>
              {data ? (
                data.rooms.map((room: Room) => {
                  return <li key={room.id}>{room.name}</li>;
                })
              ) : (
                <div />
              )}
            </ul>
          </div>
        );
      }}
    </RoomsQuery>
  );
};

export default RoomsList;
