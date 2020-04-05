import React from "react"
import "./styles/my_card.css"
import {Col, Container, Row, Button} from 'react-bootstrap'
import me from "../media/me_site.jpg"
import {MdEmail, MdLocationOn} from "react-icons/md"
import {FaTelegramPlane, FaInstagram, FaGithub} from "react-icons/fa"
import {IoLogoVk} from "react-icons/io"
import MyImage from "./my_image";

interface Props {
}

function myContact(icon: any, text: string) {
    return (
        <Container className="myContact">
            <Row noGutters>
                <Col md={1} sm={1} xs={1}>
                    {icon}
                </Col>
                <Col md={11} sm={9} xs={9}>
                    {text}
                </Col>
            </Row>
        </Container>
    );
}

function contactMe() {
    return (
        <Container className="contactMe">
            <Row noGutters>
                <Col md={2} sm={2} xs={2}>
                    <Button size="sm" className="contactMeVk" href="https://vk.com/obliv1on">
                        <IoLogoVk/>
                    </Button>
                </Col>
                <Col md={1} sm={1} xs={1}/>
                <Col md={2} sm={2} xs={2}>
                    <Button size="sm" className="contactMeTelegram" href="https://t.me/johan_DDC">
                        <FaTelegramPlane/>
                    </Button>
                </Col>
                <Col md={1} sm={1} xs={1}/>
                <Col md={2} sm={2} xs={2}>
                    <Button size="sm" className="contactMeInstagram" variant="light" href="https://instagram.com/johan_ddc">
                        <FaInstagram color="white"/>
                    </Button>
                </Col>
                <Col md={1} sm={1} xs={1}/>
                <Col md={2} sm={2} xs={2}>
                    <Button size="sm" className="contactMeGithub" variant="dark" href="https://github.com/theborderliner">
                        <FaGithub/>
                    </Button>
                </Col>
                <Col md={1} sm={1} xs={1}/>
            </Row>
        </Container>
    )
}

class MyCard extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Container className="my_card">
                <Row>
                    <Col className="myDecsription" lg={5} md={6} sm={12} xs={12}>
                        <div className="myName">Ivan Peshekhonov</div>
                        <div className="myProfession">Data science student</div>
                        {myContact(<MdEmail/>, "idpeshekhonov@edu.hse.ru")}
                        {myContact(<FaTelegramPlane/>, "@Johan_DDC")}
                        {myContact(<MdLocationOn/>, "Moscow/Russia")}
                        {contactMe()}
                    </Col>
                    <Col lg={3} md={0} sm={0} xs={0}/>
                    <Col className="myPhoto" lg={4} md={6} sm={12} xs={12}>
                        <MyImage src={me} size={170}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MyCard;
