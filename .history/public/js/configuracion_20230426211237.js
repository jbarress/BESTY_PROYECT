var configuracion = {
  _showCalendar: false,
  _showContacts: false,
  _showTransacciones: false,
  _showTotalTransacciones: false,
  _showMusic: false,
  _idMusic: '',
  
  // Getters
  get valores() {
    return {
      showCalendar: this._showCalendar,
      showContacts: this._showContacts,
      showTransacciones: this._showTransacciones,
      showTotalTransacciones: this._showTotalTransacciones,
      showMusic: this._showMusic,
    };
  },
  
  // Setters
  set showCalendar(value) {
    this._showCalendar = value;
  },
  set showContacts(value) {
    this._showContacts = value;
  },
  set showTransacciones(value) {
    this._showTransacciones = value;
  },
  set showTotalTransacciones(value) {
    this._showTotalTransacciones = value;
  },
  set showMusic(value) {
    this._showMusic = value;
  },
  
  // Función para inicializar los valores de las propiedades
  inicializar() {
    this._showCalendar = false;
    this._showContacts = false;
    this._showTransacciones = false;
    this._showTotalTransacciones = false;
    this._showMusic = false;
  }
};

module.exports = configuracion;






