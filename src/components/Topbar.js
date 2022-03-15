import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class Topbar extends LitElement{
  static styles = css`
    .appbar {
      height: 60px;
      width: 100vw;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
      padding-inline-start: 5vmin;

      font-family: Helvetica, Arial, sans-serif;
      box-shadow: 0px -5px 0px;
      transition: box-shadow 0.35s;

      top: 0;
      left:0;
      right:0;

      background: rgba(255, 255, 255, 0.5);

      position: sticky;

      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      
      box-sizing: border-box;
    }

    .appbar a{
      font-size: 18px;
      text-decoration: none;
      color: black;
    }

    .appbar .home{
      font-weight: 800;
      margin-inline-end: 16px;
    }

    .appbar:hover{
      box-shadow: 1px -5px 10px;
    }
  `;

  render(){
    return html`
  <div class="appbar">
    <a href="/" class="home" title="⭐ Hi! I'm IT Wolf 💻.🐺, nice to meet you! ⭐">💻.🐺</a>
    <a href="/about">About</a>
    <a href="https://twitter.com/ljcucc">Twitter</a>
    <a href="https://unsplash.com/@ljcucc">Unsplash</a>
    <a href="https://github.com/ljcucc">Github</a>
    <a href="https://github.com/ljcucc/ljcucc.github.io">[Source code]</a>
  </div>


    `;
  }
}

customElements.define("top-bar", Topbar);