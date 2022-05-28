/**
 * @param {boolean} reset true to reset the height
 * @param {ref} ref an html element, it can be "current" prop from useRef
 * @param {number} limit it will be used for height in px
 */
export default function adjustHeight(reset, ref, limit) {
  if (reset === true) {
    ref.style.height = "";
  }
  else if (reset === false) {
    ref.style.height = "";
    ref.style.height = Math.min(ref.scrollHeight, limit) + "px";
  }
}