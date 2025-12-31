export const externalLink = (node: HTMLAnchorElement) => {
  if (node.href && !node.href.startsWith(window.location.origin)) {
    node.setAttribute('target', '_blank');
    node.setAttribute('rel', 'noreferrer');
  }
};
