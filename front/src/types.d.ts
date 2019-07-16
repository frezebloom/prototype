interface Window {
  initialReduxState: any,
  DEMViewerStore: any,
  DEMViewer: any
}

declare module "*.png" {
  const content: any;
  export default content;
}