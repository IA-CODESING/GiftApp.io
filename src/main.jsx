import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GitExpertApp } from './GitExpertApp';
import './Styles.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GitExpertApp />
  </StrictMode>,
)
