function showSummary(text) {
    document.getElementById('summaryText').innerText = text;
    document.getElementById('summaryModal').style.display = 'block';
  }
  
  function closeSummary() {
    document.getElementById('summaryModal').style.display = 'none';
  }
  