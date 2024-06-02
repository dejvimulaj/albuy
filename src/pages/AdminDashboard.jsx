import React, { useEffect, useState } from 'react'
import { RxAvatar } from 'react-icons/rx'
import axios from '../hooks/axios';
import { useAuthContext } from '../hooks/useAuthContext';

const AdminDashboard = () => {
  const [users, setUsers] = useState(null);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('accessToken'); 
      const response = await axios.get('/api/users', 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }}
      )
      setUsers(response?.data?._embedded.users);
      console.log(response?.data?._embedded.users)
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  useEffect(() => {
        fetchUsers()
  }, []);


  return (
    <>
    <h1 className='neon flex justify-center pt-10 text-3xl font-bold text-gray-500'>Users</h1>
  <hr className="mt-4 mb-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-25 dark:via-neutral-400" />
    <div className='mb-[460px]'>
  <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
  <thead className="bg-gray-50">
    <tr>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
        Name
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
        Company
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
        Status
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
        Role
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
        Email
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
        Actions
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200 ">
        {users && users.map((user) => (
    <tr key={user._links.self.href}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
          <RxAvatar size={'40px'}></RxAvatar>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{user.first_name} {user.second_name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {user.company_name}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#008000c5] text-white">
          Active
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {user.role}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {user.email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
        <a onClick={async ()=>{
          const url = user._links.self.href ;
          const segments = url.split('/'); // Split the URL by '/'
          const lastValue = segments[segments.length - 1];
          const token = localStorage.getItem('accessToken'); 
    try {
      const response = await axios.delete(`/api/users/${lastValue}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }}
      );
        fetchUsers()
    } catch (err) { 
        console.log(err)
    }
        }} className="ml-2 text-red-600 hover:text-red-900 cursor-pointer">
          Delete
        </a>
      </td>
    </tr>
    
    ))}
  </tbody>
</table>
    </div>
    
    </>
  )
}

export default AdminDashboard
