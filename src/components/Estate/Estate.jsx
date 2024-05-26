import './style.css';

export const Estate = ({ data }) => (
    <div className="estate-container">
    <h1 className="estate-title">{data.title}</h1>
    <p className="estate-text">{data.text}</p>
    <div className="estate-info">
      <p>Cena: {data.price} Kč</p>
      <p>Lokalita: {data.city}</p>
    </div>
    <div className="estate-contact">
      <p>Kontakt: {data.contact.name}</p>
      <p>Email: {data.contact.email}</p>
      <p>Telefon: {data.contact.phone}</p>
    </div>
    <img className="estate-img" src={data.photo} alt={data.title} />
  </div>
  );
  