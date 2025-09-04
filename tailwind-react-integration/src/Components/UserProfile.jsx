// import React from 'react'

function UserProfile() {
  return (
    <div className="user-profile bg-grey-100 p-8 max-w-sm:400px mx-auto rounded-1g shadow-lg my-20">
      <img src="/coffeefarming.jpg" alt="User" className="rounded-full w-36 h-36 mx-auto"/>
      <h1 className="text-x1 text-blue-800 my-4">John Doe</h1>
      <p className="text-grey-600 text-base ">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;