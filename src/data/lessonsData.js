// src/data/lessonsData.js

export const stages = [
  {
    id: "stage-1",
    title: "Etapa 1: Los Ladrillos",
    subtitle: "Fundamentos Absolutos",
    lessons: [
      {
        id: "lesson-1",
        title: "Estructura básica de una oración (SVO)",
        theory: `
          <h2>La Regla de Oro: Sujeto + Verbo + Objeto (SVO)</h2>
          <p>A diferencia del español, donde el orden de las palabras puede variar y muchas veces omitimos el sujeto (como cuando decimos <em>"tengo hambre"</em> o <em>"está lloviendo"</em>), en inglés <strong>el orden es estricto y el sujeto casi nunca se puede omitir</strong>.</p>
          
          <div class="formula-box">
            FÓRMULA BASE: [Sujeto] + [Verbo] + [Objeto / Complemento]
          </div>

          <h3>1. La Obligatoriedad del Sujeto</h3>
          <p>En inglés cada oración declarativa necesita un sujeto explícito. Si en español no hay un sujeto humano visible, en inglés usamos el pronombre impersonal <strong>"It"</strong>.</p>
          
          <div class="mistake-box">
            <strong>Error Común:</strong> Decir <em>"Is raining"</em> o <em>"Is important"</em>.<br/>
            <strong>Forma Correcta:</strong> <em>"<strong>It</strong> is raining"</em> / <em>"<strong>It</strong> is important"</em>.
          </div>

          <h3>2. Componentes de la Estructura SVO</h3>
          <table>
            <thead>
              <tr>
                <th>Sujeto (¿Quién?)</th>
                <th>Verbo (¿Qué hace?)</th>
                <th>Objeto / Complemento (¿Qué o dónde?)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Sarah</strong></td>
                <td>studies</td>
                <td>English every morning.</td>
              </tr>
              <tr>
                <td><strong>They</strong></td>
                <td>build</td>
                <td>modern software.</td>
              </tr>
              <tr>
                <td><strong>We</strong></td>
                <td>live</td>
                <td>in a vibrant city.</td>
              </tr>
              <tr>
                <td><strong>The company</strong></td>
                <td>launched</td>
                <td>a new product yesterday.</td>
              </tr>
            </tbody>
          </table>

          <h3>3. Posición de los Adjetivos Calificativos</h3>
          <p>En inglés los adjetivos van <strong>antes</strong> del sustantivo que describen, nunca después como en español:</p>
          <ul>
            <li>En español: <em>Un coche rojo</em> → En inglés: <em>A <strong>red</strong> car</em>.</li>
            <li>En español: <em>Una reunión importante</em> → En inglés: <em>An <strong>important</strong> meeting</em>.</li>
          </ul>

          <div class="tip-box">
            <strong>Consejo para la fluidez:</strong> Cuando pienses en inglés, visualiza primero quién realiza la acción (S), luego qué acción ocurre (V) y por último el destinatario o lugar (O).
          </div>
        `,
        examples: [
          { en: "Alex designs clean user interfaces.", es: "Alex diseña interfaces de usuario limpias.", note: "Sujeto: Alex | Verbo: designs | Objeto: clean interfaces" },
          { en: "It is necessary to practice daily.", es: "Es necesario practicar a diario.", note: "Uso de 'It' como sujeto impersonal" },
          { en: "We received the project feedback yesterday.", es: "Nosotros recibimos la retroalimentación del proyecto ayer.", note: "Orden S + V + O + Tiempo" },
          { en: "She drinks black coffee every morning.", es: "Ella bebe café solo cada mañana.", note: "Adjetivo 'black' antes de 'coffee'" },
          { en: "The team resolved the critical bug quickly.", es: "El equipo resolvió el error crítico rápidamente.", note: "Adjetivo 'critical' antes de 'bug'" },
          { en: "They bought a comfortable house near the lake.", es: "Ellos compraron una casa cómoda cerca del lago.", note: "SVO con complemento de lugar" }
        ],
        quizBank: [
          {
            id: "s1-q1",
            question: "Choose the grammatically correct sentence in English:",
            options: [
              "Is raining outside right now.",
              "It is raining outside right now.",
              "Raining is outside right now.",
              "Does rain outside right now."
            ],
            correct: 1,
            feedback: "En inglés nunca omitimos el sujeto. Al hablar del clima o situaciones impersonales, es indispensable utilizar el pronombre 'It'."
          },
          {
            id: "s1-q2",
            question: "Identify the correct word order for this thought: 'Ellos compraron un auto nuevo.'",
            options: [
              "They bought a car new.",
              "Bought they a new car.",
              "They bought a new car.",
              "A new car they bought."
            ],
            correct: 2,
            feedback: "La regla SVO exige: Sujeto (They) + Verbo (bought) + Objeto (a new car). Además, el adjetivo 'new' debe preceder al sustantivo 'car'."
          },
          {
            id: "s1-q3",
            question: "Which component is missing in the sentence: '___ works at the hospital.'?",
            options: [
              "An adjective",
              "A subject pronoun",
              "A preposition",
              "An adverb"
            ],
            correct: 1,
            feedback: "La oración cuenta con verbo (works) y complemento (at the hospital), pero carece del Sujeto (ej. He, She, Doctor Smith), el cual es obligatorio."
          },
          {
            id: "s1-q4",
            question: "Select the sentence with correct adjective placement:",
            options: [
              "We solved a problem complicated.",
              "We solved complicated a problem.",
              "We solved a complicated problem.",
              "A problem complicated we solved."
            ],
            correct: 2,
            feedback: "Los adjetivos en inglés se colocan inmediatamente antes del sustantivo que modifican: 'a complicated problem'."
          },
          {
            id: "s1-q5",
            question: "Why is 'Is important to understand the concept' incorrect?",
            options: [
              "Because 'important' should be at the end.",
              "Because the sentence is missing the dummy subject 'It'.",
              "Because 'understand' must always be in past tense.",
              "Because 'is' cannot be followed by an adjective."
            ],
            correct: 1,
            feedback: "En inglés no existen oraciones sin sujeto. La forma correcta es 'It is important to understand the concept'."
          }
        ]
      },
      {
        id: "lesson-2",
        title: "Pronombres personales y de objeto",
        theory: `
          <h2>Sujeto vs. Objeto: ¿Quién hace la acción y quién la recibe?</h2>
          <p>En inglés existen dos tipos fundamentales de pronombres personales: los <strong>Subject Pronouns</strong> (que ejecutan la acción del verbo) y los <strong>Object Pronouns</strong> (que reciben la acción o van después de una preposición).</p>
          
          <div class="formula-box">
            [Subject Pronoun] + VERBO + [Object Pronoun] / [Preposición + Object Pronoun]
          </div>

          <h3>Tabla Comparativa Integral</h3>
          <table>
            <thead>
              <tr>
                <th>Persona Gramatical</th>
                <th>Sujeto (Ejecuta)</th>
                <th>Objeto (Recibe)</th>
                <th>Ejemplo Combinado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1ra singular</td>
                <td><strong>I</strong> (Yo)</td>
                <td><strong>me</strong> (a mí / me)</td>
                <td><em>She called <strong>me</strong>.</em></td>
              </tr>
              <tr>
                <td>2da singular/plural</td>
                <td><strong>You</strong> (Tú / Ustedes)</td>
                <td><strong>you</strong> (a ti / a ustedes)</td>
                <td><em>I respect <strong>you</strong>.</em></td>
              </tr>
              <tr>
                <td>3ra singular (masculino)</td>
                <td><strong>He</strong> (Él)</td>
                <td><strong>him</strong> (a él / le / lo)</td>
                <td><em>We invited <strong>him</strong>.</em></td>
              </tr>
              <tr>
                <td>3ra singular (femenino)</td>
                <td><strong>She</strong> (Ella)</td>
                <td><strong>her</strong> (a ella / le / la)</td>
                <td><em>They listened to <strong>her</strong>.</em></td>
              </tr>
              <tr>
                <td>3ra singular (neutro)</td>
                <td><strong>It</strong> (Eso / Ello)</td>
                <td><strong>it</strong> (lo / la)</td>
                <td><em>I tested <strong>it</strong>.</em></td>
              </tr>
              <tr>
                <td>1ra plural</td>
                <td><strong>We</strong> (Nosotros)</td>
                <td><strong>us</strong> (a nosotros / nos)</td>
                <td><em>He joined <strong>us</strong>.</em></td>
              </tr>
              <tr>
                <td>3ra plural</td>
                <td><strong>They</strong> (Ellos)</td>
                <td><strong>them</strong> (a ellos / los / las)</td>
                <td><em>I emailed <strong>them</strong>.</em></td>
              </tr>
            </tbody>
          </table>

          <h3>Regla Clave: Después de Preposiciones</h3>
          <p>Cualquier pronombre que aparezca después de una preposición (<em>for, with, about, to, between, from</em>) debe ser <strong>obligatoriamente un pronombre de objeto</strong>.</p>
          
          <div class="mistake-box">
            <strong>Error Común:</strong> Decir <em>"This gift is for I"</em> o <em>"Between you and I"</em>.<br/>
            <strong>Forma Correcta:</strong> <em>"This gift is for <strong>me</strong>"</em> / <em>"Between you and <strong>me</strong>"</em>.
          </div>
        `,
        examples: [
          { en: "He called her yesterday to explain the situation.", es: "Él la llamó a ella ayer para explicarle la situación.", note: "He (sujeto) | her (objeto directo)" },
          { en: "Could you send the report to us?", es: "¿Podrías enviarnos el informe a nosotros?", note: "to (preposición) + us (objeto)" },
          { en: "I told him the truth, but he didn't believe me.", es: "Yo le dije a él la verdad, pero él no me creyó a mí.", note: "Contraste entre I/me y he/him" },
          { en: "They invited us to their presentation.", es: "Ellos nos invitaron a nosotros a su presentación.", note: "They (sujeto) | us (objeto)" },
          { en: "This problem is difficult, but we will solve it.", es: "Este problema es difícil, pero nosotros lo resolveremos.", note: "it (pronombre de objeto neutro)" },
          { en: "She works with them on open-source projects.", es: "Ella trabaja con ellos en proyectos de código abierto.", note: "with (preposición) + them" }
        ],
        quizBank: [
          {
            id: "s1-q6",
            question: "Complete the sentence: 'Our manager gave ___ the new assignment.'",
            options: ["we", "us", "they", "she"],
            correct: 1,
            feedback: "El pronombre está recibiendo la acción del verbo 'gave', por lo que requerimos el pronombre de objeto 'us' (a nosotros)."
          },
          {
            id: "s1-q7",
            question: "Select the sentence with the correct pronoun usage:",
            options: [
              "Can you send this email to she?",
              "Can you send this email to her?",
              "Can you send this email to they?",
              "Can you send this email to I?"
            ],
            correct: 1,
            feedback: "Después de preposiciones como 'to', siempre se debe usar el pronombre de objeto: 'to her'."
          },
          {
            id: "s1-q8",
            question: "Complete the sentence: 'Mark is absent today because ___ is sick.'",
            options: ["him", "he", "his", "them"],
            correct: 1,
            feedback: "En la cláusula 'because ___ is sick', necesitamos un Sujeto que conjugue con el verbo 'is'. La forma correcta es 'he'."
          },
          {
            id: "s1-q9",
            question: "Which pronoun correctly completes: 'Between you and ___, this project is almost ready.'?",
            options: ["I", "me", "he", "we"],
            correct: 1,
            feedback: "'Between' es una preposición. Por regla gramatical estricta, las preposiciones exigen pronombres de objeto: 'Between you and me'."
          },
          {
            id: "s1-q10",
            question: "Choose the correct replacement: 'I saw Sarah and David yesterday' → 'I saw ___ yesterday.'",
            options: ["they", "them", "their", "us"],
            correct: 1,
            feedback: "'Sarah and David' es un objeto en tercera persona plural. El pronombre de objeto correspondiente es 'them'."
          }
        ]
      },
      {
        id: "lesson-3",
        title: "Verbo To Be (Ser / Estar)",
        theory: `
          <h2>El Verbo To Be: La Piedra Angular del Idioma</h2>
          <p>El verbo <strong>to be</strong> es el más versátil e irregular del idioma inglés. Corresponde tanto a <em>ser</em> como a <em>estar</em> en español, determinándose el significado exacto según el contexto de la oración.</p>
          
          <div class="formula-box">
            AFIRMATIVO: [Sujeto] + [am / is / are] + [Complemento]<br/>
            NEGATIVO: [Sujeto] + [am / is / are] + not + [Complemento]<br/>
            INTERROGATIVO: [Am / Is / Are] + [Sujeto] + [Complemento]?
          </div>

          <h3>Conjugación en Presente Simple</h3>
          <table>
            <thead>
              <tr>
                <th>Pronombre</th>
                <th>Forma Completa</th>
                <th>Contracción Natural</th>
                <th>Negación Común</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>I</strong></td>
                <td>am</td>
                <td>I'm</td>
                <td>I'm not</td>
              </tr>
              <tr>
                <td><strong>You</strong></td>
                <td>are</td>
                <td>You're</td>
                <td>You aren't / You're not</td>
              </tr>
              <tr>
                <td><strong>He / She / It</strong></td>
                <td>is</td>
                <td>He's / She's / It's</td>
                <td>He isn't / He's not</td>
              </tr>
              <tr>
                <td><strong>We</strong></td>
                <td>are</td>
                <td>We're</td>
                <td>We aren't / We're not</td>
              </tr>
              <tr>
                <td><strong>They</strong></td>
                <td>are</td>
                <td>They're</td>
                <td>They aren't / They're not</td>
              </tr>
            </tbody>
          </table>

          <h3>Usos Idiomáticos Críticos: ¿Ser o Tener?</h3>
          <p>Un error muy extendido entre hispanohablantes es traducir literalmente el verbo <em>tener</em> cuando en inglés se utiliza <strong>to be</strong>:</p>
          
          <div class="mistake-box">
            <strong>Edad:</strong> No decimos <em>"I have 25 years"</em>. Decimos <em>"I <strong>am</strong> 25 years old"</em>.<br/>
            <strong>Sensaciones físicas:</strong> No decimos <em>"I have hungry/cold"</em>. Decimos <em>"I <strong>am</strong> hungry / cold / thirsty"</em>.<br/>
            <strong>Clima:</strong> No decimos <em>"Makes hot"</em>. Decimos <em>"<strong>It is</strong> hot today"</em>.
          </div>

          <h3>Inversión en Preguntas</h3>
          <p>Para formular preguntas, el verbo pasa al primer lugar sin necesidad de auxiliares externos:</p>
          <ul>
            <li>Afirmación: <em>You are ready.</em></li>
            <li>Pregunta: <em><strong>Are</strong> you ready?</em></li>
            <li>Afirmación: <em>She is our new engineer.</em></li>
            <li>Pregunta: <em><strong>Is</strong> she our new engineer?</em></li>
          </ul>
        `,
        examples: [
          { en: "I am ready for the technical interview.", es: "Estoy listo para la entrevista técnica.", note: "To be como estado (estar)" },
          { en: "She is a skilled software architect.", es: "Ella es una arquitecta de software experimentada.", note: "To be como identidad profesional (ser)" },
          { en: "He is 28 years old.", es: "Él tiene 28 años.", note: "Uso de 'is' para expresar la edad" },
          { en: "Are you familiar with this database system?", es: "¿Estás familiarizado con este sistema de bases de datos?", note: "Pregunta con inversión Are + you" },
          { en: "It is very cold in the server room.", es: "Hace mucho frío en la sala de servidores.", note: "Uso de 'It is' para temperatura" },
          { en: "We are not worried about the deadline.", es: "No estamos preocupados por la fecha límite.", note: "Forma negativa 'are not'" },
          { en: "They are currently in London for the conference.", es: "Ellos están actualmente en Londres para la conferencia.", note: "Ubicación espacial" }
        ],
        quizBank: [
          {
            id: "q1",
            question: "Complete the sentence: 'She ___ my best colleague at work.'",
            options: ["am", "is", "are", "be"],
            correct: 1,
            feedback: "Con 'She' (tercera persona del singular) siempre se utiliza la forma 'is'."
          },
          {
            id: "q2",
            question: "Which sentence expresses age correctly in English?",
            options: [
              "I have 24 years old.",
              "I am 24 years old.",
              "I has 24 years old.",
              "I make 24 years old."
            ],
            correct: 1,
            feedback: "En inglés, la edad se concibe como un estado de ser, por lo que se utiliza el verbo 'To Be': 'I am 24 years old'."
          },
          {
            id: "q3",
            question: "Choose the correct negative form: 'We ___ ready for the deployment yet.'",
            options: ["am not", "isn't", "aren't", "not are"],
            correct: 2,
            feedback: "Con 'We' (primera persona plural) la forma negativa correcta es 'aren't' o 'are not'."
          },
          {
            id: "q4",
            question: "How do you correctly ask if someone is tired?",
            options: [
              "Do you are tired?",
              "Are you tired?",
              "You are tired?",
              "Is you tired?"
            ],
            correct: 1,
            feedback: "El verbo 'To Be' no requiere el auxiliar 'do'. Se invierte el orden colocando el verbo al principio: 'Are you tired?'."
          },
          {
            id: "q5",
            question: "Select the sentence with the correct grammar:",
            options: [
              "The servers is offline.",
              "The servers are offline.",
              "The servers am offline.",
              "The servers be offline."
            ],
            correct: 1,
            feedback: "'The servers' es un sustantivo plural (equivalente al pronombre 'they'), por lo cual requiere el verbo en plural 'are'."
          }
        ]
      },
      {
        id: "lesson-4",
        title: "Presente Simple y la Tercera Persona",
        theory: `
          <h2>Presente Simple: Hábitos, Hechos y Rutinas</h2>
          <p>El <strong>Present Simple</strong> se utiliza para describir verdades universales, rutinas diarias y estados permanentes. No se usa para describir lo que estás haciendo en este instante (para eso se usa el Presente Continuo).</p>

          <div class="formula-box">
            AFIRMATIVO: [Sujeto] + [Verbo base (+s/es para He/She/It)] + [Complemento]<br/>
            NEGATIVO: [Sujeto] + [do not / does not] + [Verbo base] + [Complemento]<br/>
            PREGUNTA: [Do / Does] + [Sujeto] + [Verbo base] + [Complemento]?
          </div>

          <h3>La Regla de la 3ra Persona Singular (He, She, It)</h3>
          <p>En oraciones afirmativas, cuando el sujeto es <strong>He</strong>, <strong>She</strong> o <strong>It</strong>, el verbo sufre una modificación obligatoria al final:</p>
          
          <table>
            <thead>
              <tr>
                <th>Terminación del Verbo</th>
                <th>Regla Ortográfica</th>
                <th>Ejemplo Base → 3ra Persona</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mayoría de verbos</td>
                <td>Añadir <strong>-s</strong></td>
                <td>work → <strong>works</strong> / eat → <strong>eats</strong></td>
              </tr>
              <tr>
                <td>Terminados en -ch, -sh, -ss, -x, -o</td>
                <td>Añadir <strong>-es</strong></td>
                <td>watch → <strong>watches</strong> / go → <strong>goes</strong></td>
              </tr>
              <tr>
                <td>Consonante + <strong>y</strong></td>
                <td>Cambiar <em>y</em> por <strong>-ies</strong></td>
                <td>study → <strong>studies</strong> / fly → <strong>flies</strong></td>
              </tr>
              <tr>
                <td>Vocal + <strong>y</strong></td>
                <td>Solo añadir <strong>-s</strong></td>
                <td>play → <strong>plays</strong> / buy → <strong>buys</strong></td>
              </tr>
            </tbody>
          </table>

          <h3>Los Auxiliares DO y DOES en Negación y Pregunta</h3>
          <p>Cuando usamos <strong>does</strong> o <strong>doesn't</strong>, el auxiliar ya absorbe la 3ra persona. Por tanto, <strong>el verbo principal vuelve a su forma base</strong>.</p>
          
          <div class="mistake-box">
            <strong>Error Común:</strong> Decir <em>"He doesn't works"</em> o <em>"Does she speaks English?"</em>.<br/>
            <strong>Forma Correcta:</strong> <em>"He doesn't <strong>work</strong>"</em> / <em>"Does she <strong>speak</strong> English?"</em>.
          </div>
        `,
        examples: [
          { en: "He develops modern web applications.", es: "Él desarrolla aplicaciones web modernas.", note: "3ra persona singular: develop + s" },
          { en: "She watches tutorials to improve her skills.", es: "Ella mira tutoriales para mejorar sus habilidades.", note: "Terminación en -ch: watch + es" },
          { en: "Do you deploy code on Fridays?", es: "¿Despliegas código los viernes?", note: "Pregunta con auxiliar Do + you" },
          { en: "He doesn't write documentation regularly.", es: "Él no escribe documentación con regularidad.", note: "Auxiliar doesn't + verbo base 'write'" },
          { en: "Water boils at 100 degrees Celsius.", es: "El agua hierve a 100 grados Celsius.", note: "Verdad universal (hecho científico)" },
          { en: "We analyze performance metrics every Monday.", es: "Nosotros analizamos métricas de rendimiento cada lunes.", note: "Rutina con 1ra persona plural (verbo base)" }
        ],
        quizBank: [
          {
            id: "s1-q11",
            question: "Complete the sentence: 'Sarah ___ in a global tech company.'",
            options: ["work", "works", "working", "is work"],
            correct: 1,
            feedback: "Sarah es 3ra persona singular (She), por lo que el verbo regular añade '-s': 'works'."
          },
          {
            id: "s1-q12",
            question: "Select the correct negative sentence:",
            options: [
              "He doesn't likes the new update.",
              "He don't like the new update.",
              "He doesn't like the new update.",
              "He not likes the new update."
            ],
            correct: 2,
            feedback: "Con 'He' se utiliza el auxiliar 'doesn't', y el verbo principal permanece en su forma base 'like' sin -s."
          },
          {
            id: "s1-q13",
            question: "What is the 3rd person singular form of the verb 'study'?",
            options: ["studys", "studies", "studyes", "studying"],
            correct: 1,
            feedback: "Cuando un verbo termina en consonante + 'y' (d + y), se sustituye la 'y' por '-ies': 'studies'."
          },
          {
            id: "s1-q14",
            question: "Choose the correct question:",
            options: [
              "Does they know the answer?",
              "Do she know the answer?",
              "Does she knows the answer?",
              "Does she know the answer?"
            ],
            correct: 3,
            feedback: "Para 'she' el auxiliar es 'Does', y el verbo principal vuelve a su forma base 'know'."
          },
          {
            id: "s1-q15",
            question: "Which sentence describes a general habit or truth?",
            options: [
              "I am eating an apple right now.",
              "I usually drink coffee before writing code.",
              "I will go to the office tomorrow.",
              "I drank water an hour ago."
            ],
            correct: 1,
            feedback: "El presente simple con adverbios de frecuencia como 'usually' expresa hábitos y rutinas regulares."
          }
        ]
      },
      {
        id: "lesson-5",
        title: "Presente Continuo (Acciones en progreso)",
        theory: `
          <h2>Presente Continuo: Lo que Ocurre Ahora Mismo</h2>
          <p>El <strong>Present Continuous</strong> se utiliza para describir acciones que están ocurriendo en el momento exacto en que se habla, o tendencias y situaciones temporales contemporáneas.</p>

          <div class="formula-box">
            FÓRMULA: [Sujeto] + [am / is / are] + [Verbo con terminación -ING] + [Complemento]
          </div>

          <h3>Reglas Ortográficas para la terminación -ING</h3>
          <table>
            <thead>
              <tr>
                <th>Tipo de Verbo</th>
                <th>Regla</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mayoría de verbos</td>
                <td>Añadir <strong>-ing</strong> directamente</td>
                <td>learn → <strong>learning</strong> / read → <strong>reading</strong></td>
              </tr>
              <tr>
                <td>Terminados en <strong>-e</strong> muda</td>
                <td>Eliminar la <em>e</em> y añadir <strong>-ing</strong></td>
                <td>write → <strong>writing</strong> / create → <strong>creating</strong></td>
              </tr>
              <tr>
                <td>1 sílaba: Consonante + Vocal + Consonante (CVC)</td>
                <td>Duplicar la última consonante</td>
                <td>run → <strong>running</strong> / stop → <strong>stopping</strong></td>
              </tr>
              <tr>
                <td>Terminados en <strong>-ie</strong></td>
                <td>Cambiar <em>ie</em> por <strong>-ying</strong></td>
                <td>lie → <strong>lying</strong> / tie → <strong>tying</strong></td>
              </tr>
            </tbody>
          </table>

          <h3>Los Verbos de Estado (Stative Verbs)</h3>
          <p>Existen verbos que expresan emociones, posesión o procesos mentales que <strong>casi nunca se conjugan en presente continuo</strong>:</p>
          <ul>
            <li><em>know, understand, believe, want, need, prefer, love, hate, possess</em>.</li>
          </ul>

          <div class="mistake-box">
            <strong>Error Común:</strong> Decir <em>"I am understanding the lesson now"</em>.<br/>
            <strong>Forma Correcta:</strong> <em>"I <strong>understand</strong> the lesson now"</em> (los stative verbs usan Present Simple).
          </div>
        `,
        examples: [
          { en: "She is testing the new payment integration.", es: "Ella está probando la nueva integración de pagos.", note: "Acción en desarrollo en este momento" },
          { en: "They are working remotely this month.", es: "Ellos están trabajando de forma remota este mes.", note: "Situación temporal" },
          { en: "I am writing clean, scalable code.", es: "Estoy escribiendo código limpio y escalable.", note: "write -> writing (se elimina la 'e')" },
          { en: "The system is running diagnostic checks.", es: "El sistema está ejecutando comprobaciones de diagnóstico.", note: "run -> running (duplicación CVC)" },
          { en: "Why are you looking at that screen?", es: "¿Por qué estás mirando esa pantalla?", note: "Pregunta con Why + are + you" }
        ],
        quizBank: [
          {
            id: "s1-q16",
            question: "Complete the sentence: 'Look! The engineers ___ the database.'",
            options: ["are upgrading", "is upgrading", "upgrades", "upgrade"],
            correct: 0,
            feedback: "'The engineers' es plural (they), por lo que requiere 'are' seguido del gerundio 'upgrading'."
          },
          {
            id: "s1-q17",
            question: "What is the correct -ing spelling of the verb 'run'?",
            options: ["runing", "running", "runneing", "runnying"],
            correct: 1,
            feedback: "'Run' es un verbo monosilábico con estructura Consonante-Vocal-Consonante (r-u-n), por lo que se duplica la 'n': 'running'."
          },
          {
            id: "s1-q18",
            question: "Which of the following stative verbs is typically NOT used in continuous tenses?",
            options: ["eat", "know", "run", "write"],
            correct: 1,
            feedback: "'Know' es un verbo de estado mental. Decimos 'I know the answer', no 'I am knowing the answer'."
          },
          {
            id: "s1-q19",
            question: "Choose the correct negative sentence:",
            options: [
              "We not are working today.",
              "We aren't working today.",
              "We don't working today.",
              "We isn't working today."
            ],
            correct: 1,
            feedback: "La negación del presente continuo se forma con 'To Be + not': 'We aren't working'."
          },
          {
            id: "s1-q20",
            question: "Identify the sentence that describes an action happening right now:",
            options: [
              "He drives to work every morning.",
              "He is driving to work right now.",
              "He drove to work yesterday.",
              "He will drive to work tomorrow."
            ],
            correct: 1,
            feedback: "'He is driving to work right now' utiliza Present Continuous para expresar una acción en progreso inmediato."
          }
        ]
      }
    ]
  },
  {
    id: "stage-2",
    title: "Etapa 2: El Pasado",
    subtitle: "Narrativa y Eventos Previos",
    lessons: [
      {
        id: "lesson-6",
        title: "Pasado Simple: Verbos Regulares e Irregulares",
        theory: `
          <h2>Pasado Simple: Hechos Completados en el Pasado</h2>
          <p>El <strong>Past Simple</strong> se emplea para acciones que iniciaron y concluyeron en un momento específico en el pasado. Suele acompañarse de expresiones temporales como <em>yesterday, last week, in 2022, two days ago</em>.</p>

          <div class="formula-box">
            AFIRMATIVO: [Sujeto] + [Verbo en Pasado] + [Complemento]<br/>
            NEGATIVO: [Sujeto] + [did not / didn't] + [Verbo base] + [Complemento]<br/>
            PREGUNTA: [Did] + [Sujeto] + [Verbo base] + [Complemento]?
          </div>

          <h3>Verbos Regulares vs. Irregulares</h3>
          <table>
            <thead>
              <tr>
                <th>Categoría</th>
                <th>Regla de Formación</th>
                <th>Infinitivo → Pasado Simple</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Regulares</td>
                <td>Añadir <strong>-ed</strong> al infinitivo</td>
                <td>start → <strong>started</strong> / learn → <strong>learned</strong></td>
              </tr>
              <tr>
                <td>Regulares terminados en <em>-e</em></td>
                <td>Solo añadir <strong>-d</strong></td>
                <td>create → <strong>created</strong> / like → <strong>liked</strong></td>
              </tr>
              <tr>
                <td>Irregulares comunes</td>
                <td>Cambian su forma (se memorizan)</td>
                <td>go → <strong>went</strong> / see → <strong>saw</strong> / write → <strong>wrote</strong></td>
              </tr>
            </tbody>
          </table>

          <h3>La Regla de Oro del Auxiliar DID</h3>
          <p>Al igual que con <em>do/does</em> en presente, cuando aparece el auxiliar de pasado <strong>did</strong> o <strong>didn't</strong>, este ya indica el tiempo pretérito. <strong>El verbo principal DEBE estar en forma base</strong>.</p>
          
          <div class="mistake-box">
            <strong>Error Común:</strong> Decir <em>"I didn't went"</em> o <em>"Did you saw the error?"</em>.<br/>
            <strong>Forma Correcta:</strong> <em>"I didn't <strong>go</strong>"</em> / <em>"Did you <strong>see</strong> the error?"</em>.
          </div>
        `,
        examples: [
          { en: "They released the new version last night.", es: "Ellos publicaron la nueva versión anoche.", note: "Verbo regular con -ed" },
          { en: "We found the memory leak after hours of debugging.", es: "Encontramos la fuga de memoria tras horas de depuración.", note: "Verbo irregular: find -> found" },
          { en: "Did you test the endpoint before committing?", es: "¿Probaste el endpoint antes de hacer commit?", note: "Pregunta con auxiliar Did + test" },
          { en: "She didn't attend the retrospective meeting.", es: "Ella no asistió a la reunión de retrospectiva.", note: "didn't + verbo base attend" },
          { en: "I wrote three documentation articles yesterday.", es: "Escribí tres artículos de documentación ayer.", note: "Verbo irregular: write -> wrote" }
        ],
        quizBank: [
          {
            id: "s2-q1",
            question: "Complete the sentence: 'We ___ the conference in San Francisco last month.'",
            options: ["attended", "attend", "attending", "did attended"],
            correct: 0,
            feedback: "Con una expresión temporal definida como 'last month', se utiliza el pasado simple afirmativo 'attended'."
          },
          {
            id: "s2-q2",
            question: "Choose the grammatically correct negative sentence:",
            options: [
              "She didn't went to the office.",
              "She didn't go to the office.",
              "She not went to the office.",
              "She didn't goes to the office."
            ],
            correct: 1,
            feedback: "El auxiliar 'didn't' ya señala el tiempo pasado, por lo cual el verbo principal debe ir en infinitivo base: 'didn't go'."
          },
          {
            id: "s2-q3",
            question: "What is the past simple form of the irregular verb 'buy'?",
            options: ["buyed", "bought", "bring", "brought"],
            correct: 1,
            feedback: "El pasado de 'buy' (comprar) es 'bought'."
          },
          {
            id: "s2-q4",
            question: "Complete the question: '___ you solve the production issue yesterday?'",
            options: ["Do", "Did", "Have", "Were"],
            correct: 1,
            feedback: "Para formular preguntas en pasado simple con verbos de acción se utiliza el auxiliar 'Did'."
          },
          {
            id: "s2-q5",
            question: "Which of the following verbs is regular in the past simple?",
            options: ["speak", "learn", "give", "take"],
            correct: 1,
            feedback: "'Learn' es un verbo regular que forma su pasado añadiendo '-ed' ('learned'). Los otros son irregulares (spoke, gave, took)."
          }
        ]
      },
      {
        id: "lesson-7",
        title: "Pasado Continuo y contraste con Pasado Simple",
        theory: `
          <h2>Pasado Continuo: Acciones en Desarrollo en el Pasado</h2>
          <p>El <strong>Past Continuous</strong> describe una acción que estaba ocurriendo en un momento específico del pasado, frecuentemente interrumpida por otra acción puntual en <strong>Past Simple</strong>.</p>

          <div class="formula-box">
            FÓRMULA: [Sujeto] + [was / were] + [Verbo -ING] + [Complemento]
          </div>

          <h3>Concordancia Was vs. Were</h3>
          <ul>
            <li><strong>Was:</strong> I, He, She, It (<em>I was writing code</em>).</li>
            <li><strong>Were:</strong> You, We, They (<em>They were debugging the system</em>).</li>
          </ul>

          <h3>El Patrón WHEN vs. WHILE</h3>
          <p>La combinación más frecuente para fluidez narrativa es conectar dos eventos pasados:</p>
          <div class="tip-box">
            <strong>WHILE + Pasado Continuo:</strong> Introduce la acción larga de fondo (<em>While I was speaking...</em>)<br/>
            <strong>WHEN + Pasado Simple:</strong> Introduce la interrupción puntual (<em>...when the power went out.</em>)
          </div>
        `,
        examples: [
          { en: "I was reading the logs when the server crashed.", es: "Estaba leyendo los registros cuando el servidor se cayó.", note: "Acción continua interrumpida por evento puntual" },
          { en: "While we were testing, the client called us.", es: "Mientras estábamos haciendo pruebas, el cliente nos llamó.", note: "While + Past Continuous" },
          { en: "What were you doing at 10 PM last night?", es: "¿Qué estabas haciendo anoche a las 10 PM?", note: "Momento específico en el pasado" },
          { en: "They were not paying attention during the standup.", es: "Ellos no estaban prestando atención durante la reunión.", note: "Negación con were not (weren't)" },
          { en: "She was preparing the deployment script all afternoon.", es: "Ella estuvo preparando el script de despliegue toda la tarde.", note: "Duración continua en el pasado" }
        ],
        quizBank: [
          {
            id: "s2-q6",
            question: "Complete the sentence: 'I ___ when the fire alarm sounded.'",
            options: ["was coding", "were coding", "am coding", "coded"],
            correct: 0,
            feedback: "Con el pronombre 'I' se utiliza 'was' y el verbo en -ing: 'I was coding'."
          },
          {
            id: "s2-q7",
            question: "Choose the correct connector: '___ they were discussing the budget, someone knocked on the door.'",
            options: ["While", "During", "Until", "Because of"],
            correct: 0,
            feedback: "'While' se utiliza para introducir una cláusula en pasado continuo ('While they were discussing...')."
          },
          {
            id: "s2-q8",
            question: "Identify the grammatically correct sentence:",
            options: [
              "We was working on the fix.",
              "We were working on the fix.",
              "We were worked on the fix.",
              "We was worked on the fix."
            ],
            correct: 1,
            feedback: "Con 'We' el verbo 'to be' en pasado es 'were': 'We were working'."
          },
          {
            id: "s2-q9",
            question: "Which tense represents the interrupting action in: 'He was sleeping when the alarm rang'?",
            options: [
              "Past Continuous (was sleeping)",
              "Past Simple (rang)",
              "Present Perfect (has slept)",
              "Past Perfect (had rung)"
            ],
            correct: 1,
            feedback: "'Rang' es la acción puntual en Pasado Simple que interrumpe la acción continua."
          },
          {
            id: "s2-q10",
            question: "Select the correct negative question:",
            options: [
              "Why weren't you listening?",
              "Why wasn't you listening?",
              "Why didn't you listening?",
              "Why you were not listening?"
            ],
            correct: 0,
            feedback: "Para 'you' en pregunta negativa de pasado continuo se utiliza 'Why weren't you listening?'."
          }
        ]
      },
      {
        id: "lesson-8",
        title: "Used to vs Would (Hábitos en el pasado)",
        theory: `
          <h2>Hábitos y Estados Pasados que ya no ocurren</h2>
          <p>Para hablar de costumbres o estados que solías tener en el pasado pero que ya no son ciertos en el presente, utilizamos <strong>used to</strong> y <strong>would</strong>.</p>

          <div class="formula-box">
            FÓRMULA: [Sujeto] + used to + [Verbo en forma base] + [Complemento]
          </div>

          <h3>La Diferencia Fundamental: Estados vs. Acciones</h3>
          <table>
            <thead>
              <tr>
                <th>Estructura</th>
                <th>Acciones Repetidas (Costumbres)</th>
                <th>Estados / Lugares / Creencias</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Used to</strong></td>
                <td>Sí (<em>I used to run every day</em>)</td>
                <td><strong>Sí</strong> (<em>I used to live in Madrid / I used to have long hair</em>)</td>
              </tr>
              <tr>
                <td><strong>Would</strong></td>
                <td>Sí (<em>We would play chess on Sundays</em>)</td>
                <td><strong>NO</strong> (No se puede decir: <em>"I would live in Madrid"</em> para un estado pasado)</td>
              </tr>
            </tbody>
          </table>

          <div class="mistake-box">
            <strong>Negación de Used to:</strong> En negativo usamos <em>didn't use to</em> (sin la 'd' final).<br/>
            <strong>Ejemplo:</strong> <em>"I didn't <strong>use</strong> to like vegetables, but now I love them."</em>
          </div>
        `,
        examples: [
          { en: "I used to work in finance before transitioning to tech.", es: "Yo solía trabajar en finanzas antes de pasarme a la tecnología.", note: "Estado o trabajo pasado con used to" },
          { en: "Every summer, my grandfather would tell us stories by the campfire.", es: "Cada verano, mi abuelo solía contarnos historias junto a la fogata.", note: "Acción repetida con would" },
          { en: "Did you use to live in Toronto?", es: "¿Solías vivir en Toronto?", note: "Pregunta con Did + use to" },
          { en: "She didn't use to drink coffee, but now she drinks two cups a day.", es: "Ella no solía tomar café, pero ahora toma dos tazas al día.", note: "Negación didn't use to" },
          { en: "We used to have weekly team lunches in the office.", es: "Solíamos tener almuerzos semanales de equipo en la oficina.", note: "Costumbre pasada con used to" }
        ],
        quizBank: [
          {
            id: "s2-q11",
            question: "Complete the sentence: 'I ___ live in London when I was a student.'",
            options: ["used to", "would", "am used to", "use to"],
            correct: 0,
            feedback: "'Live' es un verbo de estado. Para estados pasados solo se puede usar 'used to', nunca 'would'."
          },
          {
            id: "s2-q12",
            question: "Choose the correct negative form:",
            options: [
              "I didn't used to like coffee.",
              "I didn't use to like coffee.",
              "I not used to like coffee.",
              "I never use to like coffee."
            ],
            correct: 1,
            feedback: "Al usar el auxiliar 'didn't', el verbo pierde la 'd' final: 'didn't use to'."
          },
          {
            id: "s2-q13",
            question: "Can 'would' be used in: 'He ___ be very shy as a child'?",
            options: [
              "Yes, because it is past.",
              "No, because 'be' is a state verb and 'would' only applies to repeated actions.",
              "Yes, but only in negative sentences.",
              "No, because 'would' requires an auxiliary."
            ],
            correct: 1,
            feedback: "'Be shy' es un estado, por lo que únicamente es correcto 'He used to be very shy'."
          },
          {
            id: "s2-q14",
            question: "Complete the question: 'Where did you ___ spend your vacations?'",
            options: ["use to", "used to", "would", "uses to"],
            correct: 0,
            feedback: "Tras 'did', se utiliza 'use to' en forma base."
          },
          {
            id: "s2-q15",
            question: "Which sentence expresses a past habit that no longer happens?",
            options: [
              "I am used to waking up early.",
              "I used to wake up early.",
              "I usually wake up early.",
              "I will wake up early."
            ],
            correct: 1,
            feedback: "'I used to wake up early' indica que en el pasado tenías ese hábito, pero en el presente ya no."
          }
        ]
      }
    ]
  },
  {
    id: "stage-3",
    title: "Etapa 3: El Futuro",
    subtitle: "Predicciones, Planes e Intenciones",
    lessons: [
      {
        id: "lesson-9",
        title: "Will vs Going to (Decisiones vs Planes)",
        theory: `
          <h2>Expresando el Futuro: Will vs. Be Going To</h2>
          <p>En inglés existen dos maneras principales de hablar del futuro simple, y su elección depende del grado de planificación previa o de si se trata de una decisión espontánea.</p>

          <div class="formula-box">
            WILL (Espontáneo / Promesa): [Sujeto] + will + [Verbo base]<br/>
            BE GOING TO (Plan previo / Evidencia): [Sujeto] + [am/is/are] going to + [Verbo base]
          </div>

          <h3>Criterios de Elección</h3>
          <table>
            <thead>
              <tr>
                <th>Criterio</th>
                <th>WILL</th>
                <th>BE GOING TO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Decisión</strong></td>
                <td>Tomada en el momento de hablar (<em>"The phone is ringing. I'll answer it."</em>)</td>
                <td>Planificada con antelación (<em>"I am going to visit my parents this weekend."</em>)</td>
              </tr>
              <tr>
                <td><strong>Predicciones</strong></td>
                <td>Basada en opinión personal o creencia (<em>"I think it will rain."</em>)</td>
                <td>Basada en evidencia visual presente (<em>"Look at those black clouds! It is going to rain."</em>)</td>
              </tr>
              <tr>
                <td><strong>Promesas y ofertas</strong></td>
                <td>Siempre <strong>will</strong> (<em>"I will help you with the code."</em>)</td>
                <td>Rara vez aplicable para ofertas instantáneas.</td>
              </tr>
            </tbody>
          </table>
        `,
        examples: [
          { en: "I am going to buy a new laptop next Friday.", es: "Voy a comprarme una nueva portátil el próximo viernes.", note: "Plan premeditado con fecha" },
          { en: "Don't worry, I will review your pull request in a minute.", es: "No te preocupes, revisaré tu pull request en un minuto.", note: "Oferta / decisión espontánea con will" },
          { en: "Look at the battery level; the laptop is going to shut down!", es: "¡Mira el nivel de batería; la portátil se va a apagar!", note: "Predicción basada en evidencia visual" },
          { en: "I think artificial intelligence will transform medical diagnostics.", es: "Creo que la inteligencia artificial transformará los diagnósticos médicos.", note: "Opinión personal a futuro con will" },
          { en: "Are you going to attend the architecture meeting?", es: "¿Vas a asistir a la reunión de arquitectura?", note: "Pregunta sobre planes previos" }
        ],
        quizBank: [
          {
            id: "s3-q1",
            question: "The waiter asks: 'What would you like?' You decide instantly: '___ the steak.'",
            options: ["I'll have", "I am going to have", "I having", "I will to have"],
            correct: 0,
            feedback: "Para decisiones tomadas en el momento exacto de hablar se utiliza la contracción de will: 'I'll have'."
          },
          {
            id: "s3-q2",
            question: "Look at the dark clouds gathering in the sky. 'It ___ rain.'",
            options: ["is going to", "will probably", "going to", "shall"],
            correct: 0,
            feedback: "Cuando existe evidencia física visible e inminente en el presente, se prefiere 'is going to'."
          },
          {
            id: "s3-q3",
            question: "Which sentence expresses a firm, pre-arranged plan?",
            options: [
              "I think I will travel next year.",
              "I am going to start my master's degree in September.",
              "Maybe I will call him later.",
              "I will probably stay home."
            ],
            correct: 1,
            feedback: "'I am going to start...' expresa una intención o plan premeditado antes del momento de hablar."
          },
          {
            id: "s3-q4",
            question: "Complete the promise: 'I promise I ___ tell anyone your secret.'",
            options: ["won't", "am not going to", "don't will", "not will"],
            correct: 0,
            feedback: "Para promesas se utiliza 'will' o su forma negativa contraída 'won't'."
          },
          {
            id: "s3-q5",
            question: "Complete the sentence: 'We ___ launch the beta version next month.'",
            options: ["are going to", "is going to", "will to", "going to"],
            correct: 0,
            feedback: "Con 'We' la estructura es 'are going to' seguida del verbo base."
          }
        ]
      },
      {
        id: "lesson-10",
        title: "Presente Continuo para Planes Futuros",
        theory: `
          <h2>Presente Continuo: La Agenda y Acuerdos Cerrados</h2>
          <p>En el inglés profesional y cotidiano, el <strong>Present Continuous</strong> es la forma preferida para hablar de eventos futuros que ya están <strong>fijados en el calendario o acordados con otra persona</strong>.</p>

          <div class="formula-box">
            FÓRMULA: [Sujeto] + [am / is / are] + [Verbo -ING] + [Expresión de Tiempo Futuro]
          </div>

          <h3>La Clave: La Expresión Temporal</h3>
          <p>Lo que transforma una acción presente en un plan futuro cerrado es la inclusión de una referencia temporal específica:</p>
          <ul>
            <li><em>I am meeting the investors <strong>tomorrow at 10 AM</strong>.</em> (Reunión agendada).</li>
            <li><em>We are flying to Berlin <strong>next Monday</strong>.</em> (Boletos comprados).</li>
            <li><em>She is starting her new job <strong>on June 1st</strong>.</em> (Contrato firmado).</li>
          </ul>

          <div class="tip-box">
            <strong>Diferencia con 'Going to':</strong> Mientras que <em>'going to'</em> enfatiza la intención interna (<em>"I'm going to travel"</em>), el Presente Continuo enfatiza el acuerdo logístico concreto ya establecido.
          </div>
        `,
        examples: [
          { en: "We are presenting the project to stakeholders tomorrow morning.", es: "Presentaremos el proyecto a los interesados mañana por la mañana.", note: "Cita fijada en calendario" },
          { en: "I am having dinner with David tonight at eight.", es: "Cenaré con David esta noche a las ocho.", note: "Acuerdo social cerrado" },
          { en: "She is leaving for Chicago next Tuesday.", es: "Ella sale para Chicago el próximo martes.", note: "Viaje con fecha definida" },
          { en: "Are you working this Saturday?", es: "¿Trabajas este sábado?", note: "Pregunta sobre turnos programados" },
          { en: "The company is releasing the quarterly results on Friday.", es: "La empresa publicará los resultados trimestrales el viernes.", note: "Evento corporativo calendarizado" }
        ],
        quizBank: [
          {
            id: "s3-q6",
            question: "Complete the sentence: 'I ___ the dentist tomorrow at 3 PM.'",
            options: ["am seeing", "will see perhaps", "saw", "am see"],
            correct: 0,
            feedback: "Una cita médica programada se expresa con Presente Continuo: 'am seeing'."
          },
          {
            id: "s3-q7",
            question: "Why is Present Continuous used in: 'We are flying to Tokyo next week'?",
            options: [
              "Because it is an action happening right now.",
              "Because it is an arranged plan with tickets already booked.",
              "Because 'fly' cannot be used with 'will'.",
              "Because it is a scientific fact."
            ],
            correct: 1,
            feedback: "Expresa un acuerdo y arreglo previo ya cerrado con fecha fijada."
          },
          {
            id: "s3-q8",
            question: "Which sentence indicates a confirmed future arrangement?",
            options: [
              "Maybe I will visit my friends.",
              "I am meeting the team on Thursday morning.",
              "I would like to travel somewhere warm.",
              "I might go shopping."
            ],
            correct: 1,
            feedback: "'I am meeting the team on Thursday morning' indica un compromiso establecido en la agenda."
          },
          {
            id: "s3-q9",
            question: "Complete: '___ you doing anything special this weekend?'",
            options: ["Are", "Do", "Will", "Did"],
            correct: 0,
            feedback: "Para preguntar por planes de fin de semana con presente continuo: 'Are you doing...?'."
          },
          {
            id: "s3-q10",
            question: "Select the sentence with the correct future continuous arrangement:",
            options: [
              "He is starting his training on Monday.",
              "He is start his training on Monday.",
              "He starts not his training on Monday.",
              "He will to start his training on Monday."
            ],
            correct: 0,
            feedback: "'He is starting his training on Monday' sigue la fórmula [to be] + [verb-ing] + [tiempo futuro]."
          }
        ]
      }
    ]
  },
  {
    id: "stage-4",
    title: "Etapa 4: Los Conectores",
    subtitle: "Fluidez y Cohesión",
    lessons: [
      {
        id: "lesson-11",
        title: "Coordinación (And, but, so, yet, or)",
        theory: `
          <h2>Conectores Coordinantes: Uniendo Ideas de Igual Peso</h2>
          <p>Para dejar de hablar con oraciones cortas y primitivas, los <strong>coordinating conjunctions</strong> permiten enlazar dos ideas independientes dentro de una sola oración fluida. La regla mnemotécnica en inglés es <strong>FANBOYS</strong> (For, And, Nor, But, Or, Yet, So).</p>

          <div class="formula-box">
            [Cláusula Independiente 1] + , [Conector] + [Cláusula Independiente 2]
          </div>

          <h3>Los 4 Conectores Esenciales</h3>
          <table>
            <thead>
              <tr>
                <th>Conector</th>
                <th>Función Lógica</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>And</strong></td>
                <td>Suma / Adición</td>
                <td><em>The UI is intuitive, <strong>and</strong> the backend is fast.</em></td>
              </tr>
              <tr>
                <td><strong>But</strong></td>
                <td>Contraste / Oposición directa</td>
                <td><em>The feature works well, <strong>but</strong> it needs documentation.</em></td>
              </tr>
              <tr>
                <td><strong>So</strong></td>
                <td>Causa y Efecto / Consecuencia</td>
                <td><em>The server was overloaded, <strong>so</strong> we scaled the instances.</em></td>
              </tr>
              <tr>
                <td><strong>Or</strong></td>
                <td>Alternativa / Elección</td>
                <td><em>We can refactor now, <strong>or</strong> we can ship next week.</em></td>
              </tr>
              <tr>
                <td><strong>Yet</strong></td>
                <td>Contraste sorpresivo (similar a <em>sin embargo</em>)</td>
                <td><em>He had little experience, <strong>yet</strong> he solved the problem.</em></td>
              </tr>
            </tbody>
          </table>

          <div class="tip-box">
            <strong>Regla de Puntuación:</strong> Cuando unes dos oraciones completas (cada una con su propio sujeto y verbo), se coloca una coma <strong>antes</strong> del conector coordinante.
          </div>
        `,
        examples: [
          { en: "The code passed all tests, so we deployed it to production.", es: "El código pasó todas las pruebas, por lo que lo desplegamos a producción.", note: "So introduce la consecuencia lógica" },
          { en: "I wanted to attend the talk, but I had an urgent client call.", es: "Quería asistir a la charla, pero tuve una llamada urgente con un cliente.", note: "But introduce contraste" },
          { en: "You can write pure CSS, or you can use a preprocessor.", es: "Puedes escribir CSS puro, o puedes usar un preprocesador.", note: "Or para alternativas" },
          { en: "The documentation is brief, yet it explains every critical point.", es: "La documentación es breve, y aun así explica cada punto crítico.", note: "Yet para contraste inesperado" },
          { en: "She designed the interface, and he implemented the logic.", es: "Ella diseñó la interfaz y él implementó la lógica.", note: "And para unir cláusulas independientes" }
        ],
        quizBank: [
          {
            id: "s4-q1",
            question: "Complete the sentence: 'The team worked late, ___ they delivered the feature on time.'",
            options: ["and", "or", "nor", "so that"],
            correct: 0,
            feedback: "'And' conecta las dos acciones coordinadas de forma natural sumando el resultado."
          },
          {
            id: "s4-q2",
            question: "Which connector indicates result in: 'The database went down, ___ users couldn't log in'?",
            options: ["so", "but", "yet", "or"],
            correct: 0,
            feedback: "'So' expresa el resultado o consecuencia directa de la cláusula anterior."
          },
          {
            id: "s4-q3",
            question: "Choose the correct sentence with proper comma placement:",
            options: [
              "We wanted to upgrade, but we lacked the budget.",
              "We wanted to upgrade but, we lacked the budget.",
              "We wanted, to upgrade but we lacked the budget.",
              "We wanted to upgrade but we lacked, the budget."
            ],
            correct: 0,
            feedback: "La coma se coloca justo antes del conector coordinante 'but'."
          },
          {
            id: "s4-q4",
            question: "Select the conjunction that expresses contrast similar to 'nevertheless':",
            options: ["yet", "and", "or", "for"],
            correct: 0,
            feedback: "'Yet' introduce una idea contrastante o inesperada: 'He is young, yet very wise'."
          },
          {
            id: "s4-q5",
            question: "Complete: 'Do you want to continue working, ___ do you prefer to take a break?'",
            options: ["or", "so", "and", "yet"],
            correct: 0,
            feedback: "'Or' se utiliza para ofrecer opciones o alternativas."
          }
        ]
      },
      {
        id: "lesson-12",
        title: "Subordinación (Although, even though, when, while)",
        theory: `
          <h2>Cláusulas Subordinadas: Complejidad y Matiz</h2>
          <p>La <strong>subordinación</strong> ocurre cuando una cláusula secundaria depende gramaticalmente de una cláusula principal. Usar conectores subordinantes es el paso definitivo hacia un nivel de inglés B2/C1.</p>

          <div class="formula-box">
            [Conector Subordinante + Cláusula Dependiente], + [Cláusula Principal]<br/>
            O BIEN:<br/>
            [Cláusula Principal] + [Conector Subordinante + Cláusula Dependiente]
          </div>

          <h3>Conectores de Concesión: Although vs. Even though</h3>
          <table>
            <thead>
              <tr>
                <th>Conector</th>
                <th>Matiz</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Although / Even though</strong></td>
                <td>A pesar de que / Aunque (introduce contraste fuerte)</td>
                <td><em><strong>Although</strong> the task was hard, we finished early.</em></td>
              </tr>
              <tr>
                <td><strong>Because / Since</strong></td>
                <td>Causa y razón fundamental</td>
                <td><em>We optimized the query <strong>because</strong> latency was high.</em></td>
              </tr>
              <tr>
                <td><strong>Unless</strong></td>
                <td>A menos que (equivale a <em>if not</em>)</td>
                <td><em>We won't ship <strong>unless</strong> all tests pass.</em></td>
              </tr>
            </tbody>
          </table>

          <div class="mistake-box">
            <strong>Error Común de Coma:</strong> Si el conector subordinante va al inicio de la oración, la coma es <strong>obligatoria</strong> a la mitad. Si va al medio, no se coloca coma:<br/>
            <em>"<strong>Although</strong> it rained, we went out."</em> (Con coma)<br/>
            <em>"We went out <strong>although</strong> it rained."</em> (Sin coma)
          </div>
        `,
        examples: [
          { en: "Although the deadline was tight, the team maintained high code quality.", es: "Aunque la fecha límite era ajustada, el equipo mantuvo una alta calidad de código.", note: "Cláusula subordinada inicial con coma" },
          { en: "We will not launch the product unless security audits pass.", es: "No lanzaremos el producto a menos que las auditorías de seguridad se aprueben.", note: "Unless = a menos que" },
          { en: "Even though he had little preparation, his presentation was brilliant.", es: "A pesar de que tuvo poca preparación, su presentación fue brillante.", note: "Even though para contraste enfático" },
          { en: "Since we adopted TypeScript, runtime errors decreased by 40%.", es: "Desde que adoptamos TypeScript, los errores en tiempo de ejecución disminuyeron un 40%.", note: "Since para causa y punto de partida" },
          { en: "Call me as soon as the deployment finishes.", es: "Llámame tan pronto como termine el despliegue.", note: "As soon as como conector temporal" }
        ],
        quizBank: [
          {
            id: "s4-q6",
            question: "Complete the sentence: '___ the traffic was terrible, we arrived on time.'",
            options: ["Although", "Despite of", "Because", "However"],
            correct: 0,
            feedback: "'Although' va seguido de una cláusula completa con sujeto y verbo ('the traffic was terrible')."
          },
          {
            id: "s4-q7",
            question: "What does 'unless' mean in: 'You won't improve unless you practice daily'?",
            options: [
              "Except if / If you don't",
              "Because of",
              "In addition to",
              "As soon as"
            ],
            correct: 0,
            feedback: "'Unless' significa 'a menos que' o 'si no': 'A menos que practiques a diario'."
          },
          {
            id: "s4-q8",
            question: "Choose the sentence with the correct punctuation:",
            options: [
              "Because the server was slow we restarted it.",
              "Because the server was slow, we restarted it.",
              "We restarted it, because the server was slow.",
              "Because, the server was slow we restarted it."
            ],
            correct: 1,
            feedback: "Cuando una cláusula subordinada inicia la oración, se debe colocar una coma antes de la cláusula principal."
          },
          {
            id: "s4-q9",
            question: "Complete: 'I will send you the document as soon as I ___ it.'",
            options: ["finish", "will finish", "finished", "have finished will"],
            correct: 0,
            feedback: "En cláusulas temporales introducidas por 'as soon as' o 'when', el verbo va en presente simple para referirse al futuro."
          },
          {
            id: "s4-q10",
            question: "Select the sentence with 'Even though':",
            options: [
              "Even though it was raining, they played soccer.",
              "Even though the rain, they played soccer.",
              "Even though of raining, they played soccer.",
              "Even though rained, they played soccer."
            ],
            correct: 0,
            feedback: "'Even though' debe ir acompañado de sujeto y verbo: 'it was raining'."
          }
        ]
      }
    ]
  },
  {
    id: "stage-5",
    title: "Etapa 5: Los Matices",
    subtitle: "Modales y Tiempos Perfectos",
    lessons: [
      {
        id: "lesson-13",
        title: "Modal Verbs (Can, could, should, must, might)",
        theory: `
          <h2>Verbos Modales: Expresando Habilidad, Obligación y Posibilidad</h2>
          <p>Los <strong>Modal Verbs</strong> son verbos auxiliares que alteran el sentido del verbo principal para expresar capacidad, permiso, consejo, certeza o necesidad.</p>

          <div class="formula-box">
            REGLA DE ORO: [Sujeto] + [Modal] + [Verbo en forma BASE]<br/>
            (¡Nunca añadas '-s' en 3ra persona ni uses 'to' después de un modal!)
          </div>

          <h3>Matriz de Modales Principales</h3>
          <table>
            <thead>
              <tr>
                <th>Modal</th>
                <th>Significado / Función</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Can</strong></td>
                <td>Habilidad presente / Permiso</td>
                <td><em>She <strong>can</strong> analyze complex datasets.</em></td>
              </tr>
              <tr>
                <td><strong>Could</strong></td>
                <td>Habilidad pasada / Petición cortés</td>
                <td><em><strong>Could</strong> you review this code, please?</em></td>
              </tr>
              <tr>
                <td><strong>Should</strong></td>
                <td>Consejo / Recomendación</td>
                <td><em>You <strong>should</strong> write unit tests for this module.</em></td>
              </tr>
              <tr>
                <td><strong>Must</strong></td>
                <td>Obligación estricta / Certeza lógica</td>
                <td><em>We <strong>must</strong> protect user credentials.</em></td>
              </tr>
              <tr>
                <td><strong>Might / May</strong></td>
                <td>Probabilidad o posibilidad</td>
                <td><em>This change <strong>might</strong> cause performance issues.</em></td>
              </tr>
            </tbody>
          </table>

          <div class="mistake-box">
            <strong>Error Común:</strong> Decir <em>"He can to speak"</em> o <em>"She musts go"</em>.<br/>
            <strong>Forma Correcta:</strong> <em>"He can <strong>speak</strong>"</em> / <em>"She must <strong>go</strong>"</em>.
          </div>
        `,
        examples: [
          { en: "You should optimize the images before uploading them.", es: "Deberías optimizar las imágenes antes de subirlas.", note: "Should para sugerencia o buena práctica" },
          { en: "We must follow security protocols at all times.", es: "Debemos seguir los protocolos de seguridad en todo momento.", note: "Must para obligación mandatoria" },
          { en: "The migration might take longer than expected.", es: "La migración podría tardar más de lo previsto.", note: "Might para posibilidad" },
          { en: "Could you clarify what this function returns?", es: "¿Podrías aclarar qué retorna esta función?", note: "Could para petición profesional cortés" },
          { en: "He can configure automated CI/CD pipelines easily.", es: "Él puede configurar canalizaciones automáticas de CI/CD con facilidad.", note: "Can para habilidad técnica" }
        ],
        quizBank: [
          {
            id: "s5-q1",
            question: "Which sentence is grammatically correct?",
            options: [
              "She can to code in Python.",
              "She can codes in Python.",
              "She can code in Python.",
              "She cans code in Python."
            ],
            correct: 2,
            feedback: "Los modales van seguidos del verbo en forma base sin 'to' y sin '-s': 'She can code'."
          },
          {
            id: "s5-q2",
            question: "Choose the modal for giving advice: 'You ___ back up your files regularly.'",
            options: ["should", "must have to", "might to", "can to"],
            correct: 0,
            feedback: "'Should' se utiliza para recomendaciones y consejos: 'You should back up...'."
          },
          {
            id: "s5-q3",
            question: "Complete the sentence to express strong obligation: 'All developers ___ encrypt user passwords.'",
            options: ["must", "might", "could", "would"],
            correct: 0,
            feedback: "'Must' expresa una obligación mandatoria y de estricto cumplimiento."
          },
          {
            id: "s5-q4",
            question: "What does 'might' express in: 'It might rain later today'?",
            options: [
              "Certainty",
              "Possibility",
              "Obligation",
              "Ability"
            ],
            correct: 1,
            feedback: "'Might' expresa una posibilidad o probabilidad sin certeza absoluta."
          },
          {
            id: "s5-q5",
            question: "Select the most polite request for a professional email:",
            options: [
              "Could you please review the attached document?",
              "You must review the attached document!",
              "Review the attached document now.",
              "Can you to review the attached document?"
            ],
            correct: 0,
            feedback: "'Could you please...' es la fórmula estándar más cortés y profesional en inglés."
          }
        ]
      },
      {
        id: "lesson-14",
        title: "Present Perfect y Present Perfect Continuous",
        theory: `
          <h2>El Puente Entre el Pasado y el Presente</h2>
          <p>El <strong>Present Perfect</strong> conecta una experiencia o acción del pasado con sus consecuencias en el momento actual. No importa <em>cuándo</em> ocurrió exactamente, sino <em>el impacto que tiene ahora</em>.</p>

          <div class="formula-box">
            PRESENT PERFECT: [Sujeto] + [have / has] + [Participio Pasado (V3)]<br/>
            PRESENT PERFECT CONTINUOUS: [Sujeto] + [have / has] been + [Verbo -ING]
          </div>

          <h3>Since vs. For</h3>
          <ul>
            <li><strong>Since + punto específico en el tiempo:</strong> <em>since 2020, since yesterday, since Monday</em>.</li>
            <li><strong>For + duración de tiempo transcurrido:</strong> <em>for 3 years, for two hours, for a long time</em>.</li>
          </ul>

          <h3>Diferencia entre Present Perfect Simple y Continuo</h3>
          <table>
            <thead>
              <tr>
                <th>Tiempo</th>
                <th>Énfasis Principal</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Present Perfect Simple</strong></td>
                <td>En el resultado terminado o logro</td>
                <td><em>I have written three test cases. (Ya están listos)</em></td>
              </tr>
              <tr>
                <td><strong>Present Perfect Continuous</strong></td>
                <td>En la duración y continuidad de la actividad</td>
                <td><em>I have been writing tests all morning. (Aún sigo haciéndolo)</em></td>
              </tr>
            </tbody>
          </table>
        `,
        examples: [
          { en: "I have worked with React for five years.", es: "He trabajado con React durante cinco años.", note: "For + duración temporal" },
          { en: "She has been coding since 8 AM.", es: "Ella ha estado programando desde las 8 AM.", note: "Since + punto de inicio específico" },
          { en: "Have you ever deployed to production on a Friday?", es: "¿Alguna vez has desplegado a producción en viernes?", note: "Ever en preguntas de experiencia de vida" },
          { en: "The company has grown significantly since 2021.", es: "La empresa ha crecido significativamente desde 2021.", note: "has + participio regular grown" },
          { en: "They haven't resolved the critical vulnerability yet.", es: "Ellos aún no han resuelto la vulnerabilidad crítica.", note: "Yet en oraciones negativas" }
        ],
        quizBank: [
          {
            id: "s5-q6",
            question: "Complete the sentence: 'I have lived in this city ___ five years.'",
            options: ["for", "since", "during", "from"],
            correct: 0,
            feedback: "Para periodos o duraciones de tiempo ('five years') se utiliza 'for'."
          },
          {
            id: "s5-q7",
            question: "Complete the sentence: 'She has been working here ___ 2019.'",
            options: ["since", "for", "in", "by"],
            correct: 0,
            feedback: "Para un año o punto específico en el tiempo ('2019') se utiliza 'since'."
          },
          {
            id: "s5-q8",
            question: "What is the correct past participle of the irregular verb 'write'?",
            options: ["written", "wrote", "writed", "writing"],
            correct: 0,
            feedback: "El participio pasado (V3) de 'write' es 'written'."
          },
          {
            id: "s5-q9",
            question: "Choose the correct sentence with 'never':",
            options: [
              "I have never seen this error before.",
              "I haven't never seen this error before.",
              "I never have seen this error before.",
              "I has never seen this error before."
            ],
            correct: 0,
            feedback: "En inglés se evita la doble negación; usamos 'have never seen'."
          },
          {
            id: "s5-q10",
            question: "Complete: 'He ___ on this architecture all day.'",
            options: [
              "has been working",
              "have been working",
              "has working",
              "is worked"
            ],
            correct: 0,
            feedback: "Con 'He' se utiliza 'has been' seguido del verbo en -ing para enfatizar la duración ininterrumpida."
          }
        ]
      },
      {
        id: "lesson-15",
        title: "Comparativos y Superlativos",
        theory: `
          <h2>Comparando Atributos y Rendimiento</h2>
          <p>Los <strong>comparativos</strong> comparan dos entidades entre sí, mientras que los <strong>superlativos</strong> destacan un elemento como el máximo o mínimo absoluto dentro de un grupo.</p>

          <h3>Reglas de Formación</h3>
          <table>
            <thead>
              <tr>
                <th>Longitud del Adjetivo</th>
                <th>Comparativo (+ than)</th>
                <th>Superlativo (the +)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 sílaba (corto)</td>
                <td>Añadir <strong>-er</strong> (<em>fast → faster than</em>)</td>
                <td>Añadir <strong>-est</strong> (<em>the fastest</em>)</td>
              </tr>
              <tr>
                <td>Terminados en -y</td>
                <td>Cambiar <em>y</em> por <strong>-ier</strong> (<em>easy → easier</em>)</td>
                <td>Cambiar <em>y</em> por <strong>-iest</strong> (<em>the easiest</em>)</td>
              </tr>
              <tr>
                <td>2 o más sílabas (largo)</td>
                <td>Usar <strong>more</strong> (<em>more efficient than</em>)</td>
                <td>Usar <strong>the most</strong> (<em>the most efficient</em>)</td>
              </tr>
              <tr>
                <td>Irregulares clave</td>
                <td>good → <strong>better</strong> / bad → <strong>worse</strong></td>
                <td>the <strong>best</strong> / the <strong>worst</strong></td>
              </tr>
            </tbody>
          </table>

          <div class="mistake-box">
            <strong>Error Común:</strong> Decir <em>"more faster"</em> o <em>"the most best"</em>.<br/>
            <strong>Forma Correcta:</strong> <em>"faster"</em> / <em>"the best"</em> (nunca mezcles 'more/most' con la terminación '-er/-est').
          </div>
        `,
        examples: [
          { en: "Go is faster than Python for high-concurrency tasks.", es: "Go es más rápido que Python para tareas de alta concurrencia.", note: "Adjetivo corto: fast + er + than" },
          { en: "This is the most reliable cloud architecture we have tested.", es: "Esta es la arquitectura en la nube más confiable que hemos probado.", note: "Adjetivo largo: the most + reliable" },
          { en: "The refactored solution is much better than the original one.", es: "La solución refactorizada es mucho mejor que la original.", note: "Comparativo irregular de good: better" },
          { en: "Debugging asynchronous code is more difficult than writing it.", es: "Depurar código asíncrono es más difícil que escribirlo.", note: "Adjetivo largo: more + difficult" },
          { en: "She is the most experienced engineer on our team.", es: "Ella es la ingeniera con más experiencia en nuestro equipo.", note: "Superlativo absoluto the most experienced" }
        ],
        quizBank: [
          {
            id: "s5-q11",
            question: "What is the comparative form of the adjective 'good'?",
            options: ["better", "gooder", "more good", "best"],
            correct: 0,
            feedback: "'Good' es un adjetivo irregular cuyo comparativo es 'better'."
          },
          {
            id: "s5-q12",
            question: "Complete the sentence: 'Microservices can be ___ than monolithic systems.'",
            options: [
              "more complex",
              "complexer",
              "more complexer",
              "most complex"
            ],
            correct: 0,
            feedback: "'Complex' tiene dos sílabas, por lo que forma su comparativo con 'more complex'."
          },
          {
            id: "s5-q13",
            question: "Choose the correct sentence:",
            options: [
              "This server is the fastest of all.",
              "This server is the most fast of all.",
              "This server is faster of all.",
              "This server is the more fastest of all."
            ],
            correct: 0,
            feedback: "Para 'fast' (adjetivo corto), el superlativo es 'the fastest'."
          },
          {
            id: "s5-q14",
            question: "Complete: 'My current role is ___ than my previous one.'",
            options: ["easier", "more easy", "easyer", "more easier"],
            correct: 0,
            feedback: "Los adjetivos de dos sílabas terminados en 'y' como 'easy' cambian a '-ier': 'easier'."
          },
          {
            id: "s5-q15",
            question: "What is the comparative of 'bad'?",
            options: ["worse", "badder", "more bad", "worst"],
            correct: 0,
            feedback: "El comparativo irregular de 'bad' es 'worse'."
          }
        ]
      }
    ]
  },
  {
    id: "stage-6",
    title: "Etapa 6: El Nivel Avanzado",
    subtitle: "Estructuras Complejas",
    lessons: [
      {
        id: "lesson-16",
        title: "Relative Clauses (Who, which, that)",
        theory: `
          <h2>Cláusulas Relativas: Definiendo y Añadiendo Información</h2>
          <p>Las <strong>Relative Clauses</strong> conectan dos oraciones proporcionando información adicional sobre un sustantivo sin necesidad de iniciar una nueva oración separada.</p>

          <h3>Pronombres Relativos Esenciales</h3>
          <table>
            <thead>
              <tr>
                <th>Pronombre</th>
                <th>Se refiere a...</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Who</strong></td>
                <td>Personas exclusivamente</td>
                <td><em>The engineer <strong>who</strong> designed the architecture is here.</em></td>
              </tr>
              <tr>
                <td><strong>Which</strong></td>
                <td>Cosas o animales</td>
                <td><em>The library <strong>which</strong> handles authentication is open-source.</em></td>
              </tr>
              <tr>
                <td><strong>That</strong></td>
                <td>Personas o cosas (en cláusulas definitorias)</td>
                <td><em>The database <strong>that</strong> we chose offers high availability.</em></td>
              </tr>
              <tr>
                <td><strong>Where</strong></td>
                <td>Lugares físicos o virtuales</td>
                <td><em>The repository <strong>where</strong> the code resides is private.</em></td>
              </tr>
              <tr>
                <td><strong>Whose</strong></td>
                <td>Posesión (cuyo / cuya)</td>
                <td><em>The client <strong>whose</strong> servers went down called today.</em></td>
              </tr>
            </tbody>
          </table>
        `,
        examples: [
          { en: "I spoke with the developer who implemented this algorithm.", es: "Hablé con el desarrollador que implementó este algoritmo.", note: "Who para personas" },
          { en: "We identified the query which was causing the bottleneck.", es: "Identificamos la consulta que estaba provocando el cuello de botella.", note: "Which para cosas o consultas" },
          { en: "This is the data center where our primary instances run.", es: "Este es el centro de datos donde corren nuestras instancias primarias.", note: "Where para ubicaciones" },
          { en: "She works for a startup whose mission is ecological restoration.", es: "Ella trabaja para una startup cuya misión es la restauración ecológica.", note: "Whose para posesión" },
          { en: "The framework that we selected has active community support.", es: "El framework que seleccionamos tiene soporte activo de la comunidad.", note: "That en cláusula definitoria" }
        ],
        quizBank: [
          {
            id: "s6-q1",
            question: "Complete the sentence: 'The candidate ___ interviewed yesterday was very impressive.'",
            options: ["who", "which", "where", "whose"],
            correct: 0,
            feedback: "Para referirnos a una persona ('The candidate') utilizamos 'who'."
          },
          {
            id: "s6-q2",
            question: "Complete the sentence: 'The tool ___ calculates code coverage is integrated into CI.'",
            options: ["which", "who", "whom", "whose"],
            correct: 0,
            feedback: "Para herramientas o cosas inanimadas ('The tool') se utiliza 'which' o 'that'."
          },
          {
            id: "s6-q3",
            question: "Choose the pronoun for possession: 'The user ___ account was suspended requested a review.'",
            options: ["whose", "who's", "which", "whom"],
            correct: 0,
            feedback: "'Whose' indica posesión: 'La cuenta del cual / cuya cuenta'."
          },
          {
            id: "s6-q4",
            question: "Select the sentence with correct relative clause usage:",
            options: [
              "The office where we meet is on the third floor.",
              "The office who we meet is on the third floor.",
              "The office which we meet is on the third floor.",
              "The office whose we meet is on the third floor."
            ],
            correct: 0,
            feedback: "'Where' hace referencia al lugar donde ocurre la acción ('The office where we meet')."
          },
          {
            id: "s6-q5",
            question: "Can 'that' replace 'which' in: 'The bug that we discovered was fixed'?",
            options: [
              "Yes, because it is a defining relative clause without commas.",
              "No, because 'that' only refers to humans.",
              "No, because 'that' cannot be followed by 'we'.",
              "Yes, but only in formal British English."
            ],
            correct: 0,
            feedback: "En cláusulas definitorias sin comas, 'that' puede sustituir a 'which' perfectamente."
          }
        ]
      },
      {
        id: "lesson-17",
        title: "Gerundios e Infinitivos",
        theory: `
          <h2>¿Verb + -ING o Verb + To Infinitive?</h2>
          <p>Cuando dos verbos van seguidos en una oración en inglés, el segundo verbo debe ir obligatoriamente en <strong>gerundio (-ing)</strong> o en <strong>infinitivo (to + verbo)</strong>, dependiendo estrictamente del primer verbo.</p>

          <h3>Verbos que rigen Gerundio (-ING)</h3>
          <ul>
            <li><em>enjoy, avoid, consider, finish, suggest, mind, practice</em>.</li>
            <li><strong>Ejemplo:</strong> <em>I enjoy <strong>writing</strong> tests.</em> (Nunca: <em>"enjoy to write"</em>).</li>
          </ul>

          <h3>Verbos que rigen Infinitivo (to + Verbo)</h3>
          <ul>
            <li><em>decide, want, need, hope, promise, plan, manage, learn</em>.</li>
            <li><strong>Ejemplo:</strong> <em>We decided <strong>to deploy</strong> tomorrow.</em> (Nunca: <em>"decided deploying"</em>).</li>
          </ul>

          <div class="tip-box">
            <strong>Regla universal:</strong> Después de CUALQUIER preposición (<em>in, on, at, about, without, before, after</em>), el verbo subsiguiente <strong>siempre va en gerundio (-ing)</strong>:<br/>
            <em>"Thank you for <strong>helping</strong> me."</em><br/>
            <em>"Before <strong>submitting</strong> the PR, run the linter."</em>
          </div>
        `,
        examples: [
          { en: "We decided to migrate the monolith to microservices.", es: "Decidimos migrar el monolito a microservicios.", note: "Decide + to infinitive" },
          { en: "She avoids writing synchronous blocking calls.", es: "Ella evita escribir llamadas síncronas bloqueantes.", note: "Avoid + gerund (-ing)" },
          { en: "Thank you for reviewing my pull request so quickly.", es: "Gracias por revisar mi solicitud de extracción tan rápido.", note: "Preposición 'for' + gerundio 'reviewing'" },
          { en: "He managed to fix the production crash within twenty minutes.", es: "Él logró solucionar la caída en producción en veinte minutos.", note: "Manage + to infinitive" },
          { en: "I look forward to collaborating with your engineering team.", es: "Espero con entusiasmo colaborar con su equipo de ingeniería.", note: "Look forward to + gerundio 'collaborating'" }
        ],
        quizBank: [
          {
            id: "s6-q6",
            question: "Complete the sentence: 'We agreed ___ the terms of the contract.'",
            options: ["to accept", "accepting", "accept", "to accepting"],
            correct: 0,
            feedback: "'Agree' exige infinitivo con 'to': 'agreed to accept'."
          },
          {
            id: "s6-q7",
            question: "Complete the sentence: 'You should avoid ___ sensitive tokens in client code.'",
            options: ["hardcoding", "to hardcode", "hardcode", "to hardcoding"],
            correct: 0,
            feedback: "'Avoid' va seguido obligatoriamente de gerundio (-ing): 'avoid hardcoding'."
          },
          {
            id: "s6-q8",
            question: "Choose the correct form after a preposition: 'Always check logs before ___ the server.'",
            options: ["restarting", "to restart", "restart", "restarted"],
            correct: 0,
            feedback: "Después de preposiciones como 'before', el verbo siempre adopta la terminación '-ing'."
          },
          {
            id: "s6-q9",
            question: "Complete: 'She hopes ___ a senior software engineer next year.'",
            options: ["to become", "becoming", "become", "to becoming"],
            correct: 0,
            feedback: "'Hope' requiere infinitivo: 'hopes to become'."
          },
          {
            id: "s6-q10",
            question: "Which verb is followed by a gerund?",
            options: ["suggest", "decide", "want", "hope"],
            correct: 0,
            feedback: "'Suggest' siempre rige gerundio: 'He suggested updating the dependencies'."
          }
        ]
      },
      {
        id: "lesson-18",
        title: "Voz Pasiva (Passive Voice)",
        theory: `
          <h2>Voz Pasiva: Cuando el Objeto es más Importante que el Sujeto</h2>
          <p>La <strong>Passive Voice</strong> se utiliza ampliamente en contextos técnicos, formales y periodísticos para poner el foco en <strong>la acción y el resultado</strong> en lugar de quién la realizó.</p>

          <div class="formula-box">
            FÓRMULA: [Objeto Paciente] + [Verbo To Be (en el tiempo adecuado)] + [Participio Pasado (V3)] (+ by [Agente])
          </div>

          <h3>Ejemplos de Transformación</h3>
          <table>
            <thead>
              <tr>
                <th>Tiempo</th>
                <th>Voz Activa</th>
                <th>Voz Pasiva</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Presente Simple</td>
                <td><em>The system logs all requests.</em></td>
                <td><em>All requests <strong>are logged</strong> by the system.</em></td>
              </tr>
              <tr>
                <td>Pasado Simple</td>
                <td><em>The team resolved the incident.</em></td>
                <td><em>The incident <strong>was resolved</strong> yesterday.</em></td>
              </tr>
              <tr>
                <td>Presente Perfecto</td>
                <td><em>They have deployed the patch.</em></td>
                <td><em>The patch <strong>has been deployed</strong>.</em></td>
              </tr>
              <tr>
                <td>Modales</td>
                <td><em>We must protect user passwords.</em></td>
                <td><em>User passwords <strong>must be protected</strong>.</em></td>
              </tr>
            </tbody>
          </table>
        `,
        examples: [
          { en: "All sensitive files are encrypted at rest.", es: "Todos los archivos confidenciales son cifrados en reposo.", note: "Presente pasivo: are + encrypted" },
          { en: "The bug was discovered during the automated regression test.", es: "El error fue descubierto durante la prueba de regresión automatizada.", note: "Pasado pasivo: was + discovered" },
          { en: "The new API endpoints have been tested thoroughly.", es: "Los nuevos puntos de conexión de la API han sido probados minuciosamente.", note: "Presente perfecto pasivo: have been + tested" },
          { en: "User permissions must be validated on every request.", es: "Los permisos de usuario deben ser validados en cada solicitud.", note: "Modal pasivo: must be + validated" },
          { en: "The application is hosted on high-availability cloud infrastructure.", es: "La aplicación está alojada en infraestructura en la nube de alta disponibilidad.", note: "is hosted" }
        ],
        quizBank: [
          {
            id: "s6-q11",
            question: "Convert to passive: 'The developer resolved the bug.'",
            options: [
              "The bug was resolved by the developer.",
              "The bug is resolved by the developer.",
              "The bug has been resolved by the developer.",
              "The bug was resolving by the developer."
            ],
            correct: 0,
            feedback: "Como la oración original está en Pasado Simple ('resolved'), en pasiva usamos 'was resolved'."
          },
          {
            id: "s6-q12",
            question: "Complete the passive sentence: 'Credit card details ___ with 256-bit encryption.'",
            options: [
              "are protected",
              "is protected",
              "protect",
              "are protecting"
            ],
            correct: 0,
            feedback: "'Credit card details' es plural, por lo que requiere 'are protected'."
          },
          {
            id: "s6-q13",
            question: "Complete the modal passive: 'This critical update ___ immediately.'",
            options: [
              "must be installed",
              "must install",
              "must installed",
              "must being installed"
            ],
            correct: 0,
            feedback: "La pasiva con modales se forma con [modal] + be + [participio]: 'must be installed'."
          },
          {
            id: "s6-q14",
            question: "Why is the passive voice preferred in technical writing?",
            options: [
              "Because it focuses on the action and outcome rather than the person who did it.",
              "Because it makes sentences shorter.",
              "Because active voice is considered grammatically incorrect.",
              "Because passive voice does not require verbs."
            ],
            correct: 0,
            feedback: "La voz pasiva resalta el proceso técnico, el estado y el resultado objetivo."
          },
          {
            id: "s6-q15",
            question: "Identify the sentence written in the passive voice:",
            options: [
              "The software was developed in Berlin.",
              "The team developed the software in Berlin.",
              "We are developing the software in Berlin.",
              "They will develop the software in Berlin."
            ],
            correct: 0,
            feedback: "'The software was developed in Berlin' utiliza la estructura pasiva [to be + participio]."
          }
        ]
      },
      {
        id: "lesson-19",
        title: "Reported Speech y Noun Clauses",
        theory: `
          <h2>Discurso Indirecto: Reportando lo que Otros Dijeron</h2>
          <p>El <strong>Reported Speech</strong> se utiliza para comunicar lo que otra persona dijo sin citar sus palabras textuales entre comillas. La regla principal es que los tiempos verbales suelen <strong>retroceder un paso hacia el pasado (backshift)</strong>.</p>

          <h3>Tabla de Retroceso de Tiempos (Backshift)</h3>
          <table>
            <thead>
              <tr>
                <th>Discurso Directo (Palabras exactas)</th>
                <th>Discurso Indirecto (Reportado)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Presente Simple: <em>"I work remotely."</em></td>
                <td>Pasado Simple: <em>He said (that) he <strong>worked</strong> remotely.</em></td>
              </tr>
              <tr>
                <td>Presente Continuo: <em>"We are deploying."</em></td>
                <td>Pasado Continuo: <em>They said they <strong>were deploying</strong>.</em></td>
              </tr>
              <tr>
                <td>Pasado Simple: <em>"I solved it."</em></td>
                <td>Pasado Perfecto: <em>She said she <strong>had solved</strong> it.</em></td>
              </tr>
              <tr>
                <td>Will: <em>"I will help you."</em></td>
                <td>Would: <em>He told me he <strong>would help</strong> me.</em></td>
              </tr>
              <tr>
                <td>Can: <em>"I can do it."</em></td>
                <td>Could: <em>She said she <strong>could do</strong> it.</em></td>
              </tr>
            </tbody>
          </table>

          <div class="tip-box">
            <strong>Say vs. Tell:</strong><br/>
            - <strong>Say (that):</strong> No requiere persona destinataria inmediata (<em>He said that he was busy</em>).<br/>
            - <strong>Tell + [Persona]:</strong> Requiere obligatoriamente un pronombre de objeto (<em>He told <strong>me</strong> that he was busy</em>).
          </div>
        `,
        examples: [
          { en: "He said that he was analyzing the system logs.", es: "Él dijo que estaba analizando los registros del sistema.", note: "Retroceso de Present Continuous a Past Continuous" },
          { en: "She told me that the deployment would finish by 5 PM.", es: "Ella me dijo que el despliegue terminaría para las 5 PM.", note: "Tell + me | will cambia a would" },
          { en: "The lead engineer confirmed that they had fixed the bug.", es: "El ingeniero líder confirmó que habían solucionado el error.", note: "Past Simple retrocede a Past Perfect (had fixed)" },
          { en: "They mentioned that they couldn't reproduce the issue.", es: "Ellos mencionaron que no podían reproducir el problema.", note: "Can't cambia a couldn't" },
          { en: "I asked him if he was familiar with GraphQL.", es: "Le pregunté si estaba familiarizado con GraphQL.", note: "Pregunta indirecta con if" }
        ],
        quizBank: [
          {
            id: "s6-q16",
            question: "Direct: 'I am ready.' → Reported: 'She said that she ___ ready.'",
            options: ["was", "is", "will be", "were"],
            correct: 0,
            feedback: "El presente simple 'am' retrocede a pasado simple 'was'."
          },
          {
            id: "s6-q17",
            question: "Choose between 'said' and 'told': 'Mark ___ us that the deadline had changed.'",
            options: ["told", "said", "say", "tells to"],
            correct: 0,
            feedback: "Con pronombre de objeto ('us') se utiliza 'told': 'Mark told us'."
          },
          {
            id: "s6-q18",
            question: "Direct: 'I will finish the report tomorrow.' → Reported: 'He said he ___ finish the report.'",
            options: ["would", "will", "can", "shall"],
            correct: 0,
            feedback: "En reported speech 'will' se transforma en 'would'."
          },
          {
            id: "s6-q19",
            question: "Direct: 'We tested the feature.' → Reported: 'They explained that they ___ the feature.'",
            options: ["had tested", "have tested", "test", "testing"],
            correct: 0,
            feedback: "El pasado simple 'tested' retrocede a pasado perfecto: 'had tested'."
          },
          {
            id: "s6-q20",
            question: "Select the grammatically correct reported speech:",
            options: [
              "She told me that she loved the design.",
              "She said me that she loved the design.",
              "She told that she loved the design.",
              "She said to me that loved the design."
            ],
            correct: 0,
            feedback: "'She told me that...' es la estructura correcta combinando 'told' con el pronombre de objeto."
          }
        ]
      }
    ]
  },
  {
    id: "stage-7",
    title: "Etapa 7: El Examen Final",
    subtitle: "Condicionales y Fluidez Total",
    lessons: [
      {
        id: "lesson-20",
        title: "Integración de estructuras complejas",
        theory: `
          <h2>Fluidez Ejecutiva: Oraciones de 3 y 4 Cláusulas</h2>
          <p>El dominio definitivo de un idioma consiste en la capacidad de sintetizar ideas conectando causas, condiciones, contrastes y resultados en una sola oración articulada y coherente.</p>

          <div class="formula-box">
            EJEMPLO DE ARQUITECTURA MULTICLÁUSULA:<br/>
            [Cláusula Concesiva] + [Cláusula Principal] + [Conector Causal] + [Cláusula de Resultado]
          </div>

          <h3>Estrategia para Construir Oraciones Avanzadas</h3>
          <ul>
            <li><strong>Paso 1 (Premisa):</strong> Establece el contexto inicial (<em>Although we experienced initial latency...</em>).</li>
            <li><strong>Paso 2 (Acción principal):</strong> Presenta la solución (<em>...the engineering team redesigned the query engine...</em>).</li>
            <li><strong>Paso 3 (Resultado):</strong> Agrega la consecuencia positiva (<em>...which reduced memory usage by 50% and ensured system stability.</em>).</li>
          </ul>
        `,
        examples: [
          { en: "Although the project was delayed initially, we optimized our workflow and delivered all features before the final deadline.", es: "Aunque el proyecto se retrasó inicialmente, optimizamos nuestro flujo de trabajo y entregamos todas las características antes de la fecha límite final.", note: "Estructura de 3 cláusulas articuladas" },
          { en: "Because security is our top priority, we enforce multi-factor authentication, which protects user accounts from unauthorized access.", es: "Debido a que la seguridad es nuestra máxima prioridad, exigimos autenticación multifactor, lo que protege las cuentas de usuario de accesos no autorizados.", note: "Causa + Acción + Cláusula relativa de resultado" },
          { en: "If we refactor this component now, we will reduce technical debt, and future integrations will be much smoother.", es: "Si refactorizamos este componente ahora, reduciremos la deuda técnica y las futuras integraciones serán mucho más fluidas.", note: "Condicional + Conector coordinante" },
          { en: "While the frontend was being built, the backend team completed the API documentation so that integration could proceed seamlessly.", es: "Mientras se construía el frontend, el equipo de backend completó la documentación de la API para que la integración pudiera avanzar sin problemas.", note: "Contraste temporal + Propósito (so that)" }
        ],
        quizBank: [
          {
            id: "s7-q1",
            question: "Which sentence demonstrates proper multi-clause cohesion?",
            options: [
              "Although the server crashed, we recovered all data quickly because we had automated backups.",
              "Although the server crashed, but we recovered data quickly because we had backups.",
              "Because the server crashed although we recovered data quickly.",
              "The server crashed although because we recovered data."
            ],
            correct: 0,
            feedback: "La primera oración conecta de forma impecable una concesión ('Although...'), una acción principal ('we recovered...') y una razón ('because...')."
          },
          {
            id: "s7-q2",
            question: "Avoid redundant connectors: What is wrong with 'Although it was late, but he continued working'?",
            options: [
              "You cannot use both 'Although' and 'but' together to express the same contrast.",
              "It should use 'because' instead of 'although'.",
              "The comma is placed in the wrong position.",
              "'Continued' cannot be followed by a gerund."
            ],
            correct: 0,
            feedback: "En inglés nunca se combinan 'Although' y 'but' en la misma oración; uno de ellos es redundante."
          },
          {
            id: "s7-q3",
            question: "Complete the advanced sentence: 'She joined the company in 2021, ___ she has led three major product launches.'",
            options: ["since when", "since which time", "from where", "for that"],
            correct: 1,
            feedback: "'since which time' es una estructura formal para vincular cronológicamente una fecha con logros posteriores."
          },
          {
            id: "s7-q4",
            question: "What is the purpose of 'so that' in technical writing?",
            options: [
              "To express purpose or intention (para que)",
              "To indicate strong opposition",
              "To show a passive voice state",
              "To deny a previous claim"
            ],
            correct: 0,
            feedback: "'So that' introduce una cláusula de propósito o finalidad: 'We cached responses so that latency decreased'."
          },
          {
            id: "s7-q5",
            question: "Select the sentence with the highest level of syntactic variety and clarity:",
            options: [
              "While investigating the anomaly, our team discovered a memory leak, which had been affecting throughput for weeks.",
              "We investigated the anomaly and we found a bug and it was bad.",
              "Our team investigated and discovered and it was bad memory leak.",
              "Investigating we found that the leak was there."
            ],
            correct: 0,
            feedback: "Combina una cláusula participial subordinada ('While investigating...'), una oración principal y una relative clause no definitoria."
          }
        ]
      },
      {
        id: "lesson-21",
        title: "Zero Conditional (Hechos científicos)",
        theory: `
          <h2>Zero Conditional: Verdades Universales y Leyes Naturales</h2>
          <p>El <strong>Zero Conditional</strong> se utiliza para describir hechos científicos, verdades absolutas, reglas inmutables e instrucciones técnicas donde una condición <strong>siempre produce el mismo resultado inevitable</strong>.</p>

          <div class="formula-box">
            FÓRMULA: IF / WHEN + [Presente Simple], + [Presente Simple]
          </div>

          <h3>Características Clave</h3>
          <ul>
            <li>Tanto la condición como el resultado van en <strong>Present Simple</strong>.</li>
            <li>En este condicional, <strong>"If"</strong> puede sustituirse por <strong>"When"</strong> sin alterar el significado, porque el resultado es 100% certero.</li>
          </ul>

          <div class="tip-box">
            <strong>Ejemplo técnico:</strong> <em>"If memory consumption reaches 95%, the system triggers an alert."</em> (Regla automática del software).
          </div>
        `,
        examples: [
          { en: "If water reaches 100 degrees Celsius, it boils.", es: "Si el agua alcanza los 100 grados Celsius, hierve.", note: "Ley científica universal" },
          { en: "When you press this shortcut, the code formats automatically.", es: "Cuando presionas este atajo, el código se formatea automáticamente.", note: "Regla del sistema: Present Simple en ambas partes" },
          { en: "If a user enters an invalid password, the system blocks access.", es: "Si un usuario ingresa una contraseña no válida, el sistema bloquea el acceso.", note: "Condición y consecuencia fija" },
          { en: "Ice melts if you heat it.", es: "El hielo se derrite si lo calientas.", note: "Condición colocada en la segunda mitad (sin coma)" },
          { en: "If CPU temperatures rise above 90°C, cooling fans run at maximum speed.", es: "Si las temperaturas de la CPU suben de 90°C, los ventiladores funcionan a velocidad máxima.", note: "Regla técnica determinista" }
        ],
        quizBank: [
          {
            id: "s7-q6",
            question: "Complete the zero conditional: 'If you heat ice, it ___.'",
            options: ["melts", "will melt", "melted", "is melting"],
            correct: 0,
            feedback: "En el condicional cero ambos verbos van en Presente Simple: 'melts'."
          },
          {
            id: "s7-q7",
            question: "Which tense is used in BOTH clauses of the Zero Conditional?",
            options: [
              "Present Simple",
              "Past Simple",
              "Future with Will",
              "Present Continuous"
            ],
            correct: 0,
            feedback: "El Zero Conditional se compone de Present Simple en la condición y Present Simple en el resultado."
          },
          {
            id: "s7-q8",
            question: "Complete: 'When authentication fails, the API ___ a 401 status code.'",
            options: ["returns", "will return", "returned", "has returned"],
            correct: 0,
            feedback: "Como es una regla determinista de la API, se utiliza 'returns' en presente simple."
          },
          {
            id: "s7-q9",
            question: "Can 'when' replace 'if' in zero conditional sentences?",
            options: [
              "Yes, because the outcome is a universal certainty every time.",
              "No, 'when' is only for past tenses.",
              "Yes, but only in negative sentences.",
              "No, because 'if' is mandatory in all conditionals."
            ],
            correct: 0,
            feedback: "En el condicional cero, 'if' y 'when' son intercambiables porque el resultado ocurre siempre con total certeza."
          },
          {
            id: "s7-q10",
            question: "Select the sentence that represents a Zero Conditional:",
            options: [
              "If you mix red and blue, you get purple.",
              "If you mix red and blue, you will get purple tomorrow.",
              "If you mixed red and blue, you would get purple.",
              "If you had mixed red and blue, you would have gotten purple."
            ],
            correct: 0,
            feedback: "'If you mix red and blue, you get purple' expresa un hecho cromático absoluto en presente simple."
          }
        ]
      },
      {
        id: "lesson-22",
        title: "First Conditional (Posibilidades futuras)",
        theory: `
          <h2>First Conditional: Situaciones Reales y Posibles en el Futuro</h2>
          <p>El <strong>First Conditional</strong> se utiliza para hablar de situaciones futuras reales que tienen una alta probabilidad de ocurrir si se cumple una condición previa en el presente.</p>

          <div class="formula-box">
            FÓRMULA: IF + [Presente Simple], + [will / won't / modal] + [Verbo en forma base]
          </div>

          <div class="mistake-box">
            <strong>¡CUIDADO con el Error Número 1!</strong><br/>
            Nunca pongas <em>'will'</em> dentro de la cláusula con <em>'if'</em>.<br/>
            <strong>Incorrecto:</strong> <em>"If it <strong>will rain</strong>, we will stay home."</em><br/>
            <strong>Correcto:</strong> <em>"If it <strong>rains</strong>, we will stay home."</em>
          </div>

          <h3>Variaciones con Modales</h3>
          <p>En lugar de <strong>will</strong> (certeza futura), se pueden usar otros modales para expresar distintos grados de probabilidad o consejo:</p>
          <ul>
            <li><em>If you finish early, you <strong>can</strong> join the call.</em> (Permiso o habilidad).</li>
            <li><em>If it rains, we <strong>might</strong> reschedule the demo.</em> (Posibilidad).</li>
            <li><em>If you feel sick, you <strong>should</strong> rest.</em> (Consejo).</li>
          </ul>
        `,
        examples: [
          { en: "If we deploy this optimization, latency will decrease by 30%.", es: "Si desplegamos esta optimización, la latencia se reducirá en un 30%.", note: "If + present simple, will + verbo base" },
          { en: "If you don't save your changes, you will lose your work.", es: "Si no guardas tus cambios, perderás tu trabajo.", note: "Negación en presente simple con don't" },
          { en: "We will reach our quarterly goal if the team stays focused.", es: "Alcanzaremos nuestra meta trimestral si el equipo se mantiene enfocado.", note: "Cláusula condicional al final sin coma" },
          { en: "If the client approves the proposal, we can start next Monday.", es: "Si el cliente aprueba la propuesta, podemos comenzar el próximo lunes.", note: "Uso de 'can' en lugar de 'will'" },
          { en: "What will you do if the server goes down tonight?", es: "¿Qué harás si el servidor se cae esta noche?", note: "Pregunta condicional con What will you do" }
        ],
        quizBank: [
          {
            id: "s7-q11",
            question: "Complete the sentence: 'If you ___ hard, you will master technical English.'",
            options: ["study", "will study", "studied", "are studying"],
            correct: 0,
            feedback: "En la cláusula del 'If' en First Conditional siempre se usa el Presente Simple ('study'), nunca 'will'."
          },
          {
            id: "s7-q12",
            question: "Which sentence has an ERROR?",
            options: [
              "If it will rain tomorrow, we will cancel the trip.",
              "If it rains tomorrow, we will cancel the trip.",
              "We will cancel the trip if it rains tomorrow.",
              "If it rains tomorrow, we might cancel the trip."
            ],
            correct: 0,
            feedback: "Es un error gramatical grave poner 'will' dentro de la cláusula con 'if'."
          },
          {
            id: "s7-q13",
            question: "Complete: 'If we don't fix this bug now, it ___ cause bigger problems later.'",
            options: ["will", "is", "did", "was"],
            correct: 0,
            feedback: "La consecuencia en First Conditional utiliza 'will' más la forma base del verbo ('cause')."
          },
          {
            id: "s7-q14",
            question: "Complete the question: 'Where ___ you go if you get the remote job?'",
            options: ["will", "did", "are", "have"],
            correct: 0,
            feedback: "La pregunta de First Conditional se estructura con 'will + sujeto + verbo base': 'Where will you go...'."
          },
          {
            id: "s7-q15",
            question: "Can we use 'can' or 'might' instead of 'will' in the result clause?",
            options: [
              "Yes, to express ability, permission, or lower probability.",
              "No, only 'will' is allowed in the First Conditional.",
              "Yes, but only in informal spoken English.",
              "No, modals can only be used in the Third Conditional."
            ],
            correct: 0,
            feedback: "Los verbos modales como 'can', 'might' o 'should' son perfectamente válidos en la cláusula de resultado del First Conditional."
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