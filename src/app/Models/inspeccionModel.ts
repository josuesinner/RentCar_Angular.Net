export interface inspeccion {
    id_Transaccion: number;
    vehiculoId: number;
    cedula: string;
    clienteId: number;
    tiene_Ralladuras: boolean;
    cantidad_Combustible: string;
    goma_respuesta: boolean;
    tiene_Gato: boolean;
    roturas_cristal: boolean;
    izqFrontal: boolean;
    derFrontal: boolean;
    izqTrasera: boolean;
    derTrasera: boolean;
    etc: string;
    fecha: Date;
    empleadoId: number;
    estado: boolean
}