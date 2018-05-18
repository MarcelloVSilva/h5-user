import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'h5-user'
})
export class H5user {
  @Prop() usuarios = usuariosDB; //trocar por firebase
  render() {
    return <div>
      Usuarios
    </div>
  }
  user() {
    return this.usuarios;
  }
}

var usuariosDB = [
  {
      "id": "1",
      "name": "Marcello"
  }
]