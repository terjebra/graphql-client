import * as React from "react"
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import RoomsList from "./RoomsList";

type Props ={

}
export default class App extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <RoomsList/>
    )
  }
}


