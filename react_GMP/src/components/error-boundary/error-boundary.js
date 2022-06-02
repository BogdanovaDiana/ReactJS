import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log("Something went wrong.")
    }

    render() {
        if (this.state.hasError) {
            return (
                <img alt="Something went wrong" src="https://wrapcomau.files.wordpress.com/2020/08/mistake-3085712_1920.jpg"/>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
