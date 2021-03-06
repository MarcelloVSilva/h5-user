/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface H5User {
      'usuarios': any;
    }
  }

  interface HTMLH5UserElement extends StencilComponents.H5User, HTMLStencilElement {}

  var HTMLH5UserElement: {
    prototype: HTMLH5UserElement;
    new (): HTMLH5UserElement;
  };
  interface HTMLElementTagNameMap {
    'h5-user': HTMLH5UserElement;
  }
  interface ElementTagNameMap {
    'h5-user': HTMLH5UserElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'h5-user': JSXElements.H5UserAttributes;
    }
  }
  namespace JSXElements {
    export interface H5UserAttributes extends HTMLAttributes {
      'usuarios'?: any;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;