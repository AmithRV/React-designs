import React, { useEffect, useState } from 'react';
import Layout from '../components/layouts/Layout';
import MessageLeft from '../components/message/MessageLeft';
import axios from 'axios';
import Pusher from 'pusher-js';

function LandingPage() {
  const server = '127.0.0.1';

  const [messages, setMessages] = useState([]);

  const handleSendMessage = (value) => {
    const data = {
      content: value,
    };
    axios
      .post(`http://${server}:8000/api/send-message`, data)
      .then(() => {})
      .catch(() => {});
  };

  useEffect(() => {
    const pusher = new Pusher('fb9820d492eae1a63e41', {
      cluster: 'ap2',
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function (data) {
      setMessages((prevArray) => [...prevArray, data?.message]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  useEffect(() => {
    axios
      .get(`http://${server}:8000/api/list-messages`)
      .then((response) => {
        setMessages(response?.data);
      })
      .catch(() => {});
  }, []);
  return (
    <Layout handleSendMessage={handleSendMessage}>
      <div>
        {messages?.map((message, index) => (
          <MessageLeft key={index} message={message} />
        ))}
      </div>
    </Layout>
  );
}

export default LandingPage;
