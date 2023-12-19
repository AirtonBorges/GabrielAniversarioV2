// Import stylesheets
import './global_styles.css';

// Write TypeScript code!
import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
const app = new Application(canvas, {
  renderMode: 'auto',
});

app.load('https://prod.spline.design/ZDYwnCFiTA9gMHxn/scene.splinecode');
