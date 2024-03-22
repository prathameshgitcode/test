'use client'
import { useEffect, useState } from 'react';
import { Form, Input } from 'antd';


import { userData } from '@/lib/actions/auth.actions';

interface ReportsData {
  id: string;
  name: string;
  email: string;
  account: string;
  verified: string;
  sender: string;
  roles: string[];
  created_at: string;
  modified_at: string;
}

const UserProfile: React.FC = () => {
  const [reportsData, setReportsData] = useState<ReportsData | undefined>(undefined);
  useEffect(() => {
    const getReportsData = async () => {
      try {
        const data = await userData();
        if (typeof data === 'object' && data.hasOwnProperty('data') && data.data.hasOwnProperty('user')) {
          setReportsData(data.data.user);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        console.error(error);
        // Handle error appropriately, e.g., show error message
      }
    };
    getReportsData();
  }, []);
  

  console.log(reportsData, "rrrrrrrrrr")

  return (
  <div className="bg-gray-100 min-h-screen flex items-center justify-center m-8 ">
      <div className="shadow-lg shadow-bodydark p-1 rounded-lg border-4 w-[40rem]  border-blue-300">
        {/* <img className="w-14 h-14 rounded-full mx-auto mb-4" src="./noavatar.png" alt="" /> */}
        {reportsData ? (
          <Form initialValues={reportsData}
          className='rounded-xl shadow-lg p-8 m-0 w-full'
          >
            <Form.Item label="User ID" name="id">
              <Input readOnly />
            </Form.Item>
            <Form.Item label="Name" name="name">
              <Input readOnly />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input readOnly />
            </Form.Item>
            <Form.Item label="Account ID" name="account">
              <Input readOnly />
            </Form.Item>
            <Form.Item label="Verified" name="verified">
              <Input readOnly />
            </Form.Item>
            <Form.Item label="Senders" name="senders">
              <Input readOnly />
            </Form.Item>
            <Form.Item label="Roles" name="roles">
              <Input readOnly />
            </Form.Item>
            <Form.Item label="Created At" name="created_at">
              <Input readOnly />
            </Form.Item>
            <Form.Item label="Modified At" name="updated_at">
              <Input readOnly />
            </Form.Item>
          </Form>
        ) : null}
      </div>
    </div>
  );
};
export default UserProfile;