import React from 'react';

const Map = () => {
  return (
    <div
      style={{
        lineHeight: 0,
        maxHeight: "500px"
      }}
      className="map"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3471.0094715526807!2d75.16663827553478!3d29.54521847517877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDMyJzQyLjgiTiA3NcKwMTAnMDkuMiJF!5e0!3m2!1sen!2sin!4v1749284700205!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
