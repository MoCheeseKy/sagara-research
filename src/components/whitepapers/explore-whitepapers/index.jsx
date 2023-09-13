import React, { useEffect, useState } from 'react';
import Typography from '../../_shared/Typography';
import CustomButton from '../../_shared/CustomButton';
import CustomInput from '../../_shared/Form/CustomInput';
import { LiaDownloadSolid } from 'react-icons/lia';
import { BiUser, BiSearch } from 'react-icons/bi';
import { GiChampions } from 'react-icons/gi';
import { PiShareDuotone } from 'react-icons/pi';
import {
  notification,
  Pagination,
  Form,
  Modal,
  Radio,
  Space,
  // Select,
  DatePicker,
} from 'antd';
import FormDownload from '../../_shared/Form/FormDownload';
import WhitepaperCard from '../../_shared/WhitepaperCard';

import { useDispatch, useSelector } from 'react-redux';
import { Whitepapers } from '../../../service';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export default function ExploreWhitepapersComponent() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [filterForm] = Form.useForm()
  const { whitepapersList } = useSelector((state) => state.whitepaper);
  const [api, context] = notification.useNotification();

  const [query, setQuery] = useState({
    page: 1,
    page_size: 5,
    search: '',
    author: '',
    theme: '',
    ordering: '',
    publish_date_after: '',
    publish_date_before: '',
  });
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  useEffect(() => {
    const payload = {
      search: query.search,
      page: query.page,
      author: query.author,
      theme: query.theme,
      ordering: query.ordering,
      publish_date_after: query.publish_date_after,
      publish_date_before: query.publish_date_before,
    };

    dispatch(Whitepapers.GetWhitepapersList(payload))
      .unwrap()
      .then(() => {
        api.success({ message: 'Success get whitepaper' });
      })
      .catch(() => {
        api.error({ message: 'Failed get whitepaper' });
      });
  }, [dispatch, api, query]);

  const paginationChange = (page) => {
    setQuery({ ...query, page });
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setQuery({ ...query, search: e.target.value, page: 1 });
    }
  };

  const onSubmitDownload = (e) => {
    if (e.term) {
      const formData = new FormData();

      formData.append('name', e.name);
      formData.append('company', e.company);
      formData.append('position', e.position);
      formData.append('email', e.email);
      formData.append('phone', e.phone);
      formData.append('country', 1);

      const data = {
        formData,
        slug: 'testing',
      };
      dispatch(Whitepapers.DownloadWhitepaper(data));
    } else {
      form.validateFields();
    }
  };

  const dateChange = (e) => {
    if (e !== null) {
      const startDate = dayjs(e[0]).format('YYYY-MM-DD');
      const endDate = dayjs(e[1]).format('YYYY-MM-DD');
      setQuery({
        ...query,
        publish_date_after: startDate,
        publish_date_before: endDate,
      });
    } else {
      setQuery({ ...query, publish_date_after: '', publish_date_before: '' });
    }
  };

  const authorSearch = (e) => {
    if (e.key === 'Enter') {
      setQuery({ ...query, author: e.target.value });
    }
  };

  const topicSearch = (e) => {
    if (e.key === 'Enter') {
      setQuery({ ...query, theme: e.target.value });
    }
  };

  const filterSubmit = (e) => {
    let value = {...e}
    if (e.range_time !== null) {
      value = {
        search: e.search,
        author: e.author,
        theme: e.theme,
        ordering: e.ordering,
        publish_date_after: dayjs(e.range_time[0]).format('YYYY-MM-DD'),
        publish_date_before: dayjs(e.range_time[1]).format('YYYY-MM-DD'),
      }
    } else {
      value = {
        search: e.search,
        author: e.author,
        theme: e.theme,
        ordering: e.ordering,
        publish_date_after: '',
        publish_date_before: '',
      }
    }
    setFilterModalOpen(false)
    setQuery({
      ...query,
      ...value
    })
  }
  
  const initialValues = {
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    country: undefined,
    term: false,
  };

  const filterInitVal = {
    search: '',
    author: '',
    theme: '',
    ordering: '',
    range_time: null,
  }

  // const filterOption = (input, option) =>
  //   (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


  // const dummyAuthor = [
  //   {
  //     value: 'author_1',
  //     label: 'Author 1',
  //   },
  //   {
  //     value: 'author_2',
  //     label: 'Author 2',
  //   },
  //   {
  //     value: 'author_3',
  //     label: 'Author 3',
  //   },
  // ];

  // const dummytheme = [
  //   {
  //     value: 'topic_1',
  //     label: 'Tokpik 1',
  //   },
  //   {
  //     value: 'topic_2',
  //     label: 'Topik 2',
  //   },
  //   {
  //     value: 'topic_3',
  //     label: 'Topik 3',
  //   },
  // ];

  return (
    <>
      {context}
      <div className='flex flex-col h-[100vh]'>
        <div className='h-[77px]' />
        <div
          className={`flex justify-center items-center flex-grow bg-[url('https://img.freepik.com/free-photo/3d-render-low-poly-plexus-design-network-communications_1048-14542.jpg?w=740&t=st=1691053736~exp=1691054336~hmac=3e831c9125aba14bfad1a71615a1b0585cb219773a81a811d88d687adf6160bd')] bg-cover`}
        >
          <div className='px-[15px] flex gap-6 w-full md:w-[85%] max-w-[1080px]'>
            <div className='flex-grow flex-flex-col'>
              <div className='w-[184px] md:min-w-[184px] md:max-w-[184px] h-fit bg-cover bg-white aspect-[3/4]' />
              <div>
                <Typography.LargeHeading
                  text='Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing'
                  className='text-white mt-8'
                  bold
                />
                <div className='lg:w-[70%] grid grid-cols-2 mt-2'>
                  <Typography.MediumText
                    text={`Topic : Testing`}
                    className='text-white'
                  />
                  <Typography.MediumText
                    text={`Speaker : Testing`}
                    className='text-white'
                  />
                  <Typography.MediumText
                    text={`Date : Testing`}
                    className='text-white'
                  />
                  <Typography.MediumText
                    text={`Date : Testing`}
                    className='text-white'
                  />
                </div>
                <div className='flex mt-4 gap-4'>
                  <Link>
                    <CustomButton text='Learn More' />
                  </Link>
                  <CustomButton
                    text='Download'
                    className='md:hidden'
                    onClick={() => setFormModalOpen(true)}
                  />
                </div>
              </div>
            </div>
            <div className='hidden md:block md:w-[40%] md:min-w-[40%] md:max-w-[40%] lg:w-[35%] lg:min-w-[35%] lg:max-w-[35%]'>
              <FormDownload
                form={form}
                initialValues={initialValues}
                onSubmitDownload={onSubmitDownload}
                isLanding
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center w-full'>
        <div className='py-16 flex flex-col px-[15px] w-full md:w-[85%] max-w-[1080px]'>
          <div className='flex flex-row justify-between items-center'>
            <Typography.LargeHeading
              text='Explore Whitepapers'
              className='mb-0 flex col-span-4'
            />
            <Typography.LargeText
              text={
                whitepapersList?.count > 0
                  ? `${whitepapersList?.count} Results`
                  : 'No Results'
              }
              bold
              className='hidden lg:block mb-0 md:mb-[30px] col-span-4'
            />
            <CustomButton
              text='Pilih filter'
              className='lg:hidden'
              onClick={() => setFilterModalOpen(true)}
            />
          </div>
          <div className='flex gap-12'>
            <div className='hidden lg:flex lg:flex-col w-[25%] max-w-[25%] min-w-[25%] h-fit gap-7'>
              <CustomInput
                className='md:col-start-6 md:col-end-13 py-[10px] px-[18px] mt-[-10px] md:mt-0'
                placeholder='Press enter to search'
                onKeyUp={handleSearch}
                prefix={<BiSearch />}
              />
              <div className='flex flex-col gap-3'>
                <Typography.LargeText text='Sort by' />
                <Radio.Group
                  value={query.ordering}
                  onChange={(e) =>
                    setQuery({ ...query, ordering: e.target.value })
                  }
                >
                  <Space direction='vertical'>
                    <Radio value='-published_at'>Newest</Radio>
                    <Radio value='published_at'>Oldest</Radio>
                    <Radio value='-count_of_downloads'>Most Popular</Radio>
                  </Space>
                </Radio.Group>
              </div>
              <div>
                <Typography.LargeText text='Search Author' />
                <CustomInput
                  onKeyUp={authorSearch}
                  size='default'
                  placeholder='Search Author'
                />
                {/* <Select showSearch filterOption={filterOption} className='w-full' options={dummyAuthor} placeholder='Search Author' /> */}
              </div>
              <div>
                <Typography.LargeText text='Search Topic' />
                <CustomInput
                  onKeyUp={topicSearch}
                  size='default'
                  placeholder='Search Topic'
                />
                {/* <Select showSearch filterOption={filterOption} className='w-full' options={dummytheme} placeholder='Search Topic' /> */}
              </div>
              <div>
                <Typography.LargeText text='Search by Date' />
                <DatePicker.RangePicker onChange={dateChange} />
              </div>
            </div>
            <div className='grid gap-[15px]'>
              <div>
                <Typography.LargeText
                  text={
                    whitepapersList?.count > 0
                      ? `${whitepapersList?.count} Results`
                      : 'No Results'
                  }
                  bold
                  className='flex lg:hidden mb-0 md:mb-[30px] col-span-4'
                />
              </div>
              {whitepapersList?.results?.map((whitepaper, indexWhitepaper) => (
                <React.Fragment key={indexWhitepaper}>
                  <WhitepaperCard
                    image={whitepaper?.image}
                    title={whitepaper?.title ? whitepaper?.title : '-'}
                    date={
                      whitepaper?.published_at
                        ? dayjs(whitepaper?.published_at).format('DD-MM-YYYY')
                        : '-'
                    }
                    author={whitepaper?.author}
                    download={whitepaper?.count_of_downloads}
                    topic={whitepaper?.theme}
                    desc={whitepaper?.overview ? whitepaper?.overview : '-'}
                    slug={whitepaper?.slug}
                  />
                </React.Fragment>
              ))}
              {whitepapersList?.count > 5 && (
                <div className='text-right'>
                  <Pagination
                    total={whitepapersList.count}
                    pageSize={5}
                    onChange={paginationChange}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center w-full bg-white'>
        <div className='grid grid-cols-2 lg:grid-cols-4 py-[30px] px-[15px] w-full md:w-[85%] max-w-[1080px] gap-y-16 '>
          <div className='flex flex-col items-center border-r-2'>
            <LiaDownloadSolid className='text-[#808080] text-[84px] ' />
            <Typography.ExtraLargeHeading
              text='1,100'
              className='text-primary '
            />
            <Typography.LargeText
              text='Downloaded'
              className='text-[#808080]'
            />
          </div>
          <div className='flex flex-col items-center lg:border-r-2'>
            <PiShareDuotone className='text-[#808080] text-[84px] ' />
            <Typography.ExtraLargeHeading
              text='1,100'
              className='text-primary '
            />
            <Typography.LargeText text='Shared' className='text-[#808080]' />
          </div>
          <div className='flex flex-col items-center border-r-2'>
            <BiUser className='text-[#808080] text-[84px] ' />
            <Typography.ExtraLargeHeading
              text='1,100'
              className='text-primary '
            />
            <Typography.LargeText
              text='Active Members'
              className='text-[#808080]'
            />
          </div>
          <div className='flex flex-col items-center '>
            <GiChampions className='text-[#808080] text-[84px] ' />
            <Typography.ExtraLargeHeading
              text='1,100'
              className='text-primary '
            />
            <Typography.LargeText
              text='Satisfaction Rate'
              className='text-[#808080]'
            />
          </div>
        </div>
      </div>

      {/* Form Modal */}
      <Modal
        open={formModalOpen}
        onCancel={() => setFormModalOpen(false)}
        onOk={() => setFormModalOpen(false)}
        footer={null}
        title='Download Whitepaper'
      >
        <>
          <FormDownload
            form={form}
            initialValues={initialValues}
            onSubmitDownload={onSubmitDownload}
          />
        </>
      </Modal>

      {/* Filter Modal */}
      <Modal
        open={filterModalOpen}
        title='Filter'
        footer={
          <div className='flex flex-row gap-3 justify-end'>
            <CustomButton text='Cancel' onClick={() => setFilterModalOpen(false)} />
            <CustomButton text='Apply' onClick={() => filterForm.submit()} />
          </div>
        }
      >
        <Form form={filterForm} initialValues={filterInitVal} onFinish={filterSubmit}>
          <div className='p-3 flex flex-col gap-3'>
            <Form.Item name='search'>
              <CustomInput
                className='md:col-start-6 md:col-end-13 py-[10px] px-[18px] mt-[-10px] md:mt-0'
                placeholder='Press enter to search'
                prefix={<BiSearch />}
              />
            </Form.Item>
            <div className='flex flex-col gap-3'>
              <Typography.LargeText text='Sort by' />
              <Form.Item name='ordering'>
                <Radio.Group>
                  <Space direction='vertical'>
                    <Radio value='-published_at'>Newest</Radio>
                    <Radio value='published_at'>Oldest</Radio>
                    <Radio value='-count_of_downloads'>Most Popular</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </div>
            <div>
              <Typography.LargeText text='Search Author' />
              <Form.Item name='author'>
                <CustomInput
                  size='default'
                  placeholder='Search Author'
                />
              </Form.Item>
              {/* <Select showSearch filterOption={filterOption} className='w-full' options={dummyAuthor} placeholder='Search Author' /> */}
            </div>
            <div>
              <Typography.LargeText text='Search Topic' />
              <Form.Item name='theme'>
                <CustomInput
                  size='default'
                  placeholder='Search Topic'
                />
              </Form.Item>
              {/* <Select showSearch filterOption={filterOption} className='w-full' options={dummytheme} placeholder='Search Topic' /> */}
            </div>
            <div>
              <Typography.LargeText text='Search by Date' />
              <Form.Item name='range_time'>
                <DatePicker.RangePicker className='w-full' />
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
}
