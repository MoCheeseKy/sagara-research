import React from 'react';
import Typography from '../../_shared/Typography';
import { Modal } from 'antd';
import {
  WhatsappShareButton,
  EmailShareButton,
  TelegramShareButton,
  LinkedinShareButton,
  LineShareButton,
} from 'react-share';
import { AiOutlineMail, AiOutlineLink, AiOutlineUser } from 'react-icons/ai';
import { SiWhatsapp, SiTelegram, SiLine, SiLinkedin } from 'react-icons/si';
import { HiLanguage } from 'react-icons/hi2';

import DefaultCover from '../../../assets/Images/DefaultWhitepaperCover.svg';

export default function SharePopup({
  open = false,
  onClose = () => {},
  title = '',
  image,
  author,
  language,
  saveToClipboard = () => {},
}) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      title={`Share Our Research`}
      footer={null}
    >
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4 p-4 border rounded'>
          <img
            src={image}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = DefaultCover;
            }}
            alt='defaultCover'
            className='w-[94px] min-w-[94px] h-fit aspect-[3/4] rounded bg-cover'
          />
          <div className='flex flex-col'>
            <Typography.SmallHeading text={title} bold />
            <div className='flex flex-col'>
              <div className='flex gap-2 mt-2 items-center text-[#808080] '>
                <AiOutlineUser />
                <Typography.SmallText text={`${author ? author : '-'}`} />
              </div>
              <div className='flex gap-2 items-center text-[#808080] '>
                <HiLanguage />
                <Typography.SmallText text={`${language ? language : '-'}`} />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center items-center gap-7'>
          <WhatsappShareButton
            url={window.location.href}
            title='Share Research'
          >
            <SiWhatsapp size={18} className='text-black cursor-pointer' />
          </WhatsappShareButton>
          <TelegramShareButton url={window.location.href}>
            <SiTelegram size={18} className='text-black cursor-pointer' />
          </TelegramShareButton>
          <LineShareButton url={window.location.href}>
            <SiLine size={18} className='text-black cursor-pointer' />
          </LineShareButton>
          <LinkedinShareButton url={window.location.href}>
            <SiLinkedin size={18} className='text-black cursor-pointer' />
          </LinkedinShareButton>
          <EmailShareButton url={window.location.href} subject='Share Research'>
            <AiOutlineMail size={18} className='text-black cursor-pointer' />
          </EmailShareButton>
          <AiOutlineLink
            size={18}
            className='text-black cursor-pointer'
            onClick={saveToClipboard}
          />
        </div>
      </div>
    </Modal>
  );
}
