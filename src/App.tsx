import React from 'react';
import './App.css';
import "./screens/me_screen"
import MeScreen from "./screens/me_screen";

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
            </div>
        );
    }
}

export default App;
