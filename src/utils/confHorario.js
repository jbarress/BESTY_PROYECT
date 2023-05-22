var configuracionHorario = {
    _action : '',
    _day : '',
    _time : '',
    _tittle: '',

    
    // Getters
    get toSave() {
      return {
        action: this._action,
        day: this._day,
        time: this._time,
        tittle: this._tittle,
      };
    },
    
    // Setters
    set day(value) {
      this._day = value;
    },
    set time(value) {
      this._time = value;
    },
    set tittle(value) {
      this._tittle = value;
    },
    set action(value) {
      this._action = value;
    },
    set showMusic(value) {
      this._showMusic = value;
    },
    
    // Función para inicializar los valores de las propiedades
    inicializar() {
      this._action = 'save';
      this._day = '';
      this._time = '';
      this._tittle = '';
    }
  };
  
  module.exports = configuracionHorario;