// Import stylesheets
import './style.css';
import LeaderLine from 'leader-line-new';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Processor Debugger</h1>`;

new LeaderLine(
  document.getElementById('item1'),
  document.getElementById('item5'),
  { startSocket: 'bottom', endSocket: 'top', path: 'grid' }
);

new LeaderLine(
  document.getElementById('item1'),
  document.getElementById('item4'),
  { startSocket: 'bottom', endSocket: 'top', path: 'grid' }
);

new LeaderLine(
  document.getElementById('item4'),
  document.getElementById('item7'),
  { startSocket: 'bottom', endSocket: 'top', path: 'grid' }
);

new LeaderLine(
  document.getElementById('item7'),
  document.getElementById('item10'),
  { startSocket: 'bottom', endSocket: 'top', path: 'grid' }
);

new LeaderLine(
  document.getElementById('item2'),
  document.getElementById('item5'),
  {
    color: 'red',
    startSocket: 'bottom',
    endSocket: 'top',
    path: 'grid',
    dash: { animation: true }
  }
);

new LeaderLine(
  document.getElementById('item5'),
  document.getElementById('item9'),
  {
    color: 'red',
    startSocket: 'bottom',
    endSocket: 'top',
    path: 'grid',
    dash: { animation: true }
  }
);

let line = new LeaderLine(
  document.getElementById('item9'),
  document.getElementById('item10'),
  {
    color: 'red',
    startSocket: 'bottom',
    endSocket: 'top',
    path: 'grid',
    dash: { animation: true }
  }
);

// line.remove()
