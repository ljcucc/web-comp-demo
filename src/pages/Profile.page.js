import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import {router} from "/src/index.js";
import {PostController} from "/src/controllers/PostController.js";

class ProfilePage extends LitElement{
  static styles = css``;

  // static properties = {
  //   location: Object
  // };

  static styles = css`
  *{
    font-family: Helvetica, Arial, sans-serif;
  }

  .p{
    max-width: 80vmin;
    margin-top: 64px;
  }

  .body{
    display: flex;
    justify-content:center;
  }
  `;

  constructor(){
    super();

    // this.properties.location = router.location;

  }

  render(){
    window.scrollTo(0,0);

    const postId = router.location.params.id;
    return html`
    <div class="body">
      <div class="p">
        <h2>${postId}</h2>
        <p>${new PostController().getCustomerDescription(postId)}</p>
      </div>
    </div>
    `;
  }
}

customElements.define("profile-page-comp", ProfilePage);