import React from 'react';

const LifeCycle = () => {
  return (
    <div>
      <h2>LifeCycle Methods</h2>
      <p>Class components also have methods that hook into React’s rendering and re-rendering
        cycles called lifecycle methods.</p>

      <div className="componentDidMount">
        <h3>componentDidMount</h3>
        <p>The componentDidMount method calls after react mounts the component to the DOM.</p>
      </div>

      <div className="componentWillunmount">
        <h3>componentWillUnmount</h3>
        <p>The componentWillUnmount method is called immediately before the component
          unmounts. It is commonly used for cleanup.
        </p>
      </div>

      <div className="componentDidUpdate">
        <h3>componentDidUpdate</h3>
        <p>The componentDidUpdate method is called immediately after the component has rerendered from state or prop changes (ignoring the initial render).
        </p>
      </div>

    </div>
  )
};

export default LifeCycle;