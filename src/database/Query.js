module.exports = {
    SimpleQuery:`SELECT * from dbo.[Tmp_Kardex]`,
    Seconduery:`SELECT        TOP (100) PERCENT dbo.[MatPri.GuiasIngreso].num_guia, dbo.[MatPri.Proveedores].codigo_proveedor, dbo.[MatPri.Proveedores].nombre_proveedor, dbo.[MatPri.OrdenesTrabajo].codigo_ordentrabajo, 
    dbo.[MatPri.OrdenesTrabajo].viaje_ordentrabajo, dbo.[MatPri.OrdenesTrabajo].año_ordentrabajo, dbo.[MatPri.GuiasIngreso].fecha_guia, dbo.[MatPri.Productos].cod_producto, dbo.[MatPri.Productos].nombre_producto, 
    SUM(dbo.[MatPri.DetGuiasIngreso].kg_bruto - dbo.[MatPri.DetGuiasIngreso].kg_tara) AS Kg_Net_Ingreso, dbo.[MatPri.DetGuiasIngreso].id_producto, dbo.[MatPri.DetGuiasIngreso].id_guia, 
    dbo.[MatPri.DetGuiasIngreso].id_detalle, SUM(dbo.[MatPri.GuiasIngreso].id_ordentrabajo) AS total_orden_trabajo
FROM            dbo.[MatPri.GuiasIngreso] INNER JOIN
    dbo.[MatPri.OrdenesTrabajo] ON dbo.[MatPri.GuiasIngreso].id_ordentrabajo = dbo.[MatPri.OrdenesTrabajo].id_ordentrabajo INNER JOIN
    dbo.[MatPri.Proveedores] ON dbo.[MatPri.Proveedores].id_proveedor = dbo.[MatPri.OrdenesTrabajo].id_proveedor INNER JOIN
    dbo.[MatPri.DetGuiasIngreso] ON dbo.[MatPri.GuiasIngreso].id_guia = dbo.[MatPri.DetGuiasIngreso].id_guia INNER JOIN
    dbo.[MatPri.Productos] ON dbo.[MatPri.DetGuiasIngreso].id_producto = dbo.[MatPri.Productos].id_producto
GROUP BY dbo.[MatPri.GuiasIngreso].num_guia, dbo.[MatPri.Proveedores].codigo_proveedor, dbo.[MatPri.Proveedores].nombre_proveedor, dbo.[MatPri.OrdenesTrabajo].codigo_ordentrabajo, 
    dbo.[MatPri.OrdenesTrabajo].viaje_ordentrabajo, dbo.[MatPri.OrdenesTrabajo].año_ordentrabajo, dbo.[MatPri.GuiasIngreso].fecha_guia, dbo.[MatPri.Productos].cod_producto, dbo.[MatPri.Productos].nombre_producto, 
    dbo.[MatPri.DetGuiasIngreso].id_producto, dbo.[MatPri.DetGuiasIngreso].id_guia, dbo.[MatPri.DetGuiasIngreso].id_detalle`,
    InventoryQuery:`SELECT        dbo.[PT.GuiaIngreso].num_guia, dbo.[PT.GuiaIngreso].fecha_guia, dbo.[PT.GuiaIngreso].fecchaRegIng, dbo.[PT.GuiaIngreso].obs_guia, dbo.[MatPri.GuiasEgreso].num_guia AS num_guiamp, 
    dbo.[MatPri.GuiasEgreso].fecha_guia AS fecha_guiamp, dbo.[MatPri.GuiasEgreso].dia_produccion, dbo.[MatPri.GuiasEgreso].anio_produccion, dbo.[PT.DetGuiaIngreso].idot, dbo.[MatPri.OrdenesTrabajo].codigo_ordentrabajo, 
    dbo.[MatPri.OrdenesTrabajo].id_proveedor, dbo.[MatPri.OrdenesTrabajo].viaje_ordentrabajo, dbo.[MatPri.OrdenesTrabajo].año_ordentrabajo, dbo.[MatPri.Proveedores].codigo_proveedor, 
    dbo.[MatPri.Proveedores].nombre_proveedor, dbo.[PT.DetGuiaIngreso].id_tipo_miga, dbo.[PT.Tipo.Migas].nombre_tipo_miga, dbo.[PT.Tipo.Migas].tipo, dbo.[PT.DetGuiaIngreso].idcliente, dbo.[PT.Op].FechaInicio_op, 
    dbo.[PT.Op].Id_Cliente, dbo.[PT.Op].FechaFin_op, dbo.[PT.Op].Nombre_op, dbo.[PT.Op].id_pais, dbo.[PT.Op].Contrato_op, dbo.[PT.Op].id_op_estado, [PT.Clientes_1].Nombre_Cliente, [PT.Clientes_1].Dir_Cliente, 
    [PT.Clientes_1].Telf_Cliente, [PT.Clientes_1].Tipo_Cliente, [PT.Clientes_1].Ciudad, dbo.[PT.DetGuiaIngreso].idOP, dbo.[PT.DetGuiaIngreso].tipodespacho, dbo.[PT.DetGuiaIngreso].observaciones, dbo.[PT.DetGuiaIngreso].estado, 
    dbo.[PT.TiposRTP].tipo AS tipoRTP, dbo.[PT.TiposRTP].nombre, dbo.[PT.RTP].numero, dbo.[PT.RTP].estado AS estadoRTP, dbo.[PT.DetGuiaIngreso].idRTP, dbo.[PT.DetGuiaIngreso].id_tipo_congelamiento, 
    dbo.[PT.DetGuiaIngreso].unidades, dbo.[PT.DetGuiaIngreso].cajas, dbo.[PT.DetGuiaIngreso].kg, dbo.[PT.Tipos.Congelamiento].nombre_tipo_congelamiento, dbo.[PT.DetGuiaIngreso].iditem, dbo.[PT.Items_PT].nombre_items, 
    dbo.[PT.Items_PT].Peso_Unidad, dbo.[PT.DetGuiaIngreso].idDetguiaIngreso, dbo.[PT.DocumentosTransacciones].codigo, dbo.[PT.DocumentosTransacciones].tipo AS tipoDoc, dbo.[PT.DocumentosTransacciones].propietario, 
    dbo.[PT.DocumentosTransacciones].nombredoc, dbo.[PT.DocumentosTransacciones].secuencia_inicial, dbo.[PT.DocumentosTransacciones].Id_Items_Grupo, dbo.[PT.DocumentosTransacciones].impredoc, 
    dbo.[PT.DocumentosTransacciones].idOrigenPT, dbo.[PT.Origuen].nombre AS nombreOrigen, dbo.[PT.Items_Grupo].Nombre_Items_Grupo, dbo.[PT.GuiaIngreso].id_tipodoc, dbo.[PT.GuiaIngreso].id_guia, 
    dbo.[PT.GuiaIngreso].estadoguia, dbo.[PT.GuiaIngreso].id_guia_Ing_pt, dbo.[MatPri.Especies].nombre_especie, dbo.[MatPri.Especies].abrevia_especie, dbo.[PT.Items_Talla].Nombre_Items_Talla, 
    ISNULL(dbo.[PT.DetGuiaIngreso].unidades_separdas, 0) AS unidades_separdas, ISNULL(dbo.[PT.DetGuiaIngreso].unidades_despachadas, 0) AS unidades_despachadas, dbo.[PT.DetGuiaIngreso].id_detalle_op, 
    dbo.[MatPri.GuiasEgreso].fecha_produccion, dbo.[PT.DetGuiaIngreso].Fecha_produccion_guia_ingreso, dbo.[PT.Items_Tipos].Nombre_Items_Tipos, dbo.[PT.Items_Tipo_Limpieza].Nombre_Items_Tipo_Limpieza, 
    dbo.[PT.DetGuiaIngreso].Obs_Calidad, dbo.[PT.DetGuiaIngreso].estado_calidad, dbo.[PT.DetGuiaIngreso].tipo_venta, dbo.[MatPri.OrdenesTrabajo].fechazarpe_ordentrabajo, 
    dbo.[MatPri.OrdenesTrabajo].fechaarribo_ordentrabajo, dbo.[MatPri.OrdenesTrabajo].areacaptura_ordentrabajo, dbo.[MatPri.OrdenesTrabajo].metodopesca_ordentrabajo, dbo.[MatPri.Paises].nombreespanol_pais, 
    dbo.[MatPri.Proveedores].matricula_proveedor, dbo.[MatPri.Proveedores].capacidad_proveedor, ISNULL(dbo.[PT.DetGuiaIngreso].Id_Item_defecto, 0) AS Id_Item_defecto, 
    ISNULL(dbo.[PT.Conservas_Defectos].nombre_defecto_pt, '') AS nombre_defecto_pt, ISNULL(dbo.[PT.Conservas_Defectos].descrpcion_defecto_pt, '') AS descrpcion_defecto_pt, 
    ISNULL(dbo.[PT.Conservas_Defectos].tipo_defecto_pt, '') AS tipo_defecto_pt, ISNULL(dbo.[PT.DetGuiaIngreso].id_nivel_defecto, 0) AS id_nivel_defecto, ISNULL(dbo.[PT.Conservas_niveles_defectos].nombre_nivel_defecto, '') 
    AS nombre_nivel_defecto, dbo.[PT.DetGuiaIngreso].codigo_lata, dbo.[PT.Items_PT].Unidades_Cajas, dbo.[PT.Items_PT].Unidades_Cluster, dbo.[PT.Items_PT].Peso_Neto, dbo.[PT.Items_PT].Peso_Drenado, 
    dbo.[PT.Clientes].Nombre_Cliente AS Nombre_Cliente_det_ing, dbo.[PT.Op].Numero_Secu_Op, dbo.[PT.Items_PT].Codigo_Items, dbo.[MatPri.OrdenesTrabajo].fechadescarga_ordentrabajo, 
    dbo.[MatPri.OrdenesTrabajo].NumDeRegistroComprobante, dbo.[MatPri.OrdenesTrabajo].CodRegCapturaDePesca, dbo.[MatPri.OrdenesTrabajo].bloqueo_exportacion, dbo.[MatPri.GuiasEgreso].id_guia AS IdGuiaEgresoE1, 
    dbo.[MatPri.Especies].id_especie, dbo.[PT.Items_Tipos].sub_partida, dbo.[PT.DetGuiaIngreso].unidades * dbo.[PT.DetGuiaIngreso].kg AS Kg_Nt, MONTH(dbo.[PT.GuiaIngreso].fecha_guia) AS Mes_Ingreso_Bodega, 
    YEAR(dbo.[PT.GuiaIngreso].fecha_guia) AS Anio_Ingreso_Bodega, dbo.[PT.DocumentosTransacciones].tipo_mov, dbo.[PT.Items_Tipo_Envase].Nombre_Items_Tipo_Envase, 
    dbo.[PT.Items_PT].Nombre_Comercial AS nombre_marca, (CASE WHEN [PT.Items_Tipos].Nombre_Items_Tipos = 'Sardina' THEN ('LO: ' + (CASE WHEN len(CAST(dia_produccion AS VARCHAR(10))) 
    = 2 THEN ('0' + CAST(dia_produccion AS VARCHAR(10))) WHEN len(CAST(dia_produccion AS VARCHAR(10))) = 1 THEN ('00' + CAST(dia_produccion AS VARCHAR(10))) ELSE CAST(dia_produccion AS VARCHAR(10)) END) 
    + '/' + SUBSTRING(CAST(Nombre_Items_Tipos AS VARCHAR(10)), 1, 1) + '/' +
        (SELECT        Abreviatura
          FROM            (SELECT        [PT.Items_Liq_Cobertura].Abreviatura, [PT.Items_PT].id_items
                                    FROM            [PT.Items_PT] WITH (nolock) INNER JOIN
                                                              [PT.Items_Liq_Cobertura] WITH (nolock) ON [PT.Items_PT].Id_Items_Liq_Cobertura = [PT.Items_Liq_Cobertura].Id_Items_Liq_Cobertura) AS LiquidoCobertura
          WHERE        LiquidoCobertura.Id_Items = [PT.Items_PT].id_items)) ELSE ('LO: ' + (CASE WHEN len(CAST(dia_produccion AS VARCHAR(10))) = 2 THEN ('0' + CAST(dia_produccion AS VARCHAR(10))) 
    WHEN len(CAST(dia_produccion AS VARCHAR(10))) = 1 THEN ('00' + CAST(dia_produccion AS VARCHAR(10))) ELSE CAST(dia_produccion AS VARCHAR(10)) END) + '/' + SUBSTRING(CAST(Nombre_Items_Tipos AS VARCHAR(10)), 1,
     1) + '/' + abrevia_especie + '/' +
        (SELECT        Abreviatura
          FROM            (SELECT        [PT.Items_Liq_Cobertura].Abreviatura, [PT.Items_PT].id_items
                                    FROM            [PT.Items_PT] WITH (nolock) INNER JOIN
                                                              [PT.Items_Liq_Cobertura] WITH (nolock) ON [PT.Items_PT].Id_Items_Liq_Cobertura = [PT.Items_Liq_Cobertura].Id_Items_Liq_Cobertura) AS LiquidoCobertura
          WHERE        LiquidoCobertura.Id_Items = [PT.Items_PT].id_items)) END) AS Numero_Lote, (CASE WHEN dbo.[MatPri.GuiasEgreso].fecha_produccion BETWEEN CAST(anio_produccion AS VARCHAR(10)) AND CAST(anio_produccion AS VARCHAR(10)) THEN (DATEADD(YY, 4, dbo.[MatPri.GuiasEgreso].fecha_produccion)) ELSE (DATEADD(YY, 5, 
    dbo.[MatPri.GuiasEgreso].fecha_produccion)) END) AS Fecha_Expiracion_Lata, dbo.[MatPri.OrdenesTrabajo].areafao_ordentrabajo, dbo.[PT.DetGuiaIngreso].nombre_marca AS nombre_marca_ingreso, 
    dbo.[PT.DetGuiaIngreso].fecha_expiracion, dbo.[PT.Items_Tipos].Id_Items_Tipos, dbo.[MatPri.Proveedores].origen_proveedor, ISNULL(dbo.[PT.Op.Detalle].can_code, 'N/A') AS can_code, 
    ISNULL(dbo.[PT.DetGuiaIngreso].curentena, 0) AS curentena, dbo.[PT.Items_Tipo_Envase].dia_cuarentena, dbo.[MatPri.GuiasEgreso].lote_produccion, dbo.[PT.Items_PT].CodigoErp, 
    dbo.[PT.Items_Liq_Cobertura].Id_Items_Liq_Cobertura, dbo.[PT.Items_Liq_Cobertura].Nombre_Items_Liq_Cobertura, ISNULL(dbo.[MatPri.OrdenesTrabajo].kg_kilos_reportar_hoja_atun, 0) AS kg_kilos_reportar_hoja_atun, 
    CONVERT(char(10), dbo.[PT.GuiaIngreso].fecha_guia, 103) AS solo_fecha_guia, dbo.[MatPri.DocumentosTransacciones].codigo AS codigo_doc_mp, DATEPART(year, dbo.[PT.GuiaIngreso].fecha_guia) AS año_guia_ingreso, 
    DATENAME(month, dbo.[PT.GuiaIngreso].fecha_guia) AS mes_guia_ingreso, dbo.[MatPri.DocumentosTransacciones].id_tipodoc AS iddocmp, ISNULL(dbo.[PT.DetGuiaIngreso].Etiquetas, 'false') AS Etiquetas, 
    ISNULL(dbo.[PT.DetGuiaIngreso].Carton, 'false') AS Carton, ISNULL(dbo.[PT.DetGuiaIngreso].Retractil, 'false') AS Retractil, ISNULL(dbo.[PT.DetGuiaIngreso].Sticker, 'False') AS Sticker, 
    ISNULL(dbo.[PT.DetGuiaIngreso].CertificadoINP, 'False') AS CertificadoINP, CASE WHEN ((dbo.[PT.DetGuiaIngreso].Etiquetas = 'true') AND (dbo.[PT.DetGuiaIngreso].Carton = 'true') AND (dbo.[PT.DetGuiaIngreso].Retractil = 'true') 
    AND dbo.[PT.DetGuiaIngreso].Sticker = 'true' AND (CertificadoINP = 'true')) THEN 'SI' ELSE 'NO' END AS EstadoCompleto, (CASE WHEN ((dbo.[PT.DetGuiaIngreso].Descripcion_Cliente IS NULL) OR
    (dbo.[PT.DetGuiaIngreso].Descripcion_Cliente = '')) THEN ISNULL(nombre_items, '') ELSE dbo.[PT.DetGuiaIngreso].Descripcion_Cliente END) AS Descripcion_Cliente, dbo.[PT.Items_PT].Destino, 
    ISNULL(dbo.[Admin.Usuarios].iniciales_usuario, '') AS iniciales_usuario, dbo.[PT.DetGuiaIngreso].Etiquetas AS Expr1, dbo.[PT.DetGuiaIngreso].Carton AS Expr2, dbo.[PT.DetGuiaIngreso].Retractil AS Expr3, 
    dbo.[PT.DetGuiaIngreso].Sticker AS Expr4, dbo.[PT.DetGuiaIngreso].idAsignacionLinea, dbo.[PT.DetGuiaIngreso].idProductoAlmacen, ISNULL(dbo.[PT.DetGuiaIngreso].Recibido, 0) AS Recibido, 
    ISNULL(dbo.[PT.GuiaIngreso].EnviadoDesdeAlmacen, 0) AS EnviadoDesdeAlmacen, dbo.[PT.Items_PT].Descripcion_Cliente AS Expr5, dbo.[PT.Items_PT].DescripcionEtiqueta, ISNULL(dbo.[PT.Items_PT].UnidadPorPack, 1) 
    AS UnidadPorPack, ISNULL(dbo.[PT.Items_PT].LatasPorCajas, dbo.[PT.Items_PT].Unidades_Cajas) AS LatasPorCajas, dbo.Almacen.UnidadCajasAlmacen, dbo.Almacen.CajasEncartonadas, dbo.[PT.Op].id_op, 
    dbo.Almacen.FechaProduccion, dbo.[MatPri.Especies].NombreCientifico, dbo.[PT.DetGuiaIngreso].PrecioKgPt, dbo.[PT.DetGuiaIngreso].IdProductoMP AS id_producto_MP, dbo.[PT.DetGuiaIngreso].ubicacion_detalle, 
    ISNULL(SUBSTRING(dbo.[PT.DetGuiaIngreso].ubicacion_detalle, 1, 2), 0) AS Camara, ISNULL(SUBSTRING(dbo.[PT.DetGuiaIngreso].ubicacion_detalle, 4, 2), 0) AS Fila, 
    ISNULL(SUBSTRING(dbo.[PT.DetGuiaIngreso].ubicacion_detalle, 7, 2), 0) AS Columna, ISNULL(SUBSTRING(dbo.[PT.DetGuiaIngreso].ubicacion_detalle, 10, 2), 0) AS Nivel, ISNULL(dbo.[MatPri.Productos].nombre_producto, '') 
    AS NombreProductoMP, dbo.[MatPri.OrdenesTrabajo].fechaFindescarga_ordentrabajo, dbo.[MatPri.OrdenesTrabajo].puertozarpe_ordentrabajo, dbo.[MatPri.OrdenesTrabajo].puertoarribo_ordentrabajo, 
    dbo.[MatPri.OrdenesTrabajo].Transbordo, dbo.[MatPri.Productos].abreviatura_producto, dbo.[MatPri.Productos].abreviatura_comercial, dbo.[MatPri.Productos].Id_TipoProducto, dbo.[MatPri.Productos].nombre_comercial, 
    dbo.[MatPri.Productos].abreviatura_producto AS TallaMP, dbo.[PT.RTP].idTipoRTP, dbo.[PT.DocumentosTransacciones].Origen_Destino
FROM            dbo.[PT.Marcas] WITH (nolock) INNER JOIN
    dbo.[PT.Op.Detalle] WITH (nolock) ON dbo.[PT.Marcas].id_marca = dbo.[PT.Op.Detalle].id_marca RIGHT OUTER JOIN
    dbo.[PT.RTP] WITH (nolock) INNER JOIN
    dbo.[PT.GuiaIngreso] WITH (nolock) INNER JOIN
    dbo.[PT.DetGuiaIngreso] WITH (nolock) ON dbo.[PT.GuiaIngreso].id_guia_Ing_pt = dbo.[PT.DetGuiaIngreso].id_guia_Ing_pt INNER JOIN
    dbo.[MatPri.OrdenesTrabajo] WITH (nolock) ON dbo.[PT.DetGuiaIngreso].idot = dbo.[MatPri.OrdenesTrabajo].id_ordentrabajo INNER JOIN
    dbo.[MatPri.Proveedores] WITH (nolock) ON dbo.[MatPri.OrdenesTrabajo].id_proveedor = dbo.[MatPri.Proveedores].id_proveedor INNER JOIN
    dbo.[PT.Tipo.Migas] WITH (nolock) ON dbo.[PT.DetGuiaIngreso].id_tipo_miga = dbo.[PT.Tipo.Migas].id_tipo_miga ON dbo.[PT.RTP].idRTP = dbo.[PT.DetGuiaIngreso].idRTP INNER JOIN
    dbo.[PT.TiposRTP] WITH (nolock) ON dbo.[PT.RTP].idTipoRTP = dbo.[PT.TiposRTP].idTipoRTP INNER JOIN
    dbo.[PT.Tipos.Congelamiento] WITH (nolock) ON dbo.[PT.DetGuiaIngreso].id_tipo_congelamiento = dbo.[PT.Tipos.Congelamiento].id_tipo_congelamiento INNER JOIN
    dbo.[PT.Items_PT] WITH (nolock) ON dbo.[PT.DetGuiaIngreso].iditem = dbo.[PT.Items_PT].Id_Items INNER JOIN
    dbo.[PT.DocumentosTransacciones] WITH (nolock) ON dbo.[PT.GuiaIngreso].id_tipodoc = dbo.[PT.DocumentosTransacciones].id_tipodoc INNER JOIN
    dbo.[PT.Origuen] WITH (nolock) ON dbo.[PT.DocumentosTransacciones].idOrigenPT = dbo.[PT.Origuen].idOrigenPT INNER JOIN
    dbo.[PT.Items_Grupo] WITH (nolock) ON dbo.[PT.DocumentosTransacciones].Id_Items_Grupo = dbo.[PT.Items_Grupo].Id_Items_Grupo INNER JOIN
    dbo.[MatPri.Especies] WITH (nolock) ON dbo.[PT.Items_PT].id_especie = dbo.[MatPri.Especies].id_especie INNER JOIN
    dbo.[PT.Items_Talla] WITH (nolock) ON dbo.[PT.DetGuiaIngreso].id_item_talla = dbo.[PT.Items_Talla].Id_Items_Talla INNER JOIN
    dbo.[PT.Items_Tipo_Limpieza] WITH (nolock) ON dbo.[PT.Items_PT].Id_Items_Tipo_Limpieza = dbo.[PT.Items_Tipo_Limpieza].Id_Items_Tipo_Limpieza INNER JOIN
    dbo.[PT.Items_Tipos] WITH (nolock) ON dbo.[PT.Items_PT].id_tipos_items = dbo.[PT.Items_Tipos].Id_Items_Tipos INNER JOIN
    dbo.[MatPri.Paises] WITH (nolock) ON dbo.[MatPri.Proveedores].id_pais = dbo.[MatPri.Paises].id_pais INNER JOIN
    dbo.[PT.Clientes] WITH (nolock) ON dbo.[PT.DetGuiaIngreso].idcliente = dbo.[PT.Clientes].Id_Cliente INNER JOIN
    dbo.[PT.Items_Tipo_Envase] WITH (nolock) ON dbo.[PT.Items_PT].Id_Items_Tipo_Envase = dbo.[PT.Items_Tipo_Envase].Id_Items_Tipo_Envase INNER JOIN
    dbo.[PT.Items_Liq_Cobertura] WITH (nolock) ON dbo.[PT.Items_PT].Id_Items_Liq_Cobertura = dbo.[PT.Items_Liq_Cobertura].Id_Items_Liq_Cobertura LEFT OUTER JOIN
    dbo.[MatPri.Productos] ON dbo.[PT.DetGuiaIngreso].IdProductoMP = dbo.[MatPri.Productos].id_producto LEFT OUTER JOIN
    dbo.[MatPri.GuiasEgreso] WITH (nolock) ON dbo.[PT.GuiaIngreso].id_guia = dbo.[MatPri.GuiasEgreso].id_guia LEFT OUTER JOIN
    dbo.Almacen ON dbo.[PT.DetGuiaIngreso].idProductoAlmacen = dbo.Almacen.Id_ProdElaborados LEFT OUTER JOIN
    dbo.[Admin.Usuarios] ON dbo.[PT.DetGuiaIngreso].id_usuario = dbo.[Admin.Usuarios].id_usuario LEFT OUTER JOIN
    dbo.[MatPri.DocumentosTransacciones] ON dbo.[MatPri.GuiasEgreso].id_tipodoc = dbo.[MatPri.DocumentosTransacciones].id_tipodoc ON dbo.[PT.Op.Detalle].id_op_det = dbo.[PT.DetGuiaIngreso].id_detalle_op LEFT OUTER JOIN
    dbo.[PT.Clientes] AS [PT.Clientes_1] WITH (nolock) INNER JOIN
    dbo.[PT.Op] WITH (nolock) ON [PT.Clientes_1].Id_Cliente = dbo.[PT.Op].Id_Cliente ON dbo.[PT.DetGuiaIngreso].idOP = dbo.[PT.Op].id_op LEFT OUTER JOIN
    dbo.[PT.Conservas_niveles_defectos] WITH (nolock) ON dbo.[PT.DetGuiaIngreso].id_nivel_defecto = dbo.[PT.Conservas_niveles_defectos].id_nivel_defecto LEFT OUTER JOIN
    dbo.[PT.Conservas_Defectos] WITH (nolock) ON dbo.[PT.DetGuiaIngreso].Id_Item_defecto = dbo.[PT.Conservas_Defectos].Id_Item_defecto`
}