import React from 'react';

const ComponentClass = () => {
  return (
    <div>
      <h2>Class Component</h2>
      <p>Class components are the other type of component we can write. The common practice is
        to use functional components but there are some existing use cases that still call for class
        components. The JSX for the component is returned from the render method.
      </p>

      <div className="constructor">
        <h3>Constructor</h3>
        <p>The constructor method runs before the class component mounts.</p>
        <ul>
          <li>Typically used to declare the initial state and bind custom class methods to the class
            instance.</li>
          <li>However, modern javascript syntax does not require a constructor . We can just use public
            class fields.</li>
          <li>You access all methods, props and state of the class instance with the this keyword.</li>
        </ul>
      </div>

      <div className="state">
        <h3>State</h3>
        <p>After initializing state in the component, the class instance has a setState method that
          you must use if you wish to update the state. Do not mutate the state object!</p>
      </div>
    </div>
  )
};

export default ComponentClass;