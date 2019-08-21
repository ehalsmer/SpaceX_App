import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import Launch from "./Launch";
import { getLaunches } from "../actions/launchListActions";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Button } from 'semantic-ui-react';

const LaunchList = props => {
  const state = useSelector(state => state);
  return (
    <div className="mainContainer">
          {!state.isLoading && <Button basic onClick={props.getLaunches}>Get Launches</Button>}
          {state.isLoading ? (
            <Loader 
                type="BallTriangle" 
                color="#367a8d" 
                height="100" 
                width="100" 
            />
            ) : (
            state.launches &&
            state.launches.map(launch => (
              <Launch launch={launch} key={launch.flight_number} />
            ))
          )}
    {/* <iframe frameBorder="0" className="telemetry" src="https://www2.flightclub.io/result/2d?code=T18V"/> */}
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getLaunches }
)(LaunchList);
