import React from 'react';
import './App.css';
import "./screens/me_screen"
import MeScreen from "./screens/me_screen";
import FeaturesScreen from "./screens/features_screen";

interface Props {
}

class App extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <MeScreen/>
                <FeaturesScreen/>
            </div>
        );
    }
}

export default App;
