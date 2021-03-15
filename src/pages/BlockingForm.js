// Sometimes you want to prevent the user from
// navigating away from a page. The most common
// use case is when they have entered some data
// into a form but haven't submitted it yet, and
// you don't want them to lose it.

import React, { useState } from 'react';
import { Prompt } from 'react-router-dom';

export default function BlockingForm() {
  let [blocking, setBlocking] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.target.reset();
        setBlocking(false);
      }}
    >
      <Prompt when={blocking} message={(location) => `Are you sure you want to go to ${location.pathname}`} />

      <p>
        {blocking ? 'You typed something, alert will show if you navigate away' : 'You are free to go to other tabs'}
      </p>

      <p>
        <input
          size='50'
          placeholder='type something to block transitions'
          onChange={(event) => {
            setBlocking(event.target.value.length > 0);
          }}
        />
      </p>

      <p>
        <button>Submit to stop blocking</button>
      </p>
    </form>
  );
}
