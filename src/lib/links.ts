export const externalLink = (node: HTMLAnchorElement) => {
  if (node.href) {
    node.setAttribute('target', '_blank');
    node.setAttribute('rel', 'noreferrer');
  }
};
