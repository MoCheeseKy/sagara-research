// import Funtional
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Whitepapers } from '../../../service';
import {
  resetFilter,
  authorHandler,
  topicHandler,
  languageHandler,
} from '../../../store/global/filter';
import axios from 'axios';
import dayjs from 'dayjs';

// Import Component
import { Form, notification, message } from 'antd';
import Typography from '../../_shared/Typography';
import CustomTabs from '../../_shared/CustomTabs';
import FormDownload from '../../_shared/Form/FormDownload';
import OverviewComponent from './overview';
import AboutFGDComponent from './aboutFGD';
import InsightComponent from './insight';
import SharePopup from './sharePopup';

// Import Icon
import { BiShareAlt } from 'react-icons/bi';

// Import Image
import DefaultCover from '../../../assets/Images/DefaultWhitepaperCover.svg';

export default function ResearchDetailComponent() {
  const params = useParams();
  const slug = params.slug;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { whitepapersDetail } = useSelector((state) => state.whitepaper);
  const [api, context] = notification.useNotification();
  const [messageApi, messageContext] = message.useMessage();

  const [modalOpen, setModalOpen] = useState(false);

  const initialValues = {
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    country: undefined,
    term: false,
  };

  let FullTabsItem = [
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

  if (whitepapersDetail?.about?.FGD_about) {
    FullTabsItem = [
      ...FullTabsItem,
      {
        label: 'About FGD',
        children: (
          <>
            <AboutFGDComponent data={whitepapersDetail} />
          </>
        ),
      },
    ];
  }

  useEffect(() => {
    dispatch(Whitepapers.GetWhitepaperDetail(slug)).unwrap();
  }, [dispatch, api, slug]);

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
          api.success({ message: 'Success Download' });
          axios.post(
            `https://api.telegram.org/bot${TelegramToken}/sendMessage?chat_id=${ChatID}&text=${Messages}`
          );
        })
        .catch(() => {
          api.error({ message: 'Failed Download' });
        });
    } else {
      form.validateFields();
    }
  };

  function CardNavigate(type, value) {
    if (type === 'Topic Filter') {
      dispatch(resetFilter());
      dispatch(topicHandler(value));
    } else if (type === 'Author Filter') {
      dispatch(resetFilter());
      dispatch(authorHandler(value));
    } else {
      dispatch(resetFilter());
      dispatch(languageHandler(value));
    }
    navigate(`/research/explore-research`);
  }

  function saveToClipboard() {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        messageApi.success('Copied to clipboard');
      })
      .catch(() => {
        messageApi.error('Failed save to clipboard');
      });
  }

  return (
    <>
      {context}
      {messageContext}
      <div className='pt-[65px]' />
      <div className='flex justify-center py-14'>
        <div className='flex flex-col lg:flex-row px-[15px] w-full md:w-[85%] max-w-[1080px] gap-16'>
          <div className='flex flex-col md:flex-row gap-6 w-full'>
            <div className='w-fit h-fit bg-cover'>
              <img
                src={whitepapersDetail?.image}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = DefaultCover;
                }}
                alt='defaultCover'
                className='w-full md:w-[124px] md:min-w-[124px] h-fit aspect-[3/4] rounded bg-cover'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between gap-2'>
                <div className='flex gap-[6px]'>
                  {whitepapersDetail?.theme?.map((topic, indexTopic) => (
                    <React.Fragment key={indexTopic}>
                      <button
                        onClick={() =>
                          CardNavigate('Topic Filter', topic?.title)
                        }
                        className='border-primary border-[1px] px-4 rounded-lg w-fit'
                      >
                        <Typography.Custom
                          text={topic?.title ? topic?.title : '-'}
                          className='text-primary text-xs'
                        />
                      </button>
                    </React.Fragment>
                  ))}
                </div>
                <BiShareAlt className='cursor-pointer' onClick={() => setModalOpen(true)} />
              </div>
              <Typography.MediumHeading
                text={whitepapersDetail?.title ? whitepapersDetail?.title : '-'}
                className='w-[80%]'
                bold
              />
              <Typography.MediumText
                text={
                  whitepapersDetail?.description
                    ? whitepapersDetail?.description
                    : '-'
                }
              />
              <div className='grid grid-cols-1 md:grid-cols-2 border-b-2 border-t-2  py-6'>
                <button
                  onClick={() =>
                    CardNavigate('Author Filter', whitepapersDetail?.author)
                  }
                  className='w-fit flex gap-1 [&>*:nth-child(1)]:text-[#666] [&>*:nth-child(2)]:text-black hover-to-blue'
                >
                  <Typography.MediumText text='Author:' />
                  <Typography.MediumText
                    text={`${
                      whitepapersDetail?.author
                        ? whitepapersDetail?.author
                        : '-'
                    }`}
                    bold
                  />
                </button>
                <button
                  onClick={() =>
                    CardNavigate(
                      'Language Filter',
                      whitepapersDetail?.langguage
                    )
                  }
                  className='w-fit flex gap-1 [&>*:nth-child(1)]:text-[#666] [&>*:nth-child(2)]:text-black hover-to-blue'
                >
                  <Typography.MediumText text='Language:' />
                  <Typography.MediumText
                    text={`${
                      whitepapersDetail?.langguage
                        ? whitepapersDetail?.langguage
                        : '-'
                    }`}
                    bold
                  />
                </button>
                <div className='flex gap-1 [&>*:nth-child(1)]:text-[#666] [&>*:nth-child(2)]:text-black'>
                  <Typography.MediumText text='Published:' />
                  <Typography.MediumText
                    text={`${
                      whitepapersDetail?.about?.published_at
                        ? dayjs(whitepapersDetail?.about?.published_at).format(
                            'DD-MM-YYYY'
                          )
                        : '-'
                    }`}
                    bold
                  />
                </div>
                <div className='flex gap-1 [&>*:nth-child(1)]:text-[#666] [&>*:nth-child(2)]:text-black'>
                  <Typography.MediumText text='FDG Date' />
                  <Typography.MediumText
                    text={`${
                      whitepapersDetail?.about?.FGD_date
                        ? whitepapersDetail?.about?.FGD_date
                        : '-'
                    }`}
                    bold
                  />
                </div>
                <div className='flex gap-1 [&>*:nth-child(1)]:text-[#666] [&>*:nth-child(2)]:text-black'>
                  <Typography.MediumText text='Editor:' />
                  <Typography.MediumText
                    text={`${
                      whitepapersDetail?.about?.editor
                        ? whitepapersDetail?.about?.editor
                        : '-'
                    }`}
                    bold
                  />
                </div>
                <div className='flex gap-1 [&>*:nth-child(1)]:text-[#666] [&>*:nth-child(2)]:text-black'>
                  <Typography.MediumText text='License:' />
                  <Typography.MediumText
                    text={`${
                      whitepapersDetail?.about?.license
                        ? whitepapersDetail?.about?.license
                        : '-'
                    }`}
                    bold
                  />
                </div>
                <div className='flex gap-1 [&>*:nth-child(1)]:text-[#666] [&>*:nth-child(2)]:text-black'>
                  <Typography.MediumText text='Page:' />
                  <Typography.MediumText
                    text={`${
                      whitepapersDetail?.about?.length
                        ? whitepapersDetail?.about?.length
                        : '0'
                    }-page(s)`}
                    bold
                  />
                </div>
                <div className='flex gap-1 [&>*:nth-child(1)]:text-[#666] [&>*:nth-child(2)]:text-black'>
                  <Typography.MediumText text='Download:' />
                  <Typography.MediumText
                    text={`${
                      whitepapersDetail?.count_of_downloads
                        ? whitepapersDetail?.count_of_downloads
                        : '0'
                    }`}
                    bold
                  />
                </div>
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
              <CustomTabs Options={FullTabsItem} />
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
      <SharePopup
        open={modalOpen}
        onClose={() => setModalOpen(false)} title={whitepapersDetail?.title}
        saveToClipboard={saveToClipboard}
      />
    </>
  );
}
