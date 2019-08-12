import React from "react";
import List from "../compornent";
import { setName, deleteName, upCount,downCount} from '../redux';
import { connect } from 'react-redux';
import { store } from '../redux';


const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = {
  // importしたactionCreatorを記述。
  setName,
  deleteName,
  downCount,
  upCount,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)