import React from 'react';
import "./styles/my_image.css"

interface Props {
    src: string,
    size: number,
}

class MyImage extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        const component = document.getElementById("myImage");
        // @ts-ignore
        console.log(this.props.size, component.height);
        // @ts-ignore
        component.width = `${component.height}`;
    }

    render() {
        return (
            <div className="my_image">
                <img id="myImage" height={`${this.props.size}`} src={this.props.src}/>
            </div>
        );
    }
}

export default MyImage;
