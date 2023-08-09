<script>
    import { PUBLIC_API_PROXY } from "$env/static/public";
    import { Usuario } from '../../stores/storable'
    
    let usuario = '';
    let contra = '';

    async function login(){
        console.log('login ...' , usuario, contra)
        let url = `${PUBLIC_API_PROXY}/login`;
        console.log("|------- API login ---------|");
        console.log("url: ", url);
        try {
            const response = await fetch(url , {
                method: 'POST',
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({usuario: usuario , contra : contra}),
                } );
            const result = await response.json();
            console.log(result)
            if(result.success){
                console.log('EXITO --> GUARDANDO USUARIO EN STORAGE')
                Usuario.set(result.datos_usuario)
            }else
            {
                console.log('FALLO --> INTENTE DENUEVO')
            }
            
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }

</script>


<div class="container">
    <div class="row">
        <div class="col">
            <div class="formulario">
                <p>Iniciar sesión</p>
                <form  method="POST">
                    <div class="form-group">
                        <input type="text" class="form-control" name="usuario" placeholder="Usuario" >
                    </div>

                    <div class="form-group">
                        <input type="password" class="form-control" name="contra" placeholder="Contraseña" >
                    </div>
                    <div class="col text-center">
                        <br>
                        <button type="submit" class="btn btn-primary">Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
