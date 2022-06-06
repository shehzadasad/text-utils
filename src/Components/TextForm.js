import React, { useState } from 'react'
export default function (props) {
  document.title = props.pageTitle

  const upperCaseFunc = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }
  const lowerCaseFunc = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }
  const clearTextareaFunc = () => {
    setText('')
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('')
  return (
    <>
      <div className=" container">
        <div className="my-3">
          <h1 className=" fs-3 fw-bold my-3">{props.title}</h1>
          <textarea
            style={{
              height: '200px',
              background: props.mode === 'light' ? 'white' : '#C2C3C4',
              border: '2px solid black',
            }}
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            placeholder="Enter text here..."
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className="btn btn-primary d-block d-md-inline-flex"
          onClick={upperCaseFunc}
        >
          Convert To Uppercase
        </button>
        <button
          className="btn btn-warning ms-md-2 mt-2 mt-md-0 d-block d-md-inline-flex"
          onClick={lowerCaseFunc}
        >
          Convert To Lowercase
        </button>
        <button
          className="btn btn-danger ms-md-2 mt-2 mt-md-0 d-block d-md-inline-flex"
          onClick={clearTextareaFunc}
        >
          Clear Textarea
        </button>
      </div>
      <div className="container my-3">
        <h1 className=" fs-3 fw-bold my-3">Your Text Summary:</h1>
        <ul
          style={{
            border: '2px solid black',
          }}
          className="list-group col-md-3 col-12"
        >
          <li
            style={{
              background: props.mode === 'light' ? 'white' : '#C2C3C4',
              borderBottom: '2px solid black',
              color: props.mode === 'light' ? 'black' : 'black',
            }}
            className="list-group-item"
          >
            <span className=" fw-bold">Words: </span>
            {text.length > 0 ? text.trim().split(' ').length : 0}
          </li>
          <li
            style={{
              background: props.mode === 'light' ? 'white' : '#C2C3C4',
              borderBottom: '2px solid black',
              color: props.mode === 'light' ? 'black' : 'black',
            }}
            className="list-group-item"
          >
            <span className=" fw-bold">Characters: </span>
            {text.length}
          </li>
          <li
            style={{
              background: props.mode === 'light' ? 'white' : '#C2C3C4',
              color: props.mode === 'light' ? 'black' : 'black',
            }}
            className="list-group-item"
          >
            <span className=" fw-bold">Total Reading Time: </span>
            {text.trim().split(' ').length * 0.008} Minutes
          </li>
        </ul>
      </div>
      <div className="container my-3">
        <h1 className=" fs-3 fw-bold my-3">Text Preview:</h1>
        <p
          style={{
            overflow: 'auto',
            height: '200px',
            background: props.mode === 'light' ? '#C2C3C4' : '#C2C3C4',
            color: props.mode === 'light' ? 'black' : 'black',
          }}
          className=" lead pb-3 p-3 rounded rounded-3"
        >
          {text.length > 0
            ? text
            : 'Your text will be previewed here, just type anything above...'}
        </p>
      </div>
    </>
  )
}
