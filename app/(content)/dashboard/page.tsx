// import UserProfile from '@/components/form/getProfile'
'use client'
import UserProfile from '@/components/dashboard/userInfo'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Profile: React.FC = () =>{
  const {data:session} = useSession();
  const router = useRouter()

  const handleBackToDashboard = () => {
    router.push('/dashboard')
  };
  

  return (
    <div>
       {/* <Button
        type="default"
        onClick={handleBackToDashboard}
        style={{ position: 'absolute', top: 16, left: 16 }}
      >
        <ArrowLeftOutlined />
        Back to Dashboard
      </Button> */}
     <UserProfile/>

    </div>
  )
}

export default Profile




// Make sure to install the necessary Ant Design components
// npm install antd
// "use client"
// import { useEffect, useState } from 'react';
// import { Form, Input, Typography, Spin } from 'antd';

// import { report } from 'process';
// import fetchReports from '@/lib/actions/reports';


// interface ReportsData {
//   id: string;
//   name: string;
//   email: string;
//   account: string;
//   verified: string;
//   sender: string;
//   roles: string[];
//   created_at: string;
//   modified_at: string;
// }

// const UserProfile: React.FC = () => {
//   const [reportsData, setReportsData] = useState<ReportsData | undefined>(undefined);

//   useEffect(() => {
//     const getReportsData = async () => {
//       try {
//         console.log("dataaaaa")
//         const data = await fetchReports();
//         setReportsData(data?.data?.user);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getReportsData();
//   }, []);
//   console.log(reportsData, "rrrrrrrrrr")

//   return (
//     <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
//       <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
//         {reportsData ? (
//           <Form className="mt-6" initialValues={reportsData}>
//             <Form.Item className="mt-1 block text-sm font-semibold text-gray-800" label="User ID" name="id">
//               <Input readOnly className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" />
//             </Form.Item>
//             <Form.Item  className="mb-2 block text-sm font-semibold text-gray-800"  label="Name" name="name">
//               <Input readOnly className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
//             </Form.Item>
//             <Form.Item  className="mb-2 block text-sm font-semibold text-gray-800"  label="Email" name="email">
//               <Input readOnly className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
//             </Form.Item>
//             <Form.Item className="mb-2 block text-sm font-semibold text-gray-800" label="Account ID" name="account">
//               <Input readOnly className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
//             </Form.Item>
//             <Form.Item className="mb-2 block text-sm font-semibold text-gray-800" label="Verified" name="verified">
//               <Input readOnly className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
//             </Form.Item>
//             <Form.Item className="mb-2 block text-sm font-semibold text-gray-800" label="Senders" name="senders">
//               <Input readOnly className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
//             </Form.Item>
//             <Form.Item className="mb-2 block text-sm font-semibold text-gray-800" label="Roles" name="roles">
//               <Input readOnly className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
//             </Form.Item>
//             <Form.Item className="mb-2 block text-sm font-semibold text-gray-800" label="Created At" name="created_at">
//               <Input readOnly className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
//             </Form.Item>
//             <Form.Item className="mb-2 block text-sm font-semibold text-gray-800" label="Modified At" name="updated_at">
//               <Input readOnly className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
//             </Form.Item>
//           </Form>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default UserProfile;