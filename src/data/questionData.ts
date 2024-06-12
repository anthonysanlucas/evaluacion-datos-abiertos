export const questionsData: QuestionsData = [
  {
    section: 1,
    sectionTitle: 'Sobre la institución',
    sectionDescription:
      'Por favor, proporciona la siguiente información sobre la institución pública en la que trabajas y para la cual deseas realizar esta evaluación:',
    sectionPoints: 0,
    questions: []
  },
  {
    section: 2,
    sectionTitle: 'Propósito',
    sectionDescription:
      'Esta sección evalúa en qué medida los datos se están considerando como un elemento integral para la elaboración de estrategias, la toma de decisiones y los procesos en la institución.',
    sectionPoints: 0,
    questions: [
      {
        id: '002001',
        question:
          'En tu institución, ¿tienen claramente identificados los datos que recopilan de forma directa en todas las áreas o direcciones para crear informes y/o tomar decisiones?',
        options: [
          {
            text: 'Sí, en todas las áreas o direcciones',
            value: 4
          },
          {
            text: 'Solo en algunas áreas o direcciones',
            value: 2
          },
          {
            text: 'Regularmente',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002002',
        question:
          '¿Utilizan además datos de fuentes externas para crear informes y/o tomar decisiones?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002003',
        question:
          '¿Tienen claramente establecido el proceso que cada área debe seguir para recopilar y compartir datos con otras áreas o direcciones?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002004',
        question:
          '¿Tienen definida una política de uso, compartición y publicación de los datos que recopilan?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002005',
        question: '¿Tienen definida una política de gobernanza de datos en la institución?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002006',
        question:
          '¿Cuentan con criterios definidos para la protección y uso de los datos personales que recopilan?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002007',
        question: '¿Cuáles son los principales usos que le dan a los datos que recopilan? ',
        options: [
          {
            text: 'Crear la planificación anual de actividades',
            value: 1
          },
          {
            text: 'Entender mejor las necesidades de la ciudadanía',
            value: 1
          },
          {
            text: 'Informar a la ciudadanía de los programas y proyectos que implementan',
            value: 1
          },
          {
            text: 'Medir el impacto de los programas y proyectos que se implementan',
            value: 1
          },
          {
            text: 'Otros',
            value: 1
          }
        ],
        type: 'checkbox',
        questionPoints: null
      },
      {
        id: '002008',
        question:
          '¿Cuentan con procedimientos técnicos definidos para validar y mejorar la calidad de datos que usan, recopilan y/o publican?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002009',
        question:
          '¿Cuentan con procedimientos definidos para identificar las necesidades de datos desde otras instituciones o ciudadanía?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002010',
        question: ' ¿Con qué frecuencia realizan esta identificación de necesidades de datos?',
        options: [
          {
            text: 'Semanal',
            value: 4
          },
          {
            text: 'Mensual',
            value: 3
          },
          {
            text: 'Semestral',
            value: 2
          },
          {
            text: 'Anual',
            value: 1
          },
          {
            text: 'No se ha realizado hasta el momento',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002011',
        question:
          '¿Cuentan con una definición clara de qué son los datos abiertos y por qué son importantes?',
        options: [
          {
            text: 'Sí, se conoce en todas las áreas o direcciones',
            value: 4
          },
          {
            text: 'Existe pero no se difunde',
            value: 2
          },
          {
            text: 'No se cuenta con una definición',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002012',
        question:
          ' ¿Existen políticas o iniciativas que promuevan la cultura de datos abiertos dentro de su institución?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      }
    ]
  },
  {
    section: 3,
    sectionTitle: 'La Práctica',
    sectionDescription:
      'Esta sección evalúa el soporte, herramientas y procesos para manejar datos de manera responsable.',
    sectionPoints: 0,
    questions: [
      {
        id: '003001',
        question:
          'En su institución, ¿publican datos en formatos abiertos para uso de otras áreas, instituciones y/o ciudadanía?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '003002',
        question:
          '¿Han evidenciado proyectos u organizaciones que hacen uso de los datos que recopilan y publican?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '003003',
        question:
          '¿Tienen un repositorio o sitio web en el cual guarden los datos que recopilan para uso de distintas áreas y/o ciudadanía?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '003004',
        question:
          '¿Han implementado estándares u homologado datos para que sean compatibles con distintos sistemas?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '003005',
        question:
          '¿Ha publicado su institución datos en formato abierto durante los últimos 12 meses?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '003006',
        question:
          'En tu institución, en los últimos 12 meses, ¿han publicado datos abiertos para mejorar la transparencia y la rendición de cuentas?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '003007',
        question:
          'En tu institución, en los últimos 12 meses, ¿han publicado datos abiertos para fortalecer la participación ciudadana y la innovación?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      }
    ]
  },
  {
    section: 3,
    sectionTitle: 'Personal: Equipo y capacidades',
    sectionDescription:
      'Esta sección evalúa en qué medida los servidores públicos de la institución cuentan con las habilidades y capacidades para usar y aprovechar los datos que recopilan o utilizan.',
    sectionPoints: 0,
    questions: [
      {
        id: '004001',
        question: 'En tu institución ¿se ha conformado un equipo de trabajo de datos abiertos?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '004002',
        question: '¿Con qué frecuencia reciben capacitaciones sobre el uso y gestión de datos?',
        options: [
          {
            text: 'Mensual',
            value: 4
          },
          {
            text: 'Semestral',
            value: 2
          },
          {
            text: 'Anual',
            value: 1
          },
          {
            text: 'No se ha realizado hasta el momento',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '004003',
        question:
          'La Máxima Autoridad de la institución, ¿está informada sobre la gestión de uso, aprovechamiento y publicación que se realiza con los datos que se recopilan?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '004004',
        question:
          '¿Cuentan con cargos o perfiles específicos definidos en la institución para la gestión de datos?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      }
    ]
  }
]
