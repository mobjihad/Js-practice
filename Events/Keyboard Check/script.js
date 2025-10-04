const div = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  div.innerHTML = `

  
  <table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
  `;

  console.log(e.key, e.keyCode, e.code);
});
