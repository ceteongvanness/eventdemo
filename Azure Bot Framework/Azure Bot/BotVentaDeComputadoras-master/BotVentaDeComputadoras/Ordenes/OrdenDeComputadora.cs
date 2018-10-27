using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Bot.Builder.FormFlow;

namespace BotVentaDeComputadoras.Ordenes
{
    public enum MemoriaRam
    {
        _4GB,
        _8GB,
        _16GB
    }

    public enum DiscoDuro
    {
        SSD,
        Sata2
    }

    public enum Procesador
    {
        Intel,
        AMD
    }

    [Serializable]
    public class OrdenDeComputadora
    {
        public MemoriaRam? CantidadDeMemoria { get; set; }
        public DiscoDuro? TipoDeDiscoDuro { get; set; }
        public Procesador? TipoDeProcesador { get; set; }
        bool? Monitor;
        public string Nombre { get; set; }
        public string Direccion { get; set; }

        public static IForm<OrdenDeComputadora> BuildForm()
        {
            return new FormBuilder<OrdenDeComputadora>()
                .Message("¡Bienvenido al Bot de Compra de Computadoras!")
                .Message("Con mi ayuda puedes armar tu computadora a la medida, solo escribe la opcion o el numero que deseas.")
                .Build();
        }
    }
}