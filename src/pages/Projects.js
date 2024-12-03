import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
    const proyectos = [
        {
            nombre: 'Proyecto Maps',
            descripcion: 'Aplicacion para mapear las aulas de la FMO',
            link: 'https://github.com/WilliamVasquez21/PoryectoMaps.git',   
        },
        {
            nombre: 'Agenda Eventos',
            descripcion: 'Aplicacion para agendar eventos',
            link: 'https://github.com/WilliamAlfredo/agenda-eventos.git',   
        },
        {
            nombre: 'Poke Api',
            descripcion: 'Aplicacion de pokeApi',
            link: 'https://github.com/WilliamAlfredo/pokeApi.git',   
        }
    ];
    return (
        <section className="projects">
            <h2>Mis Proyectos</h2>
            <div className="projects-grid">
                {proyectos.map((proyecto, index) => (
                    <div key={index} className="project-card">
                        <h3>{proyecto.nombre}</h3>
                        <p>{proyecto.descripcion}</p>
                        <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="3x"/>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;