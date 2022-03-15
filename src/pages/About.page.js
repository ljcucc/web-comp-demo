import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class AboutPage extends LitElement{
  static styles = css`
  #about{
    padding: 32px 10vmin;
    font-family: Helvetica, Arial, sans-serif;
  }
  `;

  render(){
    return html`
    <div id="about">
      <h2>About this site</h2>

      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis augue in dictum porttitor. Aliquam augue nibh, tempor eu convallis eleifend, condimentum varius risus. Donec turpis enim, vestibulum consequat orci ut, dignissim molestie tortor. Proin mollis nunc ac lectus consequat, ut fringilla elit placerat. Etiam quam ante, tempus non leo vel, imperdiet laoreet diam. Phasellus consequat erat sit amet quam suscipit dictum. Sed a interdum felis. Duis in magna at enim sodales porttitor ac eget sapien. Etiam non tortor ligula. Vivamus gravida ultricies tortor, eu sagittis felis finibus efficitur. Donec posuere et lorem vitae accumsan. Fusce auctor ipsum faucibus arcu congue tristique. Pellentesque congue, urna ac congue egestas, nisi dui efficitur elit, sit amet facilisis lorem lorem sed enim. Suspendisse odio urna, egestas non urna ut, tempor euismod augue. Pellentesque non mauris volutpat, efficitur neque ut, euismod odio.
      </p>

Sed vitae neque non dolor dapibus commodo. Mauris sollicitudin vel neque sed condimentum. Suspendisse porta mattis porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras nec dui nibh. Aliquam diam odio, semper sed consequat et, dapibus gravida enim. Suspendisse malesuada rutrum turpis nec accumsan. Maecenas condimentum, justo vel viverra volutpat, nulla leo lacinia nisl, ac convallis mi sem sit amet nulla.

<p>
Phasellus rutrum vestibulum pretium. Proin orci magna, cursus ut sagittis nec, lacinia ut nulla. Nulla vel eros imperdiet purus convallis cursus et quis nisi. Sed nec purus lacinia, auctor elit ac, feugiat lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare sapien sit amet nisl consequat tincidunt. Praesent aliquet sagittis orci eu tincidunt.
  </p>

Fusce eget neque turpis. Morbi viverra dapibus justo id feugiat. Curabitur at urna eros. Nunc in diam non neque hendrerit dapibus vel id nisl. Praesent at ipsum vel nibh condimentum sollicitudin bibendum eget metus. Vivamus consectetur orci a dui blandit molestie. Pellentesque consequat, mauris eu varius euismod, magna dolor lacinia est, sed semper purus est id arcu. Fusce sit amet hendrerit odio. Praesent quis est iaculis, semper ipsum nec, vehicula risus. Nunc finibus vestibulum metus, sit amet facilisis quam scelerisque eu. Nulla eget interdum arcu. Praesent blandit dignissim leo, a finibus massa feugiat ac. Quisque lobortis ante quis pharetra fermentum.
    </div>
    `;
  }
}

customElements.define("about-page-comp", AboutPage);