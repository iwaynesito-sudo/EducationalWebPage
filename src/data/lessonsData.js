// src/data/lessonsData.js

export const stages = [
  {
    "id": "stage-1",
    "title": "Etapa 1: Los Ladrillos",
    "subtitle": "Fundamentos Absolutos",
    "lessons": [
      {
        "id": "lesson-1",
        "title": "Estructura básica de una oración (SVO)",
        "theory": "\n          <h2>La Regla de Oro: Sujeto + Verbo + Objeto (SVO)</h2>\n          <p>A diferencia del español, donde el orden de las palabras puede variar y muchas veces omitimos el sujeto (como cuando decimos <em>\"tengo hambre\"</em> o <em>\"está lloviendo\"</em>), en inglés <strong>el orden es estricto y el sujeto casi nunca se puede omitir</strong>.</p>\n          \n          <div class=\"formula-box\">\n            FÓRMULA BASE: [Sujeto] + [Verbo] + [Objeto / Complemento]\n          </div>\n\n          <h3>1. La Obligatoriedad del Sujeto</h3>\n          <p>En inglés cada oración declarativa necesita un sujeto explícito. Si en español no hay un sujeto humano visible, en inglés usamos el pronombre impersonal <strong>\"It\"</strong>.</p>\n          \n          <div class=\"mistake-box\">\n            <strong>Error Común:</strong> Decir <em>\"Is raining\"</em> o <em>\"Is important\"</em>.<br/>\n            <strong>Forma Correcta:</strong> <em>\"<strong>It</strong> is raining\"</em> / <em>\"<strong>It</strong> is important\"</em>.\n          </div>\n\n          <h3>2. Componentes de la Estructura SVO</h3>\n          <table>\n            <thead>\n              <tr>\n                <th>Sujeto (¿Quién?)</th>\n                <th>Verbo (¿Qué hace?)</th>\n                <th>Objeto / Complemento (¿Qué o dónde?)</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Sarah</strong></td>\n                <td>studies</td>\n                <td>English every morning.</td>\n              </tr>\n              <tr>\n                <td><strong>They</strong></td>\n                <td>build</td>\n                <td>modern software.</td>\n              </tr>\n              <tr>\n                <td><strong>We</strong></td>\n                <td>live</td>\n                <td>in a vibrant city.</td>\n              </tr>\n              <tr>\n                <td><strong>The teacher</strong></td>\n                <td>explains</td>\n                <td>the lesson clearly.</td>\n              </tr>\n            </tbody>\n          </table>\n\n          <h3>3. Posición de los Adjetivos Calificativos</h3>\n          <p>En inglés los adjetivos van <strong>antes</strong> del sustantivo que describen, nunca después como en español:</p>\n          <ul>\n            <li>En español: <em>Un coche rojo</em> → En inglés: <em>A <strong>red</strong> car</em>.</li>\n            <li>En español: <em>Una reunión importante</em> → En inglés: <em>An <strong>important</strong> meeting</em>.</li>\n          </ul>\n\n          <div class=\"tip-box\">\n            <strong>Consejo para la fluidez:</strong> Cuando pienses en inglés, visualiza primero quién realiza la acción (S), luego qué acción ocurre (V) y por último el destinatario o lugar (O).\n          </div>\n        ",
        "examples": [
          {
            "en": "Alex designs clean websites.",
            "es": "Alex diseña sitios web limpios.",
            "note": "Sujeto: Alex | Verbo: designs | Objeto: clean websites"
          },
          {
            "en": "It is necessary to practice daily.",
            "es": "Es necesario practicar a diario.",
            "note": "Uso de 'It' como sujeto impersonal"
          },
          {
            "en": "We listen to music in the afternoon.",
            "es": "Nosotros escuchamos música por la tarde.",
            "note": "Orden S + V + O + Tiempo en presente"
          },
          {
            "en": "She drinks black coffee every morning.",
            "es": "Ella bebe café solo cada mañana.",
            "note": "Adjetivo 'black' antes de 'coffee'"
          },
          {
            "en": "My brother drives a red car.",
            "es": "Mi hermano conduce un auto rojo.",
            "note": "Adjetivo 'red' antes de 'car'"
          },
          {
            "en": "They have a comfortable house near the park.",
            "es": "Ellos tienen una casa cómoda cerca del parque.",
            "note": "SVO en presente con complemento de lugar"
          }
        ],
        "quizBank": [
          {
            "id": "s1-q1",
            "concept": "Sujeto impersonal (It)",
            "question": "Choose the grammatically correct sentence in English:",
            "options": [
              "Is raining outside right now.",
              "It is raining outside right now.",
              "Raining is outside right now.",
              "Does rain outside right now."
            ],
            "correct": 1,
            "feedback": "En inglés nunca omitimos el sujeto. Al hablar del clima o situaciones impersonales, es obligatorio utilizar el pronombre 'It'."
          },
          {
            "id": "s1-q2",
            "concept": "Orden de la oración (SVO)",
            "question": "Identify the correct word order for this thought: 'Ellos tienen un auto nuevo.'",
            "options": [
              "They have a car new.",
              "Have they a new car.",
              "They have a new car.",
              "A new car they have."
            ],
            "correct": 2,
            "feedback": "La regla SVO exige: Sujeto (They) + Verbo (have) + Objeto (a new car). Además, el adjetivo 'new' va antes del sustantivo 'car'."
          },
          {
            "id": "s1-q3",
            "concept": "Sujeto explícito obligatorio",
            "question": "Choose the correct word to complete the sentence: '___ works at the hospital.'",
            "options": [
              "He",
              "Him",
              "His",
              "At"
            ],
            "correct": 0,
            "feedback": "Toda oración afirmativa en inglés requiere un sujeto explícito en posición inicial: 'He works at the hospital'."
          },
          {
            "id": "s1-q4",
            "concept": "Posición del adjetivo",
            "question": "Select the sentence with the correct adjective position:",
            "options": [
              "She lives in a house big.",
              "She lives in a big house.",
              "She lives in big a house.",
              "A house big she lives in."
            ],
            "correct": 1,
            "feedback": "En inglés, los adjetivos calificativos siempre se colocan antes del sustantivo: 'a big house'."
          },
          {
            "id": "s1-q5",
            "concept": "Construcción 'It is'",
            "question": "Complete the sentence: '___ important to practice English every day.'",
            "options": [
              "It is",
              "Is",
              "Does",
              "Are"
            ],
            "correct": 0,
            "feedback": "En inglés no podemos empezar con 'Is important'. Se requiere el pronombre 'It' como sujeto: 'It is important'."
          }
        ]
      },
      {
        "id": "lesson-2",
        "title": "Pronombres personales y de objeto",
        "theory": "\n          <h2>Sujeto vs. Objeto: ¿Quién hace la acción y quién la recibe?</h2>\n          <p>En inglés existen dos tipos fundamentales de pronombres personales: los <strong>Subject Pronouns</strong> (que ejecutan la acción del verbo) y los <strong>Object Pronouns</strong> (que reciben la acción o van después de una preposición).</p>\n          \n          <div class=\"formula-box\">\n            [Subject Pronoun] + VERBO + [Object Pronoun] / [Preposición + Object Pronoun]\n          </div>\n\n          <h3>Tabla Comparativa Integral</h3>\n          <table>\n            <thead>\n              <tr>\n                <th>Persona Gramatical</th>\n                <th>Sujeto (Ejecuta)</th>\n                <th>Objeto (Recibe)</th>\n                <th>Ejemplo Combinado</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>1ra singular</td>\n                <td><strong>I</strong> (Yo)</td>\n                <td><strong>me</strong> (a mí / me)</td>\n                <td><em>She helps <strong>me</strong>.</em></td>\n              </tr>\n              <tr>\n                <td>2da singular/plural</td>\n                <td><strong>You</strong> (Tú / Ustedes)</td>\n                <td><strong>you</strong> (a ti / a ustedes)</td>\n                <td><em>I respect <strong>you</strong>.</em></td>\n              </tr>\n              <tr>\n                <td>3ra singular (masculino)</td>\n                <td><strong>He</strong> (Él)</td>\n                <td><strong>him</strong> (a él / le / lo)</td>\n                <td><em>We know <strong>him</strong>.</em></td>\n              </tr>\n              <tr>\n                <td>3ra singular (femenino)</td>\n                <td><strong>She</strong> (Ella)</td>\n                <td><strong>her</strong> (a ella / le / la)</td>\n                <td><em>They listen to <strong>her</strong>.</em></td>\n              </tr>\n              <tr>\n                <td>3ra singular (neutro)</td>\n                <td><strong>It</strong> (Eso / Ello)</td>\n                <td><strong>it</strong> (lo / la)</td>\n                <td><em>I use <strong>it</strong>.</em></td>\n              </tr>\n              <tr>\n                <td>1ra plural</td>\n                <td><strong>We</strong> (Nosotros)</td>\n                <td><strong>us</strong> (a nosotros / nos)</td>\n                <td><em>He understands <strong>us</strong>.</em></td>\n              </tr>\n              <tr>\n                <td>3ra plural</td>\n                <td><strong>They</strong> (Ellos)</td>\n                <td><strong>them</strong> (a ellos / los / las)</td>\n                <td><em>I see <strong>them</strong>.</em></td>\n              </tr>\n            </tbody>\n          </table>\n\n          <h3>Regla Clave: Después de Preposiciones</h3>\n          <p>Cualquier pronombre que aparezca después de una preposición (<em>for, with, about, to, between, from</em>) debe ser <strong>obligatoriamente un pronombre de objeto</strong>.</p>\n          \n          <div class=\"mistake-box\">\n            <strong>Error Común:</strong> Decir <em>\"This gift is for I\"</em> o <em>\"Between you and I\"</em>.<br/>\n            <strong>Forma Correcta:</strong> <em>\"This gift is for <strong>me</strong>\"</em> / <em>\"Between you and <strong>me</strong>\"</em>.\n          </div>\n        ",
        "examples": [
          {
            "en": "He helps her with the homework every day.",
            "es": "Él la ayuda a ella con la tarea todos los días.",
            "note": "He (sujeto) | her (objeto directo)"
          },
          {
            "en": "The teacher gives a notebook to us.",
            "es": "El profesor nos entrega un cuaderno a nosotros.",
            "note": "to (preposición) + us (objeto)"
          },
          {
            "en": "I know him very well, and he respects me.",
            "es": "Yo lo conozco a él muy bien, y él me respeta a mí.",
            "note": "Contraste entre I/me y he/him en presente"
          },
          {
            "en": "They welcome us to their home.",
            "es": "Ellos nos reciben a nosotros en su casa.",
            "note": "They (sujeto) | us (objeto)"
          },
          {
            "en": "This book is interesting, and I read it every day.",
            "es": "Este libro es interesante, y yo lo leo todos los días.",
            "note": "It como pronombre de objeto en presente"
          },
          {
            "en": "She works with them on a daily project.",
            "es": "Ella trabaja con ellos en un proyecto diario.",
            "note": "Preposición 'with' + objeto 'them'"
          }
        ],
        "quizBank": [
          {
            "id": "s1-q6",
            "concept": "Pronombre de objeto (us)",
            "question": "Complete the sentence: 'The teacher gives ___ a lot of exercises.'",
            "options": [
              "us",
              "we",
              "they",
              "she"
            ],
            "correct": 0,
            "feedback": "Como recibimos la acción del verbo 'gives', usamos el pronombre de objeto 'us' (a nosotros), no el pronombre de sujeto 'we'."
          },
          {
            "id": "s1-q7",
            "concept": "Pronombres tras preposición",
            "question": "Select the sentence with the correct pronoun:",
            "options": [
              "Can you give this note to she?",
              "Can you give this note to her?",
              "Can you give this note to they?",
              "Can you give this note to I?"
            ],
            "correct": 1,
            "feedback": "Después de preposiciones como 'to', 'for', o 'with', siempre se utiliza un pronombre de objeto ('her', no 'she')."
          },
          {
            "id": "s1-q8",
            "concept": "Pronombre de sujeto (he)",
            "question": "Complete the sentence: 'Mark is absent today because ___ is sick.'",
            "options": [
              "he",
              "him",
              "his",
              "them"
            ],
            "correct": 0,
            "feedback": "Se necesita un pronombre de sujeto que realice la acción del verbo 'is': 'he is sick'."
          },
          {
            "id": "s1-q9",
            "concept": "Pronombre de objeto directo (him)",
            "question": "Complete the dialogue: 'Do you know Carlos?' — 'Yes, I study with ___.'",
            "options": [
              "him",
              "he",
              "his",
              "they"
            ],
            "correct": 0,
            "feedback": "Tras la preposición 'with' se emplea el pronombre de objeto 'him'."
          },
          {
            "id": "s1-q10",
            "concept": "Reemplazo con pronombre plural",
            "question": "Choose the correct replacement: 'I visit my cousins every week' → 'I visit ___ every week.'",
            "options": [
              "them",
              "they",
              "their",
              "us"
            ],
            "correct": 0,
            "feedback": "'My cousins' en posición de objeto directo es sustituido por 'them'."
          }
        ]
      },
      {
        "id": "lesson-3",
        "title": "Verbo To Be (Ser / Estar)",
        "theory": "\n          <h2>El Verbo To Be: La Piedra Angular del Idioma</h2>\n          <p>El verbo <strong>to be</strong> es el más versátil e irregular del idioma inglés. Corresponde tanto a <em>ser</em> como a <em>estar</em> en español, determinándose el significado exacto según el contexto de la oración.</p>\n          \n          <div class=\"formula-box\">\n            AFIRMATIVO: [Sujeto] + [am / is / are] + [Complemento]<br/>\n            NEGATIVO: [Sujeto] + [am / is / are] + not + [Complemento]<br/>\n            INTERROGATIVO: [Am / Is / Are] + [Sujeto] + [Complemento]?\n          </div>\n\n          <h3>Conjugación en Presente Simple</h3>\n          <table>\n            <thead>\n              <tr>\n                <th>Pronombre</th>\n                <th>Forma Completa</th>\n                <th>Contracción Natural</th>\n                <th>Negación Común</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>I</strong></td>\n                <td>am</td>\n                <td>I'm</td>\n                <td>I'm not</td>\n              </tr>\n              <tr>\n                <td><strong>You</strong></td>\n                <td>are</td>\n                <td>You're</td>\n                <td>You aren't / You're not</td>\n              </tr>\n              <tr>\n                <td><strong>He / She / It</strong></td>\n                <td>is</td>\n                <td>He's / She's / It's</td>\n                <td>He isn't / He's not</td>\n              </tr>\n              <tr>\n                <td><strong>We</strong></td>\n                <td>are</td>\n                <td>We're</td>\n                <td>We aren't / We're not</td>\n              </tr>\n              <tr>\n                <td><strong>They</strong></td>\n                <td>are</td>\n                <td>They're</td>\n                <td>They aren't / They're not</td>\n              </tr>\n            </tbody>\n          </table>\n\n          <h3>Usos Idiomáticos Críticos: ¿Ser o Tener?</h3>\n          <p>Un error muy extendido entre hispanohablantes es traducir literalmente el verbo <em>tener</em> cuando en inglés se utiliza <strong>to be</strong>:</p>\n          \n          <div class=\"mistake-box\">\n            <strong>Edad:</strong> No decimos <em>\"I have 25 years\"</em>. Decimos <em>\"I <strong>am</strong> 25 years old\"</em>.<br/>\n            <strong>Sensaciones físicas:</strong> No decimos <em>\"I have hungry/cold\"</em>. Decimos <em>\"I <strong>am</strong> hungry / cold / thirsty\"</em>.<br/>\n            <strong>Clima:</strong> No decimos <em>\"Makes hot\"</em>. Decimos <em>\"<strong>It is</strong> hot today\"</em>.\n          </div>\n\n          <h3>Inversión en Preguntas</h3>\n          <p>Para formular preguntas, el verbo pasa al primer lugar sin necesidad de auxiliares externos:</p>\n          <ul>\n            <li>Afirmación: <em>You are ready.</em></li>\n            <li>Pregunta: <em><strong>Are</strong> you ready?</em></li>\n            <li>Afirmación: <em>She is our new engineer.</em></li>\n            <li>Pregunta: <em><strong>Is</strong> she our new engineer?</em></li>\n          </ul>\n        ",
        "examples": [
          {
            "en": "I am ready for the English class.",
            "es": "Estoy listo para la clase de inglés.",
            "note": "I am (primera persona singular)"
          },
          {
            "en": "She is a kind teacher.",
            "es": "Ella es una profesora amable.",
            "note": "She is (tercera persona singular)"
          },
          {
            "en": "He is 20 years old.",
            "es": "Él tiene 20 años.",
            "note": "Edad expresada con To Be"
          },
          {
            "en": "Are you happy today?",
            "es": "¿Estás feliz hoy?",
            "note": "Pregunta con inversión Are you"
          },
          {
            "en": "It is very cold in this room.",
            "es": "Hace mucho frío en esta habitación.",
            "note": "It is para clima / temperatura"
          },
          {
            "en": "We are not late for school.",
            "es": "No llegamos tarde a la escuela.",
            "note": "Forma negativa plural"
          },
          {
            "en": "They are currently in London.",
            "es": "Ellos están actualmente en Londres.",
            "note": "To be para ubicación"
          }
        ],
        "quizBank": [
          {
            "id": "q1",
            "concept": "Conjugación singular (is)",
            "question": "Complete the sentence: 'She ___ my best friend from school.'",
            "options": [
              "is",
              "am",
              "are",
              "be"
            ],
            "correct": 0,
            "feedback": "Para la tercera persona singular (he, she, it) se utiliza 'is'."
          },
          {
            "id": "q2",
            "concept": "Expresar la edad",
            "question": "Which sentence expresses age correctly in English?",
            "options": [
              "I am 20 years old.",
              "I have 20 years old.",
              "I has 20 years old.",
              "I make 20 years old."
            ],
            "correct": 0,
            "feedback": "En inglés la edad se expresa con el verbo To Be ('I am 20 years old'), nunca con 'have'."
          },
          {
            "id": "q3",
            "concept": "Forma negativa de To Be",
            "question": "Choose the correct negative form: 'We ___ ready for the exam yet.'",
            "options": [
              "aren't",
              "isn't",
              "am not",
              "not are"
            ],
            "correct": 0,
            "feedback": "Para 'we' la forma negativa correcta es 'aren't' (are not)."
          },
          {
            "id": "q4",
            "concept": "Preguntas con To Be (Inversión)",
            "question": "How do you correctly ask if someone is tired?",
            "options": [
              "Are you tired?",
              "Do you are tired?",
              "You are tired?",
              "Is you tired?"
            ],
            "correct": 0,
            "feedback": "Las preguntas con To Be se forman invirtiendo el verbo y el sujeto: 'Are you tired?' (sin auxiliar 'do')."
          },
          {
            "id": "q5",
            "concept": "Sujeto plural con To Be",
            "question": "Select the sentence with the correct grammar:",
            "options": [
              "The students are in the classroom.",
              "The students is in the classroom.",
              "The students am in the classroom.",
              "The students be in the classroom."
            ],
            "correct": 0,
            "feedback": "'The students' es plural (they), por lo que concuerda con 'are'."
          }
        ]
      },
      {
        "id": "lesson-4",
        "title": "Presente Simple y la Tercera Persona",
        "theory": "\n          <h2>Presente Simple: Hábitos, Hechos y Rutinas</h2>\n          <p>El <strong>Present Simple</strong> se utiliza para describir verdades universales, rutinas diarias y estados permanentes. No se usa para describir lo que estás haciendo en este instante (para eso se usa el Presente Continuo).</p>\n\n          <div class=\"formula-box\">\n            AFIRMATIVO: [Sujeto] + [Verbo base (+s/es para He/She/It)] + [Complemento]<br/>\n            NEGATIVO: [Sujeto] + [do not / does not] + [Verbo base] + [Complemento]<br/>\n            PREGUNTA: [Do / Does] + [Sujeto] + [Verbo base] + [Complemento]?\n          </div>\n\n          <h3>La Regla de la 3ra Persona Singular (He, She, It)</h3>\n          <p>En oraciones afirmativas, cuando el sujeto es <strong>He</strong>, <strong>She</strong> o <strong>It</strong>, el verbo sufre una modificación obligatoria al final:</p>\n          \n          <table>\n            <thead>\n              <tr>\n                <th>Terminación del Verbo</th>\n                <th>Regla Ortográfica</th>\n                <th>Ejemplo Base → 3ra Persona</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Mayoría de verbos</td>\n                <td>Añadir <strong>-s</strong></td>\n                <td>work → <strong>works</strong> / eat → <strong>eats</strong></td>\n              </tr>\n              <tr>\n                <td>Terminados en -ch, -sh, -ss, -x, -o</td>\n                <td>Añadir <strong>-es</strong></td>\n                <td>watch → <strong>watches</strong> / go → <strong>goes</strong></td>\n              </tr>\n              <tr>\n                <td>Consonante + <strong>y</strong></td>\n                <td>Cambiar <em>y</em> por <strong>-ies</strong></td>\n                <td>study → <strong>studies</strong> / fly → <strong>flies</strong></td>\n              </tr>\n              <tr>\n                <td>Vocal + <strong>y</strong></td>\n                <td>Solo añadir <strong>-s</strong></td>\n                <td>play → <strong>plays</strong> / buy → <strong>buys</strong></td>\n              </tr>\n            </tbody>\n          </table>\n\n          <h3>Los Auxiliares DO y DOES en Negación y Pregunta</h3>\n          <p>Cuando usamos <strong>does</strong> o <strong>doesn't</strong>, el auxiliar ya absorbe la 3ra persona. Por tanto, <strong>el verbo principal vuelve a su forma base</strong>.</p>\n          \n          <div class=\"mistake-box\">\n            <strong>Error Común:</strong> Decir <em>\"He doesn't works\"</em> o <em>\"Does she speaks English?\"</em>.<br/>\n            <strong>Forma Correcta:</strong> <em>\"He doesn't <strong>work</strong>\"</em> / <em>\"Does she <strong>speak</strong> English?\"</em>.\n          </div>\n        ",
        "examples": [
          {
            "en": "He reads modern books.",
            "es": "Él lee libros modernos.",
            "note": "Tercera persona singular (-s)"
          },
          {
            "en": "She watches tutorials to learn English.",
            "es": "Ella mira tutoriales para aprender inglés.",
            "note": "Terminación -es con verbos en ch"
          },
          {
            "en": "Do you study on Fridays?",
            "es": "¿Estudias los viernes?",
            "note": "Pregunta con auxiliar Do"
          },
          {
            "en": "He doesn't drink coffee in the evening.",
            "es": "Él no bebe café por la noche.",
            "note": "Negación con doesn't"
          },
          {
            "en": "Water boils at 100 degrees Celsius.",
            "es": "El agua hierve a 100 grados Celsius.",
            "note": "Verdad científica universal"
          },
          {
            "en": "We clean our room every Saturday.",
            "es": "Nosotros limpiamos nuestra habitación cada sábado.",
            "note": "Rutina habitual en presente"
          }
        ],
        "quizBank": [
          {
            "id": "s1-q11",
            "concept": "Tercera persona singular (-s)",
            "question": "Complete the sentence: 'Sarah ___ in a library near her house.'",
            "options": [
              "works",
              "work",
              "working",
              "is work"
            ],
            "correct": 0,
            "feedback": "En presente simple, los verbos con he/she/it llevan terminación '-s': 'Sarah works'."
          },
          {
            "id": "s1-q12",
            "concept": "Negación con doesn't",
            "question": "Select the correct negative sentence:",
            "options": [
              "He doesn't like cold coffee.",
              "He doesn't likes cold coffee.",
              "He don't like cold coffee.",
              "He not likes cold coffee."
            ],
            "correct": 0,
            "feedback": "Al usar el auxiliar negativo 'doesn't', el verbo principal regresa a su forma base sin '-s': 'doesn't like'."
          },
          {
            "id": "s1-q13",
            "concept": "Regla ortográfica (-y a -ies)",
            "question": "What is the 3rd person singular form of the verb 'study'?",
            "options": [
              "studies",
              "studys",
              "studyes",
              "studying"
            ],
            "correct": 0,
            "feedback": "Los verbos terminados en consonante + 'y' cambian la 'y' por 'ies': 'study' → 'studies'."
          },
          {
            "id": "s1-q14",
            "concept": "Preguntas con Does",
            "question": "Choose the correct question:",
            "options": [
              "Does she know the answer?",
              "Does she knows the answer?",
              "Do she know the answer?",
              "Does they know the answer?"
            ],
            "correct": 0,
            "feedback": "Con 'she' se utiliza el auxiliar 'Does' y el verbo principal en su forma base: 'Does she know...?'."
          },
          {
            "id": "s1-q15",
            "concept": "Uso para hábitos y rutinas",
            "question": "Which sentence describes a regular daily habit?",
            "options": [
              "I usually drink tea in the morning.",
              "I am drinking tea right now.",
              "I drinks tea in the morning.",
              "I drink usually tea in the morning."
            ],
            "correct": 0,
            "feedback": "El presente simple combinado con 'usually' describe hábitos cotidianos ('I usually drink tea in the morning')."
          }
        ]
      },
      {
        "id": "lesson-5",
        "title": "Presente Continuo (Acciones en progreso)",
        "theory": "\n          <h2>Presente Continuo: Lo que Ocurre Ahora Mismo</h2>\n          <p>El <strong>Present Continuous</strong> se utiliza para describir acciones que están ocurriendo en el momento exacto en que se habla, o tendencias y situaciones temporales contemporáneas.</p>\n\n          <div class=\"formula-box\">\n            FÓRMULA: [Sujeto] + [am / is / are] + [Verbo con terminación -ING] + [Complemento]\n          </div>\n\n          <h3>Reglas Ortográficas para la terminación -ING</h3>\n          <table>\n            <thead>\n              <tr>\n                <th>Tipo de Verbo</th>\n                <th>Regla</th>\n                <th>Ejemplo</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Mayoría de verbos</td>\n                <td>Añadir <strong>-ing</strong> directamente</td>\n                <td>learn → <strong>learning</strong> / read → <strong>reading</strong></td>\n              </tr>\n              <tr>\n                <td>Terminados en <strong>-e</strong> muda</td>\n                <td>Eliminar la <em>e</em> y añadir <strong>-ing</strong></td>\n                <td>write → <strong>writing</strong> / create → <strong>creating</strong></td>\n              </tr>\n              <tr>\n                <td>1 sílaba: Consonante + Vocal + Consonante (CVC)</td>\n                <td>Duplicar la última consonante</td>\n                <td>run → <strong>running</strong> / stop → <strong>stopping</strong></td>\n              </tr>\n              <tr>\n                <td>Terminados en <strong>-ie</strong></td>\n                <td>Cambiar <em>ie</em> por <strong>-ying</strong></td>\n                <td>lie → <strong>lying</strong> / tie → <strong>tying</strong></td>\n              </tr>\n            </tbody>\n          </table>\n\n          <h3>Los Verbos de Estado (Stative Verbs)</h3>\n          <p>Existen verbos que expresan emociones, posesión o procesos mentales que <strong>casi nunca se conjugan en presente continuo</strong>:</p>\n          <ul>\n            <li><em>know, understand, believe, want, need, prefer, love, hate, possess</em>.</li>\n          </ul>\n\n          <div class=\"mistake-box\">\n            <strong>Error Común:</strong> Decir <em>\"I am understanding the lesson now\"</em>.<br/>\n            <strong>Forma Correcta:</strong> <em>\"I <strong>understand</strong> the lesson now\"</em> (los stative verbs usan Present Simple).\n          </div>\n        ",
        "examples": [
          {
            "en": "She is reading an interesting book.",
            "es": "Ella está leyendo un libro interesante.",
            "note": "is reading (acción en progreso)"
          },
          {
            "en": "They are studying at home today.",
            "es": "Ellos están estudiando en casa hoy.",
            "note": "are studying (plural)"
          },
          {
            "en": "I am learning English on this platform.",
            "es": "Estoy aprendiendo inglés en esta plataforma.",
            "note": "am learning (primera persona)"
          },
          {
            "en": "The dog is playing in the garden.",
            "es": "El perro está jugando en el jardín.",
            "note": "is playing (tercera persona neutra)"
          },
          {
            "en": "Why are you looking at that window?",
            "es": "¿Por qué estás mirando esa ventana?",
            "note": "Pregunta con Wh- y Present Continuous"
          }
        ],
        "quizBank": [
          {
            "id": "s1-q16",
            "concept": "Estructura del Presente Continuo",
            "question": "Complete the sentence: 'Look! The children ___ in the garden.'",
            "options": [
              "are playing",
              "is playing",
              "plays",
              "play"
            ],
            "correct": 0,
            "feedback": "'The children' es un sustantivo plural, por lo que la estructura es 'are' + verbo con '-ing': 'are playing'."
          },
          {
            "id": "s1-q17",
            "concept": "Regla de consonante doble (-ing)",
            "question": "What is the correct -ing spelling of the verb 'run'?",
            "options": [
              "running",
              "runing",
              "runneing",
              "runnying"
            ],
            "correct": 0,
            "feedback": "Los verbos de una sílaba con estructura consonante-vocal-consonante duplican la última consonante: 'run' → 'running'."
          },
          {
            "id": "s1-q18",
            "concept": "Verbos de estado (no continuo)",
            "question": "Which sentence is grammatically correct?",
            "options": [
              "I want a glass of water right now.",
              "I am wanting a glass of water right now.",
              "I wanting a glass of water right now.",
              "I wants a glass of water right now."
            ],
            "correct": 0,
            "feedback": "Verbos de deseo, preferencia o pensamiento como 'want', 'like' y 'know' normalmente no se usan en tiempos continuos."
          },
          {
            "id": "s1-q19",
            "concept": "Negación en Presente Continuo",
            "question": "Choose the correct negative sentence:",
            "options": [
              "We aren't watching television right now.",
              "We not are watching television right now.",
              "We don't watching television right now.",
              "We isn't watching television right now."
            ],
            "correct": 0,
            "feedback": "La negación del Presente Continuo se forma con el verbo To Be en negativo: 'aren't watching'."
          },
          {
            "id": "s1-q20",
            "concept": "Acción en progreso actual",
            "question": "Identify the sentence that describes an action happening at this exact moment:",
            "options": [
              "He is driving to work right now.",
              "He drives to work every morning.",
              "He will drive to work tomorrow.",
              "He drives usually to work."
            ],
            "correct": 0,
            "feedback": "'He is driving to work right now' indica una acción que está sucediendo en el momento del habla."
          }
        ]
      }
    ]
  },
  {
    "id": "stage-2",
    "title": "Etapa 2: El Pasado",
    "subtitle": "Narrativa y Eventos Previos",
    "lessons": [
      {
        "id": "lesson-6",
        "title": "Pasado Simple: Verbos Regulares e Irregulares",
        "theory": "\n          <h2>Pasado Simple: Hechos Completados en el Pasado</h2>\n          <p>El <strong>Past Simple</strong> se emplea para acciones que iniciaron y concluyeron en un momento específico en el pasado. Suele acompañarse de expresiones temporales como <em>yesterday, last week, in 2022, two days ago</em>.</p>\n\n          <div class=\"formula-box\">\n            AFIRMATIVO: [Sujeto] + [Verbo en Pasado] + [Complemento]<br/>\n            NEGATIVO: [Sujeto] + [did not / didn't] + [Verbo base] + [Complemento]<br/>\n            PREGUNTA: [Did] + [Sujeto] + [Verbo base] + [Complemento]?\n          </div>\n\n          <h3>Verbos Regulares vs. Irregulares</h3>\n          <table>\n            <thead>\n              <tr>\n                <th>Categoría</th>\n                <th>Regla de Formación</th>\n                <th>Infinitivo → Pasado Simple</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Regulares</td>\n                <td>Añadir <strong>-ed</strong> al infinitivo</td>\n                <td>start → <strong>started</strong> / learn → <strong>learned</strong></td>\n              </tr>\n              <tr>\n                <td>Regulares terminados en <em>-e</em></td>\n                <td>Solo añadir <strong>-d</strong></td>\n                <td>create → <strong>created</strong> / like → <strong>liked</strong></td>\n              </tr>\n              <tr>\n                <td>Irregulares comunes</td>\n                <td>Cambian su forma (se memorizan)</td>\n                <td>go → <strong>went</strong> / see → <strong>saw</strong> / write → <strong>wrote</strong></td>\n              </tr>\n            </tbody>\n          </table>\n\n          <h3>La Regla de Oro del Auxiliar DID</h3>\n          <p>Al igual que con <em>do/does</em> en presente, cuando aparece el auxiliar de pasado <strong>did</strong> o <strong>didn't</strong>, este ya indica el tiempo pretérito. <strong>El verbo principal DEBE estar en forma base</strong>.</p>\n          \n          <div class=\"mistake-box\">\n            <strong>Error Común:</strong> Decir <em>\"I didn't went\"</em> o <em>\"Did you saw the error?\"</em>.<br/>\n            <strong>Forma Correcta:</strong> <em>\"I didn't <strong>go</strong>\"</em> / <em>\"Did you <strong>see</strong> the error?\"</em>.\n          </div>\n        ",
        "examples": [
          {
            "en": "They released the new version last night.",
            "es": "Ellos publicaron la nueva versión anoche.",
            "note": "Verbo regular con -ed"
          },
          {
            "en": "We found the memory leak after hours of debugging.",
            "es": "Encontramos la fuga de memoria tras horas de depuración.",
            "note": "Verbo irregular: find -> found"
          },
          {
            "en": "Did you test the endpoint before committing?",
            "es": "¿Probaste el endpoint antes de hacer commit?",
            "note": "Pregunta con auxiliar Did + test"
          },
          {
            "en": "She didn't attend the retrospective meeting.",
            "es": "Ella no asistió a la reunión de retrospectiva.",
            "note": "didn't + verbo base attend"
          },
          {
            "en": "I wrote three documentation articles yesterday.",
            "es": "Escribí tres artículos de documentación ayer.",
            "note": "Verbo irregular: write -> wrote"
          }
        ],
        "quizBank": [
          {
            "id": "s2-q1",
            "concept": "Verbo regular en pasado (-ed)",
            "question": "Complete the sentence: 'We ___ a great movie yesterday evening.'",
            "options": [
              "watched",
              "watch",
              "watching",
              "did watched"
            ],
            "correct": 0,
            "feedback": "En el pasado simple afirmativo, los verbos regulares añaden '-ed': 'watched'."
          },
          {
            "id": "s2-q2",
            "concept": "Negación en pasado con didn't",
            "question": "Choose the grammatically correct negative sentence:",
            "options": [
              "She didn't go to the party.",
              "She didn't went to the party.",
              "She not went to the party.",
              "She didn't goes to the party."
            ],
            "correct": 0,
            "feedback": "Al utilizar el auxiliar negativo 'didn't', el verbo principal vuelve a su forma base: 'didn't go'."
          },
          {
            "id": "s2-q3",
            "concept": "Verbo irregular común (buy → bought)",
            "question": "What is the past simple form of the irregular verb 'buy'?",
            "options": [
              "bought",
              "buyed",
              "bring",
              "brought"
            ],
            "correct": 0,
            "feedback": "El verbo irregular 'buy' tiene como pasado 'bought'."
          },
          {
            "id": "s2-q4",
            "concept": "Preguntas en pasado con Did",
            "question": "Complete the question: '___ you finish your homework yesterday?'",
            "options": [
              "Did",
              "Do",
              "Have",
              "Were"
            ],
            "correct": 0,
            "feedback": "En pasado simple, las preguntas con verbos de acción se inician con el auxiliar 'Did'."
          },
          {
            "id": "s2-q5",
            "concept": "Identificar verbos regulares",
            "question": "Which of the following verbs is regular in the past simple?",
            "options": [
              "play (played)",
              "speak (spoke)",
              "give (gave)",
              "take (took)"
            ],
            "correct": 0,
            "feedback": "'Play' es un verbo regular porque forma su pasado agregando '-ed' ('played'). Los demás son irregulares."
          }
        ]
      },
      {
        "id": "lesson-7",
        "title": "Pasado Continuo y contraste con Pasado Simple",
        "theory": "\n          <h2>Pasado Continuo: Acciones en Desarrollo en el Pasado</h2>\n          <p>El <strong>Past Continuous</strong> describe una acción que estaba ocurriendo en un momento específico del pasado, frecuentemente interrumpida por otra acción puntual en <strong>Past Simple</strong>.</p>\n\n          <div class=\"formula-box\">\n            FÓRMULA: [Sujeto] + [was / were] + [Verbo -ING] + [Complemento]\n          </div>\n\n          <h3>Concordancia Was vs. Were</h3>\n          <ul>\n            <li><strong>Was:</strong> I, He, She, It (<em>I was writing code</em>).</li>\n            <li><strong>Were:</strong> You, We, They (<em>They were debugging the system</em>).</li>\n          </ul>\n\n          <h3>El Patrón WHEN vs. WHILE</h3>\n          <p>La combinación más frecuente para fluidez narrativa es conectar dos eventos pasados:</p>\n          <div class=\"tip-box\">\n            <strong>WHILE + Pasado Continuo:</strong> Introduce la acción larga de fondo (<em>While I was speaking...</em>)<br/>\n            <strong>WHEN + Pasado Simple:</strong> Introduce la interrupción puntual (<em>...when the power went out.</em>)\n          </div>\n        ",
        "examples": [
          {
            "en": "I was reading the logs when the server crashed.",
            "es": "Estaba leyendo los registros cuando el servidor se cayó.",
            "note": "Acción continua interrumpida por evento puntual"
          },
          {
            "en": "While we were testing, the client called us.",
            "es": "Mientras estábamos haciendo pruebas, el cliente nos llamó.",
            "note": "While + Past Continuous"
          },
          {
            "en": "What were you doing at 10 PM last night?",
            "es": "¿Qué estabas haciendo anoche a las 10 PM?",
            "note": "Momento específico en el pasado"
          },
          {
            "en": "They were not paying attention during the standup.",
            "es": "Ellos no estaban prestando atención durante la reunión.",
            "note": "Negación con were not (weren't)"
          },
          {
            "en": "She was preparing the deployment script all afternoon.",
            "es": "Ella estuvo preparando el script de despliegue toda la tarde.",
            "note": "Duración continua en el pasado"
          }
        ],
        "quizBank": [
          {
            "id": "s2-q6",
            "concept": "Acción en progreso en el pasado",
            "question": "Complete the sentence: 'I ___ dinner when my friend knocked on the door.'",
            "options": [
              "was cooking",
              "were cooking",
              "am cooking",
              "cooked"
            ],
            "correct": 0,
            "feedback": "Para 'I' en pasado continuo se usa 'was' + verbo en '-ing': 'was cooking'."
          },
          {
            "id": "s2-q7",
            "concept": "Conector While con Pasado Continuo",
            "question": "Choose the correct connector: '___ we were watching a movie, the power went out.'",
            "options": [
              "While",
              "During",
              "Until",
              "Because of"
            ],
            "correct": 0,
            "feedback": "'While' se utiliza para introducir una acción continua y prolongada: 'While we were watching...'."
          },
          {
            "id": "s2-q8",
            "concept": "Concordancia con were",
            "question": "Identify the grammatically correct sentence:",
            "options": [
              "We were walking in the park.",
              "We was walking in the park.",
              "We were walked in the park.",
              "We was walked in the park."
            ],
            "correct": 0,
            "feedback": "Con el pronombre 'We' la forma correcta del auxiliar es 'were': 'We were walking'."
          },
          {
            "id": "s2-q9",
            "concept": "Acción que interrumpe (Pasado Simple)",
            "question": "Complete the sentence: 'They were playing soccer when it ___ to rain.'",
            "options": [
              "started",
              "was starting",
              "starts",
              "start"
            ],
            "correct": 0,
            "feedback": "La acción puntual que interrumpe una acción en progreso va en Pasado Simple: 'when it started to rain'."
          },
          {
            "id": "s2-q10",
            "concept": "Preguntas negativas en Pasado Continuo",
            "question": "Select the correct negative question:",
            "options": [
              "Why weren't you listening?",
              "Why wasn't you listening?",
              "Why didn't you listening?",
              "Why you were not listening?"
            ],
            "correct": 0,
            "feedback": "Con 'you', el pasado continuo negativo es 'weren't you listening?' con inversión sujeto-auxiliar."
          }
        ]
      },
      {
        "id": "lesson-8",
        "title": "Used to vs Would (Hábitos en el pasado)",
        "theory": "\n          <h2>Hábitos y Estados Pasados que ya no ocurren</h2>\n          <p>Para hablar de costumbres o estados que solías tener en el pasado pero que ya no son ciertos en el presente, utilizamos <strong>used to</strong> y <strong>would</strong>.</p>\n\n          <div class=\"formula-box\">\n            FÓRMULA: [Sujeto] + used to + [Verbo en forma base] + [Complemento]\n          </div>\n\n          <h3>La Diferencia Fundamental: Estados vs. Acciones</h3>\n          <table>\n            <thead>\n              <tr>\n                <th>Estructura</th>\n                <th>Acciones Repetidas (Costumbres)</th>\n                <th>Estados / Lugares / Creencias</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Used to</strong></td>\n                <td>Sí (<em>I used to run every day</em>)</td>\n                <td><strong>Sí</strong> (<em>I used to live in Madrid / I used to have long hair</em>)</td>\n              </tr>\n              <tr>\n                <td><strong>Would</strong></td>\n                <td>Sí (<em>We would play chess on Sundays</em>)</td>\n                <td><strong>NO</strong> (No se puede decir: <em>\"I would live in Madrid\"</em> para un estado pasado)</td>\n              </tr>\n            </tbody>\n          </table>\n\n          <div class=\"mistake-box\">\n            <strong>Negación de Used to:</strong> En negativo usamos <em>didn't use to</em> (sin la 'd' final).<br/>\n            <strong>Ejemplo:</strong> <em>\"I didn't <strong>use</strong> to like vegetables, but now I love them.\"</em>\n          </div>\n        ",
        "examples": [
          {
            "en": "I used to work in finance before transitioning to tech.",
            "es": "Yo solía trabajar en finanzas antes de pasarme a la tecnología.",
            "note": "Estado o trabajo pasado con used to"
          },
          {
            "en": "Every summer, my grandfather would tell us stories by the campfire.",
            "es": "Cada verano, mi abuelo solía contarnos historias junto a la fogata.",
            "note": "Acción repetida con would"
          },
          {
            "en": "Did you use to live in Toronto?",
            "es": "¿Solías vivir en Toronto?",
            "note": "Pregunta con Did + use to"
          },
          {
            "en": "She didn't use to drink coffee, but now she drinks two cups a day.",
            "es": "Ella no solía tomar café, pero ahora toma dos tazas al día.",
            "note": "Negación didn't use to"
          },
          {
            "en": "We used to have weekly team lunches in the office.",
            "es": "Solíamos tener almuerzos semanales de equipo en la oficina.",
            "note": "Costumbre pasada con used to"
          }
        ],
        "quizBank": [
          {
            "id": "s2-q11",
            "concept": "Estructura afirmativa de used to",
            "question": "Complete the sentence: 'I ___ live in a small town when I was a child.'",
            "options": [
              "used to",
              "would",
              "am used to",
              "use to"
            ],
            "correct": 0,
            "feedback": "'Used to' describe hábitos o estados en el pasado que ya no ocurren en el presente."
          },
          {
            "id": "s2-q12",
            "concept": "Negación con didn't use to",
            "question": "Choose the correct negative form:",
            "options": [
              "I didn't use to like vegetables.",
              "I didn't used to like vegetables.",
              "I not used to like vegetables.",
              "I never use to like vegetables."
            ],
            "correct": 0,
            "feedback": "Con el auxiliar 'didn't', el verbo pierde la 'd' final: 'didn't use to'."
          },
          {
            "id": "s2-q13",
            "concept": "Expresar hábitos pasados",
            "question": "Which sentence correctly expresses a past habit that no longer happens?",
            "options": [
              "I used to ride my bike to school every day.",
              "I am used to ride my bike to school every day.",
              "I use to ride my bike to school every day.",
              "I will use to ride my bike to school every day."
            ],
            "correct": 0,
            "feedback": "'I used to ride...' expresa con precisión una rutina pasada concluida."
          },
          {
            "id": "s2-q14",
            "concept": "Preguntas con did you use to",
            "question": "Complete the question: 'Where did you ___ spend your summer vacations?'",
            "options": [
              "use to",
              "used to",
              "would",
              "uses to"
            ],
            "correct": 0,
            "feedback": "En preguntas con 'did', la forma correcta es 'use to' sin la 'd' final."
          },
          {
            "id": "s2-q15",
            "concept": "Hábito del pasado que finalizó",
            "question": "Which sentence means that the action stopped happening in the present?",
            "options": [
              "I used to wake up late.",
              "I usually wake up late.",
              "I am used to waking up late.",
              "I will wake up late."
            ],
            "correct": 0,
            "feedback": "'I used to wake up late' afirma que era una costumbre pasada que ya no se realiza hoy."
          }
        ]
      }
    ]
  },
  {
    "id": "stage-3",
    "title": "Etapa 3: El Futuro",
    "subtitle": "Predicciones, Planes e Intenciones",
    "lessons": [
      {
        "id": "lesson-9",
        "title": "Will vs Going to (Decisiones vs Planes)",
        "theory": "\n          <h2>Expresando el Futuro: Will vs. Be Going To</h2>\n          <p>En inglés existen dos maneras principales de hablar del futuro simple, y su elección depende del grado de planificación previa o de si se trata de una decisión espontánea.</p>\n\n          <div class=\"formula-box\">\n            WILL (Espontáneo / Promesa): [Sujeto] + will + [Verbo base]<br/>\n            BE GOING TO (Plan previo / Evidencia): [Sujeto] + [am/is/are] going to + [Verbo base]\n          </div>\n\n          <h3>Criterios de Elección</h3>\n          <table>\n            <thead>\n              <tr>\n                <th>Criterio</th>\n                <th>WILL</th>\n                <th>BE GOING TO</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Decisión</strong></td>\n                <td>Tomada en el momento de hablar (<em>\"The phone is ringing. I'll answer it.\"</em>)</td>\n                <td>Planificada con antelación (<em>\"I am going to visit my parents this weekend.\"</em>)</td>\n              </tr>\n              <tr>\n                <td><strong>Predicciones</strong></td>\n                <td>Basada en opinión personal o creencia (<em>\"I think it will rain.\"</em>)</td>\n                <td>Basada en evidencia visual presente (<em>\"Look at those black clouds! It is going to rain.\"</em>)</td>\n              </tr>\n              <tr>\n                <td><strong>Promesas y ofertas</strong></td>\n                <td>Siempre <strong>will</strong> (<em>\"I will help you with the code.\"</em>)</td>\n                <td>Rara vez aplicable para ofertas instantáneas.</td>\n              </tr>\n            </tbody>\n          </table>\n        ",
        "examples": [
          {
            "en": "I am going to buy a new laptop next Friday.",
            "es": "Voy a comprarme una nueva portátil el próximo viernes.",
            "note": "Plan premeditado con fecha"
          },
          {
            "en": "Don't worry, I will review your pull request in a minute.",
            "es": "No te preocupes, revisaré tu pull request en un minuto.",
            "note": "Oferta / decisión espontánea con will"
          },
          {
            "en": "Look at the battery level; the laptop is going to shut down!",
            "es": "¡Mira el nivel de batería; la portátil se va a apagar!",
            "note": "Predicción basada en evidencia visual"
          },
          {
            "en": "I think artificial intelligence will transform medical diagnostics.",
            "es": "Creo que la inteligencia artificial transformará los diagnósticos médicos.",
            "note": "Opinión personal a futuro con will"
          },
          {
            "en": "Are you going to attend the architecture meeting?",
            "es": "¿Vas a asistir a la reunión de arquitectura?",
            "note": "Pregunta sobre planes previos"
          }
        ],
        "quizBank": [
          {
            "id": "s3-q1",
            "concept": "Decisión espontánea con Will",
            "question": "The waiter asks: 'What would you like to drink?' You decide instantly: '___ a glass of water.'",
            "options": [
              "I'll have",
              "I am going to have",
              "I having",
              "I will to have"
            ],
            "correct": 0,
            "feedback": "Las decisiones espontáneas tomadas en el momento exacto de hablar se expresan con 'will' ('I'll have')."
          },
          {
            "id": "s3-q2",
            "concept": "Predicción con evidencia física (going to)",
            "question": "Look at those dark clouds in the sky! It ___ rain very soon.",
            "options": [
              "is going to",
              "will probably",
              "going to",
              "shall"
            ],
            "correct": 0,
            "feedback": "Cuando hay evidencia visual o física directa en el presente, usamos 'be going to': 'It is going to rain'."
          },
          {
            "id": "s3-q3",
            "concept": "Planes premeditados con going to",
            "question": "Which sentence expresses a planned intention decided before speaking?",
            "options": [
              "I am going to visit my grandparents this weekend.",
              "Maybe I will visit my grandparents this weekend.",
              "I think I will visit my grandparents.",
              "I will probably stay home."
            ],
            "correct": 0,
            "feedback": "'I am going to visit...' expresa una intención o plan previo ya decidido."
          },
          {
            "id": "s3-q4",
            "concept": "Promesas con won't",
            "question": "Complete the promise: 'Don't worry, I promise I ___ tell anyone your secret.'",
            "options": [
              "won't",
              "am not going to",
              "don't will",
              "not will"
            ],
            "correct": 0,
            "feedback": "Las promesas y compromisos se expresan naturalmente con 'will' o su forma negativa 'won't'."
          },
          {
            "id": "s3-q5",
            "concept": "Estructura de be going to",
            "question": "Complete the sentence: 'We ___ travel to Canada next summer.'",
            "options": [
              "are going to",
              "is going to",
              "will to",
              "going to"
            ],
            "correct": 0,
            "feedback": "La fórmula con 'we' es: 'we are going to' + verbo base ('travel')."
          }
        ]
      },
      {
        "id": "lesson-10",
        "title": "Presente Continuo para Planes Futuros",
        "theory": "\n          <h2>Presente Continuo: La Agenda y Acuerdos Cerrados</h2>\n          <p>En el inglés profesional y cotidiano, el <strong>Present Continuous</strong> es la forma preferida para hablar de eventos futuros que ya están <strong>fijados en el calendario o acordados con otra persona</strong>.</p>\n\n          <div class=\"formula-box\">\n            FÓRMULA: [Sujeto] + [am / is / are] + [Verbo -ING] + [Expresión de Tiempo Futuro]\n          </div>\n\n          <h3>La Clave: La Expresión Temporal</h3>\n          <p>Lo que transforma una acción presente en un plan futuro cerrado es la inclusión de una referencia temporal específica:</p>\n          <ul>\n            <li><em>I am meeting the investors <strong>tomorrow at 10 AM</strong>.</em> (Reunión agendada).</li>\n            <li><em>We are flying to Berlin <strong>next Monday</strong>.</em> (Boletos comprados).</li>\n            <li><em>She is starting her new job <strong>on June 1st</strong>.</em> (Contrato firmado).</li>\n          </ul>\n\n          <div class=\"tip-box\">\n            <strong>Diferencia con 'Going to':</strong> Mientras que <em>'going to'</em> enfatiza la intención interna (<em>\"I'm going to travel\"</em>), el Presente Continuo enfatiza el acuerdo logístico concreto ya establecido.\n          </div>\n        ",
        "examples": [
          {
            "en": "We are presenting the project to stakeholders tomorrow morning.",
            "es": "Presentaremos el proyecto a los interesados mañana por la mañana.",
            "note": "Cita fijada en calendario"
          },
          {
            "en": "I am having dinner with David tonight at eight.",
            "es": "Cenaré con David esta noche a las ocho.",
            "note": "Acuerdo social cerrado"
          },
          {
            "en": "She is leaving for Chicago next Tuesday.",
            "es": "Ella sale para Chicago el próximo martes.",
            "note": "Viaje con fecha definida"
          },
          {
            "en": "Are you working this Saturday?",
            "es": "¿Trabajas este sábado?",
            "note": "Pregunta sobre turnos programados"
          },
          {
            "en": "The company is releasing the quarterly results on Friday.",
            "es": "La empresa publicará los resultados trimestrales el viernes.",
            "note": "Evento corporativo calendarizado"
          }
        ],
        "quizBank": [
          {
            "id": "s3-q6",
            "concept": "Citas confirmadas con Presente Continuo",
            "question": "Complete the sentence: 'I ___ the doctor tomorrow at 3:00 PM.'",
            "options": [
              "am seeing",
              "will see perhaps",
              "saw",
              "am see"
            ],
            "correct": 0,
            "feedback": "Usamos el Presente Continuo para citas médicas o compromisos confirmados con hora y fecha fija: 'am seeing'."
          },
          {
            "id": "s3-q7",
            "concept": "Planes con acuerdos previos",
            "question": "Why is Present Continuous used in: 'We are flying to Paris next Friday'?",
            "options": [
              "Because it is an arranged trip with tickets already booked.",
              "Because it is an action happening right now.",
              "Because 'fly' cannot be used with 'will'.",
              "Because it is a scientific fact."
            ],
            "correct": 0,
            "feedback": "El Presente Continuo para futuro implica que ya se hicieron arreglos previos (como comprar los boletos)."
          },
          {
            "id": "s3-q8",
            "concept": "Identificar citas fijadas",
            "question": "Which sentence indicates a confirmed future arrangement?",
            "options": [
              "I am meeting my teacher on Thursday morning.",
              "Maybe I will visit my friends.",
              "I would like to travel somewhere warm.",
              "I might go shopping."
            ],
            "correct": 0,
            "feedback": "'I am meeting my teacher...' refleja una cita concreta y acordada con otra persona."
          },
          {
            "id": "s3-q9",
            "concept": "Preguntas sobre planes futuros",
            "question": "Complete the question: '___ you doing anything special this Saturday?'",
            "options": [
              "Are",
              "Do",
              "Will",
              "Did"
            ],
            "correct": 0,
            "feedback": "Para preguntar por planes concretos de fin de semana con presente continuo se usa 'Are you doing...?'."
          },
          {
            "id": "s3-q10",
            "concept": "Estructura de plan acordado",
            "question": "Select the grammatically correct sentence for a future plan:",
            "options": [
              "He is starting his new course on Monday.",
              "He is start his new course on Monday.",
              "He starts not his new course on Monday.",
              "He will to start his new course on Monday."
            ],
            "correct": 0,
            "feedback": "La estructura correcta es [sujeto + to be + verbo-ing]: 'He is starting his new course on Monday'."
          }
        ]
      }
    ]
  },
  {
    "id": "stage-4",
    "title": "Etapa 4: Los Conectores",
    "subtitle": "Fluidez y Cohesión",
    "lessons": [
      {
        "id": "lesson-11",
        "title": "Coordinación (And, but, so, yet, or)",
        "theory": "\n          <h2>Conectores Coordinantes: Uniendo Ideas de Igual Peso</h2>\n          <p>Para dejar de hablar con oraciones cortas y primitivas, los <strong>coordinating conjunctions</strong> permiten enlazar dos ideas independientes dentro de una sola oración fluida. La regla mnemotécnica en inglés es <strong>FANBOYS</strong> (For, And, Nor, But, Or, Yet, So).</p>\n\n          <div class=\"formula-box\">\n            [Cláusula Independiente 1] + , [Conector] + [Cláusula Independiente 2]\n          </div>\n\n          <h3>Los 4 Conectores Esenciales</h3>\n          <table>\n            <thead>\n              <tr>\n                <th>Conector</th>\n                <th>Función Lógica</th>\n                <th>Ejemplo</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>And</strong></td>\n                <td>Suma / Adición</td>\n                <td><em>The UI is intuitive, <strong>and</strong> the backend is fast.</em></td>\n              </tr>\n              <tr>\n                <td><strong>But</strong></td>\n                <td>Contraste / Oposición directa</td>\n                <td><em>The feature works well, <strong>but</strong> it needs documentation.</em></td>\n              </tr>\n              <tr>\n                <td><strong>So</strong></td>\n                <td>Causa y Efecto / Consecuencia</td>\n                <td><em>The server was overloaded, <strong>so</strong> we scaled the instances.</em></td>\n              </tr>\n              <tr>\n                <td><strong>Or</strong></td>\n                <td>Alternativa / Elección</td>\n                <td><em>We can refactor now, <strong>or</strong> we can ship next week.</em></td>\n              </tr>\n              <tr>\n                <td><strong>Yet</strong></td>\n                <td>Contraste sorpresivo (similar a <em>sin embargo</em>)</td>\n                <td><em>He had little experience, <strong>yet</strong> he solved the problem.</em></td>\n              </tr>\n            </tbody>\n          </table>\n\n          <div class=\"tip-box\">\n            <strong>Regla de Puntuación:</strong> Cuando unes dos oraciones completas (cada una con su propio sujeto y verbo), se coloca una coma <strong>antes</strong> del conector coordinante.\n          </div>\n        ",
        "examples": [
          {
            "en": "The code passed all tests, so we deployed it to production.",
            "es": "El código pasó todas las pruebas, por lo que lo desplegamos a producción.",
            "note": "So introduce la consecuencia lógica"
          },
          {
            "en": "I wanted to attend the talk, but I had an urgent client call.",
            "es": "Quería asistir a la charla, pero tuve una llamada urgente con un cliente.",
            "note": "But introduce contraste"
          },
          {
            "en": "You can write pure CSS, or you can use a preprocessor.",
            "es": "Puedes escribir CSS puro, o puedes usar un preprocesador.",
            "note": "Or para alternativas"
          },
          {
            "en": "The documentation is brief, yet it explains every critical point.",
            "es": "La documentación es breve, y aun así explica cada punto crítico.",
            "note": "Yet para contraste inesperado"
          },
          {
            "en": "She designed the interface, and he implemented the logic.",
            "es": "Ella diseñó la interfaz y él implementó la lógica.",
            "note": "And para unir cláusulas independientes"
          }
        ],
        "quizBank": [
          {
            "id": "s4-q1",
            "concept": "Conector de contraste (but)",
            "question": "Complete the sentence: 'She studied very hard for the test, ___ she did not pass.'",
            "options": [
              "but",
              "and",
              "or",
              "so that"
            ],
            "correct": 0,
            "feedback": "'But' conecta dos ideas opuestas o contrastantes: estudió duro, pero no aprobó."
          },
          {
            "id": "s4-q2",
            "concept": "Conector de causa y efecto (so)",
            "question": "Which connector indicates a consequence in: 'It started to rain heavily, ___ we stayed home'?",
            "options": [
              "so",
              "but",
              "yet",
              "or"
            ],
            "correct": 0,
            "feedback": "'So' (por lo tanto / así que) introduce el resultado o consecuencia directa de la primera acción."
          },
          {
            "id": "s4-q3",
            "concept": "Puntuación antes de conjunción",
            "question": "Choose the sentence with correct comma placement:",
            "options": [
              "I wanted to go to the concert, but I was too tired.",
              "I wanted to go to the concert but, I was too tired.",
              "I wanted, to go to the concert but I was too tired.",
              "I wanted to go to the concert but I was, too tired."
            ],
            "correct": 0,
            "feedback": "Al unir dos oraciones independientes con 'but', la coma se coloca inmediatamente antes del conector."
          },
          {
            "id": "s4-q4",
            "concept": "Conector de contraste inesperado (yet)",
            "question": "Select the conjunction that expresses contrast similar to 'nevertheless':",
            "options": [
              "yet",
              "and",
              "or",
              "for"
            ],
            "correct": 0,
            "feedback": "'Yet' funciona como conector de contraste formal equivalente a 'sin embargo' o 'aún así'."
          },
          {
            "id": "s4-q5",
            "concept": "Conector de opciones (or)",
            "question": "Complete the sentence: 'Would you like some tea, ___ do you prefer coffee?'",
            "options": [
              "or",
              "so",
              "and",
              "yet"
            ],
            "correct": 0,
            "feedback": "'Or' se utiliza para ofrecer alternativas u opciones."
          }
        ]
      },
      {
        "id": "lesson-12",
        "title": "Subordinación (Although, even though, when, while)",
        "theory": "\n          <h2>Cláusulas Subordinadas: Complejidad y Matiz</h2>\n          <p>La <strong>subordinación</strong> ocurre cuando una cláusula secundaria depende gramaticalmente de una cláusula principal. Usar conectores subordinantes es el paso definitivo hacia un nivel de inglés B2/C1.</p>\n\n          <div class=\"formula-box\">\n            [Conector Subordinante + Cláusula Dependiente], + [Cláusula Principal]<br/>\n            O BIEN:<br/>\n            [Cláusula Principal] + [Conector Subordinante + Cláusula Dependiente]\n          </div>\n\n          <h3>Conectores de Concesión: Although vs. Even though</h3>\n          <table>\n            <thead>\n              <tr>\n                <th>Conector</th>\n                <th>Matiz</th>\n                <th>Ejemplo</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Although / Even though</strong></td>\n                <td>A pesar de que / Aunque (introduce contraste fuerte)</td>\n                <td><em><strong>Although</strong> the task was hard, we finished early.</em></td>\n              </tr>\n              <tr>\n                <td><strong>Because / Since</strong></td>\n                <td>Causa y razón fundamental</td>\n                <td><em>We optimized the query <strong>because</strong> latency was high.</em></td>\n              </tr>\n              <tr>\n                <td><strong>Unless</strong></td>\n                <td>A menos que (equivale a <em>if not</em>)</td>\n                <td><em>We won't ship <strong>unless</strong> all tests pass.</em></td>\n              </tr>\n            </tbody>\n          </table>\n\n          <div class=\"mistake-box\">\n            <strong>Error Común de Coma:</strong> Si el conector subordinante va al inicio de la oración, la coma es <strong>obligatoria</strong> a la mitad. Si va al medio, no se coloca coma:<br/>\n            <em>\"<strong>Although</strong> it rained, we went out.\"</em> (Con coma)<br/>\n            <em>\"We went out <strong>although</strong> it rained.\"</em> (Sin coma)\n          </div>\n        ",
        "examples": [
          {
            "en": "Although the deadline was tight, the team maintained high code quality.",
            "es": "Aunque la fecha límite era ajustada, el equipo mantuvo una alta calidad de código.",
            "note": "Cláusula subordinada inicial con coma"
          },
          {
            "en": "We will not launch the product unless security audits pass.",
            "es": "No lanzaremos el producto a menos que las auditorías de seguridad se aprueben.",
            "note": "Unless = a menos que"
          },
          {
            "en": "Even though he had little preparation, his presentation was brilliant.",
            "es": "A pesar de que tuvo poca preparación, su presentación fue brillante.",
            "note": "Even though para contraste enfático"
          },
          {
            "en": "Since we adopted TypeScript, runtime errors decreased by 40%.",
            "es": "Desde que adoptamos TypeScript, los errores en tiempo de ejecución disminuyeron un 40%.",
            "note": "Since para causa y punto de partida"
          },
          {
            "en": "Call me as soon as the deployment finishes.",
            "es": "Llámame tan pronto como termine el despliegue.",
            "note": "As soon as como conector temporal"
          }
        ],
        "quizBank": [
          {
            "id": "s4-q6",
            "concept": "Conector de concesión (Although)",
            "question": "Complete the sentence: '___ the traffic was bad, we arrived at the airport on time.'",
            "options": [
              "Although",
              "Despite of",
              "Because",
              "However"
            ],
            "correct": 0,
            "feedback": "'Although' introduce una oración subordinada de contraste ('A pesar de que el tráfico estaba pesado...')."
          },
          {
            "id": "s4-q7",
            "concept": "Significado de unless",
            "question": "What does 'unless' mean in: 'You won't improve your English unless you practice daily'?",
            "options": [
              "Except if / If you don't",
              "Because of",
              "In addition to",
              "As soon as"
            ],
            "correct": 0,
            "feedback": "'Unless' significa 'a menos que' o 'si no' (if... not)."
          },
          {
            "id": "s4-q8",
            "concept": "Coma con cláusula subordinada inicial",
            "question": "Choose the sentence with correct punctuation:",
            "options": [
              "Because it was very cold outside, we wore our coats.",
              "Because it was very cold outside we wore our coats.",
              "We wore our coats, because it was very cold outside.",
              "Because, it was very cold outside we wore our coats."
            ],
            "correct": 0,
            "feedback": "Cuando una cláusula subordinada empieza la oración ('Because...'), debe separarse con coma de la principal."
          },
          {
            "id": "s4-q9",
            "concept": "Presente en cláusulas de tiempo",
            "question": "Complete: 'I will call you as soon as I ___ home.'",
            "options": [
              "arrive",
              "will arrive",
              "arrived",
              "have arrived will"
            ],
            "correct": 0,
            "feedback": "En cláusulas temporales con 'as soon as' o 'when', se usa Presente Simple ('arrive'), nunca 'will'."
          },
          {
            "id": "s4-q10",
            "concept": "Estructura de Even though",
            "question": "Select the sentence that uses 'Even though' correctly:",
            "options": [
              "Even though it was raining, the children played outside.",
              "Even though the rain, the children played outside.",
              "Even though of raining, they played outside.",
              "Even though rained, they played outside."
            ],
            "correct": 0,
            "feedback": "'Even though' debe ir seguido de una cláusula completa con sujeto y verbo: 'it was raining'."
          }
        ]
      }
    ]
  },
  {
    "id": "stage-5",
    "title": "Etapa 5: Los Matices",
    "subtitle": "Modales y Tiempos Perfectos",
    "lessons": [
      {
        "id": "lesson-13",
        "title": "Modal Verbs (Can, could, should, must, might)",
        "theory": "\n          <h2>Verbos Modales: Expresando Habilidad, Obligación y Posibilidad</h2>\n          <p>Los <strong>Modal Verbs</strong> son verbos auxiliares que alteran el sentido del verbo principal para expresar capacidad, permiso, consejo, certeza o necesidad.</p>\n\n          <div class=\"formula-box\">\n            REGLA DE ORO: [Sujeto] + [Modal] + [Verbo en forma BASE]<br/>\n            (¡Nunca añadas '-s' en 3ra persona ni uses 'to' después de un modal!)\n          </div>\n\n          <h3>Matriz de Modales Principales</h3>\n          <table>\n            <thead>\n              <tr>\n                <th>Modal</th>\n                <th>Significado / Función</th>\n                <th>Ejemplo</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Can</strong></td>\n                <td>Habilidad presente / Permiso</td>\n                <td><em>She <strong>can</strong> analyze complex datasets.</em></td>\n              </tr>\n              <tr>\n                <td><strong>Could</strong></td>\n                <td>Habilidad pasada / Petición cortés</td>\n                <td><em><strong>Could</strong> you review this code, please?</em></td>\n              </tr>\n              <tr>\n                <td><strong>Should</strong></td>\n                <td>Consejo / Recomendación</td>\n                <td><em>You <strong>should</strong> write unit tests for this module.</em></td>\n              </tr>\n              <tr>\n                <td><strong>Must</strong></td>\n                <td>Obligación estricta / Certeza lógica</td>\n                <td><em>We <strong>must</strong> protect user credentials.</em></td>\n              </tr>\n              <tr>\n                <td><strong>Might / May</strong></td>\n                <td>Probabilidad o posibilidad</td>\n                <td><em>This change <strong>might</strong> cause performance issues.</em></td>\n              </tr>\n            </tbody>\n          </table>\n\n          <div class=\"mistake-box\">\n            <strong>Error Común:</strong> Decir <em>\"He can to speak\"</em> o <em>\"She musts go\"</em>.<br/>\n            <strong>Forma Correcta:</strong> <em>\"He can <strong>speak</strong>\"</em> / <em>\"She must <strong>go</strong>\"</em>.\n          </div>\n        ",
        "examples": [
          {
            "en": "You should optimize the images before uploading them.",
            "es": "Deberías optimizar las imágenes antes de subirlas.",
            "note": "Should para sugerencia o buena práctica"
          },
          {
            "en": "We must follow security protocols at all times.",
            "es": "Debemos seguir los protocolos de seguridad en todo momento.",
            "note": "Must para obligación mandatoria"
          },
          {
            "en": "The migration might take longer than expected.",
            "es": "La migración podría tardar más de lo previsto.",
            "note": "Might para posibilidad"
          },
          {
            "en": "Could you clarify what this function returns?",
            "es": "¿Podrías aclarar qué retorna esta función?",
            "note": "Could para petición profesional cortés"
          },
          {
            "en": "He can configure automated CI/CD pipelines easily.",
            "es": "Él puede configurar canalizaciones automáticas de CI/CD con facilidad.",
            "note": "Can para habilidad técnica"
          }
        ],
        "quizBank": [
          {
            "id": "s5-q1",
            "concept": "Verbo base tras modal",
            "question": "Which sentence is grammatically correct?",
            "options": [
              "She can speak two languages fluently.",
              "She can to speak two languages fluently.",
              "She can speaks two languages fluently.",
              "She cans speak two languages fluently."
            ],
            "correct": 0,
            "feedback": "Los verbos modales van siempre seguidos de la forma base del verbo sin 'to' y no añaden '-s'."
          },
          {
            "id": "s5-q2",
            "concept": "Recomendaciones con should",
            "question": "Choose the modal verb for giving good advice: 'You ___ get more sleep if you are tired.'",
            "options": [
              "should",
              "must have to",
              "might to",
              "can to"
            ],
            "correct": 0,
            "feedback": "'Should' es el modal por excelencia para dar consejos y sugerencias constructivas."
          },
          {
            "id": "s5-q3",
            "concept": "Obligación formal con must",
            "question": "Complete the sentence to express a strict rule: 'All passengers ___ fasten their seatbelts.'",
            "options": [
              "must",
              "might",
              "could",
              "would"
            ],
            "correct": 0,
            "feedback": "'Must' indica obligación estricta o normativa obligatoria."
          },
          {
            "id": "s5-q4",
            "concept": "Expresar posibilidad con might",
            "question": "What does 'might' express in: 'Take an umbrella; it might rain later today'?",
            "options": [
              "Possibility",
              "Certainty",
              "Obligation",
              "Ability"
            ],
            "correct": 0,
            "feedback": "'Might' expresa una posibilidad incierta o probabilidad moderada en el futuro."
          },
          {
            "id": "s5-q5",
            "concept": "Peticiones corteses con Could",
            "question": "Select the most polite request:",
            "options": [
              "Could you please help me with this form?",
              "You must help me with this form!",
              "Help me with this form now.",
              "Can you to help me with this form?"
            ],
            "correct": 0,
            "feedback": "'Could you please...?' es una fórmula cortés y respetuosa en inglés formal y cotidiano."
          }
        ]
      },
      {
        "id": "lesson-14",
        "title": "Present Perfect y Present Perfect Continuous",
        "theory": "\n          <h2>El Puente Entre el Pasado y el Presente</h2>\n          <p>El <strong>Present Perfect</strong> conecta una experiencia o acción del pasado con sus consecuencias en el momento actual. No importa <em>cuándo</em> ocurrió exactamente, sino <em>el impacto que tiene ahora</em>.</p>\n\n          <div class=\"formula-box\">\n            PRESENT PERFECT: [Sujeto] + [have / has] + [Participio Pasado (V3)]<br/>\n            PRESENT PERFECT CONTINUOUS: [Sujeto] + [have / has] been + [Verbo -ING]\n          </div>\n\n          <h3>Since vs. For</h3>\n          <ul>\n            <li><strong>Since + punto específico en el tiempo:</strong> <em>since 2020, since yesterday, since Monday</em>.</li>\n            <li><strong>For + duración de tiempo transcurrido:</strong> <em>for 3 years, for two hours, for a long time</em>.</li>\n          </ul>\n\n          <h3>Diferencia entre Present Perfect Simple y Continuo</h3>\n          <table>\n            <thead>\n              <tr>\n                <th>Tiempo</th>\n                <th>Énfasis Principal</th>\n                <th>Ejemplo</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Present Perfect Simple</strong></td>\n                <td>En el resultado terminado o logro</td>\n                <td><em>I have written three test cases. (Ya están listos)</em></td>\n              </tr>\n              <tr>\n                <td><strong>Present Perfect Continuous</strong></td>\n                <td>En la duración y continuidad de la actividad</td>\n                <td><em>I have been writing tests all morning. (Aún sigo haciéndolo)</em></td>\n              </tr>\n            </tbody>\n          </table>\n        ",
        "examples": [
          {
            "en": "I have worked with React for five years.",
            "es": "He trabajado con React durante cinco años.",
            "note": "For + duración temporal"
          },
          {
            "en": "She has been coding since 8 AM.",
            "es": "Ella ha estado programando desde las 8 AM.",
            "note": "Since + punto de inicio específico"
          },
          {
            "en": "Have you ever deployed to production on a Friday?",
            "es": "¿Alguna vez has desplegado a producción en viernes?",
            "note": "Ever en preguntas de experiencia de vida"
          },
          {
            "en": "The company has grown significantly since 2021.",
            "es": "La empresa ha crecido significativamente desde 2021.",
            "note": "has + participio regular grown"
          },
          {
            "en": "They haven't resolved the critical vulnerability yet.",
            "es": "Ellos aún no han resuelto la vulnerabilidad crítica.",
            "note": "Yet en oraciones negativas"
          }
        ],
        "quizBank": [
          {
            "id": "s5-q6",
            "concept": "Uso de 'for' para duración",
            "question": "Complete the sentence: 'I have lived in this city ___ five years.'",
            "options": [
              "for",
              "since",
              "during",
              "from"
            ],
            "correct": 0,
            "feedback": "Usamos 'for' para indicar un período o cantidad de tiempo total ('five years')."
          },
          {
            "id": "s5-q7",
            "concept": "Uso de 'since' para punto de inicio",
            "question": "Complete the sentence: 'She has been working at this school ___ 2019.'",
            "options": [
              "since",
              "for",
              "in",
              "by"
            ],
            "correct": 0,
            "feedback": "Usamos 'since' para marcar el punto específico en el tiempo en que inició la acción ('since 2019')."
          },
          {
            "id": "s5-q8",
            "concept": "Participio irregular (write → written)",
            "question": "What is the correct past participle of the irregular verb 'write'?",
            "options": [
              "written",
              "wrote",
              "writed",
              "writing"
            ],
            "correct": 0,
            "feedback": "El participio pasado de 'write' es 'written'."
          },
          {
            "id": "s5-q9",
            "concept": "Posición de never en Present Perfect",
            "question": "Choose the grammatically correct sentence with 'never':",
            "options": [
              "I have never seen such a beautiful sunset.",
              "I haven't never seen such a beautiful sunset.",
              "I never have seen such a beautiful sunset.",
              "I has never seen such a beautiful sunset."
            ],
            "correct": 0,
            "feedback": "'Never' se ubica entre el auxiliar 'have' y el participio pasado 'seen'."
          },
          {
            "id": "s5-q10",
            "concept": "Estructura del Present Perfect Continuous",
            "question": "Complete: 'He ___ in the garden all afternoon.'",
            "options": [
              "has been working",
              "have been working",
              "has working",
              "is worked"
            ],
            "correct": 0,
            "feedback": "Para 'He' la estructura es 'has been' + verbo con '-ing': 'has been working'."
          }
        ]
      },
      {
        "id": "lesson-15",
        "title": "Comparativos y Superlativos",
        "theory": "\n          <h2>Comparando Atributos y Rendimiento</h2>\n          <p>Los <strong>comparativos</strong> comparan dos entidades entre sí, mientras que los <strong>superlativos</strong> destacan un elemento como el máximo o mínimo absoluto dentro de un grupo.</p>\n\n          <h3>Reglas de Formación</h3>\n          <table>\n            <thead>\n              <tr>\n                <th>Longitud del Adjetivo</th>\n                <th>Comparativo (+ than)</th>\n                <th>Superlativo (the +)</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>1 sílaba (corto)</td>\n                <td>Añadir <strong>-er</strong> (<em>fast → faster than</em>)</td>\n                <td>Añadir <strong>-est</strong> (<em>the fastest</em>)</td>\n              </tr>\n              <tr>\n                <td>Terminados en -y</td>\n                <td>Cambiar <em>y</em> por <strong>-ier</strong> (<em>easy → easier</em>)</td>\n                <td>Cambiar <em>y</em> por <strong>-iest</strong> (<em>the easiest</em>)</td>\n              </tr>\n              <tr>\n                <td>2 o más sílabas (largo)</td>\n                <td>Usar <strong>more</strong> (<em>more efficient than</em>)</td>\n                <td>Usar <strong>the most</strong> (<em>the most efficient</em>)</td>\n              </tr>\n              <tr>\n                <td>Irregulares clave</td>\n                <td>good → <strong>better</strong> / bad → <strong>worse</strong></td>\n                <td>the <strong>best</strong> / the <strong>worst</strong></td>\n              </tr>\n            </tbody>\n          </table>\n\n          <div class=\"mistake-box\">\n            <strong>Error Común:</strong> Decir <em>\"more faster\"</em> o <em>\"the most best\"</em>.<br/>\n            <strong>Forma Correcta:</strong> <em>\"faster\"</em> / <em>\"the best\"</em> (nunca mezcles 'more/most' con la terminación '-er/-est').\n          </div>\n        ",
        "examples": [
          {
            "en": "Go is faster than Python for high-concurrency tasks.",
            "es": "Go es más rápido que Python para tareas de alta concurrencia.",
            "note": "Adjetivo corto: fast + er + than"
          },
          {
            "en": "This is the most reliable cloud architecture we have tested.",
            "es": "Esta es la arquitectura en la nube más confiable que hemos probado.",
            "note": "Adjetivo largo: the most + reliable"
          },
          {
            "en": "The refactored solution is much better than the original one.",
            "es": "La solución refactorizada es mucho mejor que la original.",
            "note": "Comparativo irregular de good: better"
          },
          {
            "en": "Debugging asynchronous code is more difficult than writing it.",
            "es": "Depurar código asíncrono es más difícil que escribirlo.",
            "note": "Adjetivo largo: more + difficult"
          },
          {
            "en": "She is the most experienced engineer on our team.",
            "es": "Ella es la ingeniera con más experiencia en nuestro equipo.",
            "note": "Superlativo absoluto the most experienced"
          }
        ],
        "quizBank": [
          {
            "id": "s5-q11",
            "concept": "Comparativo irregular (good → better)",
            "question": "What is the comparative form of the adjective 'good'?",
            "options": [
              "better",
              "gooder",
              "more good",
              "best"
            ],
            "correct": 0,
            "feedback": "'Good' es un adjetivo irregular cuyo comparativo es 'better'."
          },
          {
            "id": "s5-q12",
            "concept": "Comparativo de adjetivos largos",
            "question": "Complete the sentence: 'Traveling by plane is usually ___ than traveling by bus.'",
            "options": [
              "more expensive",
              "expensiver",
              "more expensiver",
              "most expensive"
            ],
            "correct": 0,
            "feedback": "Los adjetivos de tres o más sílabas forman el comparativo anteponiendo 'more': 'more expensive'."
          },
          {
            "id": "s5-q13",
            "concept": "Superlativo con adjetivos cortos",
            "question": "Choose the grammatically correct sentence:",
            "options": [
              "This is the fastest train in the country.",
              "This is the most fast train in the country.",
              "This is faster train of all.",
              "This is the more fastest train in the country."
            ],
            "correct": 0,
            "feedback": "Para adjetivos cortos de una sílaba usamos 'the' + adjetivo con '-est': 'the fastest'."
          },
          {
            "id": "s5-q14",
            "concept": "Comparativo de adjetivos en -y",
            "question": "Complete: 'This grammar exercise is ___ than the previous one.'",
            "options": [
              "easier",
              "more easy",
              "easyer",
              "more easier"
            ],
            "correct": 0,
            "feedback": "Los adjetivos de dos sílabas terminados en 'y' cambian la 'y' por 'ier': 'easy' → 'easier'."
          },
          {
            "id": "s5-q15",
            "concept": "Comparativo irregular (bad → worse)",
            "question": "What is the comparative form of the adjective 'bad'?",
            "options": [
              "worse",
              "badder",
              "more bad",
              "worst"
            ],
            "correct": 0,
            "feedback": "'Bad' es irregular: su forma comparativa es 'worse' (y superlativa 'the worst')."
          }
        ]
      }
    ]
  },
  {
    "id": "stage-6",
    "title": "Etapa 6: El Nivel Avanzado",
    "subtitle": "Estructuras Complejas",
    "lessons": [
      {
        "id": "lesson-16",
        "title": "Relative Clauses (Who, which, that)",
        "theory": "\n          <h2>Cláusulas Relativas: Definiendo y Añadiendo Información</h2>\n          <p>Las <strong>Relative Clauses</strong> conectan dos oraciones proporcionando información adicional sobre un sustantivo sin necesidad de iniciar una nueva oración separada.</p>\n\n          <h3>Pronombres Relativos Esenciales</h3>\n          <table>\n            <thead>\n              <tr>\n                <th>Pronombre</th>\n                <th>Se refiere a...</th>\n                <th>Ejemplo</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Who</strong></td>\n                <td>Personas exclusivamente</td>\n                <td><em>The engineer <strong>who</strong> designed the architecture is here.</em></td>\n              </tr>\n              <tr>\n                <td><strong>Which</strong></td>\n                <td>Cosas o animales</td>\n                <td><em>The library <strong>which</strong> handles authentication is open-source.</em></td>\n              </tr>\n              <tr>\n                <td><strong>That</strong></td>\n                <td>Personas o cosas (en cláusulas definitorias)</td>\n                <td><em>The database <strong>that</strong> we chose offers high availability.</em></td>\n              </tr>\n              <tr>\n                <td><strong>Where</strong></td>\n                <td>Lugares físicos o virtuales</td>\n                <td><em>The repository <strong>where</strong> the code resides is private.</em></td>\n              </tr>\n              <tr>\n                <td><strong>Whose</strong></td>\n                <td>Posesión (cuyo / cuya)</td>\n                <td><em>The client <strong>whose</strong> servers went down called today.</em></td>\n              </tr>\n            </tbody>\n          </table>\n        ",
        "examples": [
          {
            "en": "I spoke with the developer who implemented this algorithm.",
            "es": "Hablé con el desarrollador que implementó este algoritmo.",
            "note": "Who para personas"
          },
          {
            "en": "We identified the query which was causing the bottleneck.",
            "es": "Identificamos la consulta que estaba provocando el cuello de botella.",
            "note": "Which para cosas o consultas"
          },
          {
            "en": "This is the data center where our primary instances run.",
            "es": "Este es el centro de datos donde corren nuestras instancias primarias.",
            "note": "Where para ubicaciones"
          },
          {
            "en": "She works for a startup whose mission is ecological restoration.",
            "es": "Ella trabaja para una startup cuya misión es la restauración ecológica.",
            "note": "Whose para posesión"
          },
          {
            "en": "The framework that we selected has active community support.",
            "es": "El framework que seleccionamos tiene soporte activo de la comunidad.",
            "note": "That en cláusula definitoria"
          }
        ],
        "quizBank": [
          {
            "id": "s6-q1",
            "concept": "Pronombre relativo para personas (who)",
            "question": "Complete the sentence: 'The teacher ___ taught us English was very patient.'",
            "options": [
              "who",
              "which",
              "where",
              "whose"
            ],
            "correct": 0,
            "feedback": "Usamos 'who' como pronombre relativo para personas en funciones de sujeto o complemento."
          },
          {
            "id": "s6-q2",
            "concept": "Pronombre relativo para cosas (which)",
            "question": "Complete the sentence: 'The application ___ helps me organize my study schedule is free.'",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correct": 0,
            "feedback": "Usamos 'which' (o 'that') para referirnos a objetos, herramientas o cosas inanimadas."
          },
          {
            "id": "s6-q3",
            "concept": "Pronombre de posesión (whose)",
            "question": "Choose the pronoun for possession: 'The student ___ laptop was broken borrowed one from the library.'",
            "options": [
              "whose",
              "who's",
              "which",
              "whom"
            ],
            "correct": 0,
            "feedback": "'Whose' indica posesión ('cuyo/cuya'): 'The student whose laptop...'."
          },
          {
            "id": "s6-q4",
            "concept": "Cláusula relativa de lugar (where)",
            "question": "Select the sentence with correct relative clause usage:",
            "options": [
              "The library where we study is open until 9:00 PM.",
              "The library who we study is open until 9:00 PM.",
              "The library which we study is open until 9:00 PM.",
              "The library whose we study is open until 9:00 PM."
            ],
            "correct": 0,
            "feedback": "'Where' hace referencia a un lugar físico donde se desarrolla una acción."
          },
          {
            "id": "s6-q5",
            "concept": "Uso de that en defining clauses",
            "question": "Can 'that' replace 'which' in: 'The book which I bought yesterday is very interesting'?",
            "options": [
              "Yes, because it is a defining relative clause without commas.",
              "No, because 'that' can only refer to humans.",
              "No, because 'that' cannot be followed by 'I'.",
              "Yes, but only in formal British English."
            ],
            "correct": 0,
            "feedback": "En las relative clauses definitorias (sin comas), 'that' puede sustituir a 'which' o 'who'."
          }
        ]
      },
      {
        "id": "lesson-17",
        "title": "Gerundios e Infinitivos",
        "theory": "\n          <h2>¿Verb + -ING o Verb + To Infinitive?</h2>\n          <p>Cuando dos verbos van seguidos en una oración en inglés, el segundo verbo debe ir obligatoriamente en <strong>gerundio (-ing)</strong> o en <strong>infinitivo (to + verbo)</strong>, dependiendo estrictamente del primer verbo.</p>\n\n          <h3>Verbos que rigen Gerundio (-ING)</h3>\n          <ul>\n            <li><em>enjoy, avoid, consider, finish, suggest, mind, practice</em>.</li>\n            <li><strong>Ejemplo:</strong> <em>I enjoy <strong>writing</strong> tests.</em> (Nunca: <em>\"enjoy to write\"</em>).</li>\n          </ul>\n\n          <h3>Verbos que rigen Infinitivo (to + Verbo)</h3>\n          <ul>\n            <li><em>decide, want, need, hope, promise, plan, manage, learn</em>.</li>\n            <li><strong>Ejemplo:</strong> <em>We decided <strong>to deploy</strong> tomorrow.</em> (Nunca: <em>\"decided deploying\"</em>).</li>\n          </ul>\n\n          <div class=\"tip-box\">\n            <strong>Regla universal:</strong> Después de CUALQUIER preposición (<em>in, on, at, about, without, before, after</em>), el verbo subsiguiente <strong>siempre va en gerundio (-ing)</strong>:<br/>\n            <em>\"Thank you for <strong>helping</strong> me.\"</em><br/>\n            <em>\"Before <strong>submitting</strong> the PR, run the linter.\"</em>\n          </div>\n        ",
        "examples": [
          {
            "en": "We decided to migrate the monolith to microservices.",
            "es": "Decidimos migrar el monolito a microservicios.",
            "note": "Decide + to infinitive"
          },
          {
            "en": "She avoids writing synchronous blocking calls.",
            "es": "Ella evita escribir llamadas síncronas bloqueantes.",
            "note": "Avoid + gerund (-ing)"
          },
          {
            "en": "Thank you for reviewing my pull request so quickly.",
            "es": "Gracias por revisar mi solicitud de extracción tan rápido.",
            "note": "Preposición 'for' + gerundio 'reviewing'"
          },
          {
            "en": "He managed to fix the production crash within twenty minutes.",
            "es": "Él logró solucionar la caída en producción en veinte minutos.",
            "note": "Manage + to infinitive"
          },
          {
            "en": "I look forward to collaborating with your engineering team.",
            "es": "Espero con entusiasmo colaborar con su equipo de ingeniería.",
            "note": "Look forward to + gerundio 'collaborating'"
          }
        ],
        "quizBank": [
          {
            "id": "s6-q6",
            "concept": "Verbos con to-infinitive",
            "question": "Complete the sentence: 'We agreed ___ the terms of the contract.'",
            "options": [
              "to accept",
              "accepting",
              "accept",
              "to accepting"
            ],
            "correct": 0,
            "feedback": "El verbo 'agree' va seguido de un infinitivo con to: 'agreed to accept'."
          },
          {
            "id": "s6-q7",
            "concept": "Verbos seguidos de gerundio (avoid)",
            "question": "Complete the sentence: 'You should avoid ___ late at night if you want to sleep well.'",
            "options": [
              "eating",
              "to eat",
              "eat",
              "to eating"
            ],
            "correct": 0,
            "feedback": "El verbo 'avoid' (evitar) siempre rige gerundio (-ing): 'avoid eating'."
          },
          {
            "id": "s6-q8",
            "concept": "Gerundio tras preposición",
            "question": "Choose the correct form after a preposition: 'Always wash your hands before ___ dinner.'",
            "options": [
              "eating",
              "to eat",
              "eat",
              "eaten"
            ],
            "correct": 0,
            "feedback": "Cualquier verbo que sigue inmediatamente a una preposición ('before', 'after', 'about') debe ir en gerundio (-ing)."
          },
          {
            "id": "s6-q9",
            "concept": "Verbos de deseo y meta (hope)",
            "question": "Complete: 'She hopes ___ an architect after graduating from university.'",
            "options": [
              "to become",
              "becoming",
              "become",
              "to becoming"
            ],
            "correct": 0,
            "feedback": "'Hope' (esperar / desear) va seguido de infinitivo con to: 'hopes to become'."
          },
          {
            "id": "s6-q10",
            "concept": "Identificar verbos con gerundio",
            "question": "Which of these verbs is followed by a gerund (-ing)?",
            "options": [
              "enjoy",
              "decide",
              "want",
              "hope"
            ],
            "correct": 0,
            "feedback": "'Enjoy' siempre va seguido de gerundio ('enjoy reading', 'enjoy traveling'). Los demás van con to-infinitivo."
          }
        ]
      },
      {
        "id": "lesson-18",
        "title": "Voz Pasiva (Passive Voice)",
        "theory": "\n          <h2>Voz Pasiva: Cuando el Objeto es más Importante que el Sujeto</h2>\n          <p>La <strong>Passive Voice</strong> se utiliza ampliamente en contextos técnicos, formales y periodísticos para poner el foco en <strong>la acción y el resultado</strong> en lugar de quién la realizó.</p>\n\n          <div class=\"formula-box\">\n            FÓRMULA: [Objeto Paciente] + [Verbo To Be (en el tiempo adecuado)] + [Participio Pasado (V3)] (+ by [Agente])\n          </div>\n\n          <h3>Ejemplos de Transformación</h3>\n          <table>\n            <thead>\n              <tr>\n                <th>Tiempo</th>\n                <th>Voz Activa</th>\n                <th>Voz Pasiva</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Presente Simple</td>\n                <td><em>The system logs all requests.</em></td>\n                <td><em>All requests <strong>are logged</strong> by the system.</em></td>\n              </tr>\n              <tr>\n                <td>Pasado Simple</td>\n                <td><em>The team resolved the incident.</em></td>\n                <td><em>The incident <strong>was resolved</strong> yesterday.</em></td>\n              </tr>\n              <tr>\n                <td>Presente Perfecto</td>\n                <td><em>They have deployed the patch.</em></td>\n                <td><em>The patch <strong>has been deployed</strong>.</em></td>\n              </tr>\n              <tr>\n                <td>Modales</td>\n                <td><em>We must protect user passwords.</em></td>\n                <td><em>User passwords <strong>must be protected</strong>.</em></td>\n              </tr>\n            </tbody>\n          </table>\n        ",
        "examples": [
          {
            "en": "All sensitive files are encrypted at rest.",
            "es": "Todos los archivos confidenciales son cifrados en reposo.",
            "note": "Presente pasivo: are + encrypted"
          },
          {
            "en": "The bug was discovered during the automated regression test.",
            "es": "El error fue descubierto durante la prueba de regresión automatizada.",
            "note": "Pasado pasivo: was + discovered"
          },
          {
            "en": "The new API endpoints have been tested thoroughly.",
            "es": "Los nuevos puntos de conexión de la API han sido probados minuciosamente.",
            "note": "Presente perfecto pasivo: have been + tested"
          },
          {
            "en": "User permissions must be validated on every request.",
            "es": "Los permisos de usuario deben ser validados en cada solicitud.",
            "note": "Modal pasivo: must be + validated"
          },
          {
            "en": "The application is hosted on high-availability cloud infrastructure.",
            "es": "La aplicación está alojada en infraestructura en la nube de alta disponibilidad.",
            "note": "is hosted"
          }
        ],
        "quizBank": [
          {
            "id": "s6-q11",
            "concept": "Transformación a Pasiva en Pasado",
            "question": "Convert to passive voice: 'The teacher graded the exams.'",
            "options": [
              "The exams were graded by the teacher.",
              "The exams are graded by the teacher.",
              "The exams has been graded by the teacher.",
              "The exams were grading by the teacher."
            ],
            "correct": 0,
            "feedback": "El objeto plural ('The exams') pasa a ser sujeto, seguido de 'were' + participio pasado ('graded') + agente ('by the teacher')."
          },
          {
            "id": "s6-q12",
            "concept": "Pasiva en Presente Simple",
            "question": "Complete the passive sentence: 'English and Spanish ___ in many international events.'",
            "options": [
              "are spoken",
              "is spoken",
              "speak",
              "are speaking"
            ],
            "correct": 0,
            "feedback": "Sujeto plural compuesto ('English and Spanish') requiere 'are' + participio 'spoken': 'are spoken'."
          },
          {
            "id": "s6-q13",
            "concept": "Pasiva con verbos modales",
            "question": "Complete the modal passive: 'This important document ___ by the manager immediately.'",
            "options": [
              "must be signed",
              "must sign",
              "must signed",
              "must being signed"
            ],
            "correct": 0,
            "feedback": "La pasiva con modales sigue la fórmula [modal + be + participio]: 'must be signed'."
          },
          {
            "id": "s6-q14",
            "concept": "Propósito comunicativo de la Voz Pasiva",
            "question": "Why is the passive voice used in: 'The new hospital was opened yesterday'?",
            "options": [
              "Because the event and outcome are more important than who performed the action.",
              "Because active voice is considered grammatically incorrect.",
              "Because passive sentences are always shorter.",
              "Because passive voice cannot have a subject."
            ],
            "correct": 0,
            "feedback": "La voz pasiva se utiliza cuando el resultado o la acción misma tiene mayor relevancia que la persona que la ejecutó."
          },
          {
            "id": "s6-q15",
            "concept": "Identificar la estructura pasiva",
            "question": "Identify the sentence written in the passive voice:",
            "options": [
              "The house was built in 1995.",
              "My grandfather built the house in 1995.",
              "We are building a new house.",
              "They will build a house next year."
            ],
            "correct": 0,
            "feedback": "'The house was built in 1995' emplea la estructura pasiva [sujeto paciente + was + participio]."
          }
        ]
      },
      {
        "id": "lesson-19",
        "title": "Reported Speech y Noun Clauses",
        "theory": "\n          <h2>Discurso Indirecto: Reportando lo que Otros Dijeron</h2>\n          <p>El <strong>Reported Speech</strong> se utiliza para comunicar lo que otra persona dijo sin citar sus palabras textuales entre comillas. La regla principal es que los tiempos verbales suelen <strong>retroceder un paso hacia el pasado (backshift)</strong>.</p>\n\n          <h3>Tabla de Retroceso de Tiempos (Backshift)</h3>\n          <table>\n            <thead>\n              <tr>\n                <th>Discurso Directo (Palabras exactas)</th>\n                <th>Discurso Indirecto (Reportado)</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Presente Simple: <em>\"I work remotely.\"</em></td>\n                <td>Pasado Simple: <em>He said (that) he <strong>worked</strong> remotely.</em></td>\n              </tr>\n              <tr>\n                <td>Presente Continuo: <em>\"We are deploying.\"</em></td>\n                <td>Pasado Continuo: <em>They said they <strong>were deploying</strong>.</em></td>\n              </tr>\n              <tr>\n                <td>Pasado Simple: <em>\"I solved it.\"</em></td>\n                <td>Pasado Perfecto: <em>She said she <strong>had solved</strong> it.</em></td>\n              </tr>\n              <tr>\n                <td>Will: <em>\"I will help you.\"</em></td>\n                <td>Would: <em>He told me he <strong>would help</strong> me.</em></td>\n              </tr>\n              <tr>\n                <td>Can: <em>\"I can do it.\"</em></td>\n                <td>Could: <em>She said she <strong>could do</strong> it.</em></td>\n              </tr>\n            </tbody>\n          </table>\n\n          <div class=\"tip-box\">\n            <strong>Say vs. Tell:</strong><br/>\n            - <strong>Say (that):</strong> No requiere persona destinataria inmediata (<em>He said that he was busy</em>).<br/>\n            - <strong>Tell + [Persona]:</strong> Requiere obligatoriamente un pronombre de objeto (<em>He told <strong>me</strong> that he was busy</em>).\n          </div>\n        ",
        "examples": [
          {
            "en": "He said that he was analyzing the system logs.",
            "es": "Él dijo que estaba analizando los registros del sistema.",
            "note": "Retroceso de Present Continuous a Past Continuous"
          },
          {
            "en": "She told me that the deployment would finish by 5 PM.",
            "es": "Ella me dijo que el despliegue terminaría para las 5 PM.",
            "note": "Tell + me | will cambia a would"
          },
          {
            "en": "The lead engineer confirmed that they had fixed the bug.",
            "es": "El ingeniero líder confirmó que habían solucionado el error.",
            "note": "Past Simple retrocede a Past Perfect (had fixed)"
          },
          {
            "en": "They mentioned that they couldn't reproduce the issue.",
            "es": "Ellos mencionaron que no podían reproducir el problema.",
            "note": "Can't cambia a couldn't"
          },
          {
            "en": "I asked him if he was familiar with GraphQL.",
            "es": "Le pregunté si estaba familiarizado con GraphQL.",
            "note": "Pregunta indirecta con if"
          }
        ],
        "quizBank": [
          {
            "id": "s6-q16",
            "concept": "Cambio de tiempo (am → was)",
            "question": "Direct: 'I am ready.' → Reported: 'She said that she ___ ready.'",
            "options": [
              "was",
              "is",
              "will be",
              "were"
            ],
            "correct": 0,
            "feedback": "En Reported Speech en pasado, el presente simple 'am' retrocede un tiempo a pasado simple 'was'."
          },
          {
            "id": "s6-q17",
            "concept": "Diferencia entre said y told",
            "question": "Choose between 'said' and 'told': 'Mark ___ us that the schedule had changed.'",
            "options": [
              "told",
              "said",
              "say",
              "tells to"
            ],
            "correct": 0,
            "feedback": "'Told' siempre requiere un pronombre o persona receptora directa ('told us'), mientras que 'said' no lleva objeto directo sin 'to'."
          },
          {
            "id": "s6-q18",
            "concept": "Cambio modal (will → would)",
            "question": "Direct: 'I will call you tomorrow.' → Reported: 'He said he ___ call me.'",
            "options": [
              "would",
              "will",
              "can",
              "shall"
            ],
            "correct": 0,
            "feedback": "En estilo indirecto en pasado, 'will' cambia a 'would': 'He said he would call me'."
          },
          {
            "id": "s6-q19",
            "concept": "Cambio de Pasado Simple a Pasado Perfecto",
            "question": "Direct: 'We tested the prototype.' → Reported: 'They explained that they ___ the prototype.'",
            "options": [
              "had tested",
              "have tested",
              "test",
              "testing"
            ],
            "correct": 0,
            "feedback": "El pasado simple ('tested') retrocede a Pasado Perfecto ('had tested') en reported speech."
          },
          {
            "id": "s6-q20",
            "concept": "Estructura correcta de reported speech",
            "question": "Select the grammatically correct reported speech sentence:",
            "options": [
              "She told me that she loved the city.",
              "She said me that she loved the city.",
              "She told that she loved the city.",
              "She said to me that loved the city."
            ],
            "correct": 0,
            "feedback": "'She told me that...' combina de forma natural el verbo 'told' con el pronombre de objeto 'me'."
          }
        ]
      }
    ]
  },
  {
    "id": "stage-7",
    "title": "Etapa 7: El Examen Final",
    "subtitle": "Condicionales y Fluidez Total",
    "lessons": [
      {
        "id": "lesson-20",
        "title": "Integración de estructuras complejas",
        "theory": "\n          <h2>Fluidez Ejecutiva: Oraciones de 3 y 4 Cláusulas</h2>\n          <p>El dominio definitivo de un idioma consiste en la capacidad de sintetizar ideas conectando causas, condiciones, contrastes y resultados en una sola oración articulada y coherente.</p>\n\n          <div class=\"formula-box\">\n            EJEMPLO DE ARQUITECTURA MULTICLÁUSULA:<br/>\n            [Cláusula Concesiva] + [Cláusula Principal] + [Conector Causal] + [Cláusula de Resultado]\n          </div>\n\n          <h3>Estrategia para Construir Oraciones Avanzadas</h3>\n          <ul>\n            <li><strong>Paso 1 (Premisa):</strong> Establece el contexto inicial (<em>Although we experienced initial latency...</em>).</li>\n            <li><strong>Paso 2 (Acción principal):</strong> Presenta la solución (<em>...the engineering team redesigned the query engine...</em>).</li>\n            <li><strong>Paso 3 (Resultado):</strong> Agrega la consecuencia positiva (<em>...which reduced memory usage by 50% and ensured system stability.</em>).</li>\n          </ul>\n        ",
        "examples": [
          {
            "en": "Although the project was delayed initially, we optimized our workflow and delivered all features before the final deadline.",
            "es": "Aunque el proyecto se retrasó inicialmente, optimizamos nuestro flujo de trabajo y entregamos todas las características antes de la fecha límite final.",
            "note": "Estructura de 3 cláusulas articuladas"
          },
          {
            "en": "Because security is our top priority, we enforce multi-factor authentication, which protects user accounts from unauthorized access.",
            "es": "Debido a que la seguridad es nuestra máxima prioridad, exigimos autenticación multifactor, lo que protege las cuentas de usuario de accesos no autorizados.",
            "note": "Causa + Acción + Cláusula relativa de resultado"
          },
          {
            "en": "If we refactor this component now, we will reduce technical debt, and future integrations will be much smoother.",
            "es": "Si refactorizamos este componente ahora, reduciremos la deuda técnica y las futuras integraciones serán mucho más fluidas.",
            "note": "Condicional + Conector coordinante"
          },
          {
            "en": "While the frontend was being built, the backend team completed the API documentation so that integration could proceed seamlessly.",
            "es": "Mientras se construía el frontend, el equipo de backend completó la documentación de la API para que la integración pudiera avanzar sin problemas.",
            "note": "Contraste temporal + Propósito (so that)"
          }
        ],
        "quizBank": [
          {
            "id": "s7-q1",
            "concept": "Cohesión en oraciones compuestas",
            "question": "Which sentence demonstrates clear and natural clause connection?",
            "options": [
              "Although the storm was strong, we arrived safely because we drove slowly.",
              "Although the storm was strong, but we arrived safely because we drove slowly.",
              "Because the storm was strong although we arrived safely.",
              "The storm was strong although because we arrived."
            ],
            "correct": 0,
            "feedback": "Conecta coherentemente una concesión ('Although...'), una acción principal ('we arrived safely') y una causa ('because we drove slowly')."
          },
          {
            "id": "s7-q2",
            "concept": "Evitar conectores redundantes",
            "question": "What is wrong with the sentence: 'Although it was late, but he continued working'?",
            "options": [
              "You cannot use both 'Although' and 'but' together to express the same contrast.",
              "It should use 'because' instead of 'although'.",
              "The comma is placed in the wrong position.",
              "'Continued' cannot be followed by a gerund."
            ],
            "correct": 0,
            "feedback": "En inglés nunca se combinan 'Although' y 'but' en la misma oración; uno de los dos es redundante."
          },
          {
            "id": "s7-q3",
            "concept": "Conector de propósito (so that)",
            "question": "What is the purpose of 'so that' in: 'We left early so that we wouldn't miss the flight'?",
            "options": [
              "To express purpose or intention (para que)",
              "To indicate strong opposition",
              "To show a passive voice state",
              "To deny a previous claim"
            ],
            "correct": 0,
            "feedback": "'So that' introduce una cláusula de propósito o finalidad: explica el objetivo de la acción principal."
          },
          {
            "id": "s7-q4",
            "concept": "Acciones paralelas en pasado con While",
            "question": "Complete the sentence: 'While Maria was preparing the slides, Carlos ___ the presentation notes.'",
            "options": [
              "was reviewing",
              "reviews",
              "has reviewed",
              "review"
            ],
            "correct": 0,
            "feedback": "Para dos acciones simultáneas continuas en el pasado conectadas por 'While', ambas usan Pasado Continuo: 'was reviewing'."
          },
          {
            "id": "s7-q5",
            "concept": "Claridad y fluidez en oraciones complejas",
            "question": "Select the clearest and most natural complex sentence:",
            "options": [
              "While we were reviewing the documents, we found several errors that needed immediate correction.",
              "We reviewed documents and we found errors and they were bad.",
              "Reviewing documents we found errors and were bad errors.",
              "Because we reviewed although we found errors."
            ],
            "correct": 0,
            "feedback": "Combina armoniosamente una cláusula subordinada de tiempo ('While we were reviewing...'), una oración principal y una cláusula relativa definitoria."
          }
        ]
      },
      {
        "id": "lesson-21",
        "title": "Zero Conditional (Hechos científicos)",
        "theory": "\n          <h2>Zero Conditional: Verdades Universales y Leyes Naturales</h2>\n          <p>El <strong>Zero Conditional</strong> se utiliza para describir hechos científicos, verdades absolutas, reglas inmutables e instrucciones técnicas donde una condición <strong>siempre produce el mismo resultado inevitable</strong>.</p>\n\n          <div class=\"formula-box\">\n            FÓRMULA: IF / WHEN + [Presente Simple], + [Presente Simple]\n          </div>\n\n          <h3>Características Clave</h3>\n          <ul>\n            <li>Tanto la condición como el resultado van en <strong>Present Simple</strong>.</li>\n            <li>En este condicional, <strong>\"If\"</strong> puede sustituirse por <strong>\"When\"</strong> sin alterar el significado, porque el resultado es 100% certero.</li>\n          </ul>\n\n          <div class=\"tip-box\">\n            <strong>Ejemplo técnico:</strong> <em>\"If memory consumption reaches 95%, the system triggers an alert.\"</em> (Regla automática del software).\n          </div>\n        ",
        "examples": [
          {
            "en": "If water reaches 100 degrees Celsius, it boils.",
            "es": "Si el agua alcanza los 100 grados Celsius, hierve.",
            "note": "Ley científica universal"
          },
          {
            "en": "When you press this shortcut, the code formats automatically.",
            "es": "Cuando presionas este atajo, el código se formatea automáticamente.",
            "note": "Regla del sistema: Present Simple en ambas partes"
          },
          {
            "en": "If a user enters an invalid password, the system blocks access.",
            "es": "Si un usuario ingresa una contraseña no válida, el sistema bloquea el acceso.",
            "note": "Condición y consecuencia fija"
          },
          {
            "en": "Ice melts if you heat it.",
            "es": "El hielo se derrite si lo calientas.",
            "note": "Condición colocada en la segunda mitad (sin coma)"
          },
          {
            "en": "If CPU temperatures rise above 90°C, cooling fans run at maximum speed.",
            "es": "Si las temperaturas de la CPU suben de 90°C, los ventiladores funcionan a velocidad máxima.",
            "note": "Regla técnica determinista"
          }
        ],
        "quizBank": [
          {
            "id": "s7-q6",
            "concept": "Estructura del Zero Conditional",
            "question": "Complete the zero conditional sentence: 'If you heat ice, it ___.'",
            "options": [
              "melts",
              "will melt",
              "melted",
              "is melting"
            ],
            "correct": 0,
            "feedback": "En el condicional cero, tanto la condición como el resultado usan Presente Simple: 'melts'."
          },
          {
            "id": "s7-q7",
            "concept": "Tiempos verbales del Zero Conditional",
            "question": "Which verb tense is used in BOTH clauses of the Zero Conditional?",
            "options": [
              "Present Simple",
              "Past Simple",
              "Future with Will",
              "Present Continuous"
            ],
            "correct": 0,
            "feedback": "El Zero Conditional se compone estrictamente de [If + Present Simple, ... Present Simple]."
          },
          {
            "id": "s7-q8",
            "concept": "Causa y efecto automático",
            "question": "Complete: 'When you press the power button, the computer ___ on.'",
            "options": [
              "turns",
              "will turn",
              "turned",
              "has turned"
            ],
            "correct": 0,
            "feedback": "Al tratarse de una reacción automática y certera, se utiliza 'turns' en presente simple."
          },
          {
            "id": "s7-q9",
            "concept": "Intercambiabilidad de If y When",
            "question": "Can 'when' replace 'if' in zero conditional sentences?",
            "options": [
              "Yes, because the outcome happens with certainty every single time.",
              "No, 'when' is only for past tenses.",
              "Yes, but only in negative sentences.",
              "No, because 'if' is mandatory in all conditionals."
            ],
            "correct": 0,
            "feedback": "En el condicional cero, 'if' y 'when' son intercambiables porque describen verdades generales o leyes físicas seguras."
          },
          {
            "id": "s7-q10",
            "concept": "Identificar el Zero Conditional",
            "question": "Select the sentence that represents a true Zero Conditional:",
            "options": [
              "If you mix yellow and blue, you get green.",
              "If you mix yellow and blue, you will get green tomorrow.",
              "If you mixed yellow and blue, you would get green.",
              "If you had mixed yellow and blue, you would have gotten green."
            ],
            "correct": 0,
            "feedback": "'If you mix yellow and blue, you get green' expresa una verdad científica inmutable en presente simple."
          }
        ]
      },
      {
        "id": "lesson-22",
        "title": "First Conditional (Posibilidades futuras)",
        "theory": "\n  <h2>First Conditional: Situaciones Reales y Posibles en el Futuro</h2>\n  <p>El <strong>First Conditional</strong> se utiliza para hablar de situaciones futuras reales que tienen una alta probabilidad de ocurrir si se cumple una condición previa en el presente.</p>\n\n  <div class=\"formula-box\">\n    FÓRMULA BASE: IF + [Presente Simple], + [will / won't / modal] + [Verbo en forma base]\n  </div>\n\n  <div class=\"mistake-box\">\n    <strong>¡CUIDADO con el Error Número 1!</strong><br/>\n    Nunca pongas <em>'will'</em> dentro de la cláusula con <em>'if'</em>.<br/>\n    <strong>Incorrecto:</strong> <em>\"If it <strong>will rain</strong>, we will stay home.\"</em><br/>\n    <strong>Correcto:</strong> <em>\"If it <strong>rains</strong>, we will stay home.\"</em>\n  </div>\n\n  <h3>Variaciones con Verbos Modales</h3>\n  <p>En lugar de <strong>will</strong> (que expresa certeza futura), puedes emplear otros modales para expresar distintos matices:</p>\n  <ul>\n    <li><em>If you finish early, you <strong>can</strong> join the call.</em> (Permiso o habilidad).</li>\n    <li><em>If it rains, we <strong>might</strong> reschedule the trip.</em> (Posibilidad incierta).</li>\n    <li><em>If you feel sick, you <strong>should</strong> rest.</em> (Consejo o sugerencia).</li>\n  </ul>\n\n  <!-- ─── SECCIÓN: CÓMO FORMULAR PREGUNTAS EN FIRST CONDITIONAL ─── -->\n  <h3>¿Cómo formular preguntas en Primer Condicional?</h3>\n  <p>Para hacer preguntas, el auxiliar <strong>will</strong> se invierte con el sujeto, colocándose en la cláusula de resultado:</p>\n\n  <div class=\"formula-box\">\n    <strong>1. Preguntas de Sí o No (Yes/No Questions):</strong><br/>\n    [Will] + [Sujeto] + [Verbo base] + if + [Sujeto] + [Presente Simple]?<br/>\n    <em>Ejemplo: \"<strong>Will you call</strong> me <strong>if you arrive</strong> late?\"</em>\n  </div>\n\n  <div class=\"formula-box\">\n    <strong>2. Preguntas de Información (Wh- Questions):</strong><br/>\n    [Wh- Word] + [will] + [Sujeto] + [Verbo base] + if + [Sujeto] + [Presente Simple]?<br/>\n    <em>Ejemplo: \"<strong>What will you do</strong> <strong>if you miss</strong> the flight?\"</em>\n  </div>\n\n  <div class=\"formula-box\">\n    <strong>3. Comenzando con la condición 'If':</strong><br/>\n    If + [Sujeto] + [Presente Simple], + [will] + [Sujeto] + [Verbo base]?<br/>\n    <em>Ejemplo: \"<strong>If you pass</strong> the exam, <strong>will you celebrate</strong>?\"</em>\n  </div>\n\n  <!-- ─── CENTRO DE RESOLUCIÓN DE DUDAS (FAQ) ─── -->\n  <div class=\"doubts-section\">\n    <div class=\"doubts-header\">\n      <span class=\"doubts-badge\">Centro de Dudas & FAQ</span>\n      <h2>Preguntas Frecuentes sobre el First Conditional</h2>\n      <p>Aclara aquí las dudas más comunes que surgen al formular y responder preguntas con esta estructura condicional.</p>\n    </div>\n\n    <div class=\"doubts-grid\">\n\n      <!-- DUDA 1 -->\n      <article class=\"doubt-card\">\n        <header class=\"doubt-card-header\">\n          <span class=\"doubt-num\">DUDA 01</span>\n          <h4 class=\"doubt-title\">¿Por qué NUNCA se usa \"will\" dentro de la parte con \"If\"?</h4>\n        </header>\n        <p class=\"doubt-body\">\n          En inglés, la palabra <strong>\"if\"</strong> ya establece de por sí que estamos hablando de una hipótesis o condición previa. Por esta regla estricta de la gramática inglesa, el verbo de la condición <strong>debe mantenerse en Presente Simple</strong>, reservando \"will\" exclusivamente para la consecuencia o pregunta.\n        </p>\n        <div class=\"doubt-comparison\">\n          <div class=\"comparison-box wrong\">\n            <span class=\"comparison-label\">❌ Error común</span>\n            <em>\"If you <strong>will practice</strong>, will you improve?\"</em>\n          </div>\n          <div class=\"comparison-box correct\">\n            <span class=\"comparison-label\">✅ Forma correcta</span>\n            <em>\"If you <strong>practice</strong>, will you improve?\"</em>\n          </div>\n        </div>\n      </article>\n\n      <!-- DUDA 2 -->\n      <article class=\"doubt-card\">\n        <header class=\"doubt-card-header\">\n          <span class=\"doubt-num\">DUDA 02</span>\n          <h4 class=\"doubt-title\">¿Cómo responder de forma natural a una pregunta en First Conditional?</h4>\n        </header>\n        <p class=\"doubt-body\">\n          Puedes responder usando una <strong>respuesta corta</strong> (muy común en conversaciones ágiles) o una <strong>oración completa</strong> que reafirme la condición:\n        </p>\n        <div class=\"answers-guide-box\">\n          <span class=\"answers-guide-title\">Respuestas Cortas (Short Answers):</span>\n          <div class=\"answers-chips\">\n            <span class=\"answer-chip\">Yes, I will.</span>\n            <span class=\"answer-chip\">No, I won't.</span>\n            <span class=\"answer-chip\">Yes, she will.</span>\n            <span class=\"answer-chip\">No, they won't.</span>\n          </div>\n        </div>\n        <div class=\"answers-guide-box\" style=\"margin-top: 0.75rem;\">\n          <span class=\"answers-guide-title\">Respuestas Completas (Full Answers):</span>\n          <p style=\"margin: 0.25rem 0 0; font-size: 0.88rem; color: #cbd5e1;\">\n            • <em>\"If it rains tomorrow, <strong>I will stay at home</strong>.\"</em><br/>\n            • <em>\"<strong>I will buy the laptop</strong> if I save enough money.\"</em>\n          </p>\n        </div>\n      </article>\n\n      <!-- DUDA 3 -->\n      <article class=\"doubt-card\">\n        <header class=\"doubt-card-header\">\n          <span class=\"doubt-num\">DUDA 03</span>\n          <h4 class=\"doubt-title\">¿Cuándo se debe poner coma (,) en la oración?</h4>\n        </header>\n        <p class=\"doubt-body\">\n          La regla de la coma depende exclusivamente de cuál cláusula coloques primero:\n        </p>\n        <ul>\n          <li><strong>Si empiezas con IF:</strong> La condición va seguida obligatoriamente de una <strong>coma</strong>.<br/>\n          <em>Ejemplo: \"If you practice every day<strong>,</strong> will you speak fluently?\"</em></li>\n          <li><strong>Si empiezas con la pregunta (WILL):</strong> <strong>NO</strong> se utiliza coma.<br/>\n          <em>Ejemplo: \"Will you speak fluently if you practice every day?\"</em></li>\n        </ul>\n      </article>\n\n      <!-- DUDA 4 -->\n      <article class=\"doubt-card\">\n        <header class=\"doubt-card-header\">\n          <span class=\"doubt-num\">DUDA 04</span>\n          <h4 class=\"doubt-title\">¿Se pueden usar modales como \"can\" o \"should\" en las preguntas?</h4>\n        </header>\n        <p class=\"doubt-body\">\n          ¡Sí! Si en lugar de una certeza absoluta (\"will\") deseas preguntar por <strong>capacidad, permiso o consejo</strong>, sustituyes \"will\" por el modal correspondiente:\n        </p>\n        <div class=\"doubt-comparison\">\n          <div class=\"comparison-box correct\">\n            <span class=\"comparison-label\">Preguntar por habilidad / permiso</span>\n            <em>\"<strong>Can I leave</strong> early if I finish my work?\"</em>\n          </div>\n          <div class=\"comparison-box correct\">\n            <span class=\"comparison-label\">Preguntar por un consejo</span>\n            <em>\"<strong>Should we take</strong> a taxi if it is late?\"</em>\n          </div>\n        </div>\n      </article>\n\n      <!-- DUDA 5 -->\n      <article class=\"doubt-card\">\n        <header class=\"doubt-card-header\">\n          <span class=\"doubt-num\">DUDA 05</span>\n          <h4 class=\"doubt-title\">¿Cuál es la diferencia entre preguntas de Zero y First Conditional?</h4>\n        </header>\n        <p class=\"doubt-body\">\n          La diferencia radica en si la situación es una <strong>ley universal fija</strong> o una <strong>posibilidad futura real</strong>:\n        </p>\n        <div class=\"doubt-comparison\">\n          <div class=\"comparison-box\" style=\"background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.25); color: #c7d2fe;\">\n            <span class=\"comparison-label\" style=\"color: #a5b4fc;\">Zero Conditional (Verdad universal)</span>\n            <em>\"Does ice melt if you heat it?\"</em><br/>\n            <small style=\"color: var(--color-text-dim);\">Siempre ocurre, 100% garantizado por la física.</small>\n          </div>\n          <div class=\"comparison-box\" style=\"background: rgba(6, 182, 212, 0.08); border: 1px solid rgba(6, 182, 212, 0.25); color: #a5f3fc;\">\n            <span class=\"comparison-label\" style=\"color: #67e8f9;\">First Conditional (Posibilidad futura)</span>\n            <em>\"Will you buy ice if you go to the store?\"</em><br/>\n            <small style=\"color: var(--color-text-dim);\">Situación futura contingente que puede suceder o no.</small>\n          </div>\n        </div>\n      </article>\n\n    </div>\n  </div>\n",
        "examples": [
          {
            "en": "If we deploy this optimization, latency will decrease by 30%.",
            "es": "Si desplegamos esta optimización, la latencia se reducirá en un 30%.",
            "note": "If + present simple, will + verbo base"
          },
          {
            "en": "If you don't save your changes, you will lose your work.",
            "es": "Si no guardas tus cambios, perderás tu trabajo.",
            "note": "Negación en presente simple con don't"
          },
          {
            "en": "We will reach our quarterly goal if the team stays focused.",
            "es": "Alcanzaremos nuestra meta trimestral si el equipo se mantiene enfocado.",
            "note": "Cláusula condicional al final sin coma"
          },
          {
            "en": "If the client approves the proposal, we can start next Monday.",
            "es": "Si el cliente aprueba la propuesta, podemos comenzar el próximo lunes.",
            "note": "Uso de 'can' en lugar de 'will'"
          },
          {
            "en": "What will you do if the server goes down tonight?",
            "es": "¿Qué harás si el servidor se cae esta noche?",
            "note": "Pregunta condicional con What will you do"
          }
        ],
        "quizBank": [
          {
            "id": "s7-q11",
            "concept": "Cláusula con If en Presente Simple",
            "question": "Complete the sentence: 'If you ___ every day, you will improve your English fluency.'",
            "options": [
              "practice",
              "will practice",
              "practiced",
              "are practicing"
            ],
            "correct": 0,
            "feedback": "En el First Conditional, la cláusula que lleva 'if' siempre se conjuga en Presente Simple ('practice'), nunca con 'will'."
          },
          {
            "id": "s7-q12",
            "concept": "Error común: 'will' en la cláusula con If",
            "question": "Which sentence contains a grammatical ERROR?",
            "options": [
              "If it will rain tomorrow, we will cancel the trip.",
              "If it rains tomorrow, we will cancel the trip.",
              "We will cancel the trip if it rains tomorrow.",
              "If it rains tomorrow, we might cancel the trip."
            ],
            "correct": 0,
            "feedback": "Es un error gramatical grave incluir 'will' dentro de la condición 'If'. La forma correcta es 'If it rains tomorrow'."
          },
          {
            "id": "s7-q13",
            "concept": "Cláusula de resultado con Will",
            "question": "Complete: 'If you don't study for the exam, you ___ get a low score.'",
            "options": [
              "will",
              "is",
              "did",
              "was"
            ],
            "correct": 0,
            "feedback": "La consecuencia en el First Conditional se formula con 'will' + verbo base: 'you will get'."
          },
          {
            "id": "s7-q14",
            "concept": "Preguntas en First Conditional",
            "question": "Complete the question: 'What ___ you do if you get the job offer?'",
            "options": [
              "will",
              "did",
              "are",
              "have"
            ],
            "correct": 0,
            "feedback": "Las preguntas en First Conditional siguen la estructura: [Wh- + will + sujeto + verbo base]: 'What will you do...?'."
          },
          {
            "id": "s7-q15",
            "concept": "Uso de modales en el resultado",
            "question": "Can we use 'can' or 'might' instead of 'will' in the result clause?",
            "options": [
              "Yes, to express ability, permission, or lower probability.",
              "No, only 'will' is allowed in the First Conditional.",
              "Yes, but only in informal spoken English.",
              "No, modals can only be used in the Third Conditional."
            ],
            "correct": 0,
            "feedback": "Los modales como 'can', 'might' o 'may' son perfectamente válidos en la consecuencia del First Conditional para modular certeza o capacidad."
          }
        ]
      }
    ]
  }
];

// Helper para obtener una lección por ID
export const getLessonById = (lessonId) => {
  for (const stage of stages) {
    const lesson = stage.lessons.find((l) => l.id === lessonId);
    if (lesson) return lesson;
  }
  return null;
};

// Helper para obtener todas las lecciones planas en orden de progresión
export const getAllLessons = () => {
  return stages.flatMap((stage) => stage.lessons);
};
