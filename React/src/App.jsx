import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const batch = "SMIT-TTS-9-11-(HO)"
  const students = [
    {
      Name: "Ali",
      rollNo: 123456,
      timing: "9AM - 11AM",
      Campus: "Head Office"
    },
    {
      Name: "Subhan",
      rollNo: 123465,
      timing: "9AM - 11AM",
      Campus: "Head Office"
    },
    {
      Name: "Muhammad",
      rollNo: 123546,
      timing: "9AM - 11AM",
      Campus: "Head Office"
    },
    {
      Name: "Sajid",
      rollNo: 220490,
      timing: "9AM - 11AM",
      Campus: "Head Office"
    },
    {
      Name: "Kamran",
      rollNo: 220989,
      timing: "9AM - 11AM",
      Campus: "Head Office"
    },
    {
      Name: "Ibrahim",
      rollNo: 226787,
      timing: "9AM - 11AM",
      Campus: "Head Office"
    }
  ]

  return (
    <div>
      <h1>Our Batch Is {batch}</h1>
      <table>
        <thead>
          <tr>
            <th>Index No</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Class Timing</th>
            <th>Campus</th>
          </tr>
        </thead>
        <tbody>
          {students.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.Name}</td>
                <td>{data.rollNo}</td>
                <td>{data.timing}</td>
                <td>{data.Campus}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App
