import React, { Component } from 'react'

export default class FunctionalCompoIntro extends Component {
  render() {
    return (
      <div>
          <p>Functional Component</p>  
          <p>functional is build with function keyword else with the help of arrow</p>
          <p>Functional components are simpler to write and easier to reason about than class components. They are stateless and do not have their own state. However, with the introduction of React Hooks in version 16.8, functional components can now use state with the useState hook.</p>
          
        <h4>what is function?</h4>
            <p>A React functional component is a simple JavaScript function that accepts props and returns a React element.</p>

            <h4>what is state?</h4>
            <p>The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.</p>

            <h4>what is component?</h4>
            <p>component are small peace of web page</p>

            <h4>what is Props?</h4>
            <p> the props are a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. Basically, these props components are read-only components.</p>


            <h4>what is Hooks?</h4>
            <p>React Hooks are simple JavaScript functions that we can use to <span style={{ fontWeight: "bold" }}>isolate</span> the reusable part from a functional component.</p>
      </div>
    )
  }
}
