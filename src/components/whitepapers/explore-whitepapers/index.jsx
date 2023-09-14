/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
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
  Carousel,
} from 'antd';
import FormDownload from '../../_shared/Form/FormDownload';
import WhitepaperCard from '../../_shared/WhitepaperCard';
import EmptyState from '../../../assets/Images/EmptyState.svg';

import { useDispatch, useSelector } from 'react-redux';
import { Whitepapers } from '../../../service';
import dayjs from 'dayjs';
import { Link, useSearchParams } from 'react-router-dom';

import HeroBanner from '../../../assets/Images/HeroBanner.svg';
import DefaultBanner from '../../../assets/Images/DefaultWhitepaperCover.svg';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import axios from 'axios';

export default function ExploreWhitepapersComponent() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [filterForm] = Form.useForm();
  const { whitepapersList, highlightWhitepaperList } = useSelector(
    (state) => state.whitepaper
  );
  const [api, context] = notification.useNotification();
  const [searchParams, setSearchParams] = useSearchParams();
  const carouselRef = useRef(null);

  const initAuthor = searchParams.get('author') || '';

  const [query, setQuery] = useState({
    page: 1,
    page_size: 5,
    search: '',
    author: initAuthor,
    theme: '',
    ordering: '-published_at',
    publish_date_after: '',
    publish_date_before: '',
  });
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [selectedInsight, setSelectedInsight] = useState(0);

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

  useEffect(() => {
    dispatch(Whitepapers.GetHighlightWhitepaper());
  }, [dispatch, Whitepapers])

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

      const TelegramToken = process.env.REACT_APP_TELEGRAM_TOKEN;
      const ChatID = process.env.REACT_APP_TELEGRAM_CHAT_ID;
      const Messages = `@download-research : ${highlightWhitepaperList?.results[selectedInsight]?.title}%0A%0AName: ${e.name}%0ACompany : ${e.company}%0APosition : ${e.position}%0AEmail : ${e.email}%0APhone : ${e.phone}%0AResearch Objective : ${e.country}`;

      const data = {
        formData,
        slug: highlightWhitepaperList?.results[selectedInsight]?.slug,
      };
      dispatch(Whitepapers.DownloadWhitepaper(data))
        .unwrap()
        .then(() => {
          axios.post(
            `https://api.telegram.org/bot${TelegramToken}/sendMessage?chat_id=${ChatID}&text=${Messages}`
          );
        });
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
      setSearchParams(`author=${e.target.value}`);
    }
  };

  const topicSearch = (e) => {
    if (e.key === 'Enter') {
      setQuery({ ...query, theme: e.target.value });
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
    });
  };

  useEffect(() => {
    setQuery({ ...query, author: initAuthor });
  }, [initAuthor]);

  const NextArrow = ({ className, style, onClick }) => {
    return (
      <CustomButton
        className={`${className} carousel-button`}
        style={{
          color: 'white',
          fontSize: '15px',
          lineHeight: '1.5715',
          content: '',
          padding: '10px 20px',
          backgroundColor: '#a51535',
          width: '48px',
          height: '48px',
          position: 'absolute',
          right: '-10%',
          ...style,
        }}
        onClick={onClick}
        icon={<BsChevronCompactRight className='text-white' size={24} />}
      />
    );
  };

  const PrevArrow = ({ className, style, onClick }) => {
    return (
      <CustomButton
        className={`${className} carousel-button`}
        style={{
          color: 'white',
          fontSize: '15px',
          lineHeight: '1.5715',
          content: '',
          padding: '10px 20px',
          backgroundColor: '#a51535',
          width: '48px',
          height: '48px',
          position: 'absolute',
          right: '-10%',
          ...style,
        }}
        onClick={onClick}
        icon={<BsChevronCompactLeft className='text-white' size={24} />}
      />
    );
  };

  const carouselSettings = {
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    effect: 'fade',
    autoplay: !formModalOpen,
    autoplaySpeed: 6000,
    arrows: true,
  };

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
  };

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
      <div className='flex flex-col h-[100vh] md:h-[700px] lg:h-[100vh]'>
        <div className='h-[64px]' />
        <div
          style={{ backgroundImage: `url(${HeroBanner})` }}
          className={`flex justify-center items-center flex-grow bg-cover`}
        >
          <div className='px-[15px] flex gap-6 w-full md:w-[85%] max-w-[1080px]'>
            <div className='lg:w-[50%] lg:mr-14 w-full'>
              <Carousel
                ref={carouselRef}
                afterChange={(current) => setSelectedInsight(current)}
                {...carouselSettings}
              >
                {highlightWhitepaperList?.results?.map((item, index) => (
                  <div
                    key={index}
                    className='h-[478px] lg:pl-10 flex flex-col w-full justify-between'
                  >
                    <div className='flex flex-col justify-center lg:justify-between h-full pb-6'>
                      <div
                        style={{ backgroundImage: `url(${DefaultBanner})` }}
                        className='w-fit h-fit bg-cover'
                      >
                        <img
                          src={item.image}
                          alt=' '
                          className='w-[180px] md:min-w-[180px] md:max-w-[180px] h-fit bg-cover aspect-[3/4]'
                        />
                      </div>
                      <div>
                        <div className='flex  gap-[6px] mb-2'>
                          {item?.theme?.map((theme, indexTheme) => (
                            <React.Fragment key={indexTheme}>
                              <div className='border-white border-[1px] px-4 rounded-lg w-fit'>
                                <Typography.Custom
                                  text={theme ? theme : '-'}
                                  className='text-white text-xs'
                                />
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                        <Typography.LargeHeading
                          text={item.title}
                          className='text-white lg:text-[28px]'
                          bold
                        />
                        <div className='flex gap-x-2 flex-wrap mt-2'>
                          <Typography.MediumText
                            text={`${item.author}`}
                            className='text-white'
                            bold
                          />
                          <Typography.MediumText
                            text={`${dayjs(item.published_at).format(
                              'YYYY-MM-DD'
                            )}`}
                            className='text-white opacity-75'
                          />
                        </div>
                        <div className='flex mt-4 gap-4'>
                          <Link
                            className='w-fit h-fit'
                            to={`/whitepapers/detail/${item.slug}`}
                          >
                            <CustomButton
                              text='Learn More'
                              className='bg-transparent text-sm py-2 border-white border-[1px] text-white'
                            />
                          </Link>
                          <CustomButton
                            text='Download'
                            className='lg:hidden'
                            onClick={() => setFormModalOpen(true)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
            <div className='hidden lg:block md:w-[40%] md:min-w-[40%] md:max-w-[40%] lg:w-[35%] lg:min-w-[35%] lg:max-w-[35%]'>
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
            <div className='hidden lg:flex lg:flex-col sticky top-24 w-[25%] max-w-[25%] min-w-[25%] h-fit gap-7'>
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
                  defaultValue={query.author}
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
                <DatePicker.RangePicker onChange={dateChange} className='custom-input' />
              </div>
            </div>
            <div className='grid w-full gap-[15px]'>
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
                        <WhitepaperCard
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
                <CustomInput size='default' placeholder='Search Author' />
              </Form.Item>
              {/* <Select showSearch filterOption={filterOption} className='w-full' options={dummyAuthor} placeholder='Search Author' /> */}
            </div>
            <div>
              <Typography.LargeText text='Search Topic' />
              <Form.Item name='theme'>
                <CustomInput size='default' placeholder='Search Topic' />
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
