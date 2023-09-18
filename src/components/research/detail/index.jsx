// import Funtional
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Whitepapers } from '../../../service';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';

// Import Component
import { Form, notification } from 'antd';
import Typography from '../../_shared/Typography';
import CustomTabs from '../../_shared/CustomTabs';
import FormDownload from '../../_shared/Form/FormDownload';
import OverviewComponent from './overview';
import AboutFGDComponent from './aboutFGD';
import InsightComponent from './insight';

// Import Image
import DefaultCover from '../../../assets/Images/DefaultWhitepaperCover.svg';

export default function ResearchDetailComponent() {
  const params = useParams();
  const slug = params.slug;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { whitepapersDetail } = useSelector((state) => state.whitepaper);
  const [api, context] = notification.useNotification();

  useEffect(() => {
    dispatch(Whitepapers.GetWhitepaperDetail(slug))
      .unwrap()
      .then(() => {
        api.success({ message: 'Success get detail' });
      })
      .catch(() => {
        api.error({ message: 'Failed get detail' });
      });
  }, [dispatch, api, slug]);

  const initialValues = {
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    country: undefined,
    term: false,
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
      const Messages = `@download-research : ${whitepapersDetail?.title}%0A%0AName: ${e.name}%0ACompany : ${e.company}%0APosition : ${e.position}%0AEmail : ${e.email}%0APhone : ${e.phone}%0AResearch Objective : ${e.country}`;

      const data = {
        formData,
        slug: slug,
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

  const FullTabsItem = [
    {
      label: 'Overview',
      children: (
        <>
          <OverviewComponent data={whitepapersDetail} />
        </>
      ),
    },
    {
      label: 'Insight',
      children: (
        <>
          <InsightComponent data={whitepapersDetail} />
        </>
      ),
    },
    {
      label: 'About FGD',
      children: (
        <>
          <AboutFGDComponent data={whitepapersDetail} />
        </>
      ),
    },
  ];

  const TabsItemWithoutFGD = [
    {
      label: 'Overview',
      children: (
        <>
          <OverviewComponent data={whitepapersDetail} />
        </>
      ),
    },
    {
      label: 'Insight',
      children: (
        <>
          <InsightComponent data={whitepapersDetail} />
        </>
      ),
    },
  ];

  return (
    <>
      {context}
      <div className='pt-[65px]' />
      <div className='flex justify-center py-14'>
        <div className='flex flex-col lg:flex-row px-[15px] w-full md:w-[85%] max-w-[1080px] gap-16'>
          <div className='flex flex-col md:flex-row gap-6 w-full'>
            <div
              className='w-fit h-fit bg-cover'
              style={{ backgroundImage: `url(${DefaultCover})` }}
            >
              <img
                src={whitepapersDetail?.image}
                alt=' '
                className='w-full md:w-[124px] md:min-w-[124px] h-fit aspect-[3/4] rounded bg-cover'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-[6px]'>
                {whitepapersDetail?.theme?.map((topic, indexTopic) => (
                  <React.Fragment key={indexTopic}>
                    <div className='border-primary border-[1px] px-4 rounded-lg w-fit'>
                      <Typography.Custom
                        text={topic?.title ? topic?.title : '-'}
                        className='text-primary text-xs'
                      />
                    </div>
                  </React.Fragment>
                ))}
              </div>
              <Typography.MediumHeading
                text={whitepapersDetail?.title ? whitepapersDetail?.title : '-'}
                className='w-[80%]'
              />
              <Typography.MediumText
                text={
                  whitepapersDetail?.description
                    ? whitepapersDetail?.description
                    : '-'
                }
              />
              <div className='grid grid-cols-1 md:grid-cols-2 border-b-2 border-t-2  py-6'>
                <Typography.MediumText
                  text={`Author : ${
                    whitepapersDetail?.author ? whitepapersDetail?.author : '-'
                  }`}
                  className='text-[#666]'
                />
                <Typography.MediumText
                  text={`Language : ${
                    whitepapersDetail?.langguage
                      ? whitepapersDetail?.langguage
                      : '-'
                  }`}
                  className='text-[#666]'
                />
                <Typography.MediumText
                  text={`Publication : ${
                    whitepapersDetail?.about?.published_at
                      ? dayjs(whitepapersDetail?.about?.published_at).format(
                          'DD-MM-YYYY'
                        )
                      : '-'
                  }`}
                  className='text-[#666]'
                />
                <Typography.MediumText
                  text={`FDG Date : ${
                    whitepapersDetail?.about?.FGD_date
                      ? whitepapersDetail?.about?.FGD_date
                      : '-'
                  }`}
                  className='text-[#666]'
                />
                <Typography.MediumText
                  text={`Editor : ${
                    whitepapersDetail?.about?.editor
                      ? whitepapersDetail?.about?.editor
                      : '-'
                  }`}
                  className='text-[#666]'
                />
                <Typography.MediumText
                  text={`License : ${
                    whitepapersDetail?.about?.license
                      ? whitepapersDetail?.about?.license
                      : '-'
                  }`}
                  className='text-[#666]'
                />
                <Typography.MediumText
                  text={`Page : ${
                    whitepapersDetail?.about?.length
                      ? whitepapersDetail?.about?.length
                      : '0'
                  }-page(s)`}
                  className='text-[#666]'
                />
                <Typography.MediumText
                  text={`Download : ${
                    whitepapersDetail?.count_of_downloads
                      ? whitepapersDetail?.count_of_downloads
                      : '0'
                  }`}
                  className='text-[#666]'
                />
              </div>
              <div className='border-b-2 pb-6'>
                <Typography.LargeText
                  bold
                  text='What you get :'
                  className='text-[#666]'
                />
                <Typography.MediumText
                  text='PDF Document'
                  className='text-[#b1adad]'
                />
              </div>
              <CustomTabs
                Options={
                  whitepapersDetail?.about?.FGD_about
                    ? FullTabsItem
                    : TabsItemWithoutFGD
                }
              />
            </div>
          </div>
          <div className='w-full h-fit sticky top-24 lg:w-[40%] lg:max-w-[40%]'>
            <Typography.MediumText
              text={`${
                whitepapersDetail?.count_of_downloads
                  ? whitepapersDetail?.count_of_downloads
                  : '0'
              } Business Leader has been downloaded this research.`}
              className=' mb-4'
              bold
            />
            <FormDownload
              form={form}
              initialValues={initialValues}
              onSubmitDownload={onSubmitDownload}
            />
          </div>
        </div>
      </div>
    </>
  );
}
