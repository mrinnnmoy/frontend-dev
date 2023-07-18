import React from 'react';

const Hooks = () => {
  return (
    <div>
      <h2>Hooks</h2>
      <p>
        Hooks were introduced in React version 16.8 as a way to extend additional functionality
        into functional components. Previously this functionality was only available to class
        components, but through hooks we can super charge our functional components!
      </p>
      <ul>
        <li>The mounting phase when a component is created and inserted into the DOM. This is
          the initial render and only happens once in a components lifecycle.
        </li>
        <li>The updating phase is when a component re-renders due to updates. This happens
          either due to prop changes or state changes</li>
        <li>The final phase is the un-mounting phase, when a component is removed from the
          DOM.</li>
      </ul>

      <div className="useState">
        <h3>useState</h3>
        <p>useState hook allows us to store values scoped to a component. Any changes to
          those values will cause the component and any of it’s child components to rerender.
        </p>
      </div>

      <div className="useEffect">
        <h3>useEffect</h3>
        <p>useEffect is a hook that allows us to create side effects in our functional
          components.
        </p>
        <ul>
          <li>The first argument is a callback function called the effect function that contains the
            side effect code we want to run.
          </li>
          <li>The second argument is an array called the dependency array which contains values
            from outside the scope of the effect function. Whenever one of these values changes,
            useEffect will run the effect function.
          </li>
        </ul>
      </div>

      <div className="useLayoutEffect">
        <h3>useLayoutEffect</h3>
        <p>The useLayoutEffect hook is almost identical to the useEffect hook except it runs the
          effect callback immediately after DOM changes.</p>
      </div>

      <div className="useRef">
        <h3>useRef</h3>
        <p>useRef is a hook that stores a value in a component like useState except changes to
          that value won’t cause the component to re-render.
        </p>
      </div>

      <div className="useCallback">
        <h3>useCallback</h3>
        <p>The useCallback hook is a performance improvement hook that prevents functions
          from being needlessly recreated between re-renders.</p>
        <ul>
          <p>The useCallback hook signature takes two arguments: </p>
          <li>The function we want to persist between re-renders.</li>
          <li>A dependency array containing values that tells useCallback when to recreate the
            function when any of them change.</li>
        </ul>
      </div>

      <div className="useMemo">
        <h3>useMemo</h3>
        <p>The useMemo is a performance improvement hook that memoizes the return value of
          a function.</p>
        <p>Memoization is the caching of computed results from a expensive function call and
          returning the cached result when the function is called with the same inputs.
        </p>
        <ul>
          <p>It follows the same signature as useCallback taking two arguments:</p>
          <li>The function we want memoize.</li>
          <li>A dependency array containing values that the function uses. When any of these
            values change it tells useMemo to rerun the function (with the new values) and
            memoize the new return value</li>
        </ul>
      </div>

      <div className="useContext">
        <h3>useContext</h3>
        <p>useContext allows us to access Context without need to use it’s Consumer component.</p>
      </div>

    </div>
  )
};

export default Hooks;