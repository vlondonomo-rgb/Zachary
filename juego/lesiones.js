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
  confunde:["Insuficiencia cardíaca DERECHA (congestión derecha)","Neumonía intersticial (y bronco-intersticial)"],
  clave:"REGLA DE ORO: IZQUIERDA → la sangre se represa HACIA ATRÁS, AL PULMÓN → edema pulmonar + células de falla cardíaca + DISNEA. DERECHA → se represa al CUERPO → hígado 'nuez moscada', ASCITIS, edema, pulso yugular. Izquierda = pulmón; derecha = cuerpo/hígado.",
  col:"En perros: valvulopatía mitral degenerativa (endocardiosis) es causa #1 de falla izquierda en Colombia. Tos y disnea en perro geriátrico pequeño.",
  pista:"La sangre se represa hacia el pulmón."
},
{
  sys:"card", nombre:"Insuficiencia cardíaca DERECHA (congestión derecha)",
  macro:"Signos sobre el CUERPO y circulación portal: HÍGADO 'EN NUEZ MOSCADA' (aspecto moscado), ASCITIS, edema subcutáneo, pulso venoso yugular, reducción de filtración glomerular. Suele ser secundaria a la falla izquierda; causa primaria pulmonar = Cor pulmonale.",
  micro:"En el hígado: congestión + atrofia + necrosis + fibrosis CENTROLOBULILLAR (alrededor de la vena central). Patrón 'nuez moscada' = zonas rojas (congestión centrolobulillar) alternando con claras.",
  celulas:"Hepatocitos centrolobulillares atróficos/necróticos + sinusoides dilatados llenos de sangre. En crónico, fibrosis centrolobulillar.",
  confunde:["Insuficiencia cardíaca IZQUIERDA (congestión izquierda)","Necrosis hepática centrolobulillar"],
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

// ============ DIGESTIVO ============
{
  sys:"dig", nombre:"Granuloma eosinofílico",
  macro:"En GATOS: placas elevadas, firmes, a veces ulceradas, en boca/labio ('úlcera indolente' en labio superior).",
  micro:"Focos de COLAGENOLISIS (colágeno degenerado) rodeados de infiltrado granulomatoso con eosinófilos. Responde a corticoides (base de hipersensibilidad).",
  celulas:"EOSINÓFILOS abundantes + colágeno 'deshecho' (colagenólisis) + macrófagos. Patrón de hipersensibilidad.",
  confunde:["Estomatitis","Carcinoma de células escamosas oral"],
  clave:"CLAVE: gato + EOSINÓFILOS + COLAGENÓLISIS = granuloma eosinofílico. La estomatitis común no tiene colagenólisis ni ese perfil eosinofílico.",
  col:"Motivo frecuente de consulta felina en Colombia: úlcera en labio superior o placa oral; se maneja con corticoides y descartando alergia (pulgas/alimento).",
  pista:"Gato con eosinófilos y colágeno degenerado."
},
{
  sys:"dig", nombre:"Megaesófago",
  macro:"Dilatación de la luz esofágica; esófago flácido. Signo clínico: regurgitación (NO vómito).",
  micro:"Hallazgo principalmente macro/funcional (atonía y flacidez del músculo). Puede haber atrofia muscular o lesión de la inervación según causa.",
  celulas:"Sin infiltrado característico; atrofia/degeneración de músculo esofágico según causa.",
  confunde:["Estenosis esofágica","Obstrucción esofágica"],
  clave:"CLAVE: megaesófago = dilatación por ATONÍA/flacidez (todo el esófago flácido). Estenosis = estrechamiento con fibrosis y dilatación SOLO por delante del bloqueo.",
  col:"En perros (congénito en cachorros o adquirido, p. ej. miastenia). Riesgo de neumonía por aspiración, común en consulta de pequeños.",
  pista:"Esófago dilatado y flácido; el perro regurgita."
},
{
  sys:"dig", nombre:"Vólvulo / torsión gástrica (GDV)",
  macro:"En PERROS de pecho profundo: estómago dilatado Y rotado; pared gástrica oscura/congestiva por isquemia.",
  micro:"Necrosis isquémica de la pared gástrica: congestión, hemorragia y necrosis transmural por compromiso vascular.",
  celulas:"Congestión/hemorragia + necrosis por isquemia; neutrófilos si hay inflamación secundaria.",
  confunde:["Dilatación gástrica simple","Úlcera gástrica"],
  clave:"CLAVE: GDV = dilatación + ROTACIÓN con isquemia de pared. La dilatación simple no rota ni causa necrosis isquémica.",
  col:"Urgencia quirúrgica en razas grandes (gran danés, pastor alemán, dóberman) en Colombia; mortal sin cirugía rápida.",
  pista:"Estómago dilatado y torcido en perro grande."
},
{
  sys:"dig", nombre:"Gastritis urémica",
  macro:"Mucosa gástrica con erosiones/úlceras, a veces hemorrágica; en crónico, atrofia y fibrosis.",
  micro:"Verdadera gastritis con cambios leucocíticos y vasculares en la LÁMINA PROPIA + MINERALIZACIÓN de la mucosa gástrica + necrosis. Atrofia/fibrosis.",
  celulas:"Infiltrado en lámina propia + mineralización (depósito de calcio basófilo) de vasos/mucosa. Dato clave: mineralización.",
  confunde:["Úlcera gástrica por AINES","Gastritis parasitaria"],
  clave:"CLAVE: gastritis urémica = mineralización de la mucosa + necrosis vascular, SECUNDARIA a falla renal (uremia). Puente con tu tema URINARIO: riñón que falla → uremia → gastritis.",
  col:"En perros/gatos con enfermedad renal crónica (muy común en geriátricos en Colombia): mal aliento amoniacal, vómito, úlceras orales.",
  pista:"Mucosa gástrica mineralizada en un paciente renal."
},
{
  sys:"dig", nombre:"Úlcera gastroduodenal",
  macro:"Pérdida de mucosa con fondo deprimido; puede sangrar. Produce signos con menos frecuencia que en humanos.",
  micro:"Pérdida de mucosa MÁS ALLÁ de la muscular de la mucosa, con fondo de necrosis/fibrina, tejido de granulación y a veces vaso erosionado (hemorragia).",
  celulas:"Necrosis + fibrina + neutrófilos en el fondo; tejido de granulación (macrófagos, fibroblastos) en crónico.",
  confunde:["Erosión gástrica","Gastritis"],
  clave:"CLAVE: úlcera = profunda (pasa la muscular de la mucosa). Erosión = superficial (solo mucosa). Causa frecuente: AINES (comprometen la protección mucosa) por desequilibrio ácido/pepsina vs defensa.",
  col:"Úlcera por AINES (meloxicam/ketoprofeno sin protección) es iatrogenia frecuente en perros en Colombia. En potros, úlcera gástrica por estrés.",
  pista:"Pérdida profunda de mucosa; piensa en AINES."
},
{
  sys:"dig", nombre:"Intususcepción (invaginación)",
  macro:"Un segmento intestinal telescopado dentro del siguiente; masa tubular firme, congestiva.",
  micro:"Pared con doble/triple capa, congestión y necrosis isquémica del segmento invaginado.",
  celulas:"Congestión + necrosis isquémica; infiltrado inflamatorio secundario.",
  confunde:["Vólvulo intestinal","Torsión intestinal"],
  clave:"CLAVE: intususcepción = un segmento DENTRO de otro (telescopaje). Causa: hipermotilidad por parásitos o enteritis viral. Vólvulo = rotación sobre eje transversal; torsión = sobre eje longitudinal.",
  col:"Frecuente en cachorros/gatitos con parvovirus o parásitos (hipermotilidad → telescopaje). Masa tubular palpable + diarrea.",
  pista:"Un segmento de intestino metido dentro del siguiente."
},
{
  sys:"dig", nombre:"Atrofia de vellosidades intestinales",
  macro:"Mucosa intestinal lisa/aterciopelada perdida; difícil a simple vista.",
  micro:"Vellosidades CORTAS/romas + criptas alargadas (hipertrofia de criptas) → menos superficie absortiva → malabsorción. Escala de Marsh gradúa la severidad.",
  celulas:"Infiltrado linfoplasmocitario en lámina propia (crónico); vellosidad acortada con criptas hiperplásicas.",
  confunde:["Enteritis catarral","Enteropatía proliferativa porcina"],
  clave:"CLAVE: atrofia de vellosidades = vellosidad CORTA + cripta larga (intenta regenerar) → malabsorción. La enteropatía proliferativa porcina (Lawsonia) tiene criptas hiperplásicas CON pocas caliciformes y es del cerdo.",
  col:"Giardiasis y coccidiosis crónicas en terneros/cachorros (causa frecuentísima de diarrea crónica y mal medro en Colombia); también dieta (soja en terneros, trigo en perros).",
  pista:"Vellosidades cortas con criptas largas; da malabsorción."
},
{
  sys:"dig", nombre:"Enteropatía proliferativa porcina (Lawsonia intracellularis)",
  macro:"En CERDOS: mucosa del íleon ENGROSADA, con pliegues cerebriformes ('en cerebro').",
  micro:"Criptas alargadas e HIPERPLÁSICAS con enterocitos inmaduros y POCAS células caliciformes. Bacilos curvos intracelulares en el ápice del enterocito (Warthin-Starry).",
  celulas:"Enterocitos proliferados inmaduros + Lawsonia intracelular; pocas caliciformes. Inflamación variable.",
  confunde:["Atrofia de vellosidades","Enteritis necrótica"],
  clave:"CLAVE: cerdo + criptas HIPERPLÁSICAS + pocas caliciformes + Lawsonia intracelular = enteropatía proliferativa. A diferencia de la atrofia (vellosidad corta), aquí hay PROLIFERACIÓN.",
  col:"Importante en porcicultura tecnificada colombiana: mala conversión alimenticia, diarrea, 'ileítis'.",
  pista:"Cerdo con íleon engrosado y criptas hiperplásicas."
},
{
  sys:"dig", nombre:"Enteritis fibrinosa",
  macro:"Mucosa intestinal con PSEUDOMEMBRANA de fibrina (capa amarillo-grisácea adherida); heces con fibrina.",
  micro:"Exudado de FIBRINA sobre la mucosa + necrosis superficial + infiltrado.",
  celulas:"Fibrina + neutrófilos + restos necróticos. Patrón agudo fibrinoso.",
  confunde:["Enteritis catarral","Enteritis hemorrágica","Enteritis necrótica"],
  clave:"CLAVE por exudado: CATARRAL=moco (leve); FIBRINOSA=pseudomembrana de fibrina; HEMORRÁGICA=sangre; NECRÓTICA=necrosis del epitelio. Fibrinosa típica de Salmonella y parvovirus.",
  col:"Salmonelosis en terneros/cerdos y parvovirus canino (diarisímo en Colombia) cursan con enteritis fibrinosa/necrótica.",
  pista:"Pseudomembrana de fibrina sobre la mucosa intestinal."
},
{
  sys:"dig", nombre:"Peritonitis",
  macro:"Serosa con exudado de fibrina/pus; adherencias. Suele ser SECUNDARIA a perforación/rotura de víscera.",
  micro:"Serosa con fibrina + neutrófilos + bacterias. En PIF felina: piogranulomas perivasculares + vasculitis con efusión rica en proteína.",
  celulas:"Neutrófilos + fibrina + bacterias (bacteriana); piogranuloma (macrófagos) en PIF.",
  confunde:["Pleuritis","Ascitis (hidroperitoneo)"],
  clave:"CLAVE: peritonitis = INFLAMACIÓN del peritoneo (fibrina/pus). Ascitis = líquido transudado SIN inflamación. Relaciona el 'sitio de rotura' por especie (úlcera de abomaso en terneros, rotura gástrica en equinos).",
  col:"PIF felina (gatos jóvenes, abdomen con líquido amarillo viscoso) muy temida en Colombia. Peritonitis por perforación de abomaso en terneros.",
  pista:"Fibrina/pus en el peritoneo; casi siempre por rotura de víscera."
},

// ============ HÍGADO ============
{
  sys:"hig", nombre:"Esteatosis hepática (lipidosis / hígado graso)",
  macro:"Hígado AMARILLO, aumentado de tamaño, friable, bordes redondeados; flota en formol.",
  micro:"Hepatocitos con VACUOLAS REDONDAS, bien definidas, que DESPLAZAN el núcleo a la periferia (macrovesicular).",
  celulas:"Hepatocitos cargados de vacuolas grasas; no es inflamatorio de base (es acúmulo).",
  confunde:["Degeneración hidrópica","Necrosis hepática"],
  clave:"CLAVE: esteatosis = vacuola REDONDA bien definida que empuja el núcleo. Degeneración hidrópica = citoplasma TURBIO/acuoso (agua, no grasa), núcleo central. Grasa = redonda y nítida.",
  col:"Lipidosis hepática felina en gatas obesas anoréxicas (urgencia); hígado graso/cetosis en vacas lecheras posparto (Antioquia, Nariño, sabana de Bogotá).",
  pista:"Hígado amarillo; hepatocitos con vacuola redonda que corre el núcleo."
},
{
  sys:"hig", nombre:"Degeneración hidrópica hepática",
  macro:"Hígado pálido, aumentado; citoplasma de aspecto turbio.",
  micro:"Hepatocitos tumefactos, citoplasma pálido GRANULAR/TURBIO (entrada de agua por falla de la bomba Na/K), núcleo conservado. REVERSIBLE.",
  celulas:"Hepatocitos hinchados con citoplasma claro-turbio; sin vacuolas grasas nítidas.",
  confunde:["Esteatosis hepática","Necrosis hepática"],
  clave:"CLAVE: hidrópica = citoplasma TURBIO/acuoso (agua), reversible. Esteatosis = vacuola REDONDA de grasa que desplaza el núcleo. Necrosis = muerte celular (pérdida de núcleo).",
  col:"Base del daño por plantas tóxicas (Senecio, Lantana) e intoxicaciones en ganado de pastoreo colombiano.",
  pista:"Hepatocitos hinchados con citoplasma turbio; reversible."
},
{
  sys:"hig", nombre:"Necrosis hepática centrolobulillar",
  macro:"Patrón lobulillar acentuado; zonas pálidas o rojas alrededor de las venas centrales.",
  micro:"Necrosis de hepatocitos alrededor de la VENA CENTRAL (zona 3).",
  celulas:"Hepatocitos necróticos centrolobulillares (pérdida de núcleo, citoplasma eosinofílico); infiltrado según causa.",
  confunde:["Necrosis periportal","Necrosis mediozonal","Congestión hepática (nuez moscada)"],
  clave:"CLAVE por zona: CENTROLOBULILLAR (vena central) = hipoxia y muchos tóxicos. PERIPORTAL (tríadas) = tóxicos que entran por la porta. MEDIOZONAL = aflatoxina. Ubica la necrosis respecto a vena central vs tríada.",
  col:"Por hipoxia (anemia, falla cardíaca) y hepatotóxicos. En Colombia, plantas hepatotóxicas y micotoxinas en concentrados.",
  pista:"Necrosis alrededor de la vena central; hipoxia o tóxico."
},
{
  sys:"hig", nombre:"Fibrosis / cirrosis hepática",
  macro:"Hígado DURO y RUGOSO, nodular, con pérdida de arquitectura.",
  micro:"Bandas de TEJIDO CONECTIVO (colágeno) que dividen el parénquima en nódulos de regeneración; anisocitosis, retención de pigmento biliar. Tricrómico resalta el colágeno verde/azul.",
  celulas:"Colágeno (fibrosis) + hepatocitos de tamaño irregular (anisocitosis) + infiltrado crónico.",
  confunde:["Hiperplasia nodular","Necrosis hepática"],
  clave:"CLAVE: cirrosis = fibrosis (colágeno) + nódulos de regeneración + pérdida de arquitectura, IRREVERSIBLE. Es el estado final del daño crónico.",
  col:"Estado final de intoxicaciones crónicas por plantas (Senecio/Crotalaria en bovinos/equinos colombianos) y hepatitis crónica en perros.",
  pista:"Hígado duro y nodular con bandas de colágeno."
},
{
  sys:"hig", nombre:"Hepatitis infecciosa canina (adenovirus tipo 1)",
  macro:"Hígado aumentado, a veces con fibrina en la cápsula; ictericia, edema corneal ('ojo azul'), ascitis.",
  micro:"CUERPOS DE INCLUSIÓN INTRANUCLEARES en hepatocitos (grandes, basófilos/anfófilos, que marginan la cromatina) + necrosis centrolobulillar.",
  celulas:"Inclusiones INTRANUCLEARES virales en hepatocitos + necrosis; infiltrado variable.",
  confunde:["Necrosis hepática por tóxico","Salmonelosis hepática"],
  clave:"CLAVE: perro JOVEN + inclusiones INTRANUCLEARES en hepatocitos = hepatitis infecciosa canina (adenovirus 1). Las inclusiones intranucleares = viral; no las confundas con necrosis tóxica (sin inclusiones).",
  col:"Prevenible con vacuna (la 'H'); aún se ve en cachorros no vacunados en zonas rurales de Colombia. 'Ojo azul' (edema corneal) es dato típico.",
  pista:"Perro joven con inclusiones intranucleares en hepatocitos."
},
{
  sys:"hig", nombre:"Fasciola hepatica (fascioliasis)",
  macro:"Conductos biliares engrosados, fibróticos, a veces calcificados; trayectos de migración en el parénquima. A veces el parásito visible en los conductos.",
  micro:"Colangitis crónica: conductos biliares con fibrosis + infiltrado EOSINOFÍLICO; trayectos migratorios con necrosis, hemorragia y eosinófilos → fibrosis.",
  celulas:"EOSINÓFILOS abundantes (parásito) + fibrosis + hiperplasia del epitelio biliar.",
  confunde:["Colangiohepatitis bacteriana","Hepatitis parasitaria por migración"],
  clave:"CLAVE: infiltrado EOSINOFÍLICO en hígado = PARÁSITO. Fasciola: conductos biliares duros/engrosados con eosinófilos. La colangitis bacteriana tendría neutrófilos, no eosinófilos.",
  col:"MUY común en Colombia en zonas frías y húmedas con caracol Lymnaea (altiplano cundiboyacense, Nariño, Antioquia): decomiso masivo de hígados bovinos. Zoonosis.",
  pista:"Conductos biliares duros con eosinófilos en bovino; hay una duela."
},
{
  sys:"hig", nombre:"Absceso hepático",
  macro:"En BOVINOS/equinos: cavidades con pus, encapsuladas, en el parénquima hepático.",
  micro:"Cavidad con neutrófilos/pus central + bacterias, rodeada de cápsula fibrosa y tejido de granulación; necrosis licuefactiva central.",
  celulas:"NEUTRÓFILOS (pus) + bacterias + cápsula fibrosa (crónico). Supurativo.",
  confunde:["Salmonelosis hepática (nódulos paratifoideos)","Tuberculosis hepática"],
  clave:"CLAVE: absceso = NEUTRÓFILOS/pus licuefactivo con cápsula. Nódulo paratifoideo (Salmonella) = necrosis de coagulación + granuloma. TBC = granuloma con células gigantes y necrosis caseosa.",
  col:"Complejo acidosis ruminal → rumenitis → abscesos hepáticos en ceba intensiva colombiana → decomiso. Onfaloflebitis en terneros.",
  pista:"Cavidad con pus y cápsula en hígado de bovino."
},

// ============ PÁNCREAS ============
{
  sys:"pan", nombre:"Atrofia acinar pancreática (insuficiencia pancreática exocrina)",
  macro:"Páncreas reducido/adelgazado; perro delgado con heces voluminosas, grasosas y claras (esteatorrea) pese a apetito voraz.",
  micro:"Pérdida de ACINOS pancreáticos (quedan islotes y ductos). Pancreatitis crónica: fibrosis + infiltrado + atrofia acinar.",
  celulas:"Pérdida de células acinares (con gránulos de zimógeno); se conservan islotes; fibrosis/infiltrado en la crónica.",
  confunde:["Pancreatitis aguda","Hipoplasia pancreática"],
  clave:"CLAVE: atrofia acinar = pérdida de acinos → EPI (mala digestión). Conecta con DIGESTIVO: mala asimilación en la fase intraluminal (faltan enzimas pancreáticas).",
  col:"Clásica en PASTOR ALEMÁN (raza presente en Colombia): perro joven, flaco, con esteatorrea y hambre voraz. Se trata con enzimas pancreáticas.",
  pista:"Perro flaco con heces grasosas; faltan acinos pancreáticos."
},

// ============ URINARIO ============
{
  sys:"uri", nombre:"Uremia (lesiones extrarrenales)",
  macro:"Múltiples órganos: edema pulmonar, pericarditis fibrinosa, estomatitis/gastritis ulcerativa, mineralización de tejidos blandos (pleura, estómago, endocardio).",
  micro:"Mineralización (depósitos basófilos de calcio) + necrosis vascular; gastritis urémica con mineralización de la mucosa.",
  celulas:"Depósitos de calcio basófilos + necrosis; infiltrado según el órgano. Amoníaco daña vasos.",
  confunde:["Gastritis urémica (digestivo)","Mineralización por intoxicación con vitamina D"],
  clave:"CLAVE: uremia = SÍNDROME con lesiones en varios órganos (no solo el número de laboratorio = azotemia). Las lesiones salen por ↑permeabilidad vascular, amoníaco y alteración del Ca-P. PUENTE con digestivo (gastritis urémica).",
  col:"Gato/perro con IRC que llega babeando, con úlceras orales, mal aliento amoniacal y vómito. Muy común en geriátricos en Colombia.",
  pista:"Lesiones en muchos órganos por falla renal: mineralización + gastritis."
},
{
  sys:"uri", nombre:"Displasia renal",
  macro:"Riñón pequeño, DESORGANIZADO, de forma irregular (a diferencia de la hipoplasia que es pequeño pero normal).",
  micro:"Estructuras renales INMADURAS/desorganizadas para la edad: túbulos fetales, mesénquima primitivo, a veces cartílago metaplásico, glomérulos inmaduros.",
  celulas:"Tejido renal inmaduro/desorganizado; fibrosis variable.",
  confunde:["Hipoplasia renal","Nefritis intersticial crónica"],
  clave:"CLAVE: displasia = desarrollo DESORGANIZADO (estructuras inmaduras). Hipoplasia = tejido NORMAL pero en menor cantidad (riñón pequeño bien formado). Desorganizado vs poco-pero-normal.",
  col:"En perros jóvenes de ciertas razas → IRC a edad temprana. Diferenciar de hipoplasia es clave para el pronóstico.",
  pista:"Riñón con tejido inmaduro y desorganizado desde el nacimiento."
},
{
  sys:"uri", nombre:"Glomerulonefritis",
  macro:"Riñones a veces pálidos/moteados; difícil a simple vista.",
  micro:"Glomérulo HIPERCELULAR o con engrosamiento de membrana basal, según el tipo: PROLIFERATIVA (↑células), MESANGIOPROLIFERATIVA (mesangio), MEMBRANOPROLIFERATIVA (membrana engrosada 'en asa de alambre' + proliferación).",
  celulas:"Proliferación de células glomerulares (endoteliales/mesangiales) ± infiltrado inflamatorio; engrosamiento de membrana basal.",
  confunde:["Amiloidosis renal","Glomerulitis"],
  clave:"CLAVE vs amiloidosis: la GN es HIPERCELULAR (células aumentadas) o con membrana engrosada. La amiloidosis deposita material ACELULAR, homogéneo y eosinofílico (Rojo Congo +). Células vs material amorfo.",
  col:"Causa de síndrome nefrótico (proteinuria, edema) en perros en Colombia, a menudo secundaria a infecciones crónicas (ehrlichiosis, leishmaniasis).",
  pista:"Glomérulo con más células o membrana engrosada."
},
{
  sys:"uri", nombre:"Amiloidosis renal",
  macro:"Riñones pálidos, aumentados, cerosos.",
  micro:"Depósito de material EOSINOFÍLICO, HOMOGÉNEO (acelular) en el glomérulo (expande mesangio/paredes). ROJO CONGO → birrefringencia VERDE MANZANA con luz polarizada.",
  celulas:"Material amiloide amorfo (NO células); Rojo Congo positivo.",
  confunde:["Glomerulonefritis","Glomeruloesclerosis"],
  clave:"CLAVE: amiloide = material HOMOGÉNEO, acelular, eosinofílico, Rojo Congo (verde manzana en polarizada). La GN es HIPERCELULAR. Material amorfo vs células.",
  col:"Síndrome nefrótico/IRC con proteinuria masiva; Shar Pei predispuesto. Secundaria a inflamación crónica en bovinos/ovinos.",
  pista:"Material rosado homogéneo en glomérulo; Rojo Congo verde manzana."
},
{
  sys:"uri", nombre:"Infarto renal",
  macro:"Áreas CUNEIFORMES (triangulares, base hacia la cápsula) pálidas o rojas, deprimidas.",
  micro:"Necrosis de COAGULACIÓN en cuña por isquemia (oclusión trombótica/embólica); borde con congestión/inflamación.",
  celulas:"Necrosis de coagulación (contornos celulares conservados, sin núcleo); neutrófilos en el borde.",
  confunde:["Necrosis cortical bilateral","Nefritis embólica"],
  clave:"CLAVE: infarto = necrosis de coagulación CUNEIFORME por isquemia (un vaso ocluido). Necrosis cortical bilateral = toda la corteza por microtrombos difusos (CID). Nefritis embólica = focos supurativos múltiples con bacterias.",
  col:"Tromboembolismo en gatos cardiópatas; émbolos desde endocarditis.",
  pista:"Zona triangular de necrosis por un vaso ocluido."
},
{
  sys:"uri", nombre:"Necrosis tubular aguda (NTA)",
  macro:"Riñones tumefactos, pálidos; corteza abultada.",
  micro:"Epitelio tubular TUMEFACTO/NECRÓTICO, desprendido a la luz; cilindros; membrana basal a veces desnuda. La degeneración tubular es el proceso PRIMARIO. En etilenglicol: cristales de OXALATO en la luz.",
  celulas:"Epitelio tubular necrótico/descamado + cilindros; cristales de oxalato (etilenglicol) o cilindros pardos (mioglobina/hemoglobina).",
  confunde:["Nefritis intersticial","Infarto renal"],
  clave:"CLAVE: NTA = daño PRIMARIO del TÚBULO (epitelio descamado, cilindros), causa #1 de IRA y a menudo REVERSIBLE si la membrana basal queda intacta. Nefritis intersticial = infiltrado en el INTERSTICIO.",
  col:"Muy relevante: nefrotóxicos en Colombia — gentamicina, AINES, etilenglicol (anticongelante), roble/Quercus y Lantana en ganado, aflatoxinas; mioglobinuria en equinos.",
  pista:"Túbulos con epitelio descamado y cilindros; busca cristales."
},
{
  sys:"uri", nombre:"Nefritis intersticial (linfoplasmocítica)",
  macro:"Riñón con focos pálidos, superficie irregular/cicatricial en crónico.",
  micro:"Infiltrado inflamatorio en el INTERSTICIO (entre túbulos) con fibrosis. Según patrón: LINFOPLASMOCÍTICA, granulomatosa, supurativa o embólica.",
  celulas:"LINFOCITOS + PLASMOCITOS (linfoplasmocítica, crónico) en el intersticio + fibrosis. Patrón crónico clásico.",
  confunde:["Necrosis tubular aguda","Pielonefritis","Glomerulonefritis"],
  clave:"CLAVE: nefritis intersticial = infiltrado en el INTERSTICIO (linfocitos+plasmáticas). NTA = daño del TÚBULO. Pielonefritis = afecta PELVIS + parénquima (ascendente). Identifica DÓNDE está el infiltrado.",
  col:"Leptospirosis = causa frecuente y ZOONÓSICA en perros y bovinos en Colombia (clima húmedo, roedores).",
  pista:"Linfocitos y plasmáticas en el intersticio renal."
},
{
  sys:"uri", nombre:"Pielonefritis",
  macro:"Inflamación de la PELVIS renal + parénquima; cálices deformados; estrías/abscesos que irradian de la pelvis a la corteza.",
  micro:"Infiltrado neutrofílico/supurativo en pelvis y médula; cilindros leucocitarios en túbulos; necrosis del urotelio pélvico; en crónico fibrosis y deformidad de cálices.",
  celulas:"NEUTRÓFILOS (supurativo) en pelvis/túbulos; cilindros leucocitarios. Linfoplasmocitario si crónico.",
  confunde:["Nefritis intersticial","Nefritis embólica"],
  clave:"CLAVE: pielonefritis = ASCENDENTE (desde vejiga), afecta la PELVIS + cálices. Nefritis embólica = HEMATÓGENA, focos al azar en corteza. Pelvis afectada + vía ascendente = pielonefritis.",
  col:"Vacas (Corynebacterium/Trueperella renale) y cerdas; perras/gatas por E. coli ascendente, favorecida por urolitos/retención.",
  pista:"Inflamación que sube desde la vejiga y afecta la pelvis renal."
},
{
  sys:"uri", nombre:"Hidronefrosis",
  macro:"Pelvis y cálices DILATADOS; el riñón se vuelve una 'bolsa' quística con atrofia PROGRESIVA del parénquima (queda una cáscara delgada).",
  micro:"Pelvis dilatada, atrofia por compresión de túbulos y glomérulos, fibrosis intersticial.",
  celulas:"Atrofia tubular/glomerular por presión + fibrosis; sin infiltrado prominente salvo infección sobreagregada.",
  confunde:["Quistes renales / enfermedad poliquística","Pielonefritis"],
  clave:"CLAVE: hidronefrosis = dilatación de pelvis por OBSTRUCCIÓN urinaria (la filtración sigue y la orina represada comprime el parénquima). Los quistes son cavidades revestidas de epitelio, no una pelvis dilatada.",
  col:"En perros machos por hiperplasia prostática; por urolitos que obstruyen; obstrucción uretral del gato (FLUTD).",
  pista:"Pelvis dilatada por obstrucción; el parénquima se atrofia."
},
{
  sys:"uri", nombre:"Urolitiasis (cálculos urinarios)",
  macro:"Cálculos (urolitos) en vías urinarias; irritación/hemorragia del urotelio; si obstruyen → hidronefrosis o ruptura vesical.",
  micro:"El urolito es macroscópico; en la vía urinaria causa irritación del urotelio, hemorragia e inflamación.",
  celulas:"Inflamación del urotelio (neutrófilos, luego linfoplasmocitario); hemorragia.",
  confunde:["Cistitis","FLUTD felina"],
  clave:"CLAVE: urolitiasis = presencia de cálculos. Composición por especie: perro/gato = estruvita y oxalato; bovino/ovino = sílice; equino = carbonato. Estruvita se asocia a orina alcalina/infección; oxalato a orina ácida.",
  col:"Obstrucción uretral por estruvita/oxalato en GATOS machos (emergencia, 'gato tapado'); sílice en rumiantes a pastoreo. Urgencia: uremia post-renal.",
  pista:"Piedras en la vía urinaria; ojo con el gato macho obstruido."
},
{
  sys:"uri", nombre:"Cistitis",
  macro:"Pared vesical engrosada, hemorrágica o con fibrina; en crónico, POLIPOIDE (proyecciones de mucosa).",
  micro:"Infiltrado inflamatorio en mucosa/pared vesical + hemorragia + erosión/úlcera + fibrina; crónica con fibrosis.",
  celulas:"Neutrófilos (aguda/hemorrágica/fibrinopurulenta); linfoplasmocitario + fibrosis (crónica).",
  confunde:["Pielonefritis","Carcinoma de células transicionales"],
  clave:"CLAVE: cistitis = inflamación de la VEJIGA, por bacterias ASCENDENTES (E. coli, sobre todo en hembras por uretra corta). Puede ascender → pielonefritis. El carcinoma de transicionales causa hematuria crónica que NO responde a antibiótico.",
  col:"Cistitis por E. coli ascendente muy común en perras y gatas en Colombia; favorecida por urolitos y cateterización.",
  pista:"Vejiga inflamada por bacterias que suben; más en hembras."
},
];
