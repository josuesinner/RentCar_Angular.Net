export interface rentaDevolucion {
    no_Renta: number;
    empleadoId: number;
    vehiculoId: number;
    clienteId: number;
    fecha_Renta: Date | null;
    fecha_Devolucion: Date | null;
    monto_Dia: string;
    cantidad_dias: number;
    comentario: string;
    devolucion: boolean;
    estado: boolean
}