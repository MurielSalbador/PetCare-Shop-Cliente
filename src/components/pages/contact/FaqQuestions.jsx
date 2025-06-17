import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FaqQuestions.css';
import { FaWhatsapp } from 'react-icons/fa';

const FaqQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const faqSections = [
    {
      title: "¿Cómo puedo realizar un pedido?",
      desc: "Realizar un pedido en nuestra tienda es muy fácil y rápido. Solo tenés que navegar por las distintas categorías o usar el buscador para encontrar lo que necesitás. Una vez que encuentres el producto que te interesa, hacé clic en 'Agregar al carrito' y repetí el proceso con todos los productos que quieras. Cuando termines, andá al carrito y hacé clic en 'Finalizar compra'. Allí podrás ingresar tus datos, elegir el método de pago que más te convenga (aceptamos tarjetas de crédito, débito, transferencia bancaria y otros), y confirmar el pedido. Además, podés crear una cuenta para guardar tus pedidos anteriores y hacer futuras compras más fácilmente. Si en algún momento tenés dudas, errores en el proceso o querés una recomendación, podés escribirnos por WhatsApp y te ayudamos al instante.",
      contact: "Para más información, contacta al: +54 9 11 1234-5678",
    },
    {
      title: "¿Tu paquete está a salvo?",
      desc: "Sí, tu paquete está 100% asegurado. Cada pedido se embala cuidadosamente con materiales resistentes como cajas reforzadas, envoltorios acolchonados y cinta de seguridad. Si el producto es frágil o delicado, usamos protecciones extra para evitar cualquier daño durante el transporte. Además, todos nuestros envíos cuentan con número de seguimiento, por lo que vas a poder ver cada paso desde que sale del depósito hasta que llega a tu puerta. Si detectamos algún inconveniente o retraso, te lo informamos enseguida. Y si algo llegara a fallar, nuestro equipo de soporte se encarga de solucionarlo sin complicaciones.",
      contact: "Para más información, contacta al: +54 9 11 1234-5678",
    },
    {
      title: "¿Dónde está mi pedido?",
      desc: "Desde el momento en que despachamos tu compra, vas a poder seguir el recorrido en tiempo real desde tu cuenta. Solo tenés que ir a la sección 'Mis pedidos' para ver el estado actualizado: preparado, en tránsito, en reparto o entregado. Cada cambio te lo notificamos por email o WhatsApp para que estés al tanto. En caso de demoras, problemas con la empresa de transporte o cualquier duda que tengas, podés comunicarte con nosotros y te ayudamos a resolverlo al instante. Nuestro objetivo es que recibas tu pedido sin preocupaciones y a tiempo.",
      contact: "Para más información, contacta al: +54 9 11 8765-4321",
    },
    {
      title: "Envíos y entregas",
      desc: "Hacemos envíos a todo el país en un plazo de 24 a 72 hs hábiles, dependiendo de tu ubicación. Podés elegir entre envío a domicilio, retiro en sucursal o entregas express, según lo que más te convenga. Además, trabajamos con operadores logísticos de confianza como Correo Argentino, Andreani y otras empresas regionales. Cada paquete va asegurado y protegido para que llegue en perfecto estado. Apenas tu pedido esté en camino, te lo notificamos por email y WhatsApp con los datos de seguimiento. Si tenés una urgencia o necesitás coordinar un horario especial, escribinos y lo resolvemos juntos.",
      contact: "Para más información, contacta al: +54 9 11 2345-6789",
    },
    {
      title: "¿Qué debo hacer si recibí un producto defectuoso?",
      desc: "Lamentamos mucho si recibiste un producto defectuoso, no es algo común pero puede pasar. En ese caso, comunicate con nosotros dentro de los 7 días posteriores a recibir tu pedido. Enviános fotos claras del producto, el defecto y el embalaje original para hacer un seguimiento completo. Una vez recibido el reclamo, te vamos a ofrecer reemplazar el producto por uno nuevo o reintegrarte el dinero, según prefieras. Nosotros nos hacemos cargo del costo del envío y gestionamos todo para que no tengas que preocuparte por nada. Nuestra prioridad es que estés conforme con tu compra.",
      contact: "Para más información, contacta al: +54 9 11 3456-7890",
    },
    {
      title: "Devoluciones y Reembolsos",
      desc: "¿No era lo que esperabas? No hay problema. Podés devolver cualquier producto dentro de los 7 días desde que lo recibiste, siempre y cuando esté sin uso, con el empaque original y en buen estado. Nosotros te enviamos una etiqueta de devolución para que no tengas que pagar nada extra. Apenas recibimos el producto devuelto y verificamos que esté en condiciones, te hacemos el reembolso total o te mandamos otro artículo, según lo que elijas. Es un proceso fácil, sin complicaciones y pensado para que compres con total tranquilidad.",
      contact: "Para más información, contacta al: +54 9 11 3456-7890",
    },
    {
      title: "¿Tienen atención al cliente los fines de semana?",
      desc: "Sí, contamos con atención al cliente también los fines de semana. Los sábados atendemos de 10 a 18 hs para consultas, dudas o pedidos urgentes. Los domingos y feriados no tenemos atención activa, pero podés escribirnos por WhatsApp o email y te responderemos ni bien comience el siguiente día hábil. También tenemos respuestas automáticas con información básica para ayudarte mientras esperás. Queremos que tengas soporte siempre que lo necesites.",
      contact: "Para más información, contacta al: +54 9 11 4444-5555",
    },
    {
      title: "¿No encontraste tu pregunta?",
      desc: "No te preocupes, ¡estamos para ayudarte! Si tenés una duda específica o querés hablar directamente con nuestro equipo, podés escribirnos por WhatsApp. Estamos disponibles y respondemos rápido, incluso fuera del horario comercial. Solo tocá el ícono flotante abajo a la derecha y empezá a chatear con nosotros. Nuestro objetivo es que tengas siempre una respuesta clara, rápida y humana para lo que necesites.",
      contact: "Para más información, contacta al: +54 9 11 1234-5678"
    }
  ];

  return (
    <div className='help-background'>
      <div className="help-wrapper"      
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-delay="200">
      <aside className="help-sidebar">
        {faqSections.map((item, index) => (
          <button
            key={index}
            className={`sidebar-btn ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {item.title}
          </button>
        ))}
      </aside>
      <section className="help-content-single">
        <div className="back-arrow-container">
          <button className="back-arrow3" onClick={() => navigate("/")}>
            <i className="fas fa-arrow-left"></i>
          </button>
        </div>
        <h2>{faqSections[activeIndex].title}</h2>
        <p>{faqSections[activeIndex].desc}</p>
        {faqSections[activeIndex].contact && (
          <p className="contact-info">{faqSections[activeIndex].contact}</p>
        )}
      </section>

      <a href="https://wa.me/5491112345678" target="_blank" className="whatsapp-btn" aria-label="Contactar por WhatsApp">
        <FaWhatsapp />
      </a>
    </div>
  );
    </div>
    )
};

export default FaqQuestions;
