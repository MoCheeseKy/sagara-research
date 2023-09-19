/* eslint-disable react-hooks/exhaustive-deps */
// Import Functional
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchHandler } from '../../../store/global/filter';
import { Whitepapers } from '../../../service';
import dayjs from 'dayjs';

// Import Component
import Typography from '../../_shared/Typography';
import CustomButton from '../../_shared/CustomButton';
import CustomInput from '../../_shared/Form/CustomInput';
import CustomSelect from '../../_shared/Form/CustomSelect';
import {
  notification,
  Pagination,
  Form,
  Modal,
  Radio,
  Space,
  DatePicker,
} from 'antd';
import ResearchCard from '../../_shared/ResearchCard';

// Icon Import
import { LiaDownloadSolid } from 'react-icons/lia';
import { BiUser, BiSearch } from 'react-icons/bi';
import { GiChampions } from 'react-icons/gi';
import { PiShareDuotone } from 'react-icons/pi';

// Image Import
import EmptyState from '../../../assets/Images/EmptyState.svg';

export default function ExploreResearchComponent() {
  const dispatch = useDispatch();
  const [filterForm] = Form.useForm();
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const { whitepapersList } = useSelector((state) => state.whitepaper);
  const [api, context] = notification.useNotification();
  const { search, author, topic, language } = useSelector(
    (state) => state.filter
  );

  const filterInitVal = {
    search: '',
    author: '',
    theme: '',
    ordering: '',
    range_time: null,
  };

  const [query, setQuery] = useState({
    page: 1,
    page_size: 5,
    search: search,
    author: author,
    theme: topic,
    ordering: '-published_at',
    publish_date_after: '',
    publish_date_before: '',
    language: language,
  });

  useEffect(() => {
    const payload = {
      search: query.search,
      page: query.page,
      author: query.author,
      theme: query.theme,
      ordering: query.ordering,
      publish_date_after: query.publish_date_after,
      publish_date_before: query.publish_date_before,
      language: query.language,
    };

    dispatch(Whitepapers.GetWhitepapersList(payload)).unwrap();
  }, [dispatch, api, query]);

  const paginationChange = (page) => {
    setQuery({ ...query, page });
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setQuery({ ...query, search: e.target.value, page: 1 });
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
        page: 1,
      });
    } else {
      setQuery({
        ...query,
        publish_date_after: '',
        publish_date_before: '',
        page: 1,
      });
    }
  };

  const authorSearch = (e) => {
    if (e.key === 'Enter') {
      setQuery({ ...query, author: e.target.value, page: 1 });
    }
  };

  const topicSearch = (e) => {
    if (e.key === 'Enter') {
      setQuery({ ...query, theme: e.target.value, page: 1 });
    }
  };

  const filterSubmit = (e) => {
    let value = { ...e };
    if (e.range_time !== null) {
      value = {
        search: e.search,
        author: e.author,
        theme: e.theme,
        ordering: e.ordering,
        publish_date_after: dayjs(e.range_time[0]).format('YYYY-MM-DD'),
        publish_date_before: dayjs(e.range_time[1]).format('YYYY-MM-DD'),
      };
    } else {
      value = {
        search: e.search,
        author: e.author,
        theme: e.theme,
        ordering: e.ordering,
        publish_date_after: '',
        publish_date_before: '',
      };
    }
    setFilterModalOpen(false);
    setQuery({
      ...query,
      ...value,
      page: 1,
    });
  };

  return (
    <>
      {context}
      <div className='flex justify-center w-full'>
        <div className='py-16 flex flex-col px-[15px] w-full md:w-[85%] max-w-[1080px]'>
          <div className='flex flex-row justify-between items-center pt-10'>
            <Typography.LargeHeading
              text='Explore Research'
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
            <div className='hidden lg:flex lg:flex-col sticky top-24 w-[25%] max-w-[25%] min-w-[25%] h-fit gap-4'>
              <CustomInput
                className='md:col-start-6 md:col-end-13 py-[10px] px-[18px] mt-[-10px] md:mt-0'
                placeholder='Press enter to search'
                value={search}
                onChange={(e) => dispatch(searchHandler(e.target.value))}
                onKeyUp={handleSearch}
                prefix={<BiSearch />}
              />
              <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-1'>
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
                <div className='flex flex-col gap-1'>
                  <Typography.LargeText text='Search Author' />
                  <CustomInput
                    onKeyUp={authorSearch}
                    size='default'
                    placeholder='Search Author'
                    defaultValue={query.author}
                    className='py-[10px] px-[18px]'
                  />
                  {/* <Select showSearch filterOption={filterOption} className='w-full' options={dummyAuthor} placeholder='Search Author' /> */}
                </div>
                <div className='flex flex-col gap-1'>
                  <Typography.LargeText text='Search Topic' />
                  <CustomInput
                    onKeyUp={topicSearch}
                    size='default'
                    placeholder='Search Topic'
                    defaultValue={query.theme}
                    className='py-[10px] px-[18px]'
                  />
                  {/* <Select showSearch filterOption={filterOption} className='w-full' options={dummytheme} placeholder='Search Topic' /> */}
                </div>
                <div className='flex flex-col gap-1'>
                  <Typography.LargeText text='Search by Date' />
                  <DatePicker.RangePicker
                    onChange={dateChange}
                    className='custom-input py-[10px] px-[18px]'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <Typography.LargeText text='Search by Language' />
                  <div className='bg-white rounded-[10px]'>
                    <CustomSelect
                      placeholder='Select Research Objective'
                      bordered={false}
                      className='w-full py-[2px] px-[6px] outline-none shadow-none border-0'
                      optionFilterProp='children'
                      value={query.language}
                      onChange={(e) =>
                        setQuery({ ...query, page: 1, language: e })
                      }
                      options={[
                        { label: 'All', value: '' },
                        { label: 'English', value: 'English' },
                        { label: 'Indonesia', value: 'Indonesia' },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='grid w-full gap-[15px] lg:mt-[-30px]'>
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
              {whitepapersList?.count > 0 ? (
                <>
                  {whitepapersList?.results?.map(
                    (whitepaper, indexWhitepaper) => (
                      <React.Fragment key={indexWhitepaper}>
                        <ResearchCard
                          image={whitepaper?.image}
                          title={whitepaper?.title ? whitepaper?.title : '-'}
                          date={
                            whitepaper?.published_at
                              ? dayjs(whitepaper?.published_at).format(
                                  'DD-MM-YYYY'
                                )
                              : '-'
                          }
                          author={whitepaper?.author}
                          download={whitepaper?.count_of_downloads}
                          language={whitepaper?.langguage}
                          topic={whitepaper?.theme}
                          desc={
                            whitepaper?.overview ? whitepaper?.overview : '-'
                          }
                          slug={whitepaper?.slug}
                        />
                      </React.Fragment>
                    )
                  )}
                </>
              ) : (
                <>
                  <div
                    style={{ backgroundImage: `url(${EmptyState})` }}
                    className='flex-grow w-full bg-cover aspect-video'
                  />
                </>
              )}
              {whitepapersList?.count > 5 && (
                <div className='text-right'>
                  <Pagination
                    total={whitepapersList.count}
                    pageSize={5}
                    onChange={paginationChange}
                    current={query.page}
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

      {/* Filter Modal */}
      <Modal
        open={filterModalOpen}
        title='Filter'
        onCancel={() => setFilterModalOpen(false)}
        footer={
          <div className='flex flex-row gap-3 justify-end'>
            <CustomButton
              text='Cancel'
              onClick={() => setFilterModalOpen(false)}
            />
            <CustomButton text='Apply' onClick={() => filterForm.submit()} />
          </div>
        }
      >
        <Form
          form={filterForm}
          initialValues={filterInitVal}
          onFinish={filterSubmit}
        >
          <div className='p-3 flex flex-col gap-3'>
            <Form.Item name='search'>
              <CustomInput
                className='md:col-start-6 md:col-end-13 py-[10px] px-[18px] mt-[15px]'
                placeholder='Press enter to search'
                prefix={<BiSearch />}
              />
            </Form.Item>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col'>
                <Typography.LargeText text='Sort by' />
                <Form.Item name='ordering' className='mb-[-0px]'>
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
                <Form.Item name='author' className='mb-[-0px]'>
                  <CustomInput
                    size='default'
                    className='py-[10px] px-[18px]'
                    placeholder='Search Author'
                  />
                </Form.Item>
                {/* <Select showSearch filterOption={filterOption} className='w-full' options={dummyAuthor} placeholder='Search Author' /> */}
              </div>
              <div>
                <Typography.LargeText text='Search Topic' />
                <Form.Item name='theme' className='mb-[-0px]'>
                  <CustomInput
                    size='default'
                    className='py-[10px] px-[18px]'
                    placeholder='Search Topic'
                  />
                </Form.Item>
                {/* <Select showSearch filterOption={filterOption} className='w-full' options={dummytheme} placeholder='Search Topic' /> */}
              </div>
              <div>
                <Typography.LargeText text='Search by Date' />
                <Form.Item name='range_time' className='mb-[-0px]'>
                  <DatePicker.RangePicker className='w-full custom-input py-[10px] px-[18px]' />
                </Form.Item>
              </div>
              <div>
                <Typography.LargeText text='Search by Date' />
                <Form.Item name='language' className='mb-[-0px]'>
                  <CustomSelect
                    placeholder='Select Research Objective'
                    bordered={false}
                    className='w-full py-[2px] px-[6px] outline-none shadow-none border-0'
                    optionFilterProp='children'
                    value={query.language}
                    onChange={(e) =>
                      setQuery({ ...query, page: 1, language: e })
                    }
                    options={[
                      { label: 'All', value: '' },
                      { label: 'English', value: 'English' },
                      { label: 'Indonesia', value: 'Indonesia' },
                    ]}
                  />
                </Form.Item>
              </div>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
}
