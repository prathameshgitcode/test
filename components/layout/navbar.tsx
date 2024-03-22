'use client'
import Link from 'next/link';
import { Button, Menu, Dropdown } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

import { logout } from '@/lib/actions/auth.actions';
import { signOut } from 'next-auth/react';

const Navbar = () => {
  const handleLogout = async () => {
    await logout(); // Call your logout function
    await signOut({ callbackUrl: "/signin" });
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        <Link href="/updateuser">
          Update User
        </Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-white font-bold text-xl">Next.js App</h1>
            </Link>
          </div>
          <div className="flex-shrink-0">
            <Dropdown overlay={menu} placement="bottomRight" arrow>
              <Button type="text" className="text-white">
                Options
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
