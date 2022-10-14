import { useState, useEffect } from "react";

function Dashboard() {
  const[student, setStudent] = useState(null)
  useEffect(() => {
    fetch("/students")
    .then((response) => {
      if (response.ok) {
        response.json().then((student) => setStudent(student));
      }
    });
  }, [])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard