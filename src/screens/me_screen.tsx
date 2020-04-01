import React from "react"
import "./style/me_screen.css"
import MyCard from "../custom_components/my_card";
import {Col, Container, Row} from 'react-bootstrap'
import MyMessage from "../custom_components/my_message";

interface Props {
}

class MeScreen extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Container fluid className="screen">
                <Row noGutters>
                    <Col lg={2} md={2} sm={0} xs={0}/>
                    <Col className="first_screen_content" lg={8} md={8} sm={12} xs={12}>
                        <Container>
                            <Row>
                                <Col lg={12} md={12} sm={0} xs={0}/>
                                <Col className="card_column" lg={12} md={12} sm={12} xs={12}>
                                    <MyCard/>
                                </Col>
                                <Col lg={12} md={12} sm={0} xs={0}/>
                            </Row>
                            <Row className="message_row" noGutters>
                                <Col lg={12} md={6} sm={12} xs={12}>
                                    <MyMessage/>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col lg={2} md={2} sm={0} xs={0}/>
                </Row>
            </Container>
        );
    }
}

export default MeScreen;
