window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }
  
  // Replace with actual statistics
  document.getElementById('stat-1').innerText = 'According to the 2021 edition of ‘Women, Business, and the Law’, a report published annually by the World Bank, there are 88 countries that prevent women from working in certain jobs on the basis of gender..';
  document.getElementById('stat-2').innerText = ' According to UN estimates, 25% of women and girls over the age of 15 have experienced some form of intimate violence..';
  document.getElementById('stat-3').innerText = 'Gender Gap Accelerators work with advanced and developing economies to create public-private collaborations for rapid acceleration to economic parity (World Economic Forum, 2021).';
  
  
  window.onload = function() {
    // Sign the Petition button
    document.getElementById('action-1').addEventListener('click', () => {
        window.open('https://www.unwomen.org/en', '_blank');
    });
  
    // Donate button
    document.getElementById('action-2').addEventListener('click', () => {
        window.open('https://www.heforshe.org/en', '_blank');
    });
  
    // Volunteer button
    document.getElementById('action-3').addEventListener('click', () => {
        window.open('https://equalitynow.org/', '_blank');
    });
  }
  