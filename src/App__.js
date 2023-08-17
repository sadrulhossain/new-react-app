import React from "react";
import './assets/css/style.css';
import Images from "./Components/images";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: props.title, isShowing: false };
    }

    handleImageToggle = () => {
        this.setState({ isShowing: !this.state.isShowing });
    };

    render() {
        return (
            <section className="flex justify-center">
                <div className="w-1/2 justify-center">
                    <div className="text-center">
                        <div className="my-4">
                            {this.state.title}
                        </div>
                        <button className="p-1 bg-blue-700 text-white my-2"
                            onClick={ this.handleImageToggle }
                        >
                            Toggle
                        </button>
                    </div>
                    {
                        this.state.isShowing == true ? <Images /> : null
                    }
                </div>
            </section>
        );
    }
}

export default App;