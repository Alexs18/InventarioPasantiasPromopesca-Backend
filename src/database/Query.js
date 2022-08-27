module.exports = {
    SimpleQuery:`SELECT * from dbo.[Tmp_Kardex]`,
    ByProductStock:`SELECT SUM([cajas]) AS SUMATORIACAJAS, SUM(ing.unidades- ISNULL(ing.unidades_despachadas, 0))AS SALDOCUENTA,
    ing.CodigoErp, ing.nombre_items, ing.fecha_produccion,
      ing.Obs_Calidad, ing.estado_calidad, ing.tipo_defecto_pt, ing.codigo_lata,
      ing.Anio_Ingreso_Bodega, ing.Mes_Ingreso_Bodega, ing.Nombre_Items_Tipo_Envase,
      ing.Recibido, ing.Sticker, ing.Etiquetas, ing.Carton, liqui.Nombre_Items_Liq_Cobertura,
      ing.unidades- ISNULL(ing.unidades_despachadas, 0) AS saldo,
      ISNULL(ing.unidades_despachadas, 0) AS unidades_despachadas, ing.cajas
     FROM dbo.ProTerm_Ingresos_C1 as ing join dbo.[PT.Items_Liq_Cobertura] as liqui
        on ing.Id_Items_Liq_Cobertura = liqui.Id_Items_Liq_Cobertura
    WHERE (unidades - ISNULL(unidades_despachadas, 0) > 0) and ing.nombre_items = @nombre_items
    GROUP BY 
    ing.CodigoErp, ing.nombre_items, ing.fecha_produccion,
      ing.Obs_Calidad, ing.estado_calidad, ing.tipo_defecto_pt, ing.codigo_lata,
      ing.Anio_Ingreso_Bodega, ing.Mes_Ingreso_Bodega, ing.Nombre_Items_Tipo_Envase,
      ing.Recibido, ing.Sticker, ing.Etiquetas, ing.Carton, liqui.Nombre_Items_Liq_Cobertura, ing.unidades,
     unidades_despachadas, ing.cajas`,
    STOK:`SELECT [num_guia]
    ,[fecha_guia]
    ,[obs_guia]
    ,[observaciones]
    ,[nombre]
    ,[numero]
    ,[cajas]
    ,[nombre_items]
    ,[codigo]
    ,[nombredoc]
    ,[nombre_especie]
    ,[fecha_produccion]
    ,[Nombre_Items_Tipos]
    ,[Obs_Calidad]
    ,[estado_calidad]
    ,[tipo_venta]
    ,[codigo_lata]
    ,[Unidades_Cajas]
    ,[Mes_Ingreso_Bodega]
    ,[Anio_Ingreso_Bodega]
    ,[Nombre_Items_Tipo_Envase]
    ,[unidades]
    ,[saldo]
    ,[CodigoErp]
    ,[Costo]
    ,[Recibido]
    ,[Sticker]
    ,[Carton]
    ,[Etiquetas]
FROM [Inforfish2DPromopesca].[dbo].[ProTermVistaStockProductos]`,   
    STOK2BYRODUCT:`SELECT [num_guia]
    ,[fecha_guia]
    ,[obs_guia]
    ,[observaciones]
    ,[unidades_despachadas]
    ,[nombre]
    ,[numero]
    ,[cajas]
    ,[nombre_items]
    ,[codigo]
    ,[nombredoc]
    ,[nombre_especie]
    ,[fecha_produccion]
    ,[Nombre_Items_Tipos]
    ,[Obs_Calidad]
    ,[estado_calidad]
    ,[tipo_venta]
    ,[codigo_lata]
    ,[Unidades_Cajas]
    ,[Mes_Ingreso_Bodega]
    ,[Anio_Ingreso_Bodega]
    ,[Nombre_Items_Tipo_Envase]
    ,[unidades]
    ,[saldo]
    ,[CodigoErp]
    ,[Costo]
    ,[Recibido]
    ,[Sticker]
    ,[Carton]
    ,[Etiquetas]
FROM [Inforfish2DPromopesca].[dbo].[ProTermVistaStockProductos] WHERE [nombre_items] = 'CABALLA EN SALSA DE TOMATE PICANTE OVAL 425G 240G.TP*24'`,
    ALLPRODUCT:`SELECT DISTINCT(ing.nombre_items)
	FROM dbo.ProTermVistaStockProductos as ing join dbo.[PT.Items_Liq_Cobertura] as liqui
        on ing.Id_Items_Liq_Cobertura = liqui.Id_Items_Liq_Cobertura`,
    GETCUENTAS:`SELECT SUM([cajas]) AS SUMATORIACAJAS, SUM(unidades- ISNULL(unidades_despachadas, 0))AS SALDOCUENTA
    FROM dbo.ProTerm_Ingresos_C1`,
    FILTERQUERY:`SELECT [num_guia],[fecha_guia],[obs_guia],[observaciones],[unidades_despachadas],[nombre],[numero]
    ,[cajas],[nombre_items],[codigo],[nombredoc],[nombre_especie],[fecha_produccion],[Nombre_Items_Tipos]
    ,[Obs_Calidad],[estado_calidad],[tipo_venta],[codigo_lata],[Unidades_Cajas],[Mes_Ingreso_Bodega],[Anio_Ingreso_Bodega]
    ,[Nombre_Items_Tipo_Envase],[unidades],[saldo],[CodigoErp],[Costo],[Recibido],[Sticker],[Carton]
    ,[Etiquetas], [Nombre_Items_Grupo]
    FROM [Inforfish2DPromopesca].[dbo].[ProTermVistaStockProductos]`,
    FILTERBYDISTINC:`SELECT DISTINCT(nombre_items)
	    FROM dbo.ProTerm_Ingresos_C1`,
    TIPEENVASE:`SELECT DISTINCT(nombre_items)
	FROM dbo.ProTerm_Ingresos_C1 WHERE (unidades - ISNULL(unidades_despachadas, 0) > 0) AND (Nombre_Items_Tipo_Envase) != 'TALL' AND  (Nombre_Items_Tipo_Envase) != 'TAPA  PLANA' AND (Nombre_Items_Tipo_Envase) != 'OVAL' AND 
	(Nombre_Items_Tipo_Envase) != 'TINAPA' AND (Nombre_Items_Tipo_Envase) != '1/2 TALL'`, 
    LIQUIDOCOVERTURA:`select pro.num_guia, pro.fecha_guia, pro.obs_guia, pro.observaciones, pro.unidades_despachadas,pro.nombre,
    pro.numero, pro.cajas, pro.nombre_items, pro.codigo, pro.nombredoc, pro.nombre_especie, pro.fecha_produccion,
    pro.Nombre_Items_Tipos, pro.Obs_Calidad, pro.estado_calidad, pro.tipo_venta, pro.codigo_lata, pro.Unidades_Cajas, pro.Nombre_Items_Tipo_Envase, pro.unidades,  pro.CodigoErp, pro.Recibido, pro.Sticker, 
    pro.Carton, pro.Etiquetas, (pro.unidades - pro.unidades_despachadas)as saldo,ISNULL((pro.unidades -ISNULL(pro.unidades_despachadas,0))*pro.kg * pro.PrecioKgPt, 0)as Costo, pro.Anio_Ingreso_Bodega, pro.Mes_Ingreso_Bodega, liqui.Nombre_Items_Liq_Cobertura
    from dbo.ProTerm_Ingresos_C1 as pro
   join dbo.[PT.Items_Liq_Cobertura] as liqui
       on pro.Id_Items_Liq_Cobertura = liqui.Id_Items_Liq_Cobertura WHERE (liqui.Nombre_Items_Liq_Cobertura)!= 'ACEITE DE OLIVA'
     AND (liqui.Nombre_Items_Liq_Cobertura)!= 'ACEITE OLIVIA'
     AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'ACEITE OLIVIA REFINADO'
     AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'ACEITE SOYA'
     AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'ACEITE VEGETAL'
     AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'AGUA Y SAL'
     AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'ARROZ'
     AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'LIMON'
     AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'SALSA CALIFORNIA'
     AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'SALSA ESCABECHE'
     AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'SALSA TOMATE PICANTE'
     AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'VEGETALES'
     AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'N/A'`,
     LIQUIDOCOVERTURA2:`select distinct(pro.nombre_items)
     from dbo.ProTerm_Ingresos_C1 as pro
    join dbo.[PT.Items_Liq_Cobertura] as liqui
        on pro.Id_Items_Liq_Cobertura = liqui.Id_Items_Liq_Cobertura WHERE (unidades - ISNULL(unidades_despachadas, 0) > 0)
	  AND (liqui.Nombre_Items_Liq_Cobertura)!= 'ACEITE DE OLIVA'
      AND (liqui.Nombre_Items_Liq_Cobertura)!= 'ACEITE OLIVIA'
      AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'ACEITE OLIVIA REFINADO'
      AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'ACEITE SOYA'
      AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'ACEITE VEGETAL'
      AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'AGUA Y SAL'
      AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'ARROZ'
      AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'LIMON'
      AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'SALSA CALIFORNIA'
      AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'SALSA ESCABECHE'
      AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'SALSA TOMATE PICANTE'
      AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'VEGETALES'
      AND  (liqui.Nombre_Items_Liq_Cobertura)!= 'N/A'`,
      ESTADOEXPORTACION:`SELECT DISTINCT (nombre_items)
      FROM [Inforfish2DPromopesca].[dbo].[ProTermVistaStockProductos] where nombre_marca like 'D CR%'`,
      PRUEBA:`SELECT DISTINCT(
        ing.nombre_items)
      FROM            dbo.ProTerm_Ingresos_C1 as ing join dbo.[PT.Items_Liq_Cobertura] as liqui
          on ing.Id_Items_Liq_Cobertura = liqui.Id_Items_Liq_Cobertura
      WHERE        (unidades - ISNULL(unidades_despachadas, 0) > 0)`,
      EXPORTACIONBUENO:` SELECT DISTINCT(nombre_items)
      FROM dbo.ProTerm_Ingresos_C1 WHERE
      (unidades - ISNULL(unidades_despachadas, 0) > 0) AND
       nombre_marca not LIKE 'D ME%' AND 
       nombre_marca not LIKE 'D MA%' AND
       nombre_marca not LIKE 'D CR%'`,
       FORMATO:`SELECT DISTINCT(nombre_items)
       FROM dbo.ProTerm_Ingresos_C1 WHERE
           (unidades - ISNULL(unidades_despachadas, 0) > 0)
           and Nombre_Items_Tipo_Envase LIKE '307%'`,
        LIQUIDOCIV:`select distinct(pro.nombre_items)
        from dbo.ProTerm_Ingresos_C1 as pro
       join dbo.[PT.Items_Liq_Cobertura] as liqui
           on pro.Id_Items_Liq_Cobertura = liqui.Id_Items_Liq_Cobertura WHERE (unidades - ISNULL(unidades_despachadas, 0) > 0)`
    }   