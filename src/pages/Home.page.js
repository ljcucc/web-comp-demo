import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import { Router } from "https://unpkg.com/@vaadin/router@1.7.4/dist/vaadin-router.js";

import "/src/components/Card.js";
import "/src/components/Button.js";
import "/src/components/HomeHeader.js";

import { PostController } from '../controllers/PostController.js';

class HomePage extends LitElement{
  static styles = css`

    .cards{
      display:flex;
      flex-direction: row;
      align-items:center;
      width: 100%;
      gap: 32px;
      /* row-gap: 32px; */
      flex-wrap: wrap;
      justify-content:center;
      max-width: 100%;
      box-sizing: border-box;
      /* padding: 32px; */
    }
  `;

  learnMore(id){
    return ()=>Router.go(`/profile/${id}`);
  }

  render() {
    const cc = new PostController()
    const list = cc.getPostList();
    return html`
    <home-header></home-header>
    <div class="cards">
      ${
        list.map(item=>
          html`<app-card>
              <card-title>
                ${cc.getPostTitle(item)}
              </card-title>
              <card-body>
                ${cc.getPostContent(item)}
              </card-body>
              <card-action>
                <app-button @click="${this.learnMore(item)}">Learn more</app-button>
              </card-action>
            </app-card>`
        )
      }
    </div>
    `;
  }
}

customElements.define("home-page-comp", HomePage);