import React from 'react';

const ErrorBoundaries = () => {
  return (
    <div>
      <h2>Error Boundaries</h2>
      <p>Error boundaries are components that catch errors that occur anywhere in their
        child component tree. It allows us to display some fallback UI instead of the
        component that crashed.
      </p>

      <div className="getDerived">
        <h3>getDerivedStateFromError</h3>
        <p>It is a class component we create that has a static getDerivedStateFromError method which
          can update state in response to an error.
        </p>
      </div>

      <div className="componentDidCatch">
        <h3>componentDidCatch</h3>
        <p>The componentDidCatch lifecycle method runs when a child component in its
          component tree throws an error during rendering.
        </p>
        <p>Remember! getDerivedStateFromError is called during the render phase, so it does not
          permit side effects such as logging errors. However, componentDidCatch is called during the
          commit phase, where side effects are allowed such as logging our errors.
        </p>
      </div>

    </div>
  )
};

export default ErrorBoundaries;