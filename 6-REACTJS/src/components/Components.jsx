import React from 'react';

const Components = () => {
  return (
    <div>
      <h2>Components</h2>
      <p>Components are the building blocks of your web application. We use them to organize
        groups of React elements together so they’re reusable. There are two kinds of
        components, class components and functional components but functional components
        are the de facto standard today. They both follow the same two rules:</p>
      <ul>
        <li>Component names must be capitalized i.e. MyComponent instead of myComponent
        </li>
        <li>They must return JSX, more specifically one parent level JSX element</li>
      </ul>

      <div className="functional">
        <h3>Functional Components</h3>
        <p>Functional components are just javascript functions that return JSX.</p>
        <ul>
          <li>Here is how you create a functional component using function declaration.</li>
          <li>You can also use an arrow function.</li>
          <li>The component can then be used like any React element.</li>
        </ul>
      </div>

      <div className="component">
        <h3>Component Props</h3>
        <p>We can pass data to our components through custom attributes on the component
          element. We can choose any name for the attribute as long they don’t overlap with the
          existing general element attributes.
        </p>
      </div>

      <div className="children">
        <h3>Children Prop</h3>
        <p>All component have a special prop called children . Any data (usually components and
          react elements) sitting between the opening and closing tags of the component get
          passed in as children .
        </p>
      </div>

      <div className="conditional">
        <h3>Conditional Rendering</h3>
        <p>Since our components are written in JSX which is just javascript, we can conditionally
          render different things with javascript. A basic example is to use an if statement in our
          functional component.
        </p>
      </div>

      <div className="lists">
        <h3>Lists in Components</h3>
        <p>If we want to duplicate elements/components, we can do so by looping through an array
          with the .map() method as long as we return JSX from the callback.
        </p>
      </div>

      <div className="memo">
        <h3>Memo</h3>
        <p>Use react.memo allows a component to skip re-rendering if it’s props haven’t
          changed when it’s parent re-renders.</p>
        <ul>
          <li> The functional component we want to memoize.</li>
          <li>An optional function that determines if the component should re-render. It receives
            two arguments, the component’s previous props and its new props.</li>
        </ul>
      </div>

      <div className="context">
        <h3>Context</h3>
        <p>If we had some data values we wanted to share across multiple sibling or nested child
          components, we would have to lift that data up to a commonly shared parent and
          needlessly drill it down through multiple components and their props. </p>
      </div>

    </div>
  )
};

export default Components;