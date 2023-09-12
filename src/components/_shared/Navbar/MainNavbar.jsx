import React, { useState } from 'react';
import CustomButton from '../CustomButton';
import {
  Dropdown,
  Space,
  Button,
  Drawer,
  Modal,
  Form,
  Input,
  Collapse,
} from 'antd';
import Typography from '../Typography';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiChevronRight } from 'react-icons/bi';
import Logo from '../../../assets/Images/sagara-logo-bl.png';

export default function MainNavbar() {
  const [form] = Form.useForm();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    company: '',
    need: '',
  };

  const collapseItem = [
    {
      key: 1,
      label: <p style={{ color: 'white' }}>Consult With Sagara</p>,
      onClick: () => setModalOpen(true),
      style: { borderBottom: '1px solid #404040' },
      showArrow: false,
      collapsible: 'disabled',
    },
    {
      key: 2,
      label: <p style={{ color: 'white' }}>Whitepapers</p>,
      children: (
        <Link to='/whitepapers/explore-whitepapers' style={{ color: 'white' }}>
          Explore Whitepapers
        </Link>
      ),
      style: { borderBottom: '1px solid #404040' },
      extra: (
        <div className='rounded-full w-5 text-center text-white bg-[#e31937]'>
          1
        </div>
      ),
    },
    {
      key: 3,
      label: <p style={{ color: 'white' }}>About Us</p>,
      children: (
        <div className='flex flex-col gap-4'>
          <Link to='/about-us/our-teams' style={{ color: 'white' }}>
            Our Team
          </Link>
          <Link to='/about-us/sagara-research' style={{ color: 'white' }}>
            What is Sagara Research
          </Link>
        </div>
      ),
      style: { borderBottom: '1px solid #404040' },
      extra: (
        <div className='rounded-full w-5 text-center text-white bg-[#e31937]'>
          2
        </div>
      ),
    },
  ];

  const modalOk = () => {
    form.submit();
  };

  const onCancel = () => {
    setModalOpen(false);
  };

  const handleSubmit = (value) => {
    setModalOpen(false);
    console.log(value);
    form.resetFields();
  };

  return (
    <>
      <nav className='flex fixed z-[999] bg-white w-full items-center justify-between box-border py-4 px-[10px] md:px-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.12)]'>
        <div className='flex gap-[70px]'>
          <div>
            <Link to='/'>
              <img src={Logo} className='w-[124px]' alt='' />
            </Link>
          </div>
          <div className='hidden md:flex items-center gap-[30px]'>
            <div
              onClick={() => setModalOpen(true)}
              className='cursor-pointer hover:text-red-600 duration-300'
            >
              <Typography.MediumText text='Consult With Sagara' />
            </div>
            <Dropdown
              className='text-black'
              menu={{
                items: [
                  {
                    key: 0,
                    label: (
                      <Link to='/whitepapers/explore-whitepapers'>
                        <Typography.MediumText text='Explore Whitepapers' />
                      </Link>
                    ),
                  },
                ],
              }}
            >
              <Space className='group'>
                <Typography.MediumText
                  text='Whitepapers'
                  className='group-hover:text-red-600 duration-300'
                />
                <DownOutlined className='group-hover:text-red-600 duration-300' />
              </Space>
            </Dropdown>
            <Dropdown
              className='text-black'
              menu={{
                items: [
                  {
                    label: (
                      <Link to='/about-us/our-teams'>
                        <Typography.MediumText text='Our Teams' />
                      </Link>
                    ),
                    key: 0,
                  },
                  {
                    label: (
                      <Link to='/about-us/sagara-research'>
                        <Typography.MediumText text='What is Sagara Research' />
                      </Link>
                    ),
                    key: 1,
                  },
                ],
              }}
            >
              <Space className='group'>
                <Typography.MediumText
                  text='About Us'
                  className='group-hover:text-red-600 duration-300'
                />
                <DownOutlined className='group-hover:text-red-600 duration-300' />
              </Space>
            </Dropdown>
          </div>
        </div>
        <div className='flex flex-row gap-4 items-center'>
          <Link to='/contact-us'>
            <CustomButton text='Contact Us' />
          </Link>
          <div className='md:hidden'>
            <Button
              style={{
                borderRadius: '4px',
                backgroundColor: '#eee',
                border: 'none',
              }}
              size='large'
              onClick={() => setDrawerOpen(true)}
            >
              <GiHamburgerMenu style={{ color: '#555' }} />
            </Button>
          </div>
        </div>
      </nav>
      <Drawer
        title={<span style={{ color: 'white' }}>Menu</span>}
        placement='left'
        closable={false}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width={300}
        headerStyle={{ textAlign: 'center', backgroundColor: '#262626' }}
        bodyStyle={{ padding: '0', backgroundColor: '#2a2a2a' }}
        style={{ color: 'white' }}
      >
        <div className='flex flex-col'>
          <Collapse
            accordion
            ghost
            bordered={false}
            items={collapseItem}
            expandIconPosition='end'
            expandIcon={(e) => {
              return (
                <BiChevronRight
                  color='white'
                  size={24}
                  className={`transition ${
                    e.isActive ? 'rotate-90' : 'rotate-0'
                  }`}
                />
              );
            }}
            style={{ color: 'white' }}
          />
        </div>
      </Drawer>
      <Modal
        title='Tell Us What You Need'
        open={modalOpen}
        destroyOnClose
        onOk={modalOk}
        onCancel={onCancel}
        okText='Submit'
        cancelText='Close'
        cancelButtonProps={{
          style: { backgroundColor: '#6c757d', color: 'white' },
        }}
        okButtonProps={{
          style: { backgroundColor: '#a51535', color: 'white' },
        }}
      >
        <div className='py-4'>
          <Form
            onFinish={handleSubmit}
            form={form}
            autoComplete='off'
            initialValues={initialValues}
          >
            <div className='flex flex-col gap-1'>
              <Form.Item
                name='name'
                rules={[{ required: true, message: 'This field is required' }]}
              >
                <Input size='large' placeholder='Name' />
              </Form.Item>
              <Form.Item
                name='email'
                rules={[
                  { required: true, message: 'This field is required' },
                  { type: 'email', message: 'Please input correct email' },
                ]}
              >
                <Input size='large' placeholder='Email' />
              </Form.Item>
              <Form.Item
                name='phone'
                rules={[{ required: true, message: 'This field is required' }]}
              >
                <Input size='large' placeholder='Phone' />
              </Form.Item>
              <Form.Item
                name='company'
                rules={[{ required: true, message: 'This field is required' }]}
              >
                <Input size='large' placeholder='Company' />
              </Form.Item>
              <Form.Item
                name='need'
                rules={[{ required: true, message: 'This field is required' }]}
              >
                <Input.TextArea
                  size='large'
                  placeholder='Brefly Describe your needs or objectives'
                />
              </Form.Item>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
}
