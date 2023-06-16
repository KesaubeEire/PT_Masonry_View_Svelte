import App from './main.svelte';
function runSvelte() {
  const app = new App({
    target: (() => {
      const app = document.createElement('div');
      document.body.append(app);
      return app;
    })(),
  });
  return app
}

export default runSvelte;
