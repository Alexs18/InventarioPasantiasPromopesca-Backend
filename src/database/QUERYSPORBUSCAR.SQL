/*UNO*/
/*TABLAAA PT.Items_PT*/
SELECT        TOP (200) Id_Items, nombre_items, id_items_grupo, id_tipos_items, Id_Items_Talla, Id_Items_Tipo_Limpieza, Id_Items_Tipo_Envase, Id_Items_Liq_Cobertura, Codigo_Items, id_especie, Litografia, Presentacion,
                          Unidades_Cajas, Unidades_Cluster, Peso_Neto, Peso_Drenado, Peso_Fill, Peso_Unidad, Nombre_Comercial, Destino, Flake, Agua, Aceite, CampoExtraTexto1, CampoExtraTexto2, CampoExtraTexto3, 
                         CampoExtraEntero1, CampoExtraEntero2, CampoExtraEntero3, CampoExtraFloat1, CampoExtraFloat2, CampoExtraFloat3, id_ProdProc, envase_items, sal_items, histamina_items, caldo_vegetal, id_usuario, 
                         fecha_creacion, num_subpartida, tipo_flake, llave_producto, Id_Items_Otro_Liq_Cobertura, CodigoErp, CodigoInforFish1, SubProducto, Cabeza, Desperdicio, Precio, Id_Items_Calidad, RendimientoReal, 
                         DescripcionEtiqueta, UnidadPorPack, LatasPorCajas, Descripcion_Cliente, estado_producto, stock_maximo, stock_minimo
FROM            [PT.Items_PT]

/*DOS*/
/*TABLA PT.Items_Liq_Cobertura*/
SELECT TOP 1000 [Id_Items_Liq_Cobertura]
      ,[Nombre_Items_Liq_Cobertura]
      ,[Tipo_Registro_Sistema]
      ,[Id_Items_Grupo]
      ,[Tipo_admin]
      ,[Abreviatura]
  FROM [Inforfish2DPromopesca].[dbo].[PT.Items_Liq_Cobertura]
