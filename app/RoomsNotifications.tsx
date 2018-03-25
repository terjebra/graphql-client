import * as React from "react";
import { Subscription } from "react-apollo";
import gql from "graphql-tag";

type Room = {
  id: string;
  name: string;
};

type RoomRegistered = {
  roomRegistered: Room;
};

const ROOM_REGISTERED = gql`
  subscription RoomRegistered {
    roomRegistered {
      id
      name
    }
  }
`;

class RoomsNotificationSubscription extends Subscription<RoomRegistered, {}> {}

const RoomsNotification: React.StatelessComponent<{}> = () => {
  return (
    <RoomsNotificationSubscription subscription={ROOM_REGISTERED}>
      {result => {
        return (
          <div>
            <div>{"Notifications"}</div>
            <ul>
              {result && result.data ? (
                <li key={result.data.roomRegistered.id}>
                  {result.data.roomRegistered.name}
                </li>
              ) : (
                <div />
              )}
            </ul>
          </div>
        );
      }}
    </RoomsNotificationSubscription>
  );
};

export default RoomsNotification;
