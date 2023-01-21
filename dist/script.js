import React, {
Fragment,
useEffect,
useRef,
useState } from
'https://cdn.skypack.dev/react';
import { render } from 'https://cdn.skypack.dev/react-dom';
import gsap from 'https://cdn.skypack.dev/gsap';

const ROOT_NODE = document.querySelector('#app');

const getCode = language => {
  let code;
  if (language === 'css') {
    code = `
<!----Instagram: @darling_zbig ---->

.cage {
  --gap: 10px;
}
/* Chromium + Safari Support ✨ */
@supports (-webkit-box-reflect: below) {
  .cage img {
    -webkit-box-reflect: below
      var(--gap)
      linear-gradient(transparent, #fff);
  }
}
/* Firefox Support 🦊 */
@supports (
  (background: -moz-element(#cage)) or
  (background: element(#cage))
) {
  .cage {
    position: relative;
  }
  .cage:after {
    content: "";
    position: absolute;
    inset: 0;
    background: -moz-element(#cage) no-repeat;
    mask: linear-gradient(transparent, #fff);
    transform-origin: 50% calc(var(--gap) + 100%);
    transform: rotateX(180deg);
    background-size: cover;
  }
}

by: Darlyn`;
  } else {
    code =
    `
<!----Instagram: @darling_zbig ---->    

<div class="cage">
  <img
    id="cage"
    src="https://i.ibb.co/LNg6KYj/twice-darlyn.jpg"
  />
</div>
<div class="Darlyn" </div>`;
  }
  return Prism.highlight(code, Prism.languages[language], language);
};

const App = () => {
  const [showCSS, setShowCSS] = useState(true);
  const code = getCode(showCSS ? 'css' : 'markup');

  React.useEffect(() => {
    const update = ({ x, y }) => {
      gsap.set(document.documentElement, {
        '--x': gsap.utils.mapRange(0, window.innerWidth, -45, 45)(x) });

    };
    window.addEventListener('pointermove', update);
    return () => window.removeEventListener('pointermove', update);
  }, []);

  return /*#__PURE__*/(
    React.createElement("div", { className: "scene" }, /*#__PURE__*/
    React.createElement("div", { className: "result" }, /*#__PURE__*/
    React.createElement("div", { className: "result__code" }, /*#__PURE__*/
    React.createElement("button", {
      className: "toggle-button",
      onClick: () => setShowCSS(!showCSS) }, `Show ${
    showCSS ? 'HTML' : 'CSS'
    }`), /*#__PURE__*/
    React.createElement("div", { className: "code-blocks" }, /*#__PURE__*/
    React.createElement("pre", { className: `language-${showCSS ? 'css' : 'markup'}` }, /*#__PURE__*/
    React.createElement("code", {
      dangerouslySetInnerHTML: {
        __html: code } })))), /*#__PURE__*/

    React.createElement("div", { className: `result__result` }, /*#__PURE__*/
    React.createElement("div", { className: "cage" }, /*#__PURE__*/
    React.createElement("img", { id: "cage", src: "https://i.ibb.co/LNg6KYj/twice-darlyn.jpg" }))))));

};

render( /*#__PURE__*/React.createElement(App, null), ROOT_NODE);