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

type Variables = {};
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
    <ul>
      {props.rooms.map((room: Room) => {
        return <li key={room.id}>{room.name}</li>;
      })}
    </ul>
  );
};

export default graphql<GetRoomsQuery, Variables, Props>(GetRooms, {
  props: ({ data }) => ({
    ...data
  })
})(RoomsList);
