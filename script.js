document.addEventListener('DOMContentLoaded', function() {
    const vscodeShortcut = document.querySelector('.shortcut.vscode');
    const vscodeDiv = document.querySelector('#VisualCode');
    const vscodeTaskbar = document.querySelector('.vscode-task');
    const vscodeMinimizeButton = vscodeDiv.querySelector('.minimize');
    const vscodeCloseButton = vscodeDiv.querySelector('.close');
    const vscodeTaskbarButton = document.querySelector('.taskbar-button.vscode-task');
  
    const googleShortcut = document.querySelector('.shortcut.google');
    const googleDiv = document.querySelector('#GoogleChrome');
    const googleTaskbar = document.querySelector('.google-task');
    const googleMinimizeButton = googleDiv.querySelector('.minimize');
    const googleCloseButton = googleDiv.querySelector('.close');
    const googleTaskbarButton = document.querySelector('.taskbar-button.google-task');
  
    vscodeShortcut.addEventListener('dblclick', function() {
      vscodeDiv.style.display = 'block';
      vscodeTaskbar.style.display = 'block';
    });
  
    googleShortcut.addEventListener('dblclick', function() {
      googleDiv.style.display = 'block';
      googleTaskbar.style.display = 'block';
    });
  
    vscodeMinimizeButton.addEventListener('click', function() {
      vscodeDiv.style.display = 'none';
    });
  
    googleMinimizeButton.addEventListener('click', function() {
      googleDiv.style.display = 'none';
    });
  
    vscodeCloseButton.addEventListener('click', function() {
      vscodeDiv.style.display = 'none';
      vscodeTaskbar.style.display = 'none';
    });
  
    googleCloseButton.addEventListener('click', function() {
      googleDiv.style.display = 'none';
      googleTaskbar.style.display = 'none';
    });
  
    vscodeTaskbarButton.addEventListener('click', function() {
      if (vscodeDiv.style.display === 'block') {
        vscodeDiv.style.display = 'none';
      } else {
        vscodeDiv.style.display = 'block';
        vscodeTaskbar.style.display = 'block';
      }
    });
  
    googleTaskbarButton.addEventListener('click', function() {
      if (googleDiv.style.display === 'block') {
        googleDiv.style.display = 'none';
      } else {
        googleDiv.style.display = 'block';
        googleTaskbar.style.display = 'block';
      }
    });
  });

  
  function handleKeyDown(event) {
    if (event.keyCode === 13) { // 13 represents the Enter key
      event.preventDefault(); // Prevent the form from being submitted

      var inputUrl = document.getElementById('searchInput').value; // Get the value from the input field
      var url = addHttpProtocol(inputUrl); // Prepend 'http://' if necessary
      document.getElementById('browser').src = url; // Set the 'src' attribute of the iframe

      // Clear the input field
      document.getElementById('searchInput').value = '';
    }
  }

  function addHttpProtocol(url) {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
      url = "http://" + url;
    }
    return url;
  }