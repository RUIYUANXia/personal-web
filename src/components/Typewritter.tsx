import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, delay }: { words: string[], delay: number }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        if (currentIndex >= 0) {
          const timeout = setTimeout(() => {
            setCurrentText(currentWord.substring(0, currentIndex));
            setCurrentIndex(prevIndex => prevIndex - 1);
          }, delay);
          return () => clearTimeout(timeout);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex(prevWordIndex => (prevWordIndex + 1) % words.length);
        }
      } else {
        if (currentIndex < currentWord.length) {
          const timeout = setTimeout(() => {
            setCurrentText(currentWord.substring(0, currentIndex + 1));
            setCurrentIndex(prevIndex => prevIndex + 1);
          }, delay);
          return () => clearTimeout(timeout);
        } else {
          setIsDeleting(true);
        }
      }
    }
  }, [currentIndex, delay, words, currentWordIndex, isDeleting]);

  return <span>{currentText}</span>;
};

export default Typewriter;