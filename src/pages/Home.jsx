import { useState, useEffect } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';


export default function Home() {
  
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Обновление ширины окна при изменении размера окна браузера
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Очистка обработчика событий при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <h1>
        Phonebook
        <BsFillTelephoneFill />
      </h1>
      <hr />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src="https://cdn.vox-cdn.com/thumbor/GJlGBAXJPIB3BasN8AAE3gdDkb4=/7x0:3007x2250/1200x800/filters:focal(7x0:3007x2250)/cdn.vox-cdn.com/uploads/chorus_image/image/37222130/4248396588_baf974a894_o.0.0.jpg"
          alt="Phonebook"
          style={{
            maxWidth: '100%',
            maxHeight: 'calc(100vh - 200px)',
            width: windowWidth > 1000 ? '1000px' : '100%',
            height: 'auto',
          }}
        />
      </div>
    </>
  );
}
