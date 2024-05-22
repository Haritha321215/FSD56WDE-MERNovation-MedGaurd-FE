import React from 'react'

function NotificationCenter() {
  return (
    <div className="mt-4">
      <h3>Notifications</h3>
      <ul className="list-group">
        {/* This is where notification items would be rendered */}
        <li className="list-group-item">Medication reminder: Aspirin at 8:00 AM</li>
        <li className="list-group-item">Medication reminder: Insulin at 12:00 PM</li>
      </ul>
    </div>
  )
}

export default NotificationCenter