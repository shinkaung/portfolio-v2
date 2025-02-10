import { ThemeProvider } from '../context/ThemeContext';
import Navbar from './Navbar';

export default function ThemeWrapper() {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
} 