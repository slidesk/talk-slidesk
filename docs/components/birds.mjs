/**
 * Early Birds
 */

const birdTemplate = (pseudo) => `
  <div class="bird">
    <img src="assets/communautes/${pseudo}.webp" alt="${pseudo}">
    <h3>${pseudo}</h3>
    <div class="sd-qrcode" data-url="https://github.com/${pseudo}"></div>
  </div>
`;

export default (data) => {
  let newData = data;
  [...newData.matchAll(/!bird\((.*)\)/g)].forEach((match) => {
    newData = newData.replace(match[0], birdTemplate(match[1]));
  });
  return newData;
};
