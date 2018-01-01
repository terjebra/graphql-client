import * as React from "react";
import { graphql, QueryProps } from "react-apollo";
import gql from "graphql-tag";
import { SFC } from "react";

type Room = {
  id: string;
  name: string;
};

type GetRoomsQuery = {
  rooms: Array<Room>;
};

type Props = GetRoomsQuery & QueryProps;

const GetRooms = gql`
  query GetRooms {
    rooms {
      id
      name
    }
  }
`;

const RoomsList: React.StatelessComponent<Props> = (props: Props) => {
  if (props.loading) return <div>Loading</div>;
  return (
    <div>
      <div>{"Rooms"}</div>
      <ul>
        {props.rooms.map((room: Room) => {
          return <li key={room.id}>{room.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default graphql<GetRoomsQuery, {}, Props>(GetRooms, {
  props: ({ data }) => ({
    ...data
  })
})(RoomsList);
