// Fichas: cada diapositiva de la profe Ana Acosta emparejada con Zachary 6.a ed. (2017)
// Cap. 7 = Sistema alimentario (digestivo) | Cap. 8 = Higado, via biliar y pancreas exocrino
// jubb:true  => el contenido de la diapo viene de Jubb, Kennedy & Palmer (ojo en el parcial)
const FICHAS = [

// ===================== CAVIDAD ORAL / DIENTES / ESOFAGO (DIGESTIVO) =====================
{
  sys:"dig", diapo:"2", tema:"Anomalías congénitas de la boca y mandíbula (braquignatia, prognatismo, agnatia, palatosquisis, queilosquisis)",
  kw:"paladar hendido labio leporino maxilar mandibula congenito",
  zacsec:"Cap. 7 — Oral cavity › Developmental anomalies (Anomalías del desarrollo de la cavidad oral)",
  zacpg:"aprox. pág. 325–328",
  leer:"Definiciones de cada defecto: braquignatia (mandíbula corta), prognatismo (mandíbula larga), agnatia (ausencia de mandíbula), palatosquisis (paladar hendido) y queilosquisis (labio leporino). Enfócate en QUÉ es cada una y en qué especie se ve.",
  skip:"No te metas en la embriología molecular detallada de los arcos branquiales; la profe solo pide reconocer y nombrar el defecto.",
  micro:"Son defectos ANATÓMICOS macroscópicos — se identifican a simple vista, no por histología. En palatosquisis: comunicación oronasal (el paladar no cerró en la línea media).",
  col:"Palatosquisis frecuente en cachorros braquicéfalos (French bulldog, muy populares en Colombia); causa leche saliendo por la nariz y neumonía por aspiración. Braquignatia/prognatismo relevante en bovinos y equinos por mala prensión/oclusión."
},
{
  sys:"dig", diapo:"3", tema:"Clasificación de dientes por altura de corona (hipsodonto vs braquiodonto)",
  kw:"diente esmalte cemento dentina pulpa corona caballo vaca",
  zacsec:"Cap. 7 — Teeth › Structure and normal anatomy (repaso de estructura dental)",
  zacpg:"aprox. pág. 328–330",
  leer:"Diferencia entre diente hipsodonto (corona alta, crece de forma continua: equinos, rumiantes) y braquiodonto (corona baja: carnívoros, cerdo). Capas: cemento, esmalte, dentina, pulpa.",
  skip:"No es tema de lesión; es base anatómica. Repásalo rápido para entender luego el desgaste anormal y las lesiones dentales.",
  micro:"Histológicamente: esmalte (lo más duro, se pierde en cortes descalcificados), dentina con túbulos, pulpa con vasos y nervios. Útil para ubicar dónde está la lesión dental.",
  col:"En equinos (muy atendidos en el eje cafetero y sabana de Bogotá) el diente hipsodonto explica las puntas de esmalte y la necesidad de limado dental (odontología equina)."
},
{
  sys:"dig", diapo:"4", tema:"Trastornos dentales (anodoncia, oligodoncia, polidoncia, diente ectópico, hipoplasia del esmalte, porfiria congénita)",
  kw:"dientes numero esmalte distemper moquillo rosado",
  zacsec:"Cap. 7 — Teeth › Developmental and acquired disorders of teeth",
  zacpg:"aprox. pág. 328–332",
  leer:"Qué significa cada término por número de dientes (an-=ninguno, oligo-=pocos, poli-=muchos). Hipoplasia del esmalte (esmalte defectuoso) y su relación con fiebres/virus durante la formación. Porfiria congénita = dientes rosados que fluorescen.",
  skip:"La porfiria es rara; que sepas que da pigmentación rosada/roja de dientes y huesos. No memorices la ruta bioquímica completa del hemo.",
  micro:"Hipoplasia del esmalte: capa de esmalte adelgazada/irregular con hoyos. Clave: se forma mientras el diente se desarrolla, no después.",
  col:"Hipoplasia del esmalte clásica en perros que tuvieron moquillo (distemper) de cachorros — enfermedad aún común en Colombia por baja cobertura vacunal en zonas rurales. Verás líneas/hoyos marrones en los dientes."
},
{
  sys:"dig", diapo:"5", tema:"Enfermedad periodontal", jubb:true,
  kw:"gingivitis placa sarro encia hueso alveolar perro",
  zacsec:"Cap. 7 — Oral cavity › Periodontal disease (enfermedad periodontal)",
  zacpg:"aprox. pág. 333–335",
  leer:"Secuencia: placa subgingival → gingivitis → periodontitis → recesión gingival y pérdida de hueso alveolar. Especies: común en perros y ovejas; importante en gatos, caballos, rumiantes.",
  skip:"No necesitas el detalle del microbioma de la placa; enfócate en la progresión gingivitis→pérdida ósea.",
  micro:"Infiltrado inflamatorio en la encía (gingivitis), y en periodontitis: reabsorción del hueso alveolar y pérdida de la inserción. Puede haber infiltrado linfoplasmocitario.",
  col:"Problema N.º 1 de la consulta odontológica en perros pequeños (poodle, schnauzer) en clínicas urbanas colombianas. Lleva a extracciones. Esta diapo es de Jubb — si la profe cita la fuente, es Jubb no Zachary."
},
{
  sys:"dig", diapo:"6", tema:"Cuerpo extraño de la cavidad oral", jubb:true,
  kw:"hueso fosforo pica ganado estomatitis fibra pua faringe",
  zacsec:"Cap. 7 — Oral cavity › Foreign bodies / traumatic & foreign-body stomatitis",
  zacpg:"aprox. pág. 335–337",
  leer:"Cuerpos extraños grandes (huesos) en faringe sugieren deficiencia de fósforo en ganado (pica/osteofagia). Plantas, fibras y púas causan estomatitis por cuerpo extraño.",
  micro:"Estomatitis por cuerpo extraño: reacción inflamatoria (a veces granulomatosa, con células gigantes alrededor del material vegetal/fibra). En la diapo 6 la imagen morada muestra infiltrado inflamatorio en la mucosa ulcerada.",
  col:"La pica por déficit de fósforo (masticar huesos) es real en ganado de pastoreo en suelos pobres (Orinoquía, Caribe). Asóciala con osteofagia → riesgo de botulismo.",
  skip:"No te detengas en tipos de plantas; el concepto es: material extraño → inflamación/estomatitis."
},
{
  sys:"dig", diapo:"7", tema:"Inflamación de la cavidad oral — Estomatitis (y sus subtipos: faringitis, glositis, tonsilitis, gingivitis, angina)",
  kw:"estomatitis superficial profunda mucosa lengua amigdala difusa focal",
  zacsec:"Cap. 7 — Oral cavity › Inflammation of the oral cavity (stomatitis)",
  zacpg:"aprox. pág. 337–340",
  leer:"Terminología por localización: glositis=lengua, faringitis=faringe, tonsilitis=amígdalas, gingivitis=encía. Superficial (solo mucosa) vs profunda (llega a tejido conectivo). Puede ser difusa o focal.",
  micro:"Superficial: infiltrado limitado al epitelio/lámina propia. Profunda: la inflamación penetra a submucosa/tejido conectivo. Identifica la PROFUNDIDAD del infiltrado en el corte.",
  col:"Base para entender lesiones orales por virus (fiebre aftosa, estomatitis vesicular) de importancia en ganadería colombiana y notificación obligatoria al ICA.",
  skip:"No memorices cada sufijo aislado; entiende el patrón: raíz anatómica + '-itis'."
},
{
  sys:"dig", diapo:"8", tema:"Causas de estomatitis (físicas, químicas, virales, bacterianas, parasitarias, micóticas)",
  kw:"fiebre aftosa estomatitis vesicular RVF necrobacilosis actinobacilosis actinomicosis candidiasis cysticercus trichinella",
  zacsec:"Cap. 7 — Oral cavity › Causes/classification of stomatitis (vesicular, erosive/ulcerative diseases)",
  zacpg:"aprox. pág. 337–345",
  leer:"Organiza las causas por categoría. VIRALES clave: fiebre aftosa, estomatitis vesicular, RVF → lesión vesicular. BACTERIANAS: necrobacilosis (Fusobacterium), actinobacilosis (lengua de madera), actinomicosis (mandíbula abultada). MICÓTICA: candidiasis.",
  skip:"No aprendas los 6 grupos de memoria sin ejemplos; vincula cada causa con SU lesión típica (vesícula, necrosis, granuloma).",
  micro:"Virales vesiculares: vesícula intraepitelial con degeneración balonizante. Necrobacilosis: necrosis por coagulación con bacterias. Actinobacilosis/actinomicosis: granulomas piogranulomatosos con gránulos (rosetas de Splendore-Hoeppli).",
  col:"Fiebre aftosa y estomatitis vesicular son de control oficial (ICA) en Colombia — un bovino babeando con vesículas/úlceras en boca y pezuña es sospecha reportable. Actinobacilosis ('lengua de palo') se ve en bovinos de pastoreo."
},
{
  sys:"dig", diapo:"9", tema:"Granuloma eosinofílico",
  kw:"gato felino complejo eosinofilico colagenolisis hipersensibilidad corticoides placa",
  zacsec:"Cap. 7 — Oral cavity › Eosinophilic granuloma complex (gato)",
  zacpg:"aprox. pág. 345–347",
  leer:"Felinos (en perros = enfermedad familiar). Placas elevadas firmes, a veces ulceradas. Responden a corticoides → sugiere base de hipersensibilidad.",
  micro:"CLAVE para el parcial: focos de COLAGENOLISIS (colágeno degenerado eosinofílico) rodeados de infiltrado granulomatoso con EOSINÓFILOS abundantes. Si ves eosinófilos + colágeno 'deshecho' en mucosa oral de gato → granuloma eosinofílico.",
  col:"Motivo frecuente de consulta felina en Colombia: gato con úlcera en labio superior ('úlcera indolente') o placa en boca. Se maneja con corticoides y descartando alergia alimentaria/pulgas.",
  skip:"No hace falta dominar la inmunología completa; recuerda: gato + eosinófilos + colagenólisis + responde a corticoide."
},
{
  sys:"dig", diapo:"10", tema:"Glándulas salivales (ptialismo, aptialismo, mucocele/sialocele, sialoadenitis)",
  kw:"saliva ptialismo sialocele mucocele sialoadenitis cuello",
  zacsec:"Cap. 7 — Salivary glands › Disorders of salivary glands",
  zacpg:"aprox. pág. 347–349",
  leer:"Ptialismo=exceso de saliva; aptialismo=poca/nula. Mucocele/sialocele=acúmulo de saliva en cavidad SIN epitelio excretor (tejido blando de boca o cuello). Sialoadenitis=inflamación de la glándula.",
  micro:"Mucocele: cavidad llena de saliva/mucina rodeada por tejido de granulación (NO epitelio verdadero → por eso es 'pseudoquiste'). Sialoadenitis: infiltrado inflamatorio en el parénquima glandular.",
  col:"El mucocele/ránula (sialocele sublingual) es cirugía común en perros en clínicas colombianas: masa blanda fluctuante bajo la lengua o en el cuello.",
  skip:"Las afecciones funcionales (ptialismo/aptialismo) son definiciones rápidas; dedica el tiempo al mucocele."
},
{
  sys:"dig", diapo:"11", tema:"Megaesófago", jubb:true,
  kw:"esofago dilatacion atonia flacidez regurgitacion",
  zacsec:"Cap. 7 — Esophagus › Megaesophagus / motor disorders",
  zacpg:"aprox. pág. 349–351",
  leer:"Dilatación de la luz esofágica por atonía y flacidez del músculo. Diferéncialo de obstrucción (ahí la luz se dilata por delante del bloqueo). Signo clínico = regurgitación (NO vómito).",
  micro:"Hallazgo macro principalmente (esófago dilatado, flácido). Micro puede haber atrofia/degeneración muscular o lesión de la inervación según la causa.",
  col:"En perros (y la raza/edad importa): megaesófago congénito en cachorros o adquirido (p. ej. por miastenia). Riesgo de neumonía por aspiración, frecuente en consulta de pequeños. Esta diapo es de Jubb.",
  skip:"No profundices en todas las causas neuromusculares; capta: atonía → dilatación → regurgitación → aspiración."
},
{
  sys:"dig", diapo:"12", tema:"Regurgitación esofágica, aplasia segmental y estenosis esofágica", jubb:true,
  kw:"esofago estenosis estrechez aplasia regurgitacion anillo",
  zacsec:"Cap. 7 — Esophagus › Congenital anomalies, obstruction and stenosis",
  zacpg:"aprox. pág. 349–352",
  leer:"Aplasia segmental=ausencia de un segmento (congénito). Estenosis=estrechamiento de la luz (cicatriz, anillo vascular, post-úlcera). Ambas producen regurgitación y dilatación proximal.",
  micro:"Estenosis: fibrosis en la pared que reduce la luz. Identifica el tejido conectivo denso que estrecha el conducto.",
  col:"Estenosis esofágica post-anestesia (reflujo) o por anillo vascular persistente en cachorros se ve en clínica de pequeños. Esta diapo es de Jubb.",
  skip:"Concepto clave: cualquier estrechamiento/obstrucción → regurgita y se dilata por delante."
},

// ===================== HIGADO Y VIA BILIAR (CAP. 8) =====================
{
  sys:"hig", diapo:"14-16", tema:"Hígado: generalidades, lobulillo hepático y funciones",
  kw:"anatomia lobulillo triada portal vena central bilis glucogeno coagulacion detoxificacion endodermo",
  zacsec:"Cap. 8 — Hepatobiliary system › Structure and function (estructura y función normal del hígado)",
  zacpg:"aprox. pág. 412–418",
  leer:"Unidad funcional = lobulillo hepático (vena central al centro, tríadas portales en la periferia). Funciones que debes saber de memoria: bilis, glucógeno, síntesis de ácidos grasos y factores de coagulación, almacén de vitaminas/minerales, destrucción de eritrocitos viejos, detoxificación (amoníaco, purinas, porfirinas).",
  skip:"No memorices cada enzima; domina las 8 funciones de la diapo 16 porque explican los SIGNOS de falla hepática después.",
  micro:"Reconoce en el corte: vena centrolobulillar (zona 3), tríada portal (arteria hepática + vena porta + conducto biliar) = zona 1, y los cordones de hepatocitos radiando hacia la vena central. Esto es la base para ubicar DÓNDE está una necrosis.",
  col:"Base conceptual: entender el lobulillo te permite responder las preguntas de 'necrosis centrolobulillar vs periportal', que es justo lo que viene en diapos siguientes."
},
{
  sys:"hig", diapo:"17-18", tema:"Trastornos circulatorios del hígado: congestión e hígado de nuez moscada",
  kw:"congestion ICC derecha insuficiencia cardiaca nuez moscada fibrosis sinusoides estancamiento",
  zacsec:"Cap. 8 — Hepatobiliary system › Circulatory disorders › Passive congestion (congestión pasiva crónica)",
  zacpg:"aprox. pág. 420–423",
  leer:"Congestión pasiva por insuficiencia cardíaca derecha (ICC der): la sangre no sale del hígado → se estanca. Agudo: hígado aumentado. Crónico: 'hígado de nuez moscada' (patrón moteado rojo/claro). A largo plazo → fibrosis.",
  micro:"CLAVE: dilatación de sinusoides centrolobulillares llenos de sangre + atrofia/pérdida de hepatocitos alrededor de la vena central. El patrón rojo-claro alternante en el corte macro = 'nuez moscada'.",
  col:"Asócialo con cardiopatías (dirofilariasis/gusano del corazón en perros de tierra caliente colombiana → ICC derecha → hígado congestivo). También en bovinos con falla cardíaca derecha.",
  skip:"No entres en toda la fisiología cardíaca; la idea es: corazón derecho falla → sangre represada → hígado 'nuez moscada'."
},
{
  sys:"hig", diapo:"19", tema:"Telangiectasia hepática",
  kw:"telangiectasia bovino sinusoides dilatados manchas rojas hallazgo matadero",
  zacsec:"Cap. 8 — Hepatobiliary system › Vascular/sinusoidal disorders › Telangiectasis",
  zacpg:"aprox. pág. 423–424",
  leer:"Macro: zonas deprimidas irregulares de color rojo oscuro, muy frecuentes en el BOVINO (hallazgo incidental en matadero). Micro: dilatación de sinusoides hepáticos llenos de sangre.",
  micro:"Espacios sinusoidales marcadamente dilatados, llenos de sangre, sin inflamación. Es un hallazgo benigno — NO confundir con hemangioma o necrosis.",
  col:"Hallazgo muy común en decomisos de hígado bovino en frigoríficos colombianos; importante que sepas que es benigno/incidental para no sobrediagnosticar.",
  skip:"Sin causa clínica relevante; solo reconocerlo y diferenciarlo de lesiones con sangrado real."
},
{
  sys:"hig", diapo:"20", tema:"Trastornos degenerativos y necrosis: degeneración hidrópica",
  kw:"degeneracion hidropica tumefaccion turbio citoplasma hipoxia intoxicacion reversible",
  zacsec:"Cap. 8 — Hepatobiliary system › Hepatocellular degeneration and death › Cellular swelling (tumefacción/degeneración hidrópica)",
  zacpg:"aprox. pág. 424–427",
  leer:"Degeneración hidrópica = citoplasma turbio/tumefacto por entrada de agua (bomba Na/K fallando). Causas: hipoxia e intoxicaciones. Es REVERSIBLE si cesa la causa (a diferencia de necrosis).",
  micro:"Hepatocitos aumentados de tamaño, citoplasma pálido, granular/turbio, núcleo conservado al inicio. Compáralo con la imagen de la diapo 20 (hepatocitos 'hinchados' con citoplasma claro).",
  col:"Base para entender daño por plantas tóxicas (frecuente en ganado de pastoreo colombiano: Senecio, Lantana) e intoxicaciones.",
  skip:"No confundas con esteatosis: aquí el citoplasma está turbio/acuoso, NO con vacuolas grasas redondas bien definidas."
},
{
  sys:"hig", diapo:"21-22", tema:"Esteatosis hepática (lipidosis / cambio graso)",
  kw:"higado graso lipidosis cambio graso vacuolas grasa cetosis diabetes hipoxia gato vaca amarillo",
  zacsec:"Cap. 8 — Hepatobiliary system › Hepatocellular accumulations › Lipidosis (hepatic lipidosis / fatty change)",
  zacpg:"aprox. pág. 427–430",
  leer:"Acúmulo excesivo de grasa en el hepatocito. Mecanismos (la profe pide las causas): intoxicación (daña respiración celular), dieta alta en grasa/CHOs, cetosis, hipoxia (interfiere oxidación de AG), endocrino (hiperadrenocorticismo, diabetes → ↑esterificación a triglicéridos).",
  micro:"CLAVE PARCIAL: hepatocitos con VACUOLAS REDONDAS bien definidas que DESPLAZAN el núcleo a la periferia (macrovesicular). En la diapo 22 ves las 'burbujas' blancas redondas. Macro: hígado amarillo, aumentado, friable, bordes redondeados, flota en formol.",
  col:"Muy frecuente en 2 escenarios colombianos: (1) lipidosis hepática felina en gatas obesas que dejan de comer — urgencia clínica; (2) hígado graso/cetosis en vacas lecheras posparto (Antioquia, Nariño, sabana de Bogotá).",
  skip:"No memorices la bioquímica detallada de triglicéridos; domina las 5 causas + cómo se ve la vacuola (redonda, desplaza núcleo)."
},
{
  sys:"hig", diapo:"23", tema:"Patrones de necrosis hepática (focal/multifocal, periportal, centrolobulillar, mediozonal)",
  kw:"necrosis centrolobulillar periportal mediozonal focal multifocal hepatitis canina hipoxia aflatoxina salmonella",
  zacsec:"Cap. 8 — Hepatobiliary system › Hepatocellular death › Patterns of hepatic necrosis (patrones zonales)",
  zacpg:"aprox. pág. 430–434",
  leer:"Este es un cuadro MUY preguntado. Relaciona patrón ↔ causa: FOCAL/MULTIFOCAL = agentes infecciosos (hepatitis canina/adenovirus, RIB, Salmonella, Mycobacterium). CENTROLOBULILLAR (zona 3) = hipoxia y muchos tóxicos. PERIPORTAL (zona 1) = tóxicos/plantas/micotoxinas que entran por la porta. MEDIOZONAL (zona 2) = aflatoxicosis. Consecuencia crónica: fibrosis + hiperplasia nodular.",
  micro:"Ubica la zona respecto a vena central (centro) y tríada portal (periferia). Centrolobulillar = necrosis alrededor de la vena central. Periportal = alrededor de las tríadas. Mediozonal = en el medio (raro, aflatoxina clásica).",
  col:"Aflatoxicosis (mediozonal) es MUY relevante en Colombia: maíz/concentrados mal almacenados con Aspergillus flavus en clima húmedo → hepatotoxicidad en aves, cerdos, perros. Plantas hepatotóxicas (periportal): Senecio, Crotalaria en ganado.",
  note:"Memoriza este esquema zona↔causa: es casi seguro que cae en el parcial como 'identifique el patrón y dé la causa'."
},
{
  sys:"hig", diapo:"24-26", tema:"Fibrosis hepática (y cirrosis)",
  kw:"fibrosis cirrosis higado duro rugoso perdida arquitectura hiperplasia nodular tejido conectivo pigmento biliar",
  zacsec:"Cap. 8 — Hepatobiliary system › Hepatic fibrosis and cirrhosis (fibrosis crónica / cirrosis)",
  zacpg:"aprox. pág. 434–438",
  leer:"Cuando el agente tóxico PERSISTE, la reparación sustituye parénquima por tejido conectivo → hígado duro y rugoso. Hallazgos: pérdida de arquitectura, anisocitosis (células de distinto tamaño), degeneración hidrópica, necrosis, ↑tejido conectivo, retención de pigmento biliar.",
  micro:"Bandas de tejido conectivo (colágeno) que dividen el parénquima en nódulos de regeneración. Tinción especial (tricrómico) resalta el colágeno azul/verde — mira la diapo 25 (imagen con bandas verdes). Hepatocitos de tamaño irregular (anisocitosis).",
  col:"Estado final de intoxicaciones crónicas por plantas (Senecio/Crotalaria en bovinos y equinos colombianos) y de hepatitis crónica en perros. Hígado cirrótico = irreversible, mal pronóstico.",
  skip:"No diferencies cada subtipo de cirrosis; capta: daño crónico → fibrosis → nódulos → pérdida de función."
},
{
  sys:"hig", diapo:"27-29", tema:"Insuficiencia / falla hepática y sus consecuencias (ictericia, ascitis, encefalopatía, fotosensibilización)",
  kw:"insuficiencia hepatica falla ictericia ascitis hipertension portal encefalopatia fotosensibilizacion hipoproteinemia amoniaco",
  zacsec:"Cap. 8 — Hepatobiliary system › Hepatic failure and its manifestations (manifestaciones de la insuficiencia hepática)",
  zacpg:"aprox. pág. 418–420 y 438–441",
  leer:"Conecta cada función perdida con su signo: hipertensión portal → ASCITIS; obstrucción biliar → ICTERICIA; falta de síntesis proteica → HIPOPROTEINEMIA (y edema); no detoxifica compuestos nitrogenados/amoníaco → ENCEFALOPATÍA HEPÁTICA; falla en metabolizar pigmentos fotodinámicos → FOTOSENSIBILIZACIÓN. También hepatomegalia.",
  micro:"Las consecuencias son clínicas/macro; la histología es la del daño de base (necrosis, fibrosis, lipidosis). Para ictericia busca pigmento biliar (verde-marrón) en hepatocitos y canalículos.",
  col:"Fotosensibilización hepatógena MUY importante en Colombia: bovinos/ovinos en pastoreo que comen plantas hepatotóxicas → piel despigmentada (cara, orejas) con costras y edema al sol. Ictericia + ascitis + encefalopatía = tríada de falla hepática terminal.",
  note:"Esta relación función↔signo es favorita de preguntas de teoría. Apréndela como pares causa→efecto."
},
{
  sys:"hig", diapo:"30-32", tema:"Procesos inflamatorios: hepatitis, colangiohepatitis, colangitis, colecistitis (y clasificación de hepatitis)",
  kw:"hepatitis colangitis colangiohepatitis colecistitis viral bacteriana parasitaria toxica vesicula biliar conductos",
  zacsec:"Cap. 8 — Hepatobiliary system › Inflammation (hepatitis, cholangitis, cholangiohepatitis, cholecystitis)",
  zacpg:"aprox. pág. 441–446",
  leer:"Terminología por localización: hepatitis=parénquima general; colangitis=conductos biliares; colangiohepatitis=conductos + hepatocitos + espacios porta; colecistitis=vesícula biliar. Clasificación por causa: virales (necrosis centrolobulillar + cuerpos de inclusión), bacterianas (hematógena o desde peritoneo/conductos), parasitarias (ciclo biológico), tóxicas.",
  micro:"Hepatitis: infiltrado inflamatorio en parénquima. Colangitis: inflamación centrada en conductos biliares (diapo 32, imagen con infiltrado alrededor de los conductos). Busca DÓNDE está el infiltrado para nombrarla.",
  col:"Colangiohepatitis felina es un diagnóstico común en gatos en Colombia (ictericia + inapetencia). En bovinos, la colangitis por Fasciola es frecuentísima en zonas frías húmedas (ver ficha Fasciola).",
  skip:"No aprendas la lista de causas suelta; ubica primero la LOCALIZACIÓN (nombre) y luego la causa."
},
{
  sys:"hig", diapo:"33", tema:"Hepatitis infecciosa canina (adenovirus canino tipo 1)",
  kw:"hepatitis infecciosa canina adenovirus CAV-1 cuerpos de inclusion intranucleares edema corneal ojo azul cachorro",
  zacsec:"Cap. 8 — Hepatobiliary system › Viral hepatitis › Infectious canine hepatitis (adenovirus canino 1)",
  zacpg:"aprox. pág. 442–444",
  leer:"Adenovirus canino tipo 1. Tropismo por hepatocitos, endotelio y epitelio renal. Afecta animales jóvenes. Signos: ictericia, edema corneal ('ojo azul'), ascitis, anorexia, vómito.",
  micro:"CLAVE PARCIAL: CUERPOS DE INCLUSIÓN INTRANUCLEARES en hepatocitos (basófilos/anfófilos, grandes, que marginan la cromatina) + necrosis centrolobulillar. Si ves inclusiones intranucleares en hígado de perro joven → hepatitis infecciosa canina.",
  col:"Prevenible con vacuna (la 'H' en la vacuna múltiple). Aún se ve en Colombia en cachorros no vacunados de zonas rurales/estratos sin acceso veterinario. El 'ojo azul' post-infección o post-vacuna es dato clínico típico.",
  note:"Inclusiones INTRANUCLEARES = viral (adenovirus). No las confundas con cuerpos de otra localización."
},
{
  sys:"hig", diapo:"34", tema:"Abscesos hepáticos",
  kw:"absceso higado bovino equino onfaloflebitis rumenitis acidosis arcanobacterium pyogenes estafilococo estreptococo hematogeno",
  zacsec:"Cap. 8 — Hepatobiliary system › Bacterial infections › Hepatic abscesses",
  zacpg:"aprox. pág. 444–446",
  leer:"Bovinos y equinos. Vías: extensión hematógena, onfaloflebitis (ombligo en neonatos), y el clásico complejo ACIDOSIS RUMINAL → RUMENITIS → abscesos hepáticos. Agentes: Arcanobacterium (Trueperella) pyogenes, Staphylococcus spp., Streptococcus spp.",
  micro:"Absceso = cavidad con neutrófilos/pus central, bacterias, rodeada de cápsula fibrosa y tejido de granulación. Necrosis central licuefactiva.",
  col:"Problema económico grande en ceba intensiva/feedlot colombiano: dietas altas en concentrado → acidosis → rumenitis → abscesos hepáticos → decomiso de hígados en frigorífico. Onfaloflebitis en terneros con mal manejo del ombligo.",
  skip:"Memoriza la cadena acidosis→rumenitis→absceso y los 3 agentes bacterianos."
},
{
  sys:"hig", diapo:"35", tema:"Salmonelosis hepática (nódulos paratifoideos)",
  kw:"salmonella salmonelosis nodulos paratifoideos necrosis coagulacion granulomatosa portador reservorio vesicula biliar",
  zacsec:"Cap. 8 — Hepatobiliary system › Bacterial infections › Salmonellosis (paratyphoid nodules)",
  zacpg:"aprox. pág. 444–446",
  leer:"Hígado y vesícula biliar son RESERVORIOS de Salmonella (portadores crónicos). Lesión: necrosis de coagulación con reacción granulomatosa = 'nódulos paratifoideos'.",
  micro:"Focos de necrosis de coagulación rodeados por macrófagos/células inflamatorias (nódulo paratifoideo). Multifocal — encaja con el patrón de necrosis focal/multifocal infeccioso de la diapo 23.",
  col:"Salmonelosis relevante en cerdos, terneros y aves en Colombia, con importancia en SALUD PÚBLICA (zoonosis, portadores que contaminan canal). La vesícula biliar como reservorio explica el estado de portador.",
  skip:"Clave: reservorio (hígado/vesícula) + nódulos paratifoideos (necrosis + granuloma)."
},
{
  sys:"hig", diapo:"36", tema:"Tuberculosis hepática",
  kw:"tuberculosis mycobacterium granuloma tuberculo caseificacion zoonosis bovino",
  zacsec:"Cap. 8 — Hepatobiliary system › Granulomatous hepatitis › Mycobacteriosis/tuberculosis",
  zacpg:"aprox. pág. 444–446",
  leer:"Causada por Mycobacterium. Lesión granulomatosa (tubérculos) en hígado. Es parte de las causas de necrosis/hepatitis focal-multifocal granulomatosa.",
  micro:"Granuloma tuberculoso: centro de necrosis CASEOSA, rodeado por macrófagos epitelioides, células gigantes de Langhans y corona de linfocitos; a veces mineralización. Tinción Ziehl-Neelsen para los bacilos ácido-alcohol resistentes.",
  col:"Tuberculosis bovina = zoonosis de notificación y control oficial (ICA) en Colombia; hallazgo en decomiso de canales. Importancia en salud pública (leche cruda).",
  skip:"Domina la estructura del granuloma (necrosis caseosa + células gigantes) que es lo evaluable en histología."
},
{
  sys:"hig", diapo:"37-40", tema:"Hepatitis parasitaria y Fasciola hepatica (+ Cysticercus, Ascaris, Strongylus, Toxoplasma, coccidios)",
  kw:"hepatitis parasitaria fasciola duela higado conductos biliares migracion ascaris suum cysticercus strongylus toxoplasma coccidiosis eosinofilos fibrosis tyzzer",
  zacsec:"Cap. 8 — Hepatobiliary system › Parasitic diseases of the liver (incl. Fasciola hepatica / fascioliasis)",
  zacpg:"aprox. pág. 446–450",
  leer:"Algunos vermes atraviesan/ migran por el hígado: daño MECÁNICO → restos celulares, EOSINÓFILOS y con el tiempo FIBROSIS (trayectos migratorios). Agentes: Ascaris suum, Cysticercus, Strongylus, Toxoplasma, coccidios y FASCIOLA (la duela del hígado).",
  micro:"Trayectos de migración con necrosis, hemorragia e infiltrado EOSINOFÍLICO, luego fibrosis. Fasciola: en conductos biliares engrosados/fibróticos, a veces con el parásito en la luz; colangitis crónica.",
  col:"FASCIOLA HEPATICA es MUY común en Colombia en zonas frías y húmedas con caracol Lymnaea (altiplano cundiboyacense, Nariño, Antioquia): causa decomiso masivo de hígados bovinos y pérdidas en leche/carne. 'Hígado con conductos biliares duros/calcificados' = sospecha de Fasciola. También zoonosis.",
  note:"Infiltrado EOSINOFÍLICO en hígado = piensa en PARÁSITO. Fasciola es casi obligada en el parcial por su importancia local."
},

// ===================== ESTOMAGO / ABOMASO =====================
{
  sys:"dig", diapo:"41", tema:"Dilatación y desplazamiento gástrico (equino y general)",
  kw:"estomago abomaso dilatacion desplazamiento equino obstruccion enfermedad hierba carbohidratos fermentables",
  zacsec:"Cap. 7 — Stomach/Forestomachs › Gastric dilation and displacement",
  zacpg:"aprox. pág. 355–360",
  leer:"En equinos suele ser SECUNDARIA (obstrucción de estómago/intestino delgado, síndrome de la enfermedad de la hierba). La dilatación PRIMARIA: consumo excesivo de carbohidratos fermentables, acceso repentino a pastos frondosos o ingesta excesiva de agua.",
  micro:"Es alteración funcional/macro (sobredistensión). Si hay necrosis de pared por isquemia: mucosa oscura/congestiva.",
  col:"En equinos (muy atendidos en Colombia) la dilatación gástrica es urgencia de cólico; el estómago equino se rompe con facilidad → peritonitis mortal.",
  skip:"Separa primaria (dietética) de secundaria (obstrucción). No memorices todas las causas de cólico aquí."
},
{
  sys:"dig", diapo:"42", tema:"Vólvulo / torsión gástrica (GDV)", jubb:true,
  kw:"volvulo torsion gastrica dilatacion GDV perro raza pecho profundo aerofagia ligamento hepatogastrico",
  zacsec:"Cap. 7 — Stomach › Gastric dilation-volvulus (vólvulo-dilatación gástrica)",
  zacpg:"aprox. pág. 355–360",
  leer:"Común en PERROS (raro en gatos). Factores: razas de pecho profundo, aerofagia, comer rápido, laxitud del ligamento hepatogástrico, dieta de partículas pequeñas. El estómago se dilata Y rota.",
  micro:"Necrosis isquémica de la pared gástrica (congestión, hemorragia, necrosis) por compromiso vascular al torcerse.",
  col:"Urgencia quirúrgica clásica en razas grandes (gran danés, pastor alemán, dóberman) presentes en Colombia. Mortal sin cirugía rápida. Diapo tomada de Jubb.",
  note:"Diferencia dilatación simple (diapo 41) de vólvulo+dilatación (diapo 42, con rotación e isquemia)."
},
{
  sys:"dig", diapo:"43-44", tema:"Gastritis (urémica, parasitaria y por tipo de exudado) + Helicobacter",
  kw:"gastritis uremica catarral fibrinosa hemorragica purulenta necrotica helicobacter gasterophilus ollulanus haemonchus ostertagia parasitaria",
  zacsec:"Cap. 7 — Stomach › Gastritis (clasificación y causas de gastritis)",
  zacpg:"aprox. pág. 360–368",
  leer:"'Gastritis' abarca lesiones amplias donde la inflamación puede no ser prominente (necrosis/erosión/úlcera por agresión mecánica, química o isquémica). Gastritis urémica = verdadera gastritis con cambios en lámina propia + atrofia/fibrosis. Clasifícala por exudado (catarral, fibrinosa, hemorrágica, purulenta, necrótica). Parasitarias por especie: cerdo=Hyostrongylus; equino=Gasterophilus (larva de mosca); gato=Ollulanus; ganado=Haemonchus/Ostertagia.",
  micro:"Busca: erosión (pérdida parcial de mucosa) vs úlcera (hasta muscular de la mucosa o más profundo), infiltrado en lámina propia, y en gastritis urémica MINERALIZACIÓN vascular/necrosis. Parásitos en la luz o en glándulas.",
  col:"Ostertagiasis/Haemonchus en rumiantes de pastoreo = altísima importancia en Colombia (pérdidas productivas, resistencia antihelmíntica). Gasterophilus en equinos. Gastritis urémica en perros/gatos con enfermedad renal crónica — conecta DIGESTIVO con URINARIO (tu otro tema del parcial).",
  note:"La gastritis urémica es un PUENTE con el sistema urinario: riñón que falla → uremia → gastritis y mineralización. Posible pregunta integradora."
},
{
  sys:"dig", diapo:"45-47", tema:"Ulceración gastroduodenal", jubb:true,
  kw:"ulcera gastrica duodenal acido pepsina mucosa aines antiinflamatorios desequilibrio erosion",
  zacsec:"Cap. 7 — Stomach › Gastric erosion and ulceration (úlcera gastroduodenal)",
  zacpg:"aprox. pág. 363–368",
  leer:"Produce signos con MENOS frecuencia que en humanos. Mecanismo: desequilibrio entre factores agresores (ácido + pepsina) y la capacidad de la mucosa para mantener su integridad. Causa frecuente: compromiso de la protección mucosa por AINES.",
  micro:"Úlcera = pérdida de mucosa que llega más allá de la muscular de la mucosa, con fondo de necrosis/fibrina, tejido de granulación y a veces vaso erosionado (hemorragia). Erosión = más superficial.",
  col:"Úlcera por AINES (uso de meloxicam/ketoprofeno sin protección gástrica) es iatrogenia frecuente en perros en clínicas colombianas. En potros estrés + úlcera gástrica es común. Úlcera de abomaso en terneros.",
  skip:"No memorices toda la lista de factores protectores; capta: agresión (ácido/pepsina/AINES) > defensa = úlcera."
},

// ===================== INTESTINO =====================
{
  sys:"dig", diapo:"48", tema:"Anomalías congénitas intestinales (atresia de colon, atresia anal, estenosis)",
  kw:"atresia colon anal terneros estenosis fistula rectovaginal congenito ausencia orificio",
  zacsec:"Cap. 7 — Intestine › Congenital anomalies (atresia, stenosis)",
  zacpg:"aprox. pág. 368–372",
  leer:"Atresia de colon: frecuente en TERNEROS. Atresia anal: ausencia de orificio anal (en hembras puede haber fístula recto-vaginal). Estenosis: estrechamiento congénito.",
  micro:"Defectos anatómicos; micro muestra ausencia o interrupción de la luz/segmento. Macro es lo diagnóstico.",
  col:"Atresia anal en terneros y lechones se ve en campo colombiano (el animal no defeca, abdomen distendido desde el nacimiento). Decisión de eutanasia/sacrificio frecuente.",
  skip:"Definiciones rápidas por falta/estrechez de la luz."
},
{
  sys:"dig", diapo:"49-50", tema:"Obstrucciones y cuerpo extraño (enterolitos, fito/tricobezoares, parásitos, impactación, neoplasia)",
  kw:"enterolito fitobezoar tricobezoar bezoar equino estruvita fibra pelo impactacion neoplasia obstruccion fosfato magnesio",
  zacsec:"Cap. 7 — Intestine › Obstruction (obstrucción intestinal: intraluminal y extraluminal)",
  zacpg:"aprox. pág. 372–378",
  leer:"Enterolitos: equinos, de estruvita (fosfato-amonio-magnesio), lisos y esféricos, por dietas ricas en P y Mg. Fitobezoares: fibras vegetales + sales de fosfato. Tricobezoares: cúmulo de pelo. También parásitos, impactación y compresión por neoplasia.",
  micro:"Es patología macro/obstructiva. Micro relevante si hay isquemia por delante de la obstrucción (necrosis de pared).",
  col:"Enterolitos en equinos estabulados; tricobezoares en conejos/gatos de pelo largo y en terneros lamedores. Impactación por cólico equino (síndrome abdominal agudo) muy atendido en Colombia.",
  skip:"Memoriza qué es cada 'bezoar/lito' por su composición; no más."
},
{
  sys:"dig", diapo:"51", tema:"Hernias intestinales", jubb:true,
  kw:"hernia anillo saco herniario estrangulacion inguinal diafragmatica umbilical congenita adquirida",
  zacsec:"Cap. 7 — Intestine › Displacements › Hernias (hernia interna/externa)",
  zacpg:"aprox. pág. 374–378",
  leer:"Salida de asas intestinales por un anillo herniario, envueltas en saco herniario (peritoneo + piel). Congénita o adquirida; puede ser de pared abdominal, canal inguinal o diafragma. El RIESGO es la estrangulación por un anillo estrecho → isquemia.",
  micro:"Si se estrangula: congestión, hemorragia y necrosis de la pared intestinal atrapada (isquemia).",
  col:"Hernia umbilical en terneros/cachorros (cirugía común), hernia inguino-escrotal estrangulada en cerdos y equinos. Diapo tomada de Jubb.",
  skip:"Lo evaluable: anillo + saco + riesgo de estrangulación/isquemia."
},
{
  sys:"dig", diapo:"52", tema:"Torsión y vólvulo intestinal",
  kw:"torsion volvulo eje longitudinal transversal mesenterio isquemia rotacion",
  zacsec:"Cap. 7 — Intestine › Displacements › Torsion and volvulus",
  zacpg:"aprox. pág. 374–378",
  leer:"Torsión = rotación del intestino sobre su eje LONGITUDINAL. Vólvulo = rotación sobre su eje TRANSVERSAL (por falta de fijación del mesenterio y movilidad del segmento). Ambos → compromiso vascular.",
  micro:"Infarto venoso: asa intensamente congestiva, roja-negra, con hemorragia y necrosis transmural.",
  col:"Vólvulo mesentérico en equinos (cólico quirúrgico) y en perros de razas grandes. Emergencia: minutos cuentan.",
  note:"No confundas los ejes: torsión=longitudinal, vólvulo=transversal. Suele caer como pregunta de definición."
},
{
  sys:"dig", diapo:"53", tema:"Intususcepción (invaginación)",
  kw:"intususcepcion invaginacion segmento hipermotilidad parasitosis enteritis viral telescopio",
  zacsec:"Cap. 7 — Intestine › Displacements › Intussusception",
  zacpg:"aprox. pág. 374–378",
  leer:"Introducción (telescopaje) de un segmento intestinal dentro de la porción inmediatamente posterior. Causa: hipermotilidad e irritabilidad intestinal (parasitosis, enteritis viral).",
  micro:"Pared con doble/triple capa, congestión y necrosis isquémica del segmento invaginado.",
  col:"Frecuente en cachorros/gatitos con parásitos o parvovirus (enteritis viral → hipermotilidad → invaginación). Dato clínico: masa tubular palpable en abdomen + diarrea.",
  skip:"Relaciona causa (hipermotilidad por parásito/virus) → efecto (telescopaje → isquemia)."
},
{
  sys:"dig", diapo:"54-55", tema:"Histología intestinal normal e inflamación (referencia de imágenes)",
  kw:"histologia intestino normal vellosidades criptas enterocitos infiltrado referencia",
  zacsec:"Cap. 7 — Intestine › Normal structure and reaction to injury (estructura normal y respuesta al daño)",
  zacpg:"aprox. pág. 368–372",
  leer:"Repaso de la estructura normal (vellosidades, criptas, enterocitos, células caliciformes) para poder reconocer luego atrofia, hiperplasia e infiltrados. Las imágenes son de referencia histológica.",
  micro:"Vellosidad normal: alta, revestida de enterocitos con borde en cepillo + caliciformes; cripta en la base (zona proliferativa). Mídelas mentalmente: relación vellosidad:cripta normal ≈ 3:1 a 5:1.",
  col:"Base para interpretar biopsias intestinales (enteropatías crónicas en perros/gatos) cada vez más usadas en Colombia.",
  skip:"Es base anatómica; úsala para las fichas de atrofia de vellosidades."
},
{
  sys:"dig", diapo:"56-58", tema:"Atrofia de vellosidades (± hipertrofia de criptas) y escala de Marsh",
  kw:"atrofia vellosidades hipertrofia criptas malabsorcion coccidias giardia soja trigo marsh proteina perdida",
  zacsec:"Cap. 7 — Intestine › Villus atrophy / malabsorption (atrofia vellositaria)",
  zacpg:"aprox. pág. 369–374",
  leer:"Atrofia de vellosidades → MALABSORCIÓN de nutrientes y posible pérdida de proteínas plasmáticas. Causas crónicas: parasitismo, coccidias crónicas, giardiasis, reacción a componentes dietéticos (soja en terneros, trigo en perros). Dos patrones: (A) atrofia CON hipertrofia de criptas (el intestino intenta regenerar), (B) atrofia CON daño del compartimento proliferativo (no puede regenerar).",
  micro:"CLAVE: vellosidades CORTAS/romas + criptas alargadas (hipertrofia) = patrón A. Si las criptas también están dañadas = patrón B. La escala de Marsh (diapo 58) gradúa la severidad (infiltrado → hiperplasia de criptas → atrofia).",
  col:"Giardiasis y coccidiosis en terneros/cachorros son causa frecuentísima de diarrea crónica y mal medro en Colombia. Enteropatía por dieta (soja/trigo) relevante en alimentación de terneros con reemplazadores.",
  note:"Entiende POR QUÉ la atrofia da malabsorción (menos superficie absortiva): típico de pregunta de concepto."
},
{
  sys:"dig", diapo:"59", tema:"Intestino grueso (histología de referencia)",
  kw:"intestino grueso colon histologia criptas sin vellosidades caliciformes",
  zacsec:"Cap. 7 — Large intestine › Normal structure",
  zacpg:"aprox. pág. 368–372",
  leer:"El intestino grueso NO tiene vellosidades (superficie plana con criptas rectas y muchas células caliciformes). Útil para distinguir delgado (con vellosidades) de grueso en un corte.",
  micro:"Mucosa plana, criptas tubulares rectas ('en tubo de ensayo'), abundantes caliciformes. Si NO ves vellosidades → es intestino grueso.",
  col:"Base para reconocer colitis (ver mecanismos de diarrea de intestino grueso).",
  skip:"Dato diferenciador rápido: sin vellosidades = grueso."
},

// ===================== FISIOPATOLOGIA ENTERICA =====================
{
  sys:"dig", diapo:"60-62", tema:"Fisiopatología entérica: desnutrición proteico-energética y mala asimilación",
  kw:"fisiopatologia enterica desnutricion proteico energetica emaciacion caquexia mala asimilacion digestion intraluminal enterocito",
  zacsec:"Cap. 7 — Intestine › Pathophysiology of enteric disease (fisiopatología de la enfermedad entérica)",
  zacpg:"aprox. pág. 379–384",
  leer:"Desnutrición proteico-energética: ingesta/calidad insuficiente → en formas graves agotamiento de grasa y músculo, emaciación y muerte por inanición. Mala asimilación: falla en la fase INTRALUMINAL (bilis/enzimas pancreáticas) o en la fase EPITELIAL (enzimas del enterocito) → el nutriente no pasa a sangre/linfa.",
  skip:"No memorices todas las enzimas; distingue las 2 fases: intraluminal (jugo biliar/pancreático) vs epitelial (enterocito).",
  col:"La mala asimilación por insuficiencia pancreática exocrina conecta con tu tema de PÁNCREAS. Desnutrición + parásitos es cuadro típico de campo en Colombia.",
  micro:"La mala asimilación epitelial se asocia a atrofia de vellosidades (menos superficie/enzimas)."
},
{
  sys:"dig", diapo:"63-64", tema:"Diarrea: definición y mecanismos (hipermotilidad, osmótica, hipersecreción, malabsorción, de intestino grueso)",
  kw:"diarrea mecanismos osmotica secretora hipersecrecion hipermotilidad malabsorcion electrolitos deshidratacion acido base",
  zacsec:"Cap. 7 — Intestine › Mechanisms of diarrhea (mecanismos de diarrea)",
  zacpg:"aprox. pág. 379–384",
  leer:"Diarrea = exceso de agua en heces respecto a la materia seca. Consecuencias: pérdida de electrolitos, desequilibrio ácido-base y deshidratación (potencialmente mortales). Mecanismos: hipermotilidad, OSMÓTICA (solutos no absorbidos retienen agua), HIPERSECRECIÓN (secretora, p.ej. toxinas), MALABSORCIÓN, y diarrea de intestino grueso.",
  skip:"No te pierdas en bioquímica; asocia cada mecanismo a un ejemplo (secretora=E. coli enterotoxigénica; osmótica=malabsorción de lactosa; malabsortiva=atrofia vellositaria).",
  col:"La diarrea neonatal (terneros, lechones) es una de las principales pérdidas en producción colombiana; entender el mecanismo guía la rehidratación (oral vs IV).",
  micro:"La diapo 65 muestra el mecanismo secretor (toxinas LT/ST de E. coli activando AMPc/GMPc → secreción de Cl⁻ y agua)."
},
{
  sys:"dig", diapo:"65-68", tema:"Enteritis por tipo de exudado (catarral, fibrinosa, hemorrágica, necrótica) y úlceras en botón",
  kw:"enteritis catarral fibrinosa hemorragica necrotica ecoli rotavirus coronavirus salmonella parvovirus coccidiosis dvb ppc ulceras boton peste porcina",
  zacsec:"Cap. 7 — Intestine › Inflammation of the intestine (enteritis: clasificación por exudado)",
  zacpg:"aprox. pág. 384–392",
  leer:"En inflamación el signo principal es DIARREA. Nómbrala por sitio (duodenitis, yeyunitis, ileítis, tiflitis=ciego, colitis). Por exudado: CATARRAL (leve; E. coli, rotavirus, coronavirus al inicio); FIBRINOSA (fibrina; Salmonella, parvovirus); HEMORRÁGICA (sangre; coccidiosis, salmonelosis); NECRÓTICA (necrosis del epitelio; DVB, parvovirus). ÚLCERAS EN BOTÓN = peste porcina clásica (PPC).",
  micro:"Catarral: hipersecreción de moco + infiltrado leve. Fibrinosa: pseudomembrana de fibrina sobre mucosa. Hemorrágica: sangre en mucosa/luz. Necrótica: necrosis del epitelio con detritus. Úlcera en botón (PPC): úlcera redonda concéntrica en mucosa del grueso.",
  col:"Parvovirus canino (enteritis necrótica/hemorrágica) = diagnóstico diarísimo en Colombia. Coccidiosis y E. coli en neonatos de granja. PESTE PORCINA CLÁSICA: 'úlceras en botón' — enfermedad de control oficial ICA, Colombia en proceso de erradicación.",
  note:"Tabla causa↔exudado muy evaluable: memoriza al menos 1 agente por tipo de enteritis."
},
{
  sys:"dig", diapo:"69", tema:"Enteropatía proliferativa porcina (Lawsonia intracellularis)",
  kw:"enteropatia proliferativa porcina lawsonia intracelularis criptas hiperplasicas caliciformes ileon cerdo",
  zacsec:"Cap. 7 — Intestine › Proliferative enteropathy (Lawsonia intracellularis)",
  zacpg:"aprox. pág. 388–392",
  leer:"Cerdos. Agente: Lawsonia intracellularis. Lesión: proliferación exagerada de células epiteliales, criptas hiperplásicas, disminución de células caliciformes. Mucosa del íleon engrosada ('en cerebro').",
  micro:"CLAVE: criptas alargadas e hiperplásicas con enterocitos inmaduros y POCAS caliciformes; con tinción de plata (Warthin-Starry) se ven los bacilos curvos intracelulares en el ápice del enterocito.",
  col:"Enfermedad económica importante en porcicultura tecnificada colombiana (Antioquia, eje cafetero, valle): mala conversión, diarrea, 'ileítis'.",
  skip:"Lo evaluable: cerdo + criptas hiperplásicas + Lawsonia intracelular."
},
{
  sys:"dig", diapo:"70-74", tema:"Enteritis parasitaria (por competencia, anemia/hipoproteinemia, daño de mucosa por replicación, y daño a órganos distantes)",
  kw:"enteritis parasitaria taenia ascaris parascaris toxocara ancylostoma strongyloides trichostrongylus eimeria isospora cryptosporidium spirocerca strongylus vulgaris coccidios anemia",
  zacsec:"Cap. 7 — Intestine › Parasitic enteritis (helmintos y protozoos intestinales)",
  zacpg:"aprox. pág. 392–402",
  leer:"4 grupos por MECANISMO de daño: (1) compiten por nutrientes en la luz (poca ganancia, diarrea mucosa, obstrucción): Taenias, Ascaris suum=cerdo, Parascaris equorum=equino, Toxocara canis=perro/gato. (2) causan anemia/hipoproteinemia (hematófagos): Ancylostoma caninum, Strongyloides, Trichostrongylus. (3) dañan mucosa al replicarse dentro del enterocito (coccidios): Eimeria, Isospora, Cryptosporidium. (4) dañan órganos distantes: Spirocerca lupi (nódulos en esófago, espondilitis), Strongylus vulgaris (migra a vasos → émbolos, vasculitis).",
  micro:"Coccidios: etapas del parásito (esquizontes/gametos) DENTRO de los enterocitos (diapo 73) con necrosis/atrofia de vellosidades. Hematófagos: anemia. Cryptosporidium: puntos basófilos pequeños adheridos al borde apical ('en el borde en cepillo').",
  col:"Enorme peso en Colombia: Haemonchus/Trichostrongylus y coccidiosis en rumiantes de pastoreo; Ancylostoma (anemia) y Toxocara (zoonosis) en perros; Cryptosporidium en terneros (zoonosis, diarrea neonatal). Strongylus vulgaris = cólico tromboembólico en equinos.",
  note:"Organiza por MECANISMO (compite / sangra / replica en mucosa / daño distante): así la profe suele preguntarlo y no se te mezclan los géneros."
},

// ===================== PANCREAS (EXOCRINO) =====================
{
  sys:"pan", diapo:"75", tema:"Páncreas exocrino: función, hipoplasia, pancreatitis intersticial crónica y atrofia",
  kw:"pancreas exocrino amilasa lipasa tripsina quimiotripsina hipoplasia atrofia pancreatitis cronica insuficiencia EPI",
  zacsec:"Cap. 8 — Exocrine pancreas › Structure/function, developmental anomalies, atrophy and pancreatitis",
  zacpg:"aprox. pág. 450–460",
  leer:"Función exocrina: amilasa y lipasa (CHOs y grasas) + tripsina y quimiotripsina (proteínas). Trastornos: HIPOPLASIA pancreática (congénita), PANCREATITIS intersticial crónica, y ATROFIA (acinar) → todas llevan a Insuficiencia Pancreática Exocrina (EPI) = mala digestión.",
  micro:"Páncreas normal: acinos con gránulos de zimógeno (eosinófilos apicales) + islotes de Langerhans. Atrofia acinar: pérdida de acinos, quedan islotes y ductos. Pancreatitis crónica: fibrosis + infiltrado + atrofia acinar.",
  col:"La atrofia acinar pancreática (EPI) es clásica en PASTOR ALEMÁN (raza presente en Colombia): perro joven, delgado, con heces voluminosas, grasosas y claras (esteatorrea), apetito voraz. Conecta con 'mala asimilación' fase intraluminal (diapo 62).",
  note:"EPI = el PUENTE directo entre páncreas y la mala asimilación/diarrea del intestino. Muy probable pregunta integradora."
},

// ===================== PERITONEO =====================
{
  sys:"dig", diapo:"76-77", tema:"Peritonitis (virales, bacterianas, parasitarias) y causas por especie",
  kw:"peritonitis PIF perforacion abomaso ulcera torsion ciego invaginacion viral bacteriana parasitaria exudado fibrina",
  zacsec:"Cap. 7 — Peritoneum › Peritonitis (inflamación del peritoneo)",
  zacpg:"aprox. pág. 402–411",
  leer:"Peritonitis por causa viral (PIF felina), bacteriana o parasitaria. Causas por especie (cuadro de la diapo 76): becerro=úlcera/torsión de abomaso; bovino adulto=úlcera de abomaso/invaginación; cerdo=torsión de ciego/parasitosis masiva; perro=impactación/trombosis verminosa/úlcera perforada; caballo=hipertrofia muscular del íleon/dilatación gástrica aguda.",
  micro:"Serosa con exudado (fibrina, neutrófilos, bacterias). PIF: piogranulomas perivasculares + vasculitis con efusión rica en proteína ('peritonitis' de la forma húmeda).",
  col:"PIF (peritonitis infecciosa felina) = diagnóstico temido en gatos jóvenes en Colombia (abdomen distendido con líquido amarillo viscoso). Peritonitis por perforación/úlcera de abomaso en terneros y por rotura gástrica en equinos con cólico.",
  note:"La peritonitis suele ser SECUNDARIA (perforación/rotura de víscera): relaciona el 'sitio con rotura' por especie del cuadro 3-1."
},

// ===================== SISTEMA URINARIO (CAP. 11) =====================
{
  sys:"uri", diapo:"3-6", tema:"Riñón: anatomía e histología normal (nefrona, glomérulo, aparato yuxtaglomerular)", jubb:true,
  kw:"anatomia nefrona glomerulo corteza medula tubulo proximal distal asa henle macula densa yuxtaglomerular capsula bowman pelvis papila bellini",
  zacsec:"Cap. 11 — Urinary system › Structure and function of the kidney (estructura y función normal)",
  zacpg:"aprox. pág. 617–625",
  leer:"Repasa la organización: corteza (glomérulos + túbulos contorneados) y médula (asas de Henle, colectores, conductos de Bellini → papila → pelvis → uréter). Componentes del glomérulo: asas capilares, endotelio, membrana basal glomerular, epitelio (podocitos), cápsula de Bowman. Aparato yuxtaglomerular = mácula densa + células yuxtaglomerulares (renina).",
  skip:"No memorices cada transportador tubular; domina la ruta del filtrado (glomérulo → proximal → Henle → distal → colector) para ubicar luego las lesiones.",
  micro:"Glomérulo = ovillo capilar dentro de la cápsula de Bowman. Túbulo proximal: epitelio cúbico con borde en cepillo eosinófilo (el más abundante en corteza). Distal: más pálido, sin borde en cepillo. Reconocer esto es la base para identificar DÓNDE está la lesión.",
  col:"Base anatómica para todo el parcial de urinario; la mayoría de estas diapos son de Jubb."
},
{
  sys:"uri", diapo:"7-8", tema:"Enfermedad renal, insuficiencia renal (IRA vs IRC), uremia y azotemia",
  kw:"insuficiencia renal aguda cronica IRA IRC uremia azotemia oliguria anuria urea creatinina nefrona etapas",
  zacsec:"Cap. 11 — Urinary system › Renal failure and uremia (insuficiencia renal y uremia)",
  zacpg:"aprox. pág. 625–630",
  leer:"Distingue los términos: INSUFICIENCIA RENAL AGUDA (IRA) = inicio rápido de oliguria/anuria + azotemia. INSUFICIENCIA RENAL CRÓNICA (IRC) = resultado final de muchas nefropatías crónicas. AZOTEMIA = ↑urea y creatinina en sangre (dato de laboratorio). UREMIA = síndrome clínico ('orina en la sangre') con lesiones en varios órganos. La progresión a uremia pasa por 4 etapas.",
  skip:"No confundas azotemia (solo el valor bioquímico ↑) con uremia (el síndrome con lesiones sistémicas). Esa diferencia es pregunta clásica.",
  micro:"La azotemia no se 've' en histología; se ven sus CONSECUENCIAS (lesiones urémicas, ver ficha siguiente).",
  col:"IRC es diagnóstico diarísimo en GATOS y perros geriátricos en Colombia (pérdida de peso, poliuria/polidipsia, úlceras orales). Diferenciar IRA (potencialmente reversible) de IRC (irreversible) cambia el pronóstico que das al dueño.",
  note:"Azotemia = laboratorio. Uremia = clínica + lesiones. IRA = aguda/reversible. IRC = crónica/irreversible."
},
{
  sys:"uri", diapo:"9-11", tema:"Lesiones extrarrenales de la uremia (edema pulmonar, pericarditis, estomatitis/gastritis, mineralización, osteodistrofia)",
  kw:"uremia lesiones edema pulmonar neumonitis uremica pericarditis fibrinosa estomatitis gastritis ulcerativa mucoarteritis trombosis anemia hipoplasica mineralizacion tejidos blandos osteodistrofia fibrosa paratiroides amoniaco",
  zacsec:"Cap. 11 — Urinary system › Extrarenal lesions of uremia (manifestaciones sistémicas de la uremia)",
  zacpg:"aprox. pág. 628–632",
  leer:"Cuadro MUY preguntado: relaciona lesión ↔ mecanismo. Edema pulmonar (neumonitis urémica) y pericarditis fibrinosa = ↑permeabilidad vascular. Estomatitis/gastritis ulcerativa-hemorrágica-necrótica = producción de amoníaco + necrosis vascular. Mucoarteritis/trombosis = daño endotelial. Anemia hipoplásica = ↓eritropoyetina + fragilidad eritrocitaria. Mineralización de tejidos blandos y osteodistrofia fibrosa (hiperplasia de paratiroides) = alteración del metabolismo Ca-P.",
  micro:"Mineralización: depósitos basófilos de calcio en pleura, estómago (rugae), endocardio, pulmón. Gastritis urémica: mineralización de la mucosa gástrica + necrosis. Esto CONECTA con la 'gastritis urémica' de tu tema digestivo (diapo 43).",
  col:"El gato/perro con IRC que llega babeando con úlceras en boca, mal aliento (amoniacal) y vómito = uremia. La mineralización gástrica se ve en necropsias de pacientes renales crónicos.",
  note:"Esta tabla lesión↔mecanismo es casi segura en el parcial. Es el PUENTE directo entre urinario y digestivo (gastritis/estomatitis urémica)."
},
{
  sys:"uri", diapo:"12-13", tema:"Anomalías del desarrollo renal (agenesia, hipoplasia, ectopia, fusión, lobulaciones fetales) y displasia renal", jubb:true,
  kw:"agenesia hipoplasia ectopia renal fusion riñon herradura lobulaciones fetales displasia desarrollo desorganizado parenquima congenito",
  zacsec:"Cap. 11 — Urinary system › Developmental anomalies / renal dysplasia",
  zacpg:"aprox. pág. 632–636",
  leer:"Agenesia = falta un riñón. Hipoplasia = riñón pequeño pero bien organizado (pocos nefronas). Ectopia = riñón en posición anormal. Fusión = riñones unidos (en herradura). Lobulaciones fetales = persistencia de la lobulación (normal en bovino/cerdo). DISPLASIA renal = desarrollo DESORGANIZADO del parénquima (diferente de hipoplasia).",
  micro:"Displasia: estructuras renales inmaduras/desorganizadas para la edad (túbulos fetales, mesénquima primitivo, cartílago metaplásico, glomérulos inmaduros). Hipoplasia: tejido NORMAL pero en menor cantidad.",
  col:"Displasia renal en perros jóvenes de ciertas razas (p. ej. en Colombia se reporta en razas pequeñas) → IRC a edad temprana. Diferenciar hipoplasia (organizado) de displasia (desorganizado) es clave.",
  skip:"No memorices cada anomalía en detalle; la distinción importante es HIPOPLASIA (poco pero normal) vs DISPLASIA (desorganizado)."
},
{
  sys:"uri", diapo:"14", tema:"Quistes renales", jubb:true,
  kw:"quistes renales poliquistico cavidad epitelio congenito adquirido",
  zacsec:"Cap. 11 — Urinary system › Renal cysts and polycystic kidney disease",
  zacpg:"aprox. pág. 634–637",
  leer:"Cavidades llenas de líquido en el riñón. Pueden ser congénitas (enfermedad renal poliquística) o adquiridas. Si son numerosas y grandes → destruyen parénquima → IRC.",
  micro:"Quiste = cavidad revestida por epitelio aplanado (derivado de túbulo/nefrona), llena de líquido claro. En poliquística: múltiples quistes que reemplazan el parénquima.",
  col:"Enfermedad renal poliquística hereditaria clásica en GATOS PERSAS (raza popular en Colombia) — tamizaje por ecografía. También en algunas razas de perros.",
  skip:"Lo evaluable: cavidad revestida de epitelio; si son muchas → poliquística hereditaria (gato persa)."
},
{
  sys:"uri", diapo:"15-16", tema:"Enfermedad glomerular: glomerulonefritis vs glomerulitis (conceptos)",
  kw:"enfermedad glomerular glomerulonefritis glomerulitis ultrafiltrado perfusion peritubular nefrona primaria sistemica inflamacion",
  zacsec:"Cap. 11 — Urinary system › Glomerular disease (enfermedad glomerular)",
  zacpg:"aprox. pág. 637–645",
  leer:"La enfermedad glomerular importa porque altera el flujo y el ultrafiltrado → se pierde toda la nefrona (el glomérulo dañado arruina su túbulo). Terminología: GLOMERULONEFRITIS (GN) = enfermedad glomerular primaria con cambios tubulointersticiales/vasculares secundarios. GLOMERULITIS = inflamación RESTRINGIDA a los glomérulos. Los glomérulos también se afectan en enfermedades sistémicas.",
  skip:"No te pierdas en la inmunología de los complejos inmunes todavía; primero fija la diferencia GN (primaria, con repercusión tubular) vs glomerulitis (solo glomérulos).",
  micro:"Para orientarte: el glomérulo enfermo puede estar hipercelular, con engrosamiento de membrana basal, o con material acelular. Compara con el glomérulo normal (diapo 4).",
  col:"La GN es una de las causas de síndrome nefrótico (proteinuria, hipoalbuminemia, edema) en perros en Colombia, muchas veces secundaria a enfermedades infecciosas crónicas (ehrlichiosis, leishmaniasis)."
},
{
  sys:"uri", diapo:"17-18", tema:"Tipos histológicos de glomerulonefritis (proliferativa, mesangioproliferativa, membranoproliferativa)", jubb:true,
  kw:"glomerulonefritis proliferativa mesangioproliferativa membranoproliferativa mesangio membrana basal hipercelularidad",
  zacsec:"Cap. 11 — Urinary system › Glomerulonephritis › Morphologic classification",
  zacpg:"aprox. pág. 639–645",
  leer:"Clasifica la GN por lo que prolifera/engrosa: PROLIFERATIVA (↑células del penacho glomerular). MESANGIOPROLIFERATIVA (proliferación del mesangio). MEMBRANOPROLIFERATIVA (engrosamiento de membrana basal + proliferación mesangial, 'doble contorno').",
  micro:"Proliferativa: glomérulo hipercelular. Mesangioproliferativa: aumento de matriz/células mesangiales (centro del penacho). Membranoproliferativa: paredes capilares engrosadas ('asa de alambre') + hipercelularidad. Compara con las imágenes de diapos 17-18.",
  col:"El tipo histológico se confirma con biopsia renal (poco frecuente en Colombia por costo). Para el parcial, basta reconocer el patrón en la imagen.",
  skip:"No necesitas inmunofluorescencia/microscopía electrónica; identifica el patrón en H&E: ¿qué está aumentado, células o membrana?"
},
{
  sys:"uri", diapo:"19-20", tema:"Amiloidosis renal", jubb:true,
  kw:"amiloidosis amiloide eosinofilico homogeneo glomerulo rojo congo verde manzana primaria secundaria sheep perro shar pei proteinuria",
  zacsec:"Cap. 11 — Urinary system › Glomerular amyloidosis (amiloidosis renal)",
  zacpg:"aprox. pág. 645–648",
  leer:"Depósito de amiloide (material eosinofílico, homogéneo, proteico) en paredes de vasos pequeños y extracelularmente, sobre todo en GLOMÉRULOS. Tipos: primaria y secundaria (la secundaria/AA, por inflamación crónica, es la más común en animales).",
  micro:"CLAVE PARCIAL: material amorfo, eosinofílico, HOMOGÉNEO (acelular) que expande el mesangio/paredes glomerulares. Tinción ROJO CONGO → birrefringencia VERDE MANZANA con luz polarizada (diapo 20, imagen A roja / B polarizada). Si ves material homogéneo rosado en glomérulo + Rojo Congo positivo → amiloidosis.",
  col:"Causa importante de síndrome nefrótico/IRC con proteinuria masiva en perros (Shar Pei predispuesto) y en bovinos/ovinos con inflamación crónica. En Colombia, secundaria a procesos inflamatorios/infecciosos crónicos.",
  note:"Amiloide = eosinofílico + HOMOGÉNEO + Rojo Congo (verde manzana en polarizada). Dato de histología muy evaluable."
},
{
  sys:"uri", diapo:"21", tema:"Trastornos circulatorios renales: hemorragia e infarto renal",
  kw:"hemorragia corteza renal bacteremia viremia enterotoxemia becerro infarto necrosis coagulativa isquemia trombosis embolo rojo palido",
  zacsec:"Cap. 11 — Urinary system › Circulatory disturbances (hemorrhage, infarction)",
  zacpg:"aprox. pág. 648–652",
  leer:"HEMORRAGIA: común en corteza renal en bacteremias/viremias; las hemorragias subcapsulares extensas son típicas de ENTEROTOXEMIA en becerros ('riñón pulposo' por Clostridium perfringens tipo D). INFARTO renal: áreas de necrosis coagulativa por isquemia (oclusión trombótica/embólica); pueden ser rojos (venoso/agudo) o pálidos (arterial).",
  micro:"Infarto: zona cuneiforme (triangular, base hacia la cápsula) de necrosis de coagulación con pérdida de detalle celular; borde con congestión/inflamación. Enterotoxemia: hemorragias corticales + autólisis rápida.",
  col:"Enterotoxemia (riñón pulposo) por Clostridium perfringens tipo D = importante en corderos/cabritos en Colombia, PREVENIBLE con vacuna clostridial. Infartos renales por tromboembolismo en gatos cardiópatas.",
  skip:"Para infarto: recuerda 'necrosis de coagulación cuneiforme por isquemia'. Para enterotoxemia: hemorragia subcapsular en becerro/cordero."
},
{
  sys:"uri", diapo:"22", tema:"Necrosis renal: cortical bilateral, medular (papilar) y necrosis tubular aguda (NTA)",
  kw:"necrosis cortical bilateral microtrombos CID medular papilar AINE PGE2 isquemia tubular aguda NTA degeneracion tubular",
  zacsec:"Cap. 11 — Urinary system › Renal necrosis (cortical, medullary/papillary, acute tubular necrosis)",
  zacpg:"aprox. pág. 650–656",
  leer:"NECROSIS CORTICAL BILATERAL: isquemia de la corteza por microtrombos difusos en arterias interlobulillares (típico de CID/coagulación intravascular diseminada). NECROSIS MEDULAR/PAPILAR: respuesta a isquemia; los AINES la favorecen al inhibir la PGE2 (que mantiene el flujo medular). NECROSIS TUBULAR AGUDA (NTA): la degeneración tubular es el proceso primario (causa #1 de IRA).",
  micro:"NTA: epitelio tubular tumefacto/necrótico, desprendido a la luz, cilindros, membrana basal a veces desnuda. Necrosis cortical: necrosis de coagulación de corteza con trombos. Papilar: necrosis de la punta de la papila.",
  col:"NTA por nefrotóxicos es MUY relevante en Colombia: aminoglucósidos (gentamicina), AINES, etilenglicol (anticongelante), plantas (Lantana camara, roble/Quercus), aflatoxinas. La necrosis papilar por AINES en caballos y perros deshidratados.",
  note:"NTA = causa principal de IRA y a menudo REVERSIBLE (si la membrana basal queda intacta, el túbulo regenera). Buen punto para pregunta de concepto."
},
{
  sys:"uri", diapo:"23-24", tema:"Enfermedades tubulointersticiales: nefritis intersticial (clasificación) y su cuadro de causas",
  kw:"tubulointersticial nefritis intersticial aguda cronica linfoplasmocitica granulomatosa supurativa embolica leptospira ecoli salmonella brucella mycobacteria histoplasma aspergillus",
  zacsec:"Cap. 11 — Urinary system › Tubulointerstitial diseases › Interstitial nephritis",
  zacpg:"aprox. pág. 656–662",
  leer:"Las enfermedades tubulointersticiales afectan intersticio + túbulos (la inflamación intersticial casi siempre altera la función tubular). Nefritis intersticial: aguda o crónica. Por patrón/causa (cuadro diapo 24): LINFOPLASMOCÍTICA (Leptospira, E. coli, Salmonella, Brucella); GRANULOMATOSA (micobacterias, Histoplasma, Aspergillus); SUPURATIVA (bacterias ascendentes); EMBÓLICA (émbolos sépticos).",
  micro:"Linfoplasmocítica: infiltrado de linfocitos y plasmocitos en el intersticio + fibrosis. Granulomatosa: granulomas con macrófagos/células gigantes. Supurativa: neutrófilos. Identifica el TIPO de célula inflamatoria para nombrar la causa.",
  col:"Leptospirosis = causa frecuente y ZOONÓSICA de nefritis intersticial en perros y bovinos en Colombia (clima húmedo, roedores). La granulomatosa por Histoplasma es relevante en zonas endémicas.",
  note:"Asocia el PATRÓN inflamatorio (linfoplasmocítico/granulomatoso/supurativo) con el grupo de agentes del cuadro de la diapo 24."
},
{
  sys:"uri", diapo:"25-26", tema:"Lesión/necrosis tubular aguda y agentes nefrotóxicos", jubb:true,
  kw:"lesion tubular aguda nefrotoxico aminoglucosidos gentamicina AINE etilenglicol oxalato metales mercurio plomo lantana quercus roble aflatoxina ocratoxina mioglobina hemoglobina cisplatino monensina",
  zacsec:"Cap. 11 — Urinary system › Acute tubular injury / nephrotoxicity (agentes nefrotóxicos)",
  zacpg:"aprox. pág. 652–658",
  leer:"La lesión tubular aguda es el daño primario de los túbulos. Agentes nefrotóxicos (cuadro diapo 26): EXÓGENOS — antimicrobianos (aminoglucósidos, anfotericina B, sulfas, tetraciclinas), antineoplásicos (cisplatino), etilenglicol (oxalato), metales (plomo, mercurio, cadmio), micotoxinas (citrinina, ocratoxina), monensina, plantas (Lantana camara, Quercus/roble, pigweed). ENDÓGENOS — bilis, hemoglobina, mioglobina.",
  micro:"Necrosis/degeneración del epitelio tubular; en intoxicación por etilenglicol: cristales de OXALATO de calcio en la luz tubular (birrefringentes, en 'abanico/rosetas'). Pigmentos (hemoglobina/mioglobina): cilindros pardos en túbulos.",
  col:"Muy relevante en Colombia: nefrotoxicidad por gentamicina y AINES (iatrogenia), intoxicación por roble/Quercus y Lantana en ganado de pastoreo, aflatoxinas/ocratoxina en concentrados mal almacenados, y mioglobinuria por miopatía/rabdomiólisis en equinos.",
  note:"El túbulo proximal es el más sensible a tóxicos. Etilenglicol → cristales de oxalato en túbulos (dato clave de identificación)."
},
{
  sys:"uri", diapo:"27", tema:"Nefritis intersticial no supurativa (linfohistiocítica)", jubb:true,
  kw:"nefritis intersticial no supurativa linfohistiocitica focal cicatriz antigeno persistencia hallazgo incidental",
  zacsec:"Cap. 11 — Urinary system › Nonsuppurative (lymphohistiocytic) interstitial nephritis",
  zacpg:"aprox. pág. 656–660",
  leer:"Inflamación linfohistiocítica focal con cicatrices leves, muy común en riñones. A menudo de causa desconocida/inespecífica; algunas lesiones son inflamatorias y otras focos de persistencia de antígeno.",
  micro:"Focos intersticiales de linfocitos e histiocitos + fibrosis leve, con depresiones en la superficie (cicatrices). Suele ser hallazgo incidental en necropsia.",
  col:"Hallazgo frecuente e incidental en necropsias de perros/bovinos en Colombia; importante que sepas que muchas veces NO tiene significado clínico (no sobreinterpretar).",
  skip:"Lo evaluable: infiltrado linfohistiocítico focal + cicatriz, frecuentemente incidental."
},
{
  sys:"uri", diapo:"28-29", tema:"Nefritis intersticial supurativa y nefritis embólica", jubb:true,
  kw:"nefritis supurativa embolica hematogena ascendente absceso riñon manchas blancas corteza septicemia neutrofilos bacterias",
  zacsec:"Cap. 11 — Urinary system › Suppurative (embolic) nephritis",
  zacpg:"aprox. pág. 660–663",
  leer:"La infección bacteriana del riñón puede ser HEMATÓGENA (→ nefritis supurativa EMBÓLICA, 'riñón en manchas blancas') o ASCENDENTE desde el tracto urinario bajo (→ PIELONEFRITIS). La embólica llega por sangre y siembra múltiples focos.",
  micro:"Nefritis embólica: múltiples focos de neutrófilos (microabscesos) con colonias bacterianas, distribuidos al azar en la corteza. Compara con la imagen de émbolo bacteriano (diapos 28-29).",
  col:"Nefritis embólica por septicemia: en terneros con onfaloflebitis (ombligo infectado), en endocarditis bacteriana que siembra émbolos. 'Riñón salpicado de puntos blancos' en necropsia.",
  note:"Distingue la VÍA: embólica = hematógena (siembra al azar); pielonefritis = ascendente (desde vejiga, afecta pelvis)."
},
{
  sys:"uri", diapo:"30-31", tema:"Leptospirosis renal", jubb:true,
  kw:"leptospirosis leptospira interrogans espiroqueta zoonosis aborto nefritis intersticial septicemia hepatitis orina roedores warthin starry",
  zacsec:"Cap. 11 — Urinary system › Leptospirosis (nefritis por Leptospira)",
  zacpg:"aprox. pág. 658–662",
  leer:"Infección por serovares de Leptospira interrogans (espiroqueta). Importante como causa de ABORTO y muerte fetal en animales de granja, y de enfermedad aguda (septicemia, hepatitis, nefritis, meningitis). Es ZOONOSIS.",
  micro:"Nefritis intersticial (linfoplasmocítica/mixta); las leptospiras se demuestran con tinción de plata (Warthin-Starry) o inmunohistoquímica en túbulos (diapo 31, imagen B con organismos). El riñón puede verse pálido con focos.",
  col:"MUY importante en Colombia: zoonosis de clima cálido/húmedo, transmitida por orina de roedores y perros; causa aborto en bovinos/cerdos y falla hepatorrenal en perros. Riesgo ocupacional para el veterinario. Prevenible con vacuna.",
  note:"Leptospira = zoonosis + aborto + nefritis intersticial. El riñón es el reservorio (eliminación por orina). Casi segura en el parcial por relevancia local."
},
{
  sys:"uri", diapo:"32-33", tema:"Pielonefritis", jubb:true,
  kw:"pielonefritis pelvis renal ascendente tracto urinario bajo calices deformidad corynebacterium renale ecoli vaca cerda obstruccion",
  zacsec:"Cap. 11 — Urinary system › Pyelonephritis (pielonefritis)",
  zacpg:"aprox. pág. 662–666",
  leer:"Inflamación de la PELVIS + parénquima renal, casi siempre por infección ASCENDENTE desde el tracto urinario bajo (la hematógena es rarísima). Se caracteriza por inflamación, necrosis y deformidad de los cálices + inflamación tubulointersticial.",
  micro:"Infiltrado neutrofílico/supurativo en pelvis y médula, cilindros leucocitarios en túbulos, necrosis del urotelio pélvico; en crónica, fibrosis y deformidad de cálices.",
  col:"Frecuente en vacas (Corynebacterium/Trueperella renale) y en cerdas; en perras/gatas por E. coli ascendente, favorecida por obstrucción (urolitos) o retención. Factores: hembras (uretra corta), preñez, obstrucción.",
  note:"Pielonefritis = ASCENDENTE (desde vejiga) y afecta la PELVIS; contrástala con la nefritis embólica (hematógena, corteza). Conecta con cistitis (infección ascendente)."
},
{
  sys:"uri", diapo:"34-35", tema:"Hidronefrosis",
  kw:"hidronefrosis dilatacion pelvis calices atrofia parenquima obstruccion urolito hiperplasia prostatica neoplasia cistitis filtracion glomerular",
  zacsec:"Cap. 11 — Urinary system › Hydronephrosis (hidronefrosis)",
  zacpg:"aprox. pág. 666–668",
  leer:"Dilatación de la pelvis y cálices con atrofia PROGRESIVA del parénquima (el riñón se vuelve una bolsa quística). Causa: obstrucción urinaria congénita o adquirida (urolitiasis, hiperplasia prostática en perros, compresión neoplásica, cistitis grave). Ocurre porque la filtración glomerular PERSISTE pese a la obstrucción → la orina represada comprime el parénquima.",
  micro:"Pelvis dilatada, atrofia por compresión de túbulos y glomérulos, fibrosis intersticial. En fases avanzadas queda solo una cáscara delgada de parénquima.",
  col:"En perros machos geriátricos por hiperplasia prostática que obstruye; por urolitos que bloquean uréter/uretra; en obstrucción uretral del gato (FLUTD). Si es unilateral puede pasar desapercibida hasta la necropsia.",
  note:"Clave: OBSTRUCCIÓN + filtración que continúa → presión retrógrada → atrofia del parénquima. Puede ser uni o bilateral según dónde esté el bloqueo."
},
{
  sys:"uri", diapo:"36", tema:"Tracto urinario bajo — anomalías de uréteres (agenesia, duplicación, uréter ectópico)", jubb:true,
  kw:"ureter agenesia duplicacion ectopico uraco tracto urinario bajo incontinencia congenito",
  zacsec:"Cap. 11 — Lower urinary tract › Congenital anomalies of ureters",
  zacpg:"aprox. pág. 668–671",
  leer:"Anomalías ureterales: agenesia (falta), duplicación (dos uréteres), y URÉTER ECTÓPICO (desemboca fuera de la vejiga, p. ej. en uretra/vagina).",
  micro:"Son defectos anatómicos; el ectópico se diagnostica por su trayecto/desembocadura anormal.",
  col:"El URÉTER ECTÓPICO es causa clásica de INCONTINENCIA urinaria en cachorras jóvenes (razas como golden/labrador) — motivo de consulta en Colombia: 'gotea orina' desde cachorra. Se corrige con cirugía.",
  skip:"Lo evaluable: uréter ectópico → incontinencia en hembra joven."
},
{
  sys:"uri", diapo:"37-39", tema:"Urolitiasis (cálculos urinarios) y su composición por especie", jubb:true,
  kw:"urolitiasis urolito calculo piedra struvita oxalato urato cistina silice carbonato fosfato perro gato oveja vaca equino obstruccion uretral",
  zacsec:"Cap. 11 — Lower urinary tract › Urolithiasis (cálculos urinarios)",
  zacpg:"aprox. pág. 671–676",
  leer:"Presencia de cálculos (urolitos) en las vías urinarias: agregados de solutos precipitados + proteínas + detritos. Composición por especie (cuadro diapo 38): PERRO = estruvita, oxalato, uratos (dálmata); GATO = estruvita, oxalato; BOVINO/OVINO = sílice, estruvita, carbonato, oxalato; EQUINO = carbonato; CERDO = uratos.",
  micro:"El urolito en sí es macroscópico; en la vía urinaria causa irritación del urotelio, hemorragia, inflamación y, si obstruye, hidronefrosis/ruptura vesical.",
  col:"Problemón en Colombia: obstrucción uretral por estruvita/oxalato en GATOS machos (emergencia, 'gato tapado'), estruvita en perros con infección urinaria, y cálculos de sílice en rumiantes a pastoreo. La obstrucción uretral es urgencia: riñón post-renal + uremia.",
  note:"Relaciona tipo de cálculo ↔ especie (cuadro diapo 38). Estruvita se asocia a orina alcalina/infección; oxalato a orina ácida."
},
{
  sys:"uri", diapo:"40", tema:"Inflamaciones del tracto urinario bajo: uretritis y cistitis",
  kw:"cistitis uretritis bacterias ascendentes ecoli streptococcus staphylococcus hembra aguda cronica hemorragica fibrinopurulenta necrosante polipoide vejiga",
  zacsec:"Cap. 11 — Lower urinary tract › Inflammation (cystitis, urethritis)",
  zacpg:"aprox. pág. 676–680",
  leer:"Uretritis (uretra) y CISTITIS (vejiga). Causa principal: bacterias ASCENDENTES, sobre todo en HEMBRAS (uretra corta): E. coli, Streptococcus spp., Staphylococcus spp. Clasifícala en aguda/crónica y por exudado: hemorrágica, fibrinopurulenta, necrosante, ulcerosa, o combinaciones. La cistitis crónica puede ser POLIPOIDE.",
  micro:"Cistitis: infiltrado inflamatorio en la mucosa/pared vesical, hemorragia, erosión/úlcera, fibrina. Polipoide: proyecciones de mucosa hiperplásica hacia la luz. Crónica: fibrosis + infiltrado linfoplasmocitario.",
  col:"Cistitis por E. coli ascendente muy común en perras y gatas en Colombia. Favorecida por urolitos, retención y cateterización (iatrogenia). Puede ascender → pielonefritis (conecta con diapo 32).",
  note:"Mujeres/hembras más predispuestas (uretra corta). Vía ascendente: cistitis → uréter → pielonefritis."
},
{
  sys:"uri", diapo:"41", tema:"Enfermedad felina del tracto urinario bajo (FLUTD)",
  kw:"FLUTD felino tracto urinario bajo gato cistitis idiopatica urolitos tapon uretral obstruccion iatrogenica estres",
  zacsec:"Cap. 11 — Lower urinary tract › Feline lower urinary tract disease (FLUTD)",
  zacpg:"aprox. pág. 678–682",
  leer:"Síndrome del gato con signos urinarios bajos (disuria, polaquiuria, hematuria, obstrucción). Causas: infecciones urinarias, urolitos, tapones uretrales, defectos anatómicos congénitos/adquiridos, causas iatrogénicas. Muchos casos son cistitis idiopática (asociada a estrés).",
  micro:"Cistitis (idiopática o por urolitos): edema, hemorragia e infiltrado en la pared vesical. Tapón uretral: matriz proteica + cristales de estruvita.",
  col:"Diagnóstico MUY frecuente en gatos en Colombia, sobre todo machos castrados, obesos, indoor, con estrés y dieta seca. La OBSTRUCCIÓN uretral del macho ('gato tapado') es urgencia vital por uremia post-renal e hiperkalemia.",
  note:"FLUTD es un SÍNDROME (varias causas), no una sola enfermedad. El macho obstruido es emergencia. Conecta con urolitiasis y uremia."
},
{
  sys:"uri", diapo:"42", tema:"Neoplasias del tracto urinario (carcinomas y tumores mesenquimales)",
  kw:"neoplasia tumor carcinoma celulas transicionales urotelial vejiga fibroma fibrosarcoma leiomioma leiomiosarcoma hemangiosarcoma TVT perro",
  zacsec:"Cap. 11 — Lower urinary tract › Neoplasia (tumores del tracto urinario)",
  zacpg:"aprox. pág. 680–684",
  leer:"Tumores epiteliales: CARCINOMAS (el más importante en vejiga = carcinoma de células transicionales/urotelial). Tumores mesenquimales: fibroma, fibrosarcoma, leiomioma, leiomiosarcoma, hemangiosarcoma.",
  micro:"Carcinoma de células transicionales: urotelio neoplásico que forma papilas/nidos invadiendo la pared; atipia, mitosis. Los mesenquimales según su célula de origen (fibroblastos, músculo liso, endotelio).",
  col:"El carcinoma de células transicionales de vejiga es el tumor urinario más frecuente en perros en Colombia (hembras, ciertas razas; se asocia a hematuria y disuria crónicas que no mejoran con antibiótico). Suele ubicarse en el trígono → obstrucción.",
  note:"En vejiga de perro con hematuria crónica que no responde a antibiótico, sospecha carcinoma de células transicionales."
},
];
