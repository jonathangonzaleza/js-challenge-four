const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: false,
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de la montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 1200,
        smoke: true,
        pets: true,
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 4500,
        smoke: false,
        pets: true,
    },
    {
        nombre: 'Casa moderna con jardín y piscina privada',
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        descripcion: 'Una casa moderna y luminosa con amplio jardín, piscina y zona de parrilla',
        ubicacion: '234 Greenfield Street, Palm Springs, FL 33480',
        habitaciones: 4,
        baños: 3,
        costo: 3900,
        smoke: true,
        pets: true,
    },
    {
        nombre: 'Departamento acogedor en el centro histórico',
        src: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        descripcion: 'Departamento con estilo clásico, ideal para parejas o viajeros solos, cerca de todo',
        ubicacion: '89 Colonial Plaza, Oldtown, NY 10012',
        habitaciones: 2,
        baños: 1,
        costo: 2200,
        smoke: false,
        pets: false,
    },
    {
        nombre: 'Loft industrial con diseño artístico',
        src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        descripcion: 'Este loft estilo industrial ofrece un ambiente creativo con decoración moderna y techos altos',
        ubicacion: '456 Art District Blvd, Downtown LA, CA 90013',
        habitaciones: 1,
        baños: 1,
        costo: 2800,
        smoke: true,
        pets: true,
    }
]

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true,
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 2500,
        smoke: true,
        pets: true,
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2200,
        smoke: false,
        pets: false,
    },
    { 
        nombre: 'Apartamento minimalista con vista al parque',
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Diseño minimalista, luz natural y una increíble vista a un parque urbano',
        ubicacion: '789 Parkview Lane, Green City, TX 75201',
        habitaciones: 1,
        baños: 1,
        costo: 1800,
        smoke: false,
        pets: true,
    },
    { 
        nombre: 'Residencia familiar cerca de colegios',
        src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        descripcion: 'Ideal para familias, con espacios amplios y cercana a escuelas y áreas verdes',
        ubicacion: '456 Oakwood Drive, Suburbia, IL 60007',
        habitaciones: 3,
        baños: 2,
        costo: 2500,
        smoke: true,
        pets: true,
    },
    { 
        nombre: 'Estudio urbano para profesionales',
        src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        descripcion: 'Ubicado en el centro financiero, ideal para profesionales jóvenes o estudiantes',
        ubicacion: '321 Business Ave, Downtown, NY 10001',
        habitaciones: 1,
        baños: 1,
        costo: 2000,
        smoke: false,
        pets: false,
    }
]

function newCard(propiedad) {
    const [smokeClass, petsClass] = getColors(propiedad.smoke, propiedad.pets);

    const smokeIcon = propiedad.smoke ? "fas fa-smoking": "fas fa-smoking-ban";
    const smokeText = propiedad.smoke ? "Se permite fumar": "No se permite fumar";

    const petsIcon = propiedad.pets ? "fas fa-paw" : "fa-solid fa-ban";
    const petsText = propiedad.pets ? "Mascotas permitidas": "No se permiten mascotas";
    
    return `
    <div class="col-md-4 mb-4">
        <div class="card">
        <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p>
                    <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${propiedad.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                <p class="${smokeClass}">
                    <i class="${smokeIcon}"></i> ${smokeText}
                </p>
                <p class="${petsClass}">
                    <i class="${petsIcon}"></i> ${petsText}
                </p>
            </div>
        </div>
    </div>
    `;
}

function getColors(fumar, mascotas) {
    let smokeColor = fumar ? 'text-success' : 'text-danger';
    let petsColor = mascotas ? 'text-success' : 'text-danger';
    return [smokeColor, petsColor];
}


const path = window.location.pathname;
let propiedades = [];

if (path.includes("propiedades_venta")) {
    propiedades = propiedades_venta;
} else if (path.includes("propiedades_alquiler.html")) {
    propiedades = propiedades_alquiler;
}

const contenedor = document.getElementById("contenedor-propiedades");

if (contenedor && propiedades.length > 0) {
    for (let propiedad of propiedades) {
        contenedor.innerHTML += newCard(propiedad);
    }
}

function mostrarPropiedadesHome(){
    const propiedadHomeContainerVentas = document.getElementById('contenedor-ventas');
    const propiedadHomeContainerAlquiler = document.getElementById('contenedor-alquiler');
    const propiedadHomeAll = document.getElementById('propiedades-all')

    let HomeVentaCards = '';
	let HomeAlquilerCards = '';

	propiedades_venta.slice(0, 3).forEach((prop) => {
		HomeVentaCards += newCard({ ...prop});
	});

	propiedadHomeContainerVentas.innerHTML = HomeVentaCards;

	propiedades_alquiler.slice(0, 3).forEach((prop) => {
		HomeAlquilerCards += newCard({ ...prop});
	});

	propiedadHomeContainerAlquiler.innerHTML = HomeAlquilerCards;
}





document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.VentaBTN').forEach((button) => {
        button.addEventListener('click', function () {
            window.location.href = '../propiedades_venta.html';
        });
    });
        
    document.querySelectorAll('.AlquilerBTN').forEach((button) => {
        button.addEventListener('click', function () {
            window.location.href = '../propiedades_alquiler.html';
        });
    });

    mostrarPropiedadesHome();
});