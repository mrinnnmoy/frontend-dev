import React from 'react';

const Elements = () => {
  return (
    <div>
      <h2>React Elements</h2>
      <div className="tags">
        <h3>Tags</h3>
        <p>React elements look just like HTML, infact they render the same equivalent HTML elements.</p>
        <ul>
          <p>Example:</p>
          <button>My Button</button>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
        </ul>
        <p>Single tag elements like the img element and the hr element must be closed with a backslash.</p>
        <p>Example:</p>
        <img src="" alt="img-tag" />
        <hr />
      </div>

      <div className="attributes">
        <h3>Attributes</h3>
        <p>Class is a protected keyword in JavaScript so the HTML, class attribute in JSX is, className.</p>
        <p>Example:</p>
        &lt;img className="my-image" src="./" /&gt;
      </div>

      <div className="embedded">
        <h3>Embedded JS</h3>
        <p>You can write JS to render different attributes directly in your JS using curly braces.</p>
      </div>

      <div className="inline">
        <h3>Inline Styles</h3>
        <p>React elements just like HTML elements can use the style attribute, but you pass them
          as javascript objects instead of double quote strings.</p>
      </div>

      <div className="fragments">
        <h3>Fragments</h3>
        <p>React has a special element called a fragment. It’s a special element that doesn’t actually
          render into the DOM, but can act as a parent to a group of elements.</p>
      </div>

      
    </div>
  )
};

export default Elements;