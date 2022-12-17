import React from "react";
import Modal from "../../views/modal";
import PropTypes from "prop-types";

function NoFlight({ hideMessage }) {
  const message =
    "Seçtiğiniz tarih ve güzergahta uçuşumuz bulunmamaktadır veya tüm uçuşlarımız doludur. Bu bilgileri değiştirerek yeni uçuş arayabilirsiniz.";
  return <Modal content={message} closeAction={hideMessage} withButton />;
}

NoFlight.propTypes = {
    hideMessage:PropTypes.func
}

export default NoFlight;
