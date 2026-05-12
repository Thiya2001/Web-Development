import React from 'react'

function User({name, email, mobile, Gender, age}) {
  return (
    <div>
        <h1>{name}</h1>
        <h2>{email}</h2>
        <h3>{mobile}</h3>
        <h4>{Gender}</h4>
        <h4>{age}</h4>
    </div>
  );
}

export default User