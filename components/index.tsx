import SideBar from './SideBar';
import AppBar from './AppBar';
import React from 'react';

function MainComponent() {
  return (
    <div className="flex h-16 items-center justify-between">
      {/* <h2 className="pl-5 text-2xl font-bold tracking-tight text-gray-900">Finance Dashboard</h2> */}
      <nav className="space-x-4 lg:space-x-6">
        <SideBar />
      </nav>
      <div className="mx-6 flex">
        <AppBar />
      </div>
    </div>
  );
}

export default MainComponent;