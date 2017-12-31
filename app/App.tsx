import * as React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import RoomsList from "./RoomsList";
import RoomsNotifications from "./RoomsNotifications";

type Props = {};
export default class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RoomsList />
        <RoomsNotifications />
      </div>
    );
  }
}
