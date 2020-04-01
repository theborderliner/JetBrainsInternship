import React from 'react';
import "./styles/educational_window.css"
import {Col, Container, Row} from 'react-bootstrap'

interface Props {
    icon?: React.Component,
    title: string,
    subtitle: string,
    fromTo: string,
    comment: string,
    link?: string ,
}

class EducationalWindow extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="eduWindowBackground">
                <div className="eduWindowMain">
                    <Container className="eduWindowInfo">
                        <Row noGutters>
                            <div className="eduWindowTitle">
                                {this.props.title}
                            </div>
                        </Row>
                        <Row noGutters>
                            <div className="eduWindowSubtitle">
                                {this.props.subtitle}
                            </div>
                        </Row>
                        <Row noGutters>
                            <div className="eduWindowFromTo">
                                {this.props.fromTo}
                            </div>
                        </Row>
                    </Container>
                    <div className="eduWindowComment"></div>
                </div>
            </div>
        );
    }
}

export default EducationalWindow;
