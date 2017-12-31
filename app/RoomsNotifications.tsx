import * as React from "react";
import { graphql, QueryProps } from "react-apollo";
import gql from "graphql-tag";
import { SFC } from "react";

type Room = {
  id: string;
  name: string;
};

type RoomRegisteredSubscription = {
  roomRegistered: Room;
};

type Props = RoomRegisteredSubscription & QueryProps;

const RoomRegistered = gql`
  subscription RoomRegistered {
    roomRegistered {
      id
      name
    }
  }
`;

class RoomsNotification extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <div>{"Notifications"}</div>
        <ul>
          {this.props.roomRegistered && (
            <li key={this.props.roomRegistered.id}>
              {this.props.roomRegistered.name}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default graphql<RoomRegisteredSubscription, {}, Props>(RoomRegistered, {
  props: ({ data }) => ({
    ...data
  })
})(RoomsNotification);
