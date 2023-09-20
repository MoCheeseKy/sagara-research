import React from 'react';
import { Modal } from 'antd';
import {
  WhatsappShareButton,
  EmailShareButton,
  FacebookShareButton
} from 'react-share';
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineFacebook,
  AiOutlineCopy
  // AiOutlineInstagram,
} from 'react-icons/ai'

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
        <FacebookShareButton url={window.location.href}>
          <AiOutlineFacebook size={50} />
        </FacebookShareButton>
        <EmailShareButton url={window.location.href} subject='Share Research'>
          <AiOutlineMail size={50} />
        </EmailShareButton>
        <AiOutlineCopy size={50} onClick={saveToClipboard} />
      </div>
    </Modal>
  );
}
