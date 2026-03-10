declare module 'figma:asset/*' {
  const content: string;
  export default content;
}

declare module 'figma:asset/*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

