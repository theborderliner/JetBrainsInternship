import React from 'react';
import "./styles/my_message.css"
import {Col, Container, Row, Button} from 'react-bootstrap'

interface Props {
}

class MyMessage extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Container className="my_message">
                <Row className="topBar">
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="my_message_text">
                            Hello. I'm Vanya, nineteen-years-old student of Faculty of Computer Science of
                            Higher School of Economics. I'm interested in programming since I was 15, and now I have
                            some skills in web development. Having confident including HTML5, CSS3, JSON, JavaScript(ES6+),
                            React JS, Bootstrap.
                            Not such confident, but still having skills in Python Django, C++, React Native.
                        </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <Container className="my_message_buttons">
                            <Row>
                                <Col lg={1} md={1} sm={0} xs={0}/>
                                <Col lg={5} md={5} sm={6} xs={6}>
                                    <Button id="view_my_projects" variant="success">View my projects</Button>
                                </Col>
                                <Col lg={5} md={5} sm={6} xs={6}>
                                    <Button id="view_my_github" variant="success">View my GitHub</Button>
                                </Col>
                                <Col lg={1} md={1} sm={0} xs={0}/>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MyMessage;
