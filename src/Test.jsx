import React, { Component } from 'react'

export default class Test extends Component {

    constructor(props){
        super(props);
        this.state = {
            test : ''
        }
    }
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerids is called');
        
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
