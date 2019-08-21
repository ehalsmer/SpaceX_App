import React from "react";
import {
  Segment,
  Image,
  Header,
  Container,
  Icon,
  Modal
} from "semantic-ui-react";


const Launch = props => {
  return (
    <Segment>
      <Header as="h1" textAlign="center">
        <Image
          href={props.launch.links.mission_patch}
          size="small"
          alt="Mission Patch"
          src={props.launch.links.mission_patch}
        />
        {props.launch.mission_name}
      </Header>
      <Container text>
        <p>
          <strong>Date:</strong> {props.launch.launch_date_local.slice(0,10)}{" "}
          {props.launch.telemetry.flight_club && (
            <a href={props.launch.telemetry.flight_club}>
              <Icon name="rocket" />
              View Telemetry
            </a>
          )}{" "}
        </p>
        <p><strong>Launch Site:</strong> {props.launch.launch_site.site_name_long}</p>
      </Container>
        


      <div className="imgsContainer">
        {props.launch.links.flickr_images.map(image => {
          return (
            <Modal basic image centered={true} className="modalClass" trigger={            
                <Image
                className="launchImages"
                // href={image}
                alt="Launch image"
                src={image}
              />}>
                    <Image wrapped id="modalImg" src={image} size='big'/>

            </Modal>

          );
        })}
      </div>



      <Container compact textAlign="left" text>
        {props.launch.details}
      </Container>
    </Segment>
  );
};

export default Launch;
