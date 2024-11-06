function feelingLucky() {
    var query = document.querySelector('.text-search').value;
    window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query) + '&btnI';
 }