import React from 'react';
import { Modal, message } from 'antd';
import Typography from '../Typography';
import {
  WhatsappShareButton,
  EmailShareButton,
  TelegramShareButton,
  LinkedinShareButton,
  LineShareButton,
} from 'react-share';
import { AiOutlineMail, AiOutlineLink } from 'react-icons/ai';
import { SiWhatsapp, SiTelegram, SiLine, SiLinkedin } from 'react-icons/si';
import ThanksImage from '../../../assets/Images/ThanksImage.svg';

export default function ThanksPopup({
  open = false,
  onClose = () => {},
  title,
}) {
  const [messageApi, messageContext] = message.useMessage();
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
      {messageContext}
      <Modal open={open} onCancel={onClose} title={null} footer={null}>
        <div className='flex flex-col items-center pb-6'>
          <img
            src={ThanksImage}
            alt='ThanksImage'
            className='w-[384px] min-w-[384px] max-w-[384px] aspect-video mb-4'
          />
          <Typography.LargeHeading text='Thank you for downloading!' bold />
          <Typography.MediumText text={title} className='mt-2 mb-12' />
          <Typography.MediumText text='Share this research' className='mb-2' />
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
            <EmailShareButton
              url={window.location.href}
              subject='Share Research'
            >
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
    </>
  );
}
