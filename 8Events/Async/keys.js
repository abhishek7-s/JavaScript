const output = document.querySelector('.output')

window.addEventListener('keydown', (e)=>{
    document.querySelector('title').innerText = `Press ${e.key}`
    output.innerHTML = `
    <table>
        <tr>
            <th>KeyPressed</th>
            <th>KeyCode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === " " ? "Space" : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
     
     </table>
    `
})