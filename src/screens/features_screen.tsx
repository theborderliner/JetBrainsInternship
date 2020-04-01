import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import "./style/features_screen.css"
import {GoBook} from "react-icons/go"
import EducationalWindow from "../custom_components/educational_window";

interface Props {
}

const education_title = (
    <Container className="educationTitleContainer">
        <Row noGutters>
            <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                <div className="educationTitleIcon">
                    <GoBook color="#fff" size={18}/>
                </div>
            </Col>
            <Col xl={1} lg={1} md={1} sm={1} xs={1} />
            <Col xl={8} lg={8} md={8} sm={8} xs={8} className="educationTitleText">
                Education
            </Col>
        </Row>
    </Container>
);

class FeaturesScreen extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Container fluid className="screen">
                <Row className="my_education">
                    <Col xl={4} lg={4} md={2} sm={3} xs={3}/>
                    <Col xl={4} lg={4} md={4} sm={6} xs={6}>
                        {education_title}
                        <EducationalWindow  title="HSE" subtitle="hse" fromTo="till now" comment="My place" />
                    </Col>
                    <Col xl={4} lg={4} md={2} sm={3} xs={3}/>
                </Row>
            </Container>
        );
    }
}

export default FeaturesScreen;
