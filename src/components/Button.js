import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class ButtonComp extends LitElement{
  static styles = css`
  .button{
    padding: 8px 16px;
    text-transform: uppercase;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 800;
    outline: none;
    border:none;

    transition: background 0.35s;
    display: inline-flex;
    border-radius: 4px;
    cursor: pointer;
  }

  .button:hover{
    background: rgba(0, 0, 0, 0.15);
  }
  `;
  render(){
    return html`
    <div class="button">
      <slot></slot>
    </div>
    `;
  }
}


customElements.define("app-button", ButtonComp);