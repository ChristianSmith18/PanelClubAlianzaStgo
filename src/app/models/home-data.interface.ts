export interface HomeRootData {
    portadas: Portadas[];
}

export interface Portadas {
    id: string;
    titulo: string;
    subtitulo: string;
    url: string;
    fecha: string;
}
