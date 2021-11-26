/// <reference types="react-scripts" />

// To solve the issue: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245
/// <reference types="styled-components/cssprop" />
//mp4
declare module '*.mp4' {
  const src: string;
  export default src;
}
declare module '*.ttf';
