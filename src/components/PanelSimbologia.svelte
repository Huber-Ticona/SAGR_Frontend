<script>
    function getColor(status) {
    if (status =='COMPLETO') {
      return 'linear-gradient(to bottom, #ff0000 0%, #ff6600 100%)';
    } else if(status == 'INCOMPLETO'){
      return 'linear-gradient(to bottom, #ffff00 0%, #ffff66 100%)';
    }else if(status == 'NO RETIRADO'){
      return 'linear-gradient(to top, #00ff00 0%, #99ff33 100%)'
    }
  }
</script>
<div>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#simbologiaCollapse" aria-expanded="false" 
    aria-controls="collapseExample">
    Simbologia
  </button>
</div>
<div class="collapse" id="simbologiaCollapse">
    <div class="row">
        <div class="col col-sm-6">
            <div class="d-flex">
                <button class="boton_panel" id="btn_simbologia" onclick="alert('hola')" style="--color:{getColor('COMPLETO')}"></button>
                <span><p>: Documento retirado.</p></span>
            </div>
            <div class="d-flex">
                <button class="boton_panel" id="btn_simbologia2" onclick="alert('hola')" style="--color:{getColor('INCOMPLETO')}"></button>
                <span><p>: Documento retirado Parcial.</p></span>
            </div>
            <div class="d-flex">
                <button class="boton_panel" id="btn_simbologia3" onclick="alert('hola')" style="--color:{getColor('NO RETIRADO')}"></button>
                <span><p>: Documento NO Retirado.</p></span>
            </div>

        </div>
        <div class="col col-sm-6">
            <div class="d-flex"><span class='circle_credito'></span>
                <p>: Asociada a una nota de credito</p>
            </div>
            <div class="d-flex">
                <span class='circle_orden'></span>
                <p>: Asociada a orden de trabajo.</p>
            </div>
            <div class="d-flex"><span class='circle_guia'></span>
                <p>: Asociada a guia.</p>
            </div>
            <div class="d-flex"><span class='circle_brown'></span>
                <p>: Despacho a domicilio.</p>
            </div>
            <div class="d-flex"><span class='circle_doc'></span>
                <p>: Guia con vinculo a boleta o factura.</p>
            </div>
            <div class="d-flex"><span class='circle_obs'></span>
                <p>: Documento tiene observaciones asociadas.</p>
            </div>
        </div>
    </div>
</div>

<style>
    .boton_panel{
        border:1px solid purple;
        width: 100px;
        height: 50px;
        margin: 5px 2px;
        padding: 0 0;
        cursor: pointer;
        font-size: 18px;
        font-family: 'Times New Roman', Times, serif;
        letter-spacing: 5px;
        background: var(--color);
        /*background: linear-gradient(to top, #00ff00 0%, #99ff33 100%);*/
}

.circle_credito{
  height: 11px;
  width: 11px;
  background: linear-gradient(to bottom, #ff0000 0%, #333300 100%);
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
}

.circle_orden{  
  height: 11px;
  width: 11px;
  background: linear-gradient(to bottom, #00ff00 0%, #003300 100%);
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
}
.circle_guia{
  height: 11px;
  width: 11px;
  background: linear-gradient(to bottom, #ffff00 0%, #996600 100%);
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
}
.circle_doc{
  height: 11px;
  width: 11px;
  background: linear-gradient(to bottom, #0000ff 0%, #000066  100%);
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
}
.circle_brown{
  height: 11px;
  width: 11px;
  background: linear-gradient(to bottom, #ff9933  0%, #ff0066   100%);
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
}
.circle_obs{
  height: 11px;
  width: 11px;
  background: linear-gradient(to bottom, #5a5551  0%, #e70fe3   100%);
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
}
</style>