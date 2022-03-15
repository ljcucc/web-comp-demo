import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class HomeHeader extends LitElement{
  static styles = css`
    .body{
      width: 100%;
      /* min-height: 80vmin; */
      
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items:center;
      font-family: Helvetica, Arial, sans-serif;
      
      padding: 10vmin 5vmin;
      box-sizing: border-box;
      word-break: break-word;

    }

    .body .p{
      text-align: center;
    }

    .body .title{
      font-size: var(--h1-font-size);
      text-align: center;
    }
  `;

  render(){
    return html`
      <div class="body">
        <h2 class="title">Welcome to 💻.🐺's home site</h2>
        <div class="p">
        This site is completely built with web components, native html code without webpack stuff, and more.
        </div>

      </div>
    `;
  }
}

customElements.define("home-header", HomeHeader);