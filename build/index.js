let btnMenuPaquetes = document.getElementById('btnMenuPaquetes');
let btnMenuReportes = document.getElementById('btnMenuReportes');
let btnMenuConfig = document.getElementById('btnMenuConfig');
let btnMenuNotif = document.getElementById('btnMenuNotif');
let btnToggler = document.getElementById('btnToggler');
let root = document.getElementById('root');
let titulo = document.getElementById('txtTitulo');


let getListeners = ()=>{

    btnMenuPaquetes.addEventListener('click',()=>{
        root.innerHTML = getView.paquetes();
        document.getElementById('btnNuevo').addEventListener('click',()=>{
            $('#modalNuevo').modal('show');
        })
        btnToggler.click();
    });
    btnMenuReportes.addEventListener('click',()=>{
        root.innerHTML = getView.reportes();
        btnToggler.click();
    });
    btnMenuConfig.addEventListener('click',()=>{
        root.innerHTML = getView.config();
        btnToggler.click();
    });
    btnMenuNotif.addEventListener('click',()=>{
        root.innerHTML = getView.notif();
        btnToggler.click();
    });
    
};


let getView = {
    paquetes : ()=>{
        titulo.innerText = "Paquetes";
        return `
            <div class="card">
                <div class="form-group">
                    <label>Buscar:</label>
                    <input type="search" class="form-control" placeholder="Escriba para buscar...">
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead class="bg-info text-white">
                        <tr>
                            <td>No.Guia</td>
                            <td>Cliente</td>
                            <td>Origen</td>
                            <td>Destino</td>
                            <td>Status</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>00001</td>
                            <td>
                                Carlos Lopez
                                <br>
                                <small>Tel: 5555-5555</small>
                            </td>
                            <td>Cobán, Guatemala</td>
                            <td>Oficina, Estados Unidos</td>
                            <td>
                                <button class="btn btn-sm btn-warning">Pendiente</button>
                            </td>
                            <td>
                                <button class="btn btn-sm btn-circle btn-info">
                                    <i class="fab fa-telegram"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>00002</td>
                            <td>
                                Juan Carlos Garcia
                                <br>
                                <small>Tel: 5555-5555</small>
                            </td>
                            <td>Retalhuleu, Guatemala</td>
                            <td>Oficina, Estados Unidos</td>
                            <td>
                                <button class="btn btn-sm btn-danger">Perdido</button>
                            </td>
                            <td>
                                <button class="btn btn-sm btn-circle btn-info"><i class="fab fa-telegram"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>00003</td>
                            <td>
                                Maria Jimenez
                                <br>
                                <small>Tel: 5555-5555</small>
                            </td>
                            <td>Jutiapa, Guatemala</td>
                            <td>Oficina, Estados Unidos</td>
                            <td>
                                <button class="btn btn-sm btn-success">En Oficina</button>
                            </td>
                            <td>
                                <button class="btn btn-sm btn-circle btn-info"><i class="fab fa-telegram"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>00004</td>
                            <td>
                                Amanda Monterroso
                                <br>
                                <small>Tel: 5555-5555</small>
                            </td>
                            <td>Quetzaltenango, Guatemala</td>
                            <td>Oficina, Estados Unidos</td>
                            <td>
                                <button class="btn btn-sm btn-warning">Pendiente</button>
                            </td>
                            <td>
                                <button class="btn btn-sm btn-circle btn-info"><i class="fab fa-telegram"></i></button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div class="fixed-btn">
                <button class="btn-circle btn-xl btn-success" id="btnNuevo">+</button>
            </div>
        `
    },
    reportes: ()=>{
        titulo.innerText = "Reportes";
        return `
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="form-group">
                        <label>Fecha Inicial</label>
                        <input type="date" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Fecha Final</label>
                        <input type="date" class="form-control">
                    </div>
                    <button class="btn btn-info">Reporte por Agencia</button>
                </div>
            </div>
            <div class="col-8">
                <div class="table-responsive">
                    <table class="table table-hover table-striped">
                        <thead class="bg-success text-white">
                            <tr>
                                <td>Agencia</td>
                                <td>Importe</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Agencia Xela</td>
                                <td>Q4,500.00</td>
                                <td>
                                    <button class="btn btn-info btn-sm btn-circle" onclick="funciones.Aviso('Este puede ser el detalle de los movimientos de la agencia');">
                                        <i class="fab fa-telegram"><i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Agencia Zacapa</td>
                                <td>Q6,670.00</td>
                                <td>
                                    <button class="btn btn-info btn-sm btn-circle" onclick="funciones.Aviso('Este puede ser el detalle de los movimientos de la agencia');">
                                        <i class="fab fa-telegram"><i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Agencia Escuintla</td>
                                <td>Q9,500.00</td>
                                <td>
                                    <button class="btn btn-info btn-sm btn-circle" onclick="funciones.Aviso('Este puede ser el detalle de los movimientos de la agencia');">
                                        <i class="fab fa-telegram"><i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        `
    },
    config:()=>{
        titulo.innerText = "Configuraciones";
        return `
        <div class="card">
            <h1 class="text-danger">Acá estarían las opciones de configuración del sistema"</h1>
        </div>
        `
    },
    notif:()=>{
        titulo.innerText = "Notificaciones";
        return `
            
        `
    }
}



function getLogin(){
    $('#modalLogin').modal('show')
};

getListeners();
getLogin();