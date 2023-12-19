// Write TypeScript code!
import { Application } from '@splinetool/runtime';

// Import stylesheets
import './styles.css';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas, {
  renderMode: 'auto',
});

app.load('https://prod.spline.design/ZDYwnCFiTA9gMHxn/scene.splinecode');
