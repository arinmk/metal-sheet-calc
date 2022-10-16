import './App.css';

function calc() {
  var hh = document.getElementById('sheight').value;
  var hw = document.getElementById('swidth').value;
  var hmd = document.getElementById('smd').value;
  var hl = document.getElementById('sgauge').value;
  var p = document.getElementById('p').value;
  var hmix = hh * hw * (hl/10) * hmd;
  if (hmix === 0) {
    document.getElementById('resultKg').textContent = "wrong input";
    document.getElementById('price').textContent = "";  
    //reset();
  }
  else {
    document.getElementById('resultKg').textContent = hmix/1000 + " kg";
    document.getElementById('price').textContent = (hmix/1000) * p + " AMD";
    //alert(hmix);
  }
}
function reset() {
  document.getElementById('sheight').value = "";
  document.getElementById('swidth').value = "";
  document.getElementById('smd').value = "7.85";
  document.getElementById('p').value = "800";
  document.getElementById('sgauge').value = "";
  document.getElementById('resultKg').textContent = "";
  document.getElementById('price').textContent = "";
}

function mdChanged(){
  document.getElementById('smd').value = document.getElementById('mds').value;
}


function App() {
  return (
    <div className="App">
      <table class="mass_table">
        <tr>
          <th>Metal Type</th>
          <th>Mass Density</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>Steel</td>
          <td>7.85 g/cm³</td>
          <td>800 AMD</td>
        </tr>
        <tr>
          <td>Aluminium</td>
          <td>2.7 g/cm³</td>
          <td>2100 AMD</td>
        </tr>
        <tr>
          <td>Stainless Steel</td>
          <td>8.03 g/cm³</td>
          <td>2000 AMD</td>
        </tr>
      </table>
      <input id="sheight" placeholder="Sheet height (cm)" type="number"></input>
      <input id="swidth" placeholder="Sheet width (cm)" type="number"></input>
      <input id="sgauge" placeholder="Sheet gauge (mm)" type="number"></input>
      <input disabled id="smd" value="7.85" placeholder="Mass density (g/cm3)" type="number"></input>
      <input hidden disabled id="p" value="800" placeholder="Price" type="number"></input>
      <select onChange={mdChanged} name="mds" id="mds">
        <option value="7.85">Steel</option>
        <option value="2.7">Aluminium</option>
        <option value="8.03">Stainless Steel</option>
      </select>
      <br></br>
      <button onClick={calc} class="calc">Calculate!</button>
      <button onClick={reset} class="reset">Reset</button>
      <h1 class="result" id="resultKg"></h1>
      <h1 class="resultp result" id="price"></h1>

    </div>
  );
}

export default App;
