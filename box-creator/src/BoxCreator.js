import React, { Component } from 'react'

export class BoxCreator extends Component {
    render() {
        return (
            <div>
                <h1>BOX CREATOR</h1>
                <form>
                    <label htmlFor="height">HEIGHT(In px):</label>
                    <input 
                        name="height"
                        id="height"
                        placeholder="height"
                    />
                    <label htmlFor="width">WIDTH(In px):</label>
                    <input 
                        name="width"
                        id="width"
                        placeholder="width"
                    />
                    <label htmlFor="color">COLOR:</label>
                    <input 
                        name="color"
                        id="color"
                        placeholder="color"
                    />
                    <button>CREATE BOX</button>
                </form>
            </div>
        )
    }
}

export default BoxCreator
