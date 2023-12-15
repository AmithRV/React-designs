import React, { useEffect, useState } from 'react';
import Layout from '../components/layouts/Layout';
import MessageLeft from '../components/message/MessageLeft';
import axios from 'axios';
import Pusher from 'pusher-js';

function LandingPage() {
  // const server = 'https://note-share-backend.onrender.com';
  const server = 'http://127.0.0.1:8000';

  const [loading, setLoading] = useState({ isLoading: false, type: '' });

  const [messages, setMessages] = useState([]);

  const handleSendMessage = (value) => {
    setLoading({ isLoading: true, type: 'add-message' });
    const data = {
      content: value,
    };
    axios
      .post(`${server}/api/send-message`, data)
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        setLoading({ isLoading: false, type: '' });
      });
  };

  const handleFlushServerDB = () => {
    axios
      .post(`${server}/api/flush`)
      .then(() => {
        setMessages([]);
      })
      .catch(() => {});
  };

  useEffect(() => {
    const pusher = new Pusher('fb9820d492eae1a63e41', {
      cluster: 'ap2',
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function (data) {
      if (data?.type === 'add-message') {
        setMessages((prevArray) => [...prevArray, data?.message]);
      } else if (data?.type === 'flush') {
        setMessages([]);
      }
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  useEffect(() => {
    axios
      .get(`${server}/api/list-messages`)
      .then((response) => {
        setMessages(response?.data);
      })
      .catch(() => {});
  }, []);

  return (
    <Layout
      handleSendMessage={handleSendMessage}
      handleFlushServerDB={handleFlushServerDB}
      loading={loading}
    >
      <div>
        {messages?.length > 0 &&
          messages?.map((message, index) => (
            <MessageLeft key={index} message={message} />
          ))}
      </div>
    </Layout>
  );
}

export default LandingPage;
