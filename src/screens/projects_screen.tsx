import React from 'react';
import "./style/projects_screen.css"
import {Col, Container, Row, Carousel} from 'react-bootstrap'
import logoB from "../media/LogoB.png"
import one from "../media/booklet/one.png"
import two from "../media/booklet/two.png"
import three from "../media/booklet/three.png"
import MyImage from "../custom_components/my_image";

interface Props {
}

class ProjectsScreen extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Container className="booklet_screen" fluid>
                <Row>
                    <Col xl={5} lg={5} md={5} sm={12} xs={12} className="bookletIconColumn">
                        <div className="bookletIcon">
                            <img src={logoB} width="80%" height="50%"/>
                        </div>
                    </Col>
                    <Col className="booklet_content_column" xl={7} lg={7} md={7} sm={12} xs={12}>
                        <Container fluid className="booklet_content_container">
                            <Row>
                                <Col className="booklet_carousel_column" xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={one}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={two}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={three}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <div className="booklet_decription">
                                        "Booklet" is an unofficial diary-application for Russian schools.
                                        It supports many official Russian online educational systems.
                                        Booklet is based on the idea that learning should be perceived
                                        as a game, where pupils can complete "quests" and gain an
                                        "experience", upgrade ones levels an be higher in "class top".
                                        It has been developed by a team of designer, Android-developer and
                                        Backend-developer (me), but later team was reorganized and I`ve become
                                        developer for web apps platform which is called VK Mini apps.
                                        <div>
                                            <a className="project_link" href="#">Link to the project</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProjectsScreen;
