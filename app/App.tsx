import * as React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import RoomsList from "./RoomsList";
import RoomsNotifications from "./RoomsNotifications";
import { PageGrid, SideBar, Content } from "./Grid";

type Props = {};
export default class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <PageGrid>
        <Content>
          <RoomsList />
        </Content>
        <SideBar>
          <RoomsNotifications />
        </SideBar>
      </PageGrid>
    );
  }
}
