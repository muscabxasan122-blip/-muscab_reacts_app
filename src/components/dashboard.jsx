// Dashboard.jsx

import './dashboard.css'

function Dashboard() {
  const totalDoctors = 25
  const totalPatients = 320
  const totalAppointments = 48
  const totalDepartments = 8

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">
        Hospital Dashboard
      </h1>

      <div className="dashboard-cards">

        <div className="card">
          <h2>Doctors</h2>
          <p>{totalDoctors}</p>
        </div>

        <div className="card">
          <h2>Patients</h2>
          <p>{totalPatients}</p>
        </div>

        <div className="card">
          <h2>Appointments</h2>
          <p>{totalAppointments}</p>
        </div>

        <div className="card">
          <h2>Departments</h2>
          <p>{totalDepartments}</p>
        </div>

      </div>

      <div className="recent-section">
        <h2>Recent Appointments</h2>

        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Ahmed Ali</td>
              <td>Dr Hassan</td>
              <td>24 May 2026</td>
              <td>Completed</td>
            </tr>

            <tr>
              <td>Amina Yusuf</td>
              <td>Dr Fatima</td>
              <td>25 May 2026</td>
              <td>Pending</td>
            </tr>

            <tr>
              <td>Mohamed Noor</td>
              <td>Dr Ibrahim</td>
              <td>26 May 2026</td>
              <td>Cancelled</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard