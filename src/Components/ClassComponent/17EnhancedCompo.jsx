import React, { Component } from 'react'

const EnhancedCompo = (OriginalComponent) => {

    class Newcompo extends Component {
        clickHandle = () => {
            console.log("Called Enhanced Inside");
        }

        render() {
            console.log("Enhanced Component Called");
            return (
                <div>
                    <OriginalComponent clickHandle={this.clickHandle} />
                </div>
            );
        }
    }
    return Newcompo;
}


export default EnhancedCompo;