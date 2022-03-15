import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class CardBody extends LitElement{
  static styles = css`
  .card-body{
    font-size: var(--card-body-font-size);
  }
  `;

  render(){
    return html`
    <div class="card-body">
      <slot></slot>
    </div>
    `;
  }
}

class CardTitle extends LitElement{
  static styles = css`
  .card-title{
    font-size: var(--title-font-size);
    margin-bottom:16px;
  }
  `;

  render(){
    return html`
    <div class="card-title">
      <slot></slot>
    </div>
    `;
  }
}

class CardAction extends LitElement {
  static styles = css`
  .actions{
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 16px;
  }
  `;

  render(){
    return html`
    <div class="actions">
      <slot></slot>
    </div>
    `;
  }
}

class CardComponent extends LitElement{
  static styles = css`
    .app-card {
      padding: 16px;
      min-height: 100px;
      max-width: 60vmin;
      /* box-shadow: 1px 1px 10px rgba(0,0,0,.35) ; */
      border-radius: 10px;
      font-size: var(--card-body-font-size);
      font-family: Helvetica, Arial, sans-serif;
      border: 1px solid rgba(0,0,0,.35);

      transition: box-shadow 0.35s, border 0.35s;
    }

    .app-card:hover{
      border: 1px solid rgba(0,0,0,.0);
      box-shadow: 1px 1px 10px rgba(0,0,0,.35) ;
    }
  `;
  render(){
    return html`
      <div class="app-card">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("app-card", CardComponent);
customElements.define("card-title", CardTitle);
customElements.define("card-body", CardBody);
customElements.define("card-action", CardAction);