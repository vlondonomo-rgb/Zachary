// Banco de lesiones para el juego "Adivina la lesión"
// Enfoque: contenido CELULAR microscópico + parejas de CONFUSIÓN (lo que la profe Ana Acosta evalúa)
// Fuentes: diapositivas de Ana Acosta (respiratorio, cardiovascular) + Zachary 6.a ed / Jubb.
// Campos:
//   sys: sistema (card, resp)  | nombre: respuesta correcta
//   macro: hallazgo a simple vista | micro: hallazgo histológico
//   celulas: qué células inflamatorias/clave hay (AGUDO=neutrófilos; CRÓNICO=macrófagos+linfocitos+plasmáticas; alérgico/parásito=eosinófilos)
//   confunde: [nombres con los que se confunde]  | clave: cómo diferenciarla de esas
//   col: contexto clínico Colombia | pista: pista opcional (especie)

const LESIONES = [

// ============ TRAMPAS MORTALES: NEUMONÍAS (lo que te hizo perder) ============
{
  sys:"resp", nombre:"Bronconeumonía",
  macro:"Consolidación CRÁNEOVENTRAL, irregular, algo simétrica; color rojo-violeta o rojo-gris. Firme al tacto (pierde la esponjosidad).",
  micro:"Lesión centrada en la UNIÓN BRONQUIOLO-ALVEOLAR. Bronquiolos y alvéolos LLENOS de exudado. El epitelio bronquiolar suele estar conservado (si hay necrosis extensa, sospecha virus de fondo).",
  celulas:"NEUTRÓFILOS (predominan, patrón agudo) + fibrina + macrófagos + restos celulares y moco. Es agudo-supurativo.",
  confunde:["Neumonía intersticial / bronco-intersticial","Congestión / hemorragia pulmonar"],
  clave:"CLAVE vs intersticial: aquí el exudado LLENA la luz de bronquiolos/alvéolos y entra por VÍA AÉREA (aerógena, bacteriana) → patrón CRÁNEOVENTRAL. En intersticial el daño está en la PARED alveolar (septo) y es DIFUSO. CLAVE vs congestión: si hay cambio de color SIN cambio de textura (sigue esponjoso) = congestión/hemorragia, NO bronconeumonía.",
  col:"La causa bacteriana depende de especie (Mannheimia/Pasteurella/Histophilus en bovinos; Bordetella en cerdos/perros). Complejo respiratorio bovino = enorme pérdida en ganadería colombiana.",
  pista:"Entra por la vía aérea; patrón cráneoventral."
},
{
  sys:"resp", nombre:"Neumonía intersticial (y bronco-intersticial)",
  macro:"Pulmón uniformemente MÁS FIRME de lo normal, textura GOMOSA, SIN la esponjosidad normal. NO colapsa al abrir el tórax. Marcas costales. Difícil de diagnosticar macroscópicamente. Puerta de entrada HEMATÓGENA (o tóxica/viral aerógena en la bronco-intersticial).",
  micro:"Daño en la PARED alveolar: tabiques (septos) alveolares ENGROSADOS por fibras/edema. Proliferación de NEUMOCITOS TIPO II. En bronco-intersticial: necrosis del epitelio bronquiolar Y alveolar. Puede haber MEMBRANAS HIALINAS.",
  celulas:"Macrófagos (espumosos) aumentados, infiltrado en el intersticio; neumocitos tipo II proliferados. NO hay exudado llenando la luz alveolar (eso la diferencia de bronconeumonía).",
  confunde:["Bronconeumonía","Edema pulmonar"],
  clave:"CLAVE vs bronconeumonía: aquí la lesión está en la PARED/SEPTO (engrosado), la luz alveolar queda relativamente 'vacía', patrón DIFUSO, no colapsa, entrada hematógena. En bronconeumonía la luz está LLENA de neutrófilos y el patrón es cráneoventral. La necrosis del epitelio sugiere VIRUS.",
  col:"Causas virales (distemper/moquillo en perros, PRRS en cerdos — ambos relevantes en Colombia), tóxicas y por hipersensibilidad.",
  pista:"Daño en la pared alveolar, patrón difuso, pulmón gomoso que no colapsa."
},
{
  sys:"resp", nombre:"Neumonía embólica",
  macro:"Distribución MULTIFOCAL (focos al azar por todo el pulmón), textura nodular. Focos rojos con centros blanquecinos/purulentos. Entrada HEMATÓGENA.",
  micro:"Múltiples focos de inflamación supurativa/necrótica centrados en vasos (émbolos sépticos) distribuidos al azar.",
  celulas:"Neutrófilos (supurativo) con bacterias en el centro del émbolo; necrosis.",
  confunde:["Bronconeumonía","Neumonía granulomatosa"],
  clave:"CLAVE: la embólica es MULTIFOCAL al azar (siembra por sangre), NO cráneoventral como la bronconeumonía. Origen típico: endocarditis valvular, abscesos hepáticos (acidosis ruminal en bovinos), trombosis yugular → émbolos a pulmón.",
  col:"En bovinos de feedlot: acidosis → absceso hepático → émbolos a vena cava → pulmón. También por endocarditis.",
  pista:"Focos al azar con centro purulento; vienen por la sangre."
},
{
  sys:"resp", nombre:"Neumonía granulomatosa",
  macro:"NÓDULOS, distribución multifocal, textura nodular. Superficie de corte con GRANULOMAS. Entrada aerógena o hematógena.",
  micro:"Granulomas: centro (a veces necrosis caseosa) rodeado de macrófagos epitelioides, células gigantes y corona de linfocitos.",
  celulas:"MACRÓFAGOS epitelioides + CÉLULAS GIGANTES + linfocitos (patrón crónico granulomatoso). Según causa, eosinófilos (parásitos).",
  confunde:["Neumonía embólica","Tuberculosis / Rhodococcus"],
  clave:"CLAVE: granuloma = macrófagos + células gigantes (crónico), NO neutrófilos sueltos como la embólica. Causas: Mycobacterium (TBC), micosis sistémicas, huevos de parásito, cuerpos extraños, Rhodococcus equi en potros.",
  col:"TBC bovina (zoonosis, control ICA). Rhodococcus equi en potros = neumonía piogranulomatosa importante en criaderos equinos.",
  pista:"Nódulos con macrófagos y células gigantes."
},

// ============ TRAMPAS MORTALES: CONGESTIÓN IZQUIERDA vs DERECHA ============
{
  sys:"card", nombre:"Insuficiencia cardíaca IZQUIERDA (congestión izquierda)",
  macro:"Signos sobre todo en el PULMÓN: edema pulmonar, congestión. Causas: daño miocárdico, valvulopatía mitral/aórtica, defectos congénitos, hipertensión.",
  micro:"En el pulmón: congestión de capilares alveolares, edema, hipertrofia/fibrosis de paredes alveolares, hemorragias. Aparecen las 'CÉLULAS DE INSUFICIENCIA CARDÍACA' (macrófagos cargados de hemosiderina en los alvéolos).",
  celulas:"CÉLULAS DE FALLA CARDÍACA = macrófagos alveolares con HEMOSIDERINA (pigmento pardo). Dato histológico estrella de la congestión izquierda.",
  confunde:["Insuficiencia cardíaca derecha (congestión derecha)","Neumonía intersticial"],
  clave:"REGLA DE ORO: IZQUIERDA → la sangre se represa HACIA ATRÁS, AL PULMÓN → edema pulmonar + células de falla cardíaca + DISNEA. DERECHA → se represa al CUERPO → hígado 'nuez moscada', ASCITIS, edema, pulso yugular. Izquierda = pulmón; derecha = cuerpo/hígado.",
  col:"En perros: valvulopatía mitral degenerativa (endocardiosis) es causa #1 de falla izquierda en Colombia. Tos y disnea en perro geriátrico pequeño.",
  pista:"La sangre se represa hacia el pulmón."
},
{
  sys:"card", nombre:"Insuficiencia cardíaca DERECHA (congestión derecha)",
  macro:"Signos sobre el CUERPO y circulación portal: HÍGADO 'EN NUEZ MOSCADA' (aspecto moscado), ASCITIS, edema subcutáneo, pulso venoso yugular, reducción de filtración glomerular. Suele ser secundaria a la falla izquierda; causa primaria pulmonar = Cor pulmonale.",
  micro:"En el hígado: congestión + atrofia + necrosis + fibrosis CENTROLOBULILLAR (alrededor de la vena central). Patrón 'nuez moscada' = zonas rojas (congestión centrolobulillar) alternando con claras.",
  celulas:"Hepatocitos centrolobulillares atróficos/necróticos + sinusoides dilatados llenos de sangre. En crónico, fibrosis centrolobulillar.",
  confunde:["Insuficiencia cardíaca izquierda (congestión izquierda)","Hígado congestivo pasivo"],
  clave:"REGLA DE ORO: DERECHA → sangre represada AL CUERPO → hígado nuez moscada + ASCITIS + edema + yugular. IZQUIERDA → al PULMÓN → edema pulmonar + células de falla cardíaca. Si ves ASCITIS e hígado moscado = DERECHA.",
  col:"Dirofilaria immitis (gusano del corazón) en perros de tierra caliente colombiana → sobrecarga derecha → Cor pulmonale → ascitis. También secundaria a falla izquierda crónica.",
  pista:"La sangre se represa hacia el cuerpo: hígado y ascitis."
},

// ============ CARDIOVASCULAR: VASOS ============
{
  sys:"card", nombre:"Aneurisma (verminoso)",
  macro:"Dilatación SACULAR, circunscrita, de una arteria (clásico: aorta torácica/mesentérica). En el verminoso: pared debilitada por el parásito.",
  micro:"Debilitamiento de la pared: íntima y media parcialmente rotas con reemplazo fibroso.",
  celulas:"Según causa; en el verminoso hay reacción inflamatoria por el parásito (eosinófilos) + fibrosis.",
  confunde:["Arteritis verminosa (sin aneurisma)","Telangiectasia"],
  clave:"Aneurisma = DILATACIÓN de la pared por debilitamiento. Lo clásico en caballo: Strongylus vulgaris. Si solo hay inflamación de pared sin dilatación = arteritis.",
  col:"Strongylus vulgaris en equinos (muy atendidos en Colombia): migra por arterias mesentéricas → arteritis/aneurisma → cólico tromboembólico.",
  pista:"Dilatación sacular de la pared arterial."
},
{
  sys:"card", nombre:"Vasculitis / Arteritis",
  macro:"Pared del vaso inflamada, puede haber trombos. Arteritis verminosa en caballo: engrosamiento de arterias mesentéricas.",
  micro:"Exudado inflamatorio DENTRO de las capas de la pared vascular. Proliferación endotelial, NECROSIS FIBRINOIDE, fibrosis crónica, posibles trombos.",
  celulas:"Según causa: neutrófilos (agudo/infeccioso), linfocitos/macrófagos (inmunomediado/crónico), eosinófilos (parásitos).",
  confunde:["Aneurisma","Endocarditis"],
  clave:"Vasculitis = INFLAMACIÓN de la pared (necrosis fibrinoide). Causas: inmunocomplejos, tóxicos/infecciosos, parásitos (Strongylus vulgaris, Dirofilaria, Schistosoma, Onchocerca).",
  col:"Strongylus vulgaris (equino) y Dirofilaria (perro) son causas parasitarias frecuentes en Colombia.",
  pista:"Inflamación de la pared del vaso con necrosis fibrinoide."
},
{
  sys:"card", nombre:"Telangiectasia",
  macro:"En el BOVINO (hígado): puntos pequeños, irregulares, levemente DEPRIMIDOS y oscuros. Acúmulos de capilares muy dilatados.",
  micro:"Dilatación marcada de sinusoides/capilares llenos de sangre, SIN inflamación. Las extremas pueden parecer hemangioma.",
  celulas:"Sin infiltrado inflamatorio; solo espacios vasculares dilatados con sangre.",
  confunde:["Hemangioma","Congestión hepática"],
  clave:"Telangiectasia = vasos dilatados benignos (hallazgo incidental de matadero en bovino). NO confundir con hemangioma (neoplasia) ni con necrosis.",
  col:"Hallazgo muy común en decomiso de hígado bovino en frigoríficos colombianos; es benigno/incidental.",
  pista:"Puntos oscuros deprimidos en hígado de bovino; capilares dilatados."
},

// ============ CARDIOVASCULAR: MIOCARDIO ============
{
  sys:"card", nombre:"Hipertrofia del miocardio",
  macro:"Pared cardíaca MÁS GRUESA, consistencia gomosa, corazón de peso anormalmente grande. Concéntrica (luz reducida) o excéntrica (luz dilatada).",
  micro:"Fibras musculares AUMENTADAS de tamaño, núcleos numerosos, agrandados, de aspecto ROLLIZO y extremos CUADRADOS (dato clásico).",
  celulas:"Cardiomiocitos grandes con núcleos 'rectangulares/en caja'. No es inflamatorio.",
  confunde:["Cardiomiopatía dilatada","Atrofia del miocardio"],
  clave:"Hipertrofia = fibras MÁS GRANDES (núcleo rollizo, extremos cuadrados), pared gruesa. Atrofia = fibras MÁS PEQUEÑAS. Dilatada = cámara dilatada con pared adelgazada.",
  col:"Secundaria a estenosis/insuficiencia valvular o a enfermedad pulmonar crónica (cor pulmonale).",
  pista:"Fibras grandes con núcleos rollizos de extremos cuadrados."
},
{
  sys:"card", nombre:"Atrofia del miocardio",
  macro:"Corazón de tamaño DISMINUIDO. 'Atrofia parda' (pardo por lipofuscina) o 'atrofia serosa' (gelatinosa).",
  micro:"REDUCCIÓN del tamaño de las fibras musculares. En atrofia parda: pigmento de lipofuscina.",
  celulas:"Cardiomiocitos pequeños; lipofuscina (parda) en atrofia parda. No inflamatorio.",
  confunde:["Hipertrofia del miocardio"],
  clave:"Atrofia = fibras MÁS PEQUEÑAS, corazón chico. Lo opuesto a la hipertrofia (fibras grandes).",
  col:"Por desnutrición y enfermedades crónicas consuntivas (caquexia) — frecuente en animales de campo descuidados o con parasitismo crónico.",
  pista:"Fibras pequeñas; corazón disminuido de tamaño."
},
{
  sys:"card", nombre:"Miocarditis",
  macro:"Inflamación difusa del músculo cardíaco; a veces abscesos o focos circunscritos.",
  micro:"Infiltrado inflamatorio en el miocardio; con necrosis de fibras según causa. Toxoplasma/Sarcocystis: quistes dentro de fibras. T. cruzi: amastigotes en 'nidos' dentro del cardiomiocito.",
  celulas:"Linfocitos/macrófagos (viral, crónico) o neutrófilos (bacteriano agudo). Protozoos intracelulares en Chagas/toxoplasmosis.",
  confunde:["Cardiomiopatía dilatada","Degeneración del miocardio"],
  clave:"Miocarditis = INFLAMACIÓN (infiltrado) del músculo. Busca el infiltrado inflamatorio o el parásito. Causas: virales (aftosa, AIE), Listeria, Clostridios, Toxoplasma, parvovirus canino, T. cruzi.",
  col:"Enfermedad de Chagas (Trypanosoma cruzi) es ENDÉMICA en Colombia (zonas rurales con pito/chinche); causa miocarditis en perros y humanos (zoonosis importante).",
  pista:"Músculo cardíaco con infiltrado inflamatorio o parásito intracelular."
},
{
  sys:"card", nombre:"Cardiomiopatía dilatada",
  macro:"Corazón DILATADO (todas las cámaras), paredes adelgazadas, flácido. Alteración de la CONTRACTILIDAD (disfunción SISTÓLICA).",
  micro:"Fibras adelgazadas/onduladas, fibrosis intersticial variable.",
  celulas:"Cardiomiocitos degenerados + fibrosis; no es primariamente inflamatorio.",
  confunde:["Cardiomiopatía restrictiva","Hipertrofia excéntrica"],
  clave:"DILATADA = problema SISTÓLICO (no contrae), cámaras dilatadas y pared delgada. RESTRICTIVA = problema DIASTÓLICO (no se llena), pared rígida.",
  col:"En perros de razas grandes (dóberman, gran danés) presentes en Colombia; puede asociarse a deficiencia de taurina.",
  pista:"Corazón dilatado y flácido; falla sistólica (no contrae)."
},
{
  sys:"card", nombre:"Cardiomiopatía restrictiva",
  macro:"Ventrículo con pared rígida/poco distensible; dilatación auricular.",
  micro:"Fibrosis endomiocárdica que reduce la distensibilidad.",
  celulas:"Fibrosis (colágeno) en endomiocardio.",
  confunde:["Cardiomiopatía dilatada"],
  clave:"RESTRICTIVA = problema DIASTÓLICO (no se LLENA bien por rigidez). DILATADA = problema SISTÓLICO (no CONTRAE). Pregunta de concepto favorita.",
  col:"Más descrita en gatos; menos frecuente que la hipertrófica felina.",
  pista:"Pared rígida; falla diastólica (no se llena)."
},

// ============ CARDIOVASCULAR: VÁLVULAS / ENDOCARDIO ============
{
  sys:"card", nombre:"Endocardiosis valvular canina (degeneración mixomatosa)",
  macro:"Válvulas ATRIOVENTRICULARES engrosadas, blancas, opacas, con NÓDULOS PERLADOS en la superficie auricular; cuerdas tendinosas engrosadas. Color blanco-opaco.",
  micro:"Proliferación de tejido conjuntivo MIXOMATOSO (nódulos) + aumento de mucopolisacáridos ácidos; pérdida de elasticidad → incompetencia valvular.",
  celulas:"Tejido mixomatoso (matriz mucoide), fibroblastos; NO inflamatorio (es degenerativo).",
  confunde:["Endocarditis valvular (vegetante)","Valvulopatía degenerativa calcificante"],
  clave:"CLAVE vs endocarditis: endocardiosis = DEGENERATIVA, nódulos perlados LISOS, estéril, NO hay bacterias. Endocarditis = INFECCIOSA, vegetaciones GRANDES, friables, con fibrina + bacterias. Mixomatoso y liso = endocardiosis; vegetación friable = endocarditis.",
  col:"Enfermedad valvular mitral MÁS común en perros geriátricos pequeños en Colombia (poodle, chihuahua) → soplo sistólico → ICC izquierda.",
  pista:"Válvula AV con nódulos perlados lisos; degenerativo, no infeccioso."
},
{
  sys:"card", nombre:"Endocarditis valvular (infecciosa/vegetante)",
  macro:"VEGETACIONES voluminosas, FRIABLES, en las válvulas cardíacas (y a veces aorta/endocardio mural). Capacidad destructiva.",
  micro:"Masas de FIBRINA + PLAQUETAS + eritrocitos + COLONIAS BACTERIANAS + células inflamatorias + tejido conjuntivo.",
  celulas:"Neutrófilos + fibrina + colonias de bacterias (agudo/subagudo, infeccioso).",
  confunde:["Endocardiosis valvular (mixomatosa)","Endocarditis trombótica no bacteriana"],
  clave:"CLAVE: endocarditis infecciosa = vegetación FRIABLE con BACTERIAS + fibrina. Endocardiosis = nódulos perlados LISOS degenerativos sin bacterias. Endocarditis trombótica NO bacteriana = masas pequeñas estériles (solo fibrina/plaquetas, sin gérmenes).",
  col:"Agentes por especie: bovino = Trueperella (Arcanobacterium) pyogenes; ovino/equino = Streptococcus; cerdo/perro = Staphylococcus, Erysipelothrix. Siembra émbolos → neumonía embólica.",
  pista:"Vegetación grande y friable con bacterias y fibrina."
},
{
  sys:"card", nombre:"Quistes hemáticos valvulares",
  macro:"En los márgenes de las válvulas AV de BECERROS: quistes llenos de sangre, hasta 1 cm. Suelen desaparecer con la edad.",
  micro:"Cavidad llena de sangre revestida por membrana endotelial.",
  celulas:"Sangre dentro de una cavidad endotelial; sin inflamación.",
  confunde:["Endocarditis","Endocardiosis"],
  clave:"Quiste hemático = hallazgo INCIDENTAL y benigno en becerros (desaparece). No confundir con vegetación de endocarditis (friable, con bacterias).",
  col:"Hallazgo normal en terneros jóvenes; importante no sobrediagnosticarlo como endocarditis en necropsia.",
  pista:"Quiste lleno de sangre en válvula de becerro; benigno."
},

// ============ CARDIOVASCULAR: MINERALIZACIÓN ============
{
  sys:"card", nombre:"Mineralización cardiovascular",
  macro:"Placas o granos duros/blanquecinos en aurícula izquierda, aorta, endocardio.",
  micro:"Depósitos basófilos de calcio en la pared vascular/endocardio, en áreas de inflamación o trombosis.",
  celulas:"Depósito mineral (calcio) basófilo; puede haber reacción macrofágica/células gigantes alrededor.",
  confunde:["Fibrosis valvular","Endocardiosis"],
  clave:"Mineralización = depósito de CALCIO (duro, se raspa). Distrófica (tejido dañado) o metastásica (Ca-P alterado).",
  col:"MUY relevante: perros con IRC (conecta con tu tema renal → mineralización metastásica), intoxicación por vitamina D y por plantas calcinógenas (Solanum malacoxylon, Cestrum diurnum) en bovinos de pastoreo en Colombia.",
  pista:"Depósito duro de calcio en aorta/aurícula; piensa en IRC o plantas."
},

// ============ RESPIRATORIO: VÍAS ALTAS Y BAJAS ============
{
  sys:"resp", nombre:"Rinitis atrófica porcina",
  macro:"En CERDOS: atrofia/deformidad de los cornetes nasales (al corte transversal del hocico se ven cornetes reducidos o ausentes), desviación del tabique.",
  micro:"Atrofia del hueso de los cornetes (osteólisis) con reemplazo por tejido fibroso.",
  celulas:"Osteoclastos activos (reabsorción ósea) + fibrosis; inflamación variable.",
  confunde:["Rinitis micótica","Sinusitis"],
  clave:"Rinitis atrófica = atrofia de CORNETES en cerdo. No progresiva = Bordetella bronchiseptica; Progresiva = Pasteurella multocida (toxigénica).",
  col:"Importante en porcicultura tecnificada colombiana: afecta ganancia de peso; control por bioseguridad y vacunación.",
  pista:"Cornetes nasales atrofiados en el cerdo."
},
{
  sys:"resp", nombre:"Rinitis micótica (Aspergillus)",
  macro:"En PERROS: destrucción de cornetes con placas de material fúngico (colonias) en cavidad nasal.",
  micro:"Hifas fúngicas (Aspergillus/Penicillium) + necrosis + inflamación.",
  celulas:"Inflamación mixta con MACRÓFAGOS/células gigantes (granulomatosa) + neutrófilos; hifas septadas.",
  confunde:["Rinitis atrófica","Neoplasia nasal"],
  clave:"Rinitis micótica = HIFAS + destrucción de cornetes en perro (Aspergillus fumigatus). Hongo ambiental que entra por inhalación.",
  col:"Perros dolicocéfalos; sangrado nasal (epistaxis) unilateral crónico que no responde a antibiótico.",
  pista:"Hifas de hongo destruyendo cornetes en perro."
},
{
  sys:"resp", nombre:"Atelectasia",
  macro:"Expansión INCOMPLETA del pulmón: zonas colapsadas, hundidas, más oscuras, que no flotan. Congénita, obstructiva o compresiva.",
  micro:"Alvéolos COLAPSADOS (sin aire), paredes alveolares aproximadas entre sí.",
  celulas:"Sin infiltrado propio; solo colapso de espacios aéreos.",
  confunde:["Neumonía intersticial","Consolidación por bronconeumonía"],
  clave:"Atelectasia = pulmón que NO se expandió (alvéolos colapsados, sin aire). No hay exudado llenando la luz (eso sería neumonía).",
  col:"Atelectasia neonatal en crías que no respiran bien al nacer; obstructiva por tapón de moco.",
  pista:"Pulmón que no se expandió; alvéolos colapsados sin aire."
},
{
  sys:"resp", nombre:"Enfisema pulmonar",
  macro:"Pulmón sobredistendido por AIRE; pálido, no colapsa. Alveolar (vesicular) o INTERSTICIAL (aire entre lobulillos, burbujas/líneas blancas).",
  micro:"Espacios aéreos DILATADOS; en enfisema interstiticial, aire disecando los tabiques interlobulillares.",
  celulas:"Sin infiltrado; ruptura/dilatación de paredes alveolares.",
  confunde:["Edema pulmonar","Neumonía intersticial"],
  clave:"Enfisema = exceso de AIRE (dilatación/ruptura de alvéolos). Edema = exceso de LÍQUIDO. Intersticial = aire entre lobulillos (líneas blancas), clásico en bovinos con dificultad respiratoria.",
  col:"Enfisema intersticial bovino agudo (edema pulmonar y enfisema bovino, 'fog fever') al cambiar a pasturas ricas; común en ganadería de pastoreo.",
  pista:"Pulmón sobredistendido por aire; no colapsa."
},
{
  sys:"resp", nombre:"Hipertensión pulmonar",
  macro:"Difícil macroscópicamente; puede haber hipertrofia del corazón derecho asociada.",
  micro:"CRÓNICA: remodelación de las arteriolas pulmonares (pared engrosada, muscularización). AGUDA: degeneración endotelial, vasoconstricción, NECROSIS FIBRINOIDE, vasculitis de la pared.",
  celulas:"Hiperplasia de músculo liso vascular (crónica); necrosis fibrinoide + inflamación (aguda).",
  confunde:["Vasculitis","Hipertrofia ventricular derecha"],
  clave:"Hipertensión pulmonar = remodelación/engrosamiento de ARTERIOLAS pulmonares → sobrecarga del corazón derecho (cor pulmonale). Se mide con ecocardiografía.",
  col:"La altitud (Bogotá, altiplano) predispone a 'mal de altura' bovino (brisket disease) = hipertensión pulmonar → falla derecha → edema de papada/pecho.",
  pista:"Arteriolas pulmonares remodeladas; lleva a corazón derecho."
},
{
  sys:"resp", nombre:"Asma felina",
  macro:"Pulmón con hiperinsuflación (atrapamiento de aire); poco hallazgo macro específico.",
  micro:"Hiperplasia del músculo liso bronquiolar, hiperplasia de células caliciformes, infiltrado con EOSINÓFILOS.",
  celulas:"EOSINÓFILOS (patrón alérgico/hipersensibilidad) + hiperplasia de músculo liso bronquiolar.",
  confunde:["Bronquitis","Neumonía intersticial"],
  clave:"Asma felina = reversible, EOSINÓFILOS, broncoconstricción por hiperreactividad del músculo liso. Responde a broncodilatadores y corticoides.",
  col:"Gatos; motivo de consulta con tos/disnea/sibilancias en clínicas de pequeños en Colombia.",
  pista:"Gato con broncoconstricción reversible y eosinófilos."
},
{
  sys:"resp", nombre:"Membranas hialinas (daño alveolar difuso)",
  macro:"Pulmón firme, congestivo (depende de la causa de base).",
  micro:"MEMBRANAS HIALINAS recubriendo los alvéolos: material eosinofílico, floculante, por edema RICO EN PROTEÍNAS dentro del alvéolo.",
  celulas:"Material proteináceo eosinofílico (hialino); daño de neumocitos; luego neumocitos II proliferan.",
  confunde:["Edema pulmonar simple","Neumonía intersticial"],
  clave:"Membrana hialina = material eosinofílico que TAPIZA la pared alveolar (edema rico en proteína por daño de la barrera). Marca de daño alveolar difuso agudo.",
  col:"En síndromes de distrés respiratorio y neumonías intersticiales agudas severas.",
  pista:"Material eosinofílico floculante tapizando el alvéolo."
},
{
  sys:"resp", nombre:"Pleuritis",
  macro:"Superficie PLEURAL con exudado; hebras o 'velos' elásticos de FIBRINA poco adheridos. Puede haber adherencias.",
  micro:"Serosa pleural con fibrina + infiltrado inflamatorio.",
  celulas:"Neutrófilos + fibrina (agudo, fibrinosupurativo); macrófagos/linfocitos si crónico.",
  confunde:["Neumonía con extensión pleural","Hidrotórax"],
  clave:"Pleuritis = INFLAMACIÓN de la pleura (fibrina en superficie). Hidrotórax = líquido transudado SIN inflamación. Los agentes llegan desde sangre o desde bronconeumonía/absceso pulmonar.",
  col:"Pleuroneumonía por Actinobacillus en cerdos; pleuritis secundaria a bronconeumonía en bovinos.",
  pista:"Fibrina en la superficie de la pleura."
},
];
