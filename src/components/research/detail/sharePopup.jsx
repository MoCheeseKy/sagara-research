import React from 'react';
import { Modal } from 'antd';
import {
  WhatsappShareButton,
  EmailShareButton,
  TelegramShareButton,
  LinkedinShareButton,
  LineShareButton
} from 'react-share';
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineCopy,
  AiOutlineLinkedin
} from 'react-icons/ai'
import { BiLogoTelegram } from 'react-icons/bi'

export default function SharePopup({
  open = false,
  onClose = () => {},
  title = '',
  saveToClipboard = () => {}
}) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      title={`Share ${title}`}
      footer={null}
    >
      <div className='flex flex-row gap-2 md:gap-4'>
        <WhatsappShareButton url={window.location.href} title='Share Research'>
          <AiOutlineWhatsApp size={50} />
        </WhatsappShareButton>
        <TelegramShareButton url={window.location.href}>
          <BiLogoTelegram size={50} />
        </TelegramShareButton>
        <LineShareButton url={window.location.href}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg"
            alt="line logo"
            className='w-[50px] h-[50px]'
          />
        </LineShareButton>
        <LinkedinShareButton url={window.location.href}>
          <AiOutlineLinkedin size={50} />
        </LinkedinShareButton>
        <EmailShareButton url={window.location.href} subject='Share Research'>
          <AiOutlineMail size={50} />
        </EmailShareButton>
        <AiOutlineCopy size={50} onClick={saveToClipboard} />
      </div>
    </Modal>
  );
}
