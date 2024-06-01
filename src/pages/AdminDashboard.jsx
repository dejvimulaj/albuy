import React from 'react'
import { RxAvatar } from 'react-icons/rx'

const AdminDashboard = () => {
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
        Title
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
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
          <RxAvatar size={'xl'}></RxAvatar>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
            <div className="text-sm text-gray-500">jane.cooper@example.com</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          Regional Paradigm Technician
        </div>
        <div className="text-sm text-gray-500">Optimization</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#008000c5] text-white">
          Active
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        Admin
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        jane.cooper@example.com
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
        <a href="#" className="ml-2 text-red-600 hover:text-red-900">
          Delete
        </a>
      </td>
    </tr>
   
    {/* More rows... */}
  </tbody>
</table>
    </div>
    
    </>
  )
}

export default AdminDashboard
