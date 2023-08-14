import React from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
function App() {
  const theme = {
    background: '#FFFFE0',
    fontFamily: 'Kanit, cursive',
    headerBgColor: '#696969',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#696969',
    botFontColor: '#fff',
    userBubbleColor: 'SlateGrey',
    userFontColor: '#fff',
  };

  const steps = [
    {
      id: 'Start',
      message: 'Привет! Что я могу для Вас сделать?',
      trigger: 'Issues',
    },
    {
      id: 'Issues',
      options: [
        {
          value: 'Pizza',
          label: 'Заказать пиццу',
          trigger: 'Pizza',
        },
        {
          value: 'Time',
          label: 'Установить будильник',
          trigger: 'Time',
        },
        {
          value: 'Weather',
          label: 'Вывести погоду',
          trigger: 'Weather',
        },
        {
          value: 'End',
          label: 'Закончить работу',
          trigger: 'End',
        },
      ],
    },
    {
      id: 'Pizza',
      message: 'Хорошо, я закажу пиццу 🍕. Что еще могу сделать?',
      trigger: 'Issues',
    },
    {
      id: 'Time',
      message: 'Будильник поставил. Что еще могу сделать?',
      trigger: 'Issues',
    },
    {
      id: 'Weather',
      message: 'Вывожу погоду. Что еще могу сделать?',
      trigger: 'Issues',
    },
    {
      id: 'End',
      message: 'Прекращаю свою работу',
      end: true,
    },
  ];

  return (
    <div floated="right">
      <ThemeProvider theme={theme}>
        <ChatBot
          botAvatar="https://sun9-5.userapi.com/impf/c305112/v305112241/3c14/5K6npQI6GN4.jpg?size=1280x1920&quality=96&sign=4f01bb590920863294c68a8142c83a6c&c_uniq_tag=4WgON4837LodJTqic_SaUEwa4va4r9gG_OBrbBDjXo0&type=album"
          steps={steps}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
